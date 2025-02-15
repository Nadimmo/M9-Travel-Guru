import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../Home/home.css";

const Contact = () => {
  return (
    <div className="back min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div data-aos="zoom-in" className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row">
        {/* Contact Form */}
        <form className="w-full md:w-1/2 pr-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Have any questions or concerns? Feel free to reach out to us using
            the form below.
          </p>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F9A51A]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F9A51A] text-white font-medium py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We are here to help you. Reach out to us through the form or using
            the information below.
          </p>
          <div className="mb-6">
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Main Street, Rangpur city, Bangladesh 
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> contact@travelguru.com.
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-[#F9A51A] transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#F9A51A] transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#F9A51A] transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#F9A51A] transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
