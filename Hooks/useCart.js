import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../src/Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
// import { AuthContext } from '../src/Providers/AuthProviders';
// import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user } = useContext(AuthContext)
    // const token = localStorage.getItem('rainy-rooftop-access-token')
    const [axiosSecure] = useAxiosSecure();
    //eslint-disable-next-line
    const {refetch,data: uesrs_own_cart = [] } = useQuery({
        queryKey: ['uesrs_own_cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/uesrs_own_cart?email=${user.email} `
//jwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwt
            // , {method: "GET",
            //     headers: {                    //⚠️⚠️⚠️❌❌❌❌❌REPLACRE BY AXIOS .... ❌❌❌❌❌⚠️⚠️⚠️
            //     authorization: `Bearer ${token}`
            // }}
 //jwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwtjwt
            )
            console.log("res from Axios", res);
            return res.data;
        }
    })
    return [uesrs_own_cart , refetch]
}

export default useCart;