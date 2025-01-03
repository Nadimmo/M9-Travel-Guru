import { useState } from "react";

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
          facilities: { class: "Economy", baggage: "1 carry-on, 1 checked bag", in_flight_meals: true, wifi: true },
          rating: 4.5,
        },
        {
          image: "https://i.ibb.co.com/6FDXyCg/malaysia.jpg",
          title: "Business-Class Flight to Tokyo",
          description: "Luxurious business-class flight to Tokyo with lounge access and extra legroom.",
          price: 2150,
          currency: "USD",
          facilities: { class: "Business", baggage: "2 checked bags", in_flight_meals: true, wifi: true, lounge_access: true },
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
          facilities: { beds: 2, bedrooms: 1, guests: 4, bathrooms: 1, wifi: true, pool: true, parking: true },
          rating: 4.8,
        },
        {
          image: "https://i.ibb.co.com/Pmtq0k4/c4.jpg",
          title: "Beach Resort in Bali",
          description: "Relax by the beach with a private villa and ocean views.",
          price_per_night: 270,
          currency: "USD",
          facilities: { beds: 1, bedrooms: 1, guests: 2, bathrooms: 1, wifi: true, pool: true, spa: true },
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
          facilities: { nights: 7, meals: "All meals included", activities: ["Snorkeling", "Spa treatments", "Island tours"] },
          rating: 4.9,
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
                  <strong>Price:</strong> {item.price || item.price_per_night} {item.currency}
                </p>
                <p>
                  <strong>Rating:</strong> {item.rating} ★
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
