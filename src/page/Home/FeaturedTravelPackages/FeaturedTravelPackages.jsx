import { useContext, useState } from "react";
import usePackage from "../../Hooks/usePackage";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FeaturedTravelPackages = () => {
  const { packages } = usePackage();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleBookNow = (pkg) => {
    if (!user) {
      Swal.fire({
        title: "Not Logged In",
        text: "You need to log in to book a package.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = ()=>{
    setIsModalOpen(false);
    setSelectedPackage(null);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const  name = form.name.value;
    const email = form.email.value;
    const duration = form.duration.value;
    const price = form.price.value;
    const bookingInfo ={
      name: name,
      email: email,
      duration: duration,
      price: price,
    }

    //send data in database
    axiosPublic.post('/booking', bookingInfo)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Booking successful",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
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


    console.log(bookingInfo)
    // Process booking form here
    handleCloseModal();
  };

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
              <p className="text-gray-800 font-bold mb-1">Price: $ {pkg.price}</p>
              <p className="text-gray-600 mb-1">Duration: {pkg.duration}</p>
              <p className="text-gray-600 mb-3">{pkg.description}</p>
              {pkg.deal && (
                <p className="text-green-600 font-semibold mb-4">{pkg.deal}</p>
              )}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={() => handleBookNow(pkg)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Book {selectedPackage.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700"> Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                name="duration"
                  type="text"
                  value={selectedPackage.duration}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                name="price"
                  type="text"
                  value={selectedPackage.price}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
                  disabled
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedTravelPackages;
