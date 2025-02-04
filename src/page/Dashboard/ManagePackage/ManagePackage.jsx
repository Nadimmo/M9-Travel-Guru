import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import usePackage from "../../Hooks/usePackage";

/* eslint-disable no-unused-vars */
const ManagePackage = () => {
  const {refetch, packages } = usePackage()
  const axiosPublic = useAxiosPublic()

  // console.log(packages)  /

  const handlerRemove = (id) => {
    axiosPublic.delete(`/packages/${id}`)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Package removed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#F9A51A] text-center mb-8">
          All Packages
        </h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table-auto w-full text-left bg-white">
            <thead className="bg-[#F9A51A] text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Package Name</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages && packages.length > 0 ? (
                packages.map((pkg, index) => (
                  <tr
                    key={pkg.id || index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                      } hover:bg-[#F9A51A]/10`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 text-gray-700">{pkg.title}</td>
                    <td className="px-6 py-4 text-gray-700">{pkg.duration}</td>
                    <td className="px-6 py-4 text-gray-700">$ {pkg.price}</td>
                    <td className="px-6 py-4 text-gray-700">
                      <button className="bg-[#F9A51A] text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition duration-300">
                        Edit
                      </button>
                      <button onClick={() => handlerRemove(pkg._id)} className="ml-3 bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
