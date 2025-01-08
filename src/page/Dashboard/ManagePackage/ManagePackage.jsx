
const ManagePackage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#F9A51A" }}>
          Manage Packages
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="px-4 py-2 border">Package Title</th>
                <th className="px-4 py-2 border">Duration</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              {[1, 2, 3].map((_, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="px-4 py-2 border">Package {index + 1}</td>
                  <td className="px-4 py-2 border">{index + 3} Days</td>
                  <td className="px-4 py-2 border">${(index + 1) * 100}</td>
                  <td className="px-4 py-2 border text-center space-x-4">
                    <button
                      className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 shadow transform hover:scale-105 transition-transform duration-300"
                    >
                      Update
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 shadow transform hover:scale-105 transition-transform duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
