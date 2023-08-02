import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingIn = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        // SignInUser(data.email, data.password)
        //     .then((result) => {
        //         result.user;
        //         toast.success('User Log In Is Successfully !');
        //         reset()
        //         navigate(from, { replace: true })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    };

    return (
        <div className="h-screen  mt-20">
            <form className="w-5/12 mx-auto flex gap-5 flex-col border p-6 shadow-lg bg-base-200" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center font-semibold text-2xl">Place Login !!</h2>

                <input placeholder="Place give me your email" {...register("name")} required />

                <input placeholder="Place give me your Password" {...register("email", { required: true })} />

                <div className="w-11/12 mx-auto ">
                    <button className='text-lg  bg-slate-400 w-full px-4 py-1 text-white ' type="submit">Log In</button>
                </div>
                <div className="w-[90%] mx-auto flex gap-3">
                    <small> Dont have an account ? </small>
                    <p className="text-teal-500 underline"><Link to='/signUp'>Place Register</Link></p>
                </div>

                <div className="divider">OR</div>

            </form>
        </div>
    );
};

export default SingIn;