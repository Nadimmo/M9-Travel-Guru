import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useDestination = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: destinations = [] } = useQuery({
        queryKey: ['destinations', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/destination?email=${user?.email}`)
            return res.data
        }
    })
    return { destinations }
}

export default useDestination