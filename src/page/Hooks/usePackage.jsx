import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
const usePackage = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/packages")
            return res.data
        }
         
    })
    return {packages, refetch}
}

export default usePackage