import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useBooking from "../../Hooks/useBooking";

const MyBooking = () => {
  const { bookings, refetch} = useBooking();
  const axiosPublic = useAxiosPublic()

  // Calculate total bookings and total price
  const totalBookings = bookings.length;
  const totalPrice = bookings.reduce((sum, booking) => sum + parseInt(booking.price || 0), 0);


  const handleRemove = (id)=>{
    axiosPublic.delete(`/booking/${id}`)
    .then(res =>{
      if(res.data. deletedCount ){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Booking removed successfully",
          showConfirmButton: false,
          timer: 1500
        })
        refetch()
      }
    })
    .catch(err =>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500
      });
    })

  }

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
              <th className="py-3 px-6 text-left font-semibold">#</th>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
              <th className="py-3 px-6 text-left font-semibold">Price</th>
              <th className="py-3 px-6 text-left font-semibold">Action</th>
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
                    {index + 1}.
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {booking.name}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {booking.email}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700 font-bold">
                    $ {booking.price}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700 font-bold">
                    <button onClick={()=> handleRemove(booking._id)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      Cancel
                    </button>
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
