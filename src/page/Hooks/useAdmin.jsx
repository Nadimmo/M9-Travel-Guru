import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    const { data: isAdmin , isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data?.isAdmin
        }
    })
    return { isAdmin , isAdminLoading}
}

export default useAdmin