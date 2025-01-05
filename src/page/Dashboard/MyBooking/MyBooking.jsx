import useBooking from "../../Hooks/useBooking";

const MyBooking = () => {
  const { bookings } = useBooking();

  // Calculate total bookings and total price
  const totalBookings = bookings.length;
  const totalPrice = bookings.reduce((sum, booking) => sum + parseInt(booking.price || 0), 0);

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Bookings
      </h2>
      <div className="mb-6">
        <div className="flex justify-between items-center bg-blue-100 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-blue-700">
            Total Bookings: <span className="font-bold">{totalBookings}</span>
          </p>
          <p className="text-lg font-semibold text-green-700">
            Total Price: <span className="font-bold">$ {totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
              <th className="py-3 px-6 text-left font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-100 transition-colors duration-200"
                >
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {booking.name}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {booking.email}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700 font-bold">
                    $ {booking.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 px-6 text-center text-gray-500 bg-gray-50"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
