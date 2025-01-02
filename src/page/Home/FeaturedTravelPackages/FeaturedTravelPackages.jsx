
const travelPackages = [
  {
    id: 1,
    title: "Romantic Getaway in Santorini",
    price: "$2,999",
    duration: "7 Days / 6 Nights",
    image: 'https://i.ibb.co.com/R4nHq1z/c5.jpg',
    description: "Experience the beauty of Santorini with luxurious stays and breathtaking views.",
    deal: "Early Bird: Save 20%",
  },
  {
    id: 2,
    title: "Safari Adventure in Kenya",
    price: "$3,499",
    duration: "10 Days / 9 Nights",
    image: "https://i.ibb.co.com/pWg97Sv/i1.jpg",
    description: "Embark on a thrilling safari adventure and explore Kenya's wildlife.",
    deal: "Limited Offer: Free Balloon Ride",
  },
  {
    id: 3,
    title: "Explore the Wonders of Egypt",
    price: "$2,199",
    duration: "8 Days / 7 Nights",
    image: "https://i.ibb.co.com/gD2Hg77/i5.jpg",
    description: "Discover ancient wonders and immerse yourself in the history of Egypt.",
    deal: "Discount: Save $300",
  },
  {
    id: 4,
    title: "Beach Escape in Maldives",
    price: "$4,499",
    duration: "5 Days / 4 Nights",
    image: "https://i.ibb.co.com/d49NWTG/vietnam.jpg",
    description: "Relax and unwind on the pristine beaches of the Maldives.",
    deal: "Special Offer: Complimentary Spa Session",
  },
  {
    id: 5,
    title: "Safari Adventure in SouthAfrica",
    price: "$3,499",
    duration: "10 Days / 9 Nights",
    image: "https://i.ibb.co.com/K68FS5S/ragamati.jpg",
    description: "Embark on a thrilling safari adventure and explore south africa's wildlife.",
    deal: "Limited Offer: Free Balloon Ride",
  },
  {
    id: 1,
    title: "Romantic Getaway in Norway",
    price: "$2,999",
    duration: "7 Days / 6 Nights",
    image: 'https://i.ibb.co.com/5Lx1Zvh/i4.jpg',
    description: "Experience the beauty of Norway with luxurious stays and breathtaking views.",
    deal: "Early Bird: Save 20%",
  },
];

const FeaturedTravelPackages = () => {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Travel Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelPackages.map((pkg) => (
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
