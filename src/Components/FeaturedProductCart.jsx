import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useCart from '../Hooks/useCart';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const FeaturedProductCart = ({ feature }) => {
    const { image, price, company, name, rating } = feature || {}
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()

    const HandleAddToCart = (product) => {

        if (user) {
            const ProductInfo = { product: product, email: user.email }
            fetch('https://hot-sell-server.vercel.app/cartProduct', {
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
                <img className="h-40 mx-auto hover:-translate-y-8 duration-1000" src={image} alt="" />
            </div>
            <div className="m-2">
                <p className="text-gray-400 ">{company}</p>
                <h5 className="text-lg font-semibold">{name}</h5>
                <p><Rating style={{ maxWidth: 80 }} value={rating} readOnly /></p>
                <span className='flex justify-between'>
                    <p className="text-teal-500 font-bold">$ {price}</p>
                    <button onClick={() => HandleAddToCart(feature)} className="btn btn-circle btn-sm bg-teal-100">
                        <FaCartPlus />
                    </button>
                </span>
            </div>
            <Toaster />
        </div>
    );
};

export default FeaturedProductCart;