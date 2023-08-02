import { useEffect, useState } from "react";
import FeaturedProductCart from "../../../../Components/FeaturedProductCart";


const FeaturedProduct = () => {
    const [FeaturedProduct, setFeaturedProduct] = useState([])
    useEffect(() => {
        fetch('FeaturedProduct.json')
            .then(res => res.json())
            .then(data => {
                setFeaturedProduct(data)
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className=" px-12">
            <div className="font-serif text-center mt-16 mb-10">
                <h2 className="md:text-3xl text-2xl"> Featured Products</h2>
                <p className="text-slate-500  ">Summer Collections New Morden Design </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-6">
                {
                    FeaturedProduct.map(feature => <FeaturedProductCart key={feature.name} feature={feature} />)
                }
            </div>
        </div>
    );
};

export default FeaturedProduct;