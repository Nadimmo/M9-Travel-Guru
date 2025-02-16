import useContact from "../../Hooks/useContact"

const UserRequest = () => {
    const { requests} = useContact()
    // console.log(requests)
  return (
    <div data-aos="zoom-out" className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#F9A51A] text-center mb-8">
          User Requests
        </h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table-auto w-full text-left bg-white">
            <thead className="bg-[#F9A51A] text-white uppercase text-sm">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
              </tr>
            </thead>
            <tbody>
              {requests && requests.length > 0 ? (
                requests.map((user, index) => (
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
                    <td className="px-6 py-4 text-gray-700">{user.message}</td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No request found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserRequest