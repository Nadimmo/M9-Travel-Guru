import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"

const useAllBooking = () => {
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allBooking')
            return res.data
        }
    })


    return { bookings }
}

export default useAllBooking