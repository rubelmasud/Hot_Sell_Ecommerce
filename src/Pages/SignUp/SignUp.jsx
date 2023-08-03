import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const logedUser = result.user;
                const userInfo = { email: logedUser.email }
                fetch('https://hot-sell-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset()
                            toast.success('User Log In Is Successfully !');
                            navigate(from, { replace: true })
                        }
                    })

            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="h-screen  md:mt-20 mt-6">
            <form className="md:w-5/12 mx-auto flex gap-5 flex-col border p-6 shadow-lg bg-base-200" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center font-semibold text-2xl">Place Register !!</h2>

                <input type="text" placeholder="Place give me your name" {...register("name")} required />

                <input type="email" placeholder="Place give me your email" {...register("email")} required />

                <input type={show ? 'text' : "password"} placeholder="Place give me your Password" {...register("password",
                    {
                        minLength: 6,
                        maxLength: 20,
                        pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                    }
                )} required />
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character !!</p>}

                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character !!</p>}

                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must hand ! uppercase  and one special character !!</p>}

                <div onClick={() => setShow(!show)} className="w-10/12 mx-auto  flex items-center gap-2  mb-2">
                    {
                        show ? <>  <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>  <p>Hide password</p>  </> : <>   <AiFillEye className="text-orange-400"></AiFillEye>
                            <p className="text-xs">Show password</p>
                        </>
                    }
                </div>


                <div className="w-11/12 mx-auto ">
                    <button className='text-lg  bg-slate-400 w-full px-4 py-1 text-white ' type="submit">Register</button>
                </div>
                <div className="w-[90%] mx-auto flex gap-3">
                    <small> Al ready have an account ? </small>
                    <p className="text-teal-500 underline"><Link to='/login'>Place Login</Link></p>
                </div>
                <SocialLogin />
            </form>
        </div>
    );
};

export default SignUp;