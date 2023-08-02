import { FaCartPlus } from 'react-icons/fa';

const FeaturedProductCart = ({ feature }) => {
    const { image, price, company, name, rating } = feature || {}
    return (
        <div className="border rounded-md shadow hover:bg-white  duration-1000">
            <div className="m-2 border bg-base-200 rounded-md">
                <img className="h-40 mx-auto hover:-translate-y-8 duration-1000" src={image} alt="" />
            </div>
            <div className="m-2">
                <p className="text-gray-400 ">{company}</p>
                <h5 className="text-lg font-semibold">{name}</h5>
                <p>{rating}</p>
                <span className='flex justify-between'>
                    <p className="text-teal-500 font-bold">$ {price}</p>
                    <button className="btn btn-circle btn-sm bg-teal-100">
                        <FaCartPlus />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default FeaturedProductCart;