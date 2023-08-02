import './Banner.css'

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 justify-between md:gap-4 items-center md:mt-0 mt-6'>
            <div className="flex flex-col md:gap-3 md:text-start text-center">
                <p className='font-semibold text-xl font-serif'>Trade-in-offer</p>
                <h3 className='font-semibold  text-2xl md:text-4xl'>Super value deals</h3>
                <h3 className='font-semibold text-3xl md:text-5xl text-teal-600'>On all products</h3>
                <p className='md:text-lg text-xs text-slate-500'>Save more with coupons up to 70% Off !!</p>
                <div className="justify-start">
                    <button className='text-lg  bg-slate-400 w-fit md:px-4 px-2 md:py-1 my-4 text-white '>Shop now</button>
                </div>
            </div>

            <img src="https://i.ibb.co/VjdtyTv/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture-176420-20191-re.png" alt="surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture-176420-20191-re" border="0" />

        </div >
    );
};

export default Banner;