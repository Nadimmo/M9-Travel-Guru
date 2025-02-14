import { useContext } from "react"
import useAxiosSecure from "./useAxiosSecure"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const usePaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    const { data: paymentsHistory } = useQuery({
        queryKey: ['paymentsHistory', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/payments/${user.email}`)
            return response.data
        }
    })
    return { paymentsHistory }
}

export default usePaymentHistory