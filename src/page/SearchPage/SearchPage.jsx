import { useState } from "react";
import ReactStars from "react-rating-stars-component";


const travelData = {
  travel_data: [
    {
      category: "Flights",
      items: [
        {
          image: "https://i.ibb.co.com/3Cv8M9d/02.jpg",
          title: "Round-Trip Flight to Paris",
          description: "Comfortable economy-class round-trip flight to Paris with in-flight meals and WiFi.",
          price: 799,
          currency: "USD",
          facilities: { class: "Business", beds: 4, bedrooms: 2, guests: 4, bathrooms: 2, wifi: true, pool: true, parking: true },
          rating: 5,
        },
        {
          image: "https://i.ibb.co.com/6FDXyCg/malaysia.jpg",
          title: "Business-Class Flight to Tokyo",
          description: "Luxurious business-class flight to Tokyo with lounge access and extra legroom.",
          price: 2150,
          currency: "USD",
          facilities: { class: "Classic", beds: 2, bedrooms: 1, guests: 1, bathrooms: 1, wifi: true, pool: true, parking: true },
          rating: 4.8,
        },
      ],
    },
    {
      category: "Hotels",
      items: [
        {
          image: "https://i.ibb.co.com/zs9NhgR/m2.jpg",
          title: "Luxury Hotel in New York",
          description: "5-star hotel in Manhattan with rooftop views and premium amenities.",
          price_per_night: 350,
          currency: "USD",
          facilities: { class: "Economy", beds: 3, bedrooms: 2, guests: 2, bathrooms: 2, wifi: true, pool: true, parking: true },
          rating: 5,
        },
        {
          image: "https://i.ibb.co.com/Pmtq0k4/c4.jpg",
          title: "Beach Resort in Bali",
          description: "Relax by the beach with a private villa and ocean views.",
          price_per_night: 270,
          currency: "USD",
          facilities: { class: "Classic", beds: 2, bedrooms: 1, guests: 1, bathrooms: 1, wifi: true, pool: true, parking: true },
          rating: 4.7,
        },
      ],
    },
    {
      category: "Travel Packages",
      items: [
        {
          image: "https://i.ibb.co.com/5xVQMD1/v1.jpg",
          title: "7-Day All-Inclusive Maldives Vacation",
          description: "Relax in luxury with flights, meals, and island activities included.",
          price: 2999,
          currency: "USD",
          facilities: { class: "Economy", beds: 3, bedrooms: 2, guests: 2, bathrooms: 2, wifi: true, pool: true, parking: true },
          rating: 4.9,
        },
        {
          image: "https://i.ibb.co.com/jVrYNWS/world.webp",
          title: "7-Day All-Inclusive Nepal Vacation",
          description: "Relax in luxury with flights, meals, and island activities included.",
          price: 2999,
          currency: "USD",
          facilities: { class: "Economy", beds: 3, bedrooms: 2, guests: 2, bathrooms: 2, wifi: true, pool: true, parking: true },
          rating: 5,
        },
      ],
    },
  ],
};

const SearchPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredData = selectedCategory === "All" ? travelData.travel_data : travelData.travel_data.filter((category) => category.category === selectedCategory);


  return (
    <div className="flex flex-col h-screen">
      {/* Dropdown Filter */}
      <div className="p-4">
        <select
          className="p-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {travelData.travel_data.map((category) => (
            <option key={category.category} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>

      {/* Content Section: Grid Layout */}
      <div className="w-full overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((category) =>
          category.items.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="text-sm text-gray-800">
                <p>
                  <strong>Facilities:</strong> {item.facilities.class}  {item.facilities.beds} Beds  ,{item.facilities.bedrooms} Bedrooms , {item.facilities.guests} Guests, {item.facilities.bathrooms} Bathrooms , WiFi: {item.facilities.wifi ? "Yes" : "No"} , Pool: {item.facilities.pool ? "Yes" : "No"} , Parking: {item.facilities.parking ? "Yes" : "No"} , Spa: {item.facilities.spa ? "Yes" : "No"}
                </p>
              </div>
              <div className="text-sm text-gray-800 mt-2 lg:flex justify-between">
                <p>
                  <strong>Price:</strong> Per Night  / {item.price || item.price_per_night} {item.currency}
                </p>
                <p className="flex items-center">
                  <strong>Rating:</strong>  <ReactStars
                    value={item.rating}
                    size={24}
                    activeColor="#ffd700"
                  />,
                </p>
              </div>
              <a href="/" className="text-blue-500 hover:underline font-semibold mt-2">Read more</a>

            </div>
          ))
        )}
      </div>
    </div >
  );
};

export default SearchPage;
