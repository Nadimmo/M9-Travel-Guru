
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Beaches to Visit This Summer",
    image: "https://i.ibb.co.com/h7mr15J/cambodia.jpg",
    description: "Discover the most breathtaking beaches you must explore this summer.",
    link: "https://www.forbes.com/sites/brittanyanas/2024/05/03/the-worlds-best-beach-according-to-a-2024-report/",
  },
  {
    id: 2,
    title: "Travel Tips for First-Time Flyers",
    image: "https://i.ibb.co.com/DW3prLG/b4.jpg",
    description: "Make your first flight a breeze with these essential travel tips.",
    link: "https://www.travelandleisure.com/airlines-airports/first-time-flying-mistakes",
  },
];

const BlogAndNewsletter = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      {/* Blog Section */}
      <h2 className="text-3xl font-bold text-center mb-10">Travel Inspiration</h2>
      <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:underline font-semibold"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div data-aos="zoom-in-up"  className="bg-blue-500 text-white py-8 px-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe for Exclusive Deals & Updates!</h2>
        <p className="mb-6">Stay updated with the latest travel news and offers.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogAndNewsletter;
