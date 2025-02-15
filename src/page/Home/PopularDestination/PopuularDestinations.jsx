
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://i.ibb.co.com/0J63nhW/indonasia.jpg",
    description: "Tropical paradise with stunning beaches and vibrant culture.",
    priceRange: "$1200 - $2500",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://i.ibb.co.com/jVgfTD3/55.jpg",
    description: "The city of lights and love with iconic landmarks.",
    priceRange: "$1500 - $3000",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://i.ibb.co.com/zs9NhgR/m2.jpg",
    description: "Experience traditional Japanese culture and serene temples.",
    priceRange: "$1800 - $3200",
  },
  {
    id: 4,
    name: "New York City, USA",
    image: "https://i.ibb.co.com/6FDXyCg/malaysia.jpg",
    description: "The city that never sleeps with endless attractions.",
    priceRange: "$1000 - $2500",
  },
];

const PopularDestinations = () => {
  return (
      <div data-aos="fade-up" className="bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover transform group-hover:translate-y-[-50%] transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4">
                  <p className="text-white font-semibold text-lg mb-2">{destination.priceRange}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{destination.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
  );
};

export default PopularDestinations;
