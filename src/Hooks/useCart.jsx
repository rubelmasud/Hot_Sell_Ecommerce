import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: myCartProducts = [] } = useQuery({
        queryKey: ['myCartProducts', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://hot-sell-server.vercel.app/myCartProducts?email=${user?.email}`)
            return response.json()
        },
    })

    return [myCartProducts, refetch]
};

export default useCart;