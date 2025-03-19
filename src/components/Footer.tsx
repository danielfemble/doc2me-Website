
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <a href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-doc-black tracking-tight">
                Doc<span className="text-doc-blue">2</span>Me
              </span>
            </a>
            <p className="text-doc-gray mb-6">
              Extending the power of doctors beyond the clinic with content that lasts.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Press</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Security</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">For Clinics</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">For Individual Doctors</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Guides</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">API Reference</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-doc-gray text-sm">&copy; {currentYear} Doc2Me. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-doc-gray hover:text-doc-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
