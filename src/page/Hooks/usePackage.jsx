import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
const usePackage = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async()=>{
            const res = await axiosPublic.get("/packages")
            return res.data
        }
         
    })
    return {packages, refetch}
}

export default usePackage