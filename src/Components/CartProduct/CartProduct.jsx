import { MdDelete } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';

const CartProduct = ({ product, handleDetails, handleDelete }) => {
    const { name, image, price, _id } = product || {}


    return (
        <div className="border shadow-sm bg-base-200 flex  items-center my-1 rounded-sm">
            <img className="h-24 m-2 bg-slate-700 rounded-md" src={image} alt="" />
            <div className="w-full flex justify-between  mr-6">
                <div className='font-semibold'>
                    <p className='text-lg '>{name}</p>
                    <p>Price : <span className='text-teal-500'>${price}</span></p>
                </div>
                <div className="flex gap-4 text-white flex-col">
                    <span className='flex gap-4'>
                        <button onClick={() => handleDetails(product)} className="btn btn-active btn-primary  btn-sm btn-circle "><TbListDetails size={24} /></button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error  text-white btn-circle btn-sm"><MdDelete size={24} /></button>
                    </span>
                    <span className='flex gap-4'>
                        <button className="btn  bg-slate-200 btn-circle btn-sm">+1</button>
                        <button className="btn bg-slate-200 btn-circle btn-sm">-1</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;