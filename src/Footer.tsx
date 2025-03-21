
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Logo and Social - spans 6 cols on md screens */}
          <div className="md:col-span-6">
            <a href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-doc-black tracking-tight">
                Doc<span className="text-doc-blue">2</span>Me
              </span>
            </a>
            <p className="text-doc-gray mb-6">
              A better doctor-patient relationship
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@doc2me.com" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/69742285/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-2 rounded-full text-doc-gray hover:text-doc-blue hover:bg-doc-blue-light/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Company and Product lists are now next to each other - each spans 3 cols on md screens */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Company</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-doc-gray hover:text-doc-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4 text-doc-black">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-doc-gray hover:text-doc-blue transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-doc-gray hover:text-doc-blue transition-colors">How it works</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-doc-gray text-sm">&copy; {currentYear} Doc2Me. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.iubenda.com/terms-and-conditions/92382842" target="_blank" rel="noopener noreferrer" className="text-doc-gray hover:text-doc-blue transition-colors">Terms of Service</a>
            <a href="https://doc2me.co/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-doc-gray hover:text-doc-blue transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
