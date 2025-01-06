import useDestination from "../../Hooks/useDestination";

const MyDestination = () => {
  const { destinations } = useDestination()



  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Trip Destinations
      </h2>
    
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th></th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
              <th className="py-3 px-6 text-left font-semibold">Origin</th>
              <th className="py-3 px-6 text-left font-semibold">Destination</th>
              <th className="py-3 px-6 text-left font-semibold">Start Time/Date</th>
              <th className="py-3 px-6 text-left font-semibold">End Time/Date</th>
            </tr>
          </thead>
          <tbody>
            {destinations.length > 0 ? (
              destinations.map((destination, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-100 transition-colors duration-200"
                >
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700"> {index+1}.</td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {destination.email}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {destination.origin}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {destination.destination}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {destination.startDateTime}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {destination.endDateTime}
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 px-6 text-center text-gray-500 bg-gray-50"
                >
                  No destinations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDestination;
