/* eslint-disable no-unused-vars */
import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useReview = () => {
    const axiosPublic = useAxiosPublic()
    const {data: reviews = []}  = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data
        }
    })
  return {reviews}
}

export default useReview