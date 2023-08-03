import { useQuery } from "react-query";

const useFeaturedProducts = () => {
    const { data: featuredProducts = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/featuredProducts');
            return res.json();
        }
    })
    return [featuredProducts, loading, refetch]
};

export default useFeaturedProducts;