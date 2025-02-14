import usePaymentHistory from "../../Hooks/usePaymentHistory"

const PaymentHistory = () => {
  const { paymentsHistory } = usePaymentHistory()
  // console.log(paymentsHistory.length)
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Payments History
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-6 text-left font-semibold">#</th>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
              <th className="py-3 px-6 text-left font-semibold">Date</th>
              <th className="py-3 px-6 text-left font-semibold">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {paymentsHistory.length > 0 ? (
              paymentsHistory.map((payment, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-100 transition-colors duration-200"
                >
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {payment.name}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700">
                    {payment.email}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700 font-bold">
                    {payment.date || "N/A"}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-200 text-gray-700 font-bold">
                    {payment.transactionId || "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-4 px-6 text-center text-gray-500 bg-gray-50"
                >
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentHistory