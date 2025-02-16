import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

const useContact = () => {
    const axiosPublic = useAxiosPublic()
    const {data: requests = []} = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
           const res = await axiosPublic.get('/contacts')
            return res.data
        },
     
    })
  return {requests}
}

export default useContact