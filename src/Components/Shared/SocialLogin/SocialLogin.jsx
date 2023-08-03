
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'

    const HandleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                const logedUser = result.user;
                const userInfo = { email: logedUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success('User Log In Is Successfully !');
                            navigate(from, { replace: true })
                        }
                    })
            }).catch((error) => {
                console.log(error);

            })
    }

    return (
        <div>
            <div className="divider">or</div>
            <div className="w-11/12 mx-auto flex justify-between items-center relative">
                <FcGoogle size={28} className="absolute top-[4px] left-[3px] bg-white " />
                <button onClick={HandleGoogleLogin} className='text-lg bg-blue-500 w-full px-4 py-1 text-white'> Sign In With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;