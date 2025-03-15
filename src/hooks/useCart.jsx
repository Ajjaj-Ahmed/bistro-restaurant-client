import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';


const useCart = () => {
    // tan stack query
    const axiousSecure = useAxiosSecure()
    const {data: cart=[]} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
            const res = await axiousSecure.get('/carts')
            return res.data
        }
    })
    return [cart]
};

export default useCart;