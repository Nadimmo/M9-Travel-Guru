import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ChatBox from '../ChatBox/ChatBox';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-2xl hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Address: 123 Your Street, Rangpur city, Bangladesh</p>
            <p className="text-sm mb-2">Email: <a href="mailto:contact@travelguru.com." className="hover:text-gray-400">support@yourcompany.com</a></p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-center text-sm py-4 mt-8">
        <p>&copy; 2025 Nadim Mostofa. All rights reserved.</p>
        <ChatBox/>
      </div>
    </footer>
  );
};

export default Footer;
