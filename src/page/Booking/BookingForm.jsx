
const BookingForm = () => {
  const divisions = [
    'Barisal',
    'Chittagong',
    'Dhaka',
    'Khulna',
    'Mymensingh',
    'Rajshahi',
    'Rangpur',
    'Sylhet',
  ];

  const cities = [
    'Bagerhat', 'Bandarban', 'Barguna', 'Barisal', 'Bhola', 'Bogra', 'Brahmanbaria', 'Chandpur',
    'Chittagong', 'Chuadanga', 'Comilla', 'Cox’s Bazar', 'Dhaka', 'Dinajpur', 'Faridpur', 'Feni',
    'Gaibandha', 'Gazipur', 'Gopalganj', 'Habiganj', 'Jamalpur', 'Jessore', 'Jhalokati', 'Jhenaidah',
    'Joypurhat', 'Khagrachari', 'Khulna', 'Kishoreganj', 'Kurigram', 'Kushtia', 'Lakshmipur', 'Lalmonirhat',
    'Madaripur', 'Magura', 'Manikganj', 'Meherpur', 'Moulvibazar', 'Munshiganj', 'Mymensingh', 'Naogaon',
    'Narail', 'Narayanganj', 'Narsingdi', 'Natore', 'Netrokona', 'Nilphamari', 'Noakhali', 'Pabna',
    'Panchagarh', 'Patuakhali', 'Pirojpur', 'Rajbari', 'Rajshahi', 'Rangamati', 'Rangpur', 'Satkhira',
    'Shariatpur', 'Sherpur', 'Sirajganj', 'Sunamganj', 'Sylhet', 'Tangail', 'Thakurgaon'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-10 font-bold">
      <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Book Your Trip</h2>

        {/* Origin */}
        <div className="mb-4">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-600 mb-2">Origin</label>
          <select
            id="origin"
            name="origin"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Origin</option>
            {divisions.map((division) => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>
        </div>

        {/* Destination */}
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-600 mb-2">Destination</label>
          <select
            id="destination"
            name="destination"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Destination</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Start Date-Time */}
          <div className="mb-4">
            <label htmlFor="startDateTime" className="block text-sm font-medium text-gray-600 mb-2">Start Date & Time</label>
            <input
              type="datetime-local"
              id="startDateTime"
              name="startDateTime"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* End Date-Time */}
          <div className="mb-4">
            <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-600 mb-2">End Date & Time</label>
            <input
              type="datetime-local"
              id="endDateTime"
              name="endDateTime"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F9A51A] text-white font-medium py-2 px-4 rounded-lg hover:bg-violet-500 transition duration-300"
        >
          Start Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
