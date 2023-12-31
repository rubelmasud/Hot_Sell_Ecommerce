import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const SingIn = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signInUser } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const onSubmit = data => {
        console.log(data);
        signInUser(data.email, data.password)
            .then((result) => {
                console.log(result);
                result.user;
                toast.success('User Log In Is Successfully !');
                reset()
                // navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="h-screen  md:mt-20 mt-6">
            <ToastContainer />
            <form className="md:w-5/12 mx-auto flex gap-5 flex-col border p-6 shadow-lg bg-base-200" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center font-semibold text-2xl">Place Login !!</h2>

                <input type="email" placeholder="Place give me your email" {...register("email")} required />

                <input type={show ? 'text' : "password"} placeholder="Place give me your Password" {...register("password")} required />

                <div onClick={() => setShow(!show)} className="w-10/12 mx-auto  flex items-center gap-2  mb-2">
                    {
                        show ? <>  <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>  <p>Hide password</p>  </> : <>   <AiFillEye className="text-orange-400"></AiFillEye>
                            <p className="text-xs">Show password</p>
                        </>
                    }
                </div>

                <div className="w-11/12 mx-auto ">
                    <button className='text-lg  bg-slate-400 w-full px-4 py-1 text-white ' type="submit">Log In</button>
                </div>
                <div className="w-[90%] mx-auto flex gap-3">
                    <small> Dont have an account ? </small>
                    <p className="text-teal-500 underline"><Link to='/signUp'>Place Register</Link></p>
                </div>
                <SocialLogin />
            </form>
        </div>
    );
};

export default SingIn;