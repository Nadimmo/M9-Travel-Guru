import usePackage from "../../Hooks/usePackage";


const FeaturedTravelPackages = () => {
  const {packages} = usePackage()


  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Travel Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-shadow duration-500"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-gray-800 font-bold mb-1">Price: {pkg.price}</p>
              <p className="text-gray-600 mb-1">Duration: {pkg.duration}</p>
              <p className="text-gray-600 mb-3">{pkg.description}</p>
              {pkg.deal && (
                <p className="text-green-600 font-semibold mb-4">{pkg.deal}</p>
              )}
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTravelPackages;
