import '../Home/home.css';
const Contact= () => {
  return (
    <div className="back min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
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
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
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
    </div>
  );
};

export default Contact;
