import { useState } from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const BookingForm = () => {
  const axiosPublic = useAxiosPublic()
  const divisions = [
    'Barisal', 'Chittagong', 'Dhaka', 'Khulna', 'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet',
  ];

  const cities = [
    'Bagerhat', 'Bandarban', 'Barguna', 'Barisal', 'Bhola', 'Bogra', 'Brahmanbaria', 'Chandpur',
    'Chittagong', 'Chuadanga', 'Comilla', 'Cox’s Bazar', 'Dhaka', 'Dinajpur', 'Faridpur', 'Feni',
    'Gaibandha', 'Gazipur', 'Gopalganj', 'Habiganj', 'Jamalpur', 'Jessore', 'Jhalokati', 'Jhenaidah',
    'Joypurhat', 'Khagrachari', 'Khulna', 'Kishoreganj', 'Kurigram', 'Kushtia', 'Lakshmipur', 'Lalmonirhat',
    'Madaripur', 'Magura', 'Manikganj', 'Meherpur', 'Moulvibazar', 'Munshiganj', 'Mymensingh', 'Naogaon',
    'Narail', 'Narayanganj', 'Narsingdi', 'Natore', 'Netrokona', 'Nilphamari', 'Noakhali', 'Pabna',
    'Panchagarh', 'Patuakhali', 'Pirojpur', 'Rajbari', 'Rajshahi', 'Rangamati', 'Rangpur', 'Satkhira',
    'Shariatpur', 'Sherpur', 'Sirajganj', 'Sunamganj', 'Sylhet', 'Tangail', 'Thakurgaon',
  ];

  const [formData, setFormData] = useState({
    email: '',
    origin: '',
    destination: '',
    startDateTime: '',
    endDateTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosPublic.post('/destination', formData)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking Successful",
            showConfirmButton: false,
            timer: 1500,
          })
          setFormData({
            email: '',
            origin: '',
            destination: '',
            startDateTime: '',
            endDateTime: '',
          });
        }
      })
      .catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(err);
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 font-bold">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Book Your Trip</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Origin */}
        <div className="mb-4">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-600 mb-2">Origin</label>
          <select
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
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
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
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
              value={formData.startDateTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* End Date-Time */}
          <div className="mb-4">
            <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-600 mb-2">End Date & Time</label>
            <input
              type="datetime-local"
              id="endDateTime"
              name="endDateTime"
              value={formData.endDateTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
