import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <Link 
            to="/privacy-policy" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            to="/refund-policy" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
