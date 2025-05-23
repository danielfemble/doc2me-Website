
import { supabase } from "@/integrations/supabase/client";

// Export the client
export { supabase };

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return true; // We're using the auto-generated client which is always configured
};

// Export a function to check if Supabase client is initialized
export const isClientInitialized = () => {
  return true; // We're using the auto-generated client which is always initialized
};

interface SignupData {
  name: string;
  email: string;
  clinic: string;
  created_at?: string;
}

/**
 * Sends signup data to Supabase
 */
export const sendToSupabase = async (data: SignupData): Promise<boolean> => {
  try {
    // Add timestamp to the data
    const dataWithTimestamp = {
      ...data,
      created_at: new Date().toISOString(),
    };

    console.log('Attempting to send data to Supabase:', {
      "Your Name": data.name,
      "Email": data.email,
      "Clinic or Practice Name": data.clinic,
      "created_at": dataWithTimestamp.created_at
    });
    
    // Insert the data into the signups table
    const { error } = await supabase
      .from('signups')
      .insert([{
        "Your Name": data.name,
        "Email": data.email,
        "Clinic or Practice Name": data.clinic,
        "created_at": dataWithTimestamp.created_at
      }]);
    
    if (error) {
      console.error('Supabase insert error:', error);
      return false;
    }

    console.log('Data successfully inserted');
    return true;
  } catch (error) {
    console.error('Unexpected error sending data to Supabase:', error);
    return false;
  }
};

/**
 * Check if signups table exists in Supabase
 */
export const checkSignupsTable = async (): Promise<boolean> => {
  try {
    // Try to query the signups table
    const { error } = await supabase
      .from('signups')
      .select('id', { count: 'exact', head: true });
      
    return !error;
  } catch (error) {
    console.error('Error checking signups table:', error);
    return false;
  }
};
