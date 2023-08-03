import { toast } from "react-toastify";
import useCart from "../../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import { Toaster } from "react-hot-toast";


const ProductCart = ({ product }) => {
    const { image, price, company, name, rating } = product || {}

    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()

    const HandleAddToCart = (product) => {

        if (user) {
            const ProductInfo = { product: product, email: user.email }
            fetch('http://localhost:5000/cartProduct', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ProductInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('This Product add to cart Successfully')
                        refetch()
                    }
                })
        } else {
            toast.error("This didn't work Place login fast.")
        }

    }
    return (
        <div className="border rounded-md shadow hover:bg-white  duration-1000">
            <div className="m-2 border bg-base-200 rounded-md">
                <img className="h-40 mx-auto hover:-translate-y-8 duration-1000 w-fit" src={image} alt="" />
            </div>
            <div className="m-2">
                <p className="text-gray-400 ">{company}</p>
                <h5 className="text-lg font-semibold">{name}</h5>
                <p>{rating}</p>
                <span className='flex justify-between'>
                    <p className="text-teal-500 font-bold">$ {price}</p>
                    <button onClick={() => HandleAddToCart(product)} className="btn btn-circle btn-sm bg-teal-100">
                        <FaCartPlus />
                    </button>
                </span>
            </div>
            <Toaster />
        </div>
    );
};

export default ProductCart;