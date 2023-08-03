import { useQuery } from "react-query";

const useFeaturedProducts = () => {
    const { data: featuredProducts = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['featuredProducts'],
        queryFn: async () => {
            const res = await fetch('https://hot-sell-server.vercel.app/featuredProducts');
            return res.json();
        }
    })
    return [featuredProducts, loading, refetch]
};

export default useFeaturedProducts;