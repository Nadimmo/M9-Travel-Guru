import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useAllBooking = () => {
    const axiosPublic = useAxiosPublic()
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allBooking')
            return res.data
        }
    })


    return { bookings }
}

export default useAllBooking