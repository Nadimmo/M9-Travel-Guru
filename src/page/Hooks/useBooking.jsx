import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useBooking = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking?email=${user?.email}`)
            return res.data
        }
    })
    return { bookings, refetch }
}

export default useBooking