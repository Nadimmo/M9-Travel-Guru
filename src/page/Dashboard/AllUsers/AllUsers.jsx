import Swal from "sweetalert2";
import useAllUsers from "../../Hooks/useAllUsers";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const { refetch, users } = useAllUsers();
  const axiosSecure = useAxiosSecure();

  const handlerMakeAdmin = (id) => {
    // console.log("Make admin", id);
    axiosSecure.patch(`/users/admin/${id}`)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User made admin successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // Refetch users after making admin
        refetch();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while making user admin!",
        });
        console.error("Error making user admin:", error);
      });
  }


  const handlerRemove = (id) => {
    // console.log("Remove user", id);

    axiosSecure.delete(`/users/${id}`)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User removed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // Refetch users after deleting
        refetch();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while removing user!",
        });
        console.error("Error removing user:", error);
      });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#F9A51A] text-center mb-8">
          All Users
        </h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table-auto w-full text-left bg-white">
            <thead className="bg-[#F9A51A] text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id || index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                      } hover:bg-[#F9A51A]/10`}
                  >
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{user.name}</td>
                    <td className="px-6 py-4 text-gray-700">{user.email}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {user.role === "admin" ? <button className="bg-[#F9A51A] text-white px-4 py-2 rounded-md shadow ">
                        Admin
                      </button> : <button onClick={() => handlerMakeAdmin(user._id)} className="bg-[#F9A51A] text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition duration-300">
                        Make Admin
                      </button>}
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handlerRemove(user._id)} className="ml-3 bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
                        Delete
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

export default AllUsers;
