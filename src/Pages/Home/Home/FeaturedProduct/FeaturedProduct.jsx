
import FeaturedProductCart from "../../../../Components/FeaturedProductCart";
import useFeaturedProducts from './../../../../Hooks/useFeaturedProducts';



const FeaturedProduct = () => {
    const [featuredProducts] = useFeaturedProducts()
    return (
        <div className=" px-12">
            <div className="font-serif text-center mt-16 mb-10">
                <h2 className="md:text-3xl text-2xl"> Featured Products</h2>
                <p className="text-slate-500  ">Summer Collections New Morden Design </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6">
                {
                    featuredProducts.map(feature => <FeaturedProductCart key={feature.name} feature={feature} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProduct;