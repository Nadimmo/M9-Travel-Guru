
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">About Travel Guru</h1>
        <p className="mt-6 text-lg text-gray-600 text-center">
          At Travel Guru, we are passionate about making travel seamless, exciting, and memorable.
          Whether you are planning a solo adventure, a romantic getaway, or a family vacation,
          we have the tools and expertise to help you every step of the way.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To inspire and empower travelers around the globe by providing reliable resources,
              expert advice, and innovative solutions for every journey.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Personalized travel recommendations.</li>
              <li>24/7 customer support.</li>
              <li>Extensive database of destinations and experiences.</li>
              <li>Trusted by millions of travelers worldwide.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-24 mt-4 bg-white p-6 rounded-lg shadow-md">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-3xl font-semibold">Your Benefits</h2>
            <ul className="list-none">
              <li className="py-2">
                <span className="text-lg leading-relaxed text-gray-600">
                  Personalized Travel Planning: Our team of experts will work with you to create a customized itinerary that meets your unique needs and preferences.
                </span>
              </li>
              <li className="py-2">
                <span className="text-lg leading-relaxed text-gray-600">
                  Unbeatable Prices: We have established relationships with top travel suppliers to ensure that our customers receive the best possible prices.
                </span>
              </li>
              <li className="py-2">
                <span className="text-lg leading-relaxed text-gray-600">
                  24/7 Support: Our dedicated team is available around the clock to assist with any questions or concerns you may have.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Start Location</h2>
          <p className="mt-4 text-gray-600 text-center">
            Travel Guru began its journey in the heart of San Francisco, California, in 2010. Our headquarters remain here as we continue to expand globally.
          </p>
        </div>

        <div className="mt-10 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Meet Our Team</h2>
          <p className="mt-4 text-gray-600 text-center">
            Our team of travel experts, developers, and designers are dedicated to ensuring your travel experiences are extraordinary.
          </p>

          <div className="mt-8 lg:grid grid-cols-3 mx-auto">
            {/* Example Team Member */}
            <div className="text-center ">
              <img
                src="https://i.ibb.co.com/QpNDpmR/Ellipse-91.png"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/ZWzykDF/Ellipse-92.png"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Alex Carry</h3>
              <p className="text-gray-600">Manager</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/bL9nVVT/Ellipse-2.png"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Williamson</h3>
              <p className="text-gray-600">Guide Manager</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Have questions or want to know more about us? Contact us at
            <a href="mailto:contact@travelguru.com" className="text-blue-600 underline ml-1">
              contact@travelguru.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
