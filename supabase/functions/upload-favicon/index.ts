
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.34.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

// Create a Supabase client with the admin key
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    console.log("Checking if favicon already exists in storage");
    
    // Check if the favicon already exists in storage
    const { data: existingFile, error: checkError } = await supabaseClient
      .storage
      .from('public_assets')
      .list('', { 
        search: 'favicon.png'
      });
    
    if (checkError) {
      console.error('Error checking for existing favicon:', checkError);
      return new Response(
        JSON.stringify({ success: false, error: checkError.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
    
    // If the favicon already exists, we need to remove it first to ensure we're using the latest one
    if (existingFile && existingFile.length > 0) {
      console.log("Existing favicon found, removing it first");
      const { error: removeError } = await supabaseClient
        .storage
        .from('public_assets')
        .remove(['favicon.png']);
        
      if (removeError) {
        console.error('Error removing existing favicon:', removeError);
      }
    }
    
    console.log("Uploading favicon");
    
    // Get the favicon image from the public directory
    const imageUrl = 'https://lovable.ai/static/uploads/41884ffd-0b4a-44d5-942c-b729bf807c09.png';
    
    // Fetch the image
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
    }
    
    // Get the image data as ArrayBuffer
    const imageData = await imageResponse.arrayBuffer();
    
    // Upload the favicon to Supabase storage
    const { data, error } = await supabaseClient
      .storage
      .from('public_assets')
      .upload('favicon.png', new Uint8Array(imageData), {
        contentType: 'image/png',
        upsert: true,
        cacheControl: '0' // No caching
      });

    if (error) {
      console.error('Error uploading favicon:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
    
    console.log('Favicon uploaded successfully', data);

    // Get the public URL of the uploaded favicon
    const { data: { publicUrl } } = supabaseClient
      .storage
      .from('public_assets')
      .getPublicUrl('favicon.png');

    // Add a timestamp to ensure browsers don't use cached versions
    const urlWithTimestamp = `${publicUrl}?t=${Date.now()}`;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Favicon uploaded successfully', 
        url: urlWithTimestamp 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
