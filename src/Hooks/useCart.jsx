import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: myCartProducts = [] } = useQuery({
        queryKey: ['myCartProducts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/myCartProducts?email=${user?.email}`)
            return response.json()
        },
    })

    return [myCartProducts, refetch]
};

export default useCart;