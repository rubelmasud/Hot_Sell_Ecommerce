import { useEffect, useState } from "react";
import ProductCart from "../../Components/ProductCart/ProductCart";



const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])


    return (
        <div className="mt-12">
            <div className="flex w-4/12 mx-auto mb-6">
                <input placeholder="Place search the product name" type="text" />
                <button className="bg-gray-500 px-2 text-white">Search</button>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {
                    products.map(product => <ProductCart key={product._id} product={product}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Products;