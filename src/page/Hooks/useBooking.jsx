import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useBooking = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking?email=${user?.email}`)
            return res.data
        }
    })
    return { bookings }
}

export default useBooking