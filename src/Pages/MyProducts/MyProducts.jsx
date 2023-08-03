import { useState } from "react";
import CartProduct from "../../Components/CartProduct/CartProduct";
import useCart from "../../Hooks/useCart";

const MyProducts = () => {

    const [product, setProduct] = useState({})
    // const [allProducts, setAllProducts] = useState({})

    const [myCartProducts] = useCart()

    const handleDetails = (product) => {
        setProduct(product)
    }


    const handleDelete = (id) => {
        console.log(id);
    };



    return (
        <div className=" md:my-6 ">
            <h2 className="text-center md:text-3xl font-serif mb-6 ">Total Price : 00</h2>
            <div className="md:flex gap-4 justify-between items-start">
                <div className="md:w-7/12 grid grid-cols-1 gpa-4 h-auto">
                    {
                        myCartProducts.map(product => <CartProduct key={product._id} product={product.product} handleDetails={handleDetails} handleDelete={handleDelete} />)
                    }
                </div>
                <div className="md:w-5/12 shadow-xl p-12 flex flex-col gap-3 h-auto">
                    <img className="h-64 rounded-md shadow-md" src={product.image} alt="" />
                    <h4 className="font-semibold text-xl">Name: {product.name}</h4>
                    <p><span className="font-bold">Description</span>: {product.description}</p>
                    <p><span className="font-bold">Company</span>: {product.company}</p>
                    <p><span className="font-bold">Category</span>: {product.category}</p>
                    <p><span className="font-bold">Price</span>: ${product.price}</p>
                    <p><span className="font-bold">Raring</span>: {product.rating}</p>

                </div>
            </div>
        </div>
    );
};

export default MyProducts;