import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const [myCartProducts] = useCart()
    const { user, UserLogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        UserLogOut()
            .then(() => {
                toast.success('User Log Out Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const menuItems =
        <div className="md:flex gap-5 items-center text-[16px] font-medium ">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "default"} > Home </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : "default"}>Products </NavLink>
            </li>
            <li>
                <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : "default"}>Blog </NavLink>
            </li>
            <li>
                <NavLink to="/admission" className={({ isActive }) => isActive ? "active" : "default"}>About </NavLink>
            </li>

            <li>
                <NavLink to="/myCart" className={({ isActive }) => isActive ? "active" : "default"}>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <FaCartPlus size={20} />
                            <span className="badge badge-sm indicator-item">{myCartProducts.length}</span>
                        </div>
                    </label>
                </NavLink>
            </li>


            {
                user ? <div className="dropdown dropdown-end text-black ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full online">
                            <img className="online" src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className=" menu-sm dropdown-content md:static absolute left-7 md:-left-40 mt-3  p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li>
                            <Link to='' className="justify-between">
                                Profile
                                <span className="badge text-xs font-serif">{user?.displayName}</span>
                            </Link>
                        </li>
                        {
                            user ? <li onClick={handleLogOut}><a>Logout</a></li>
                                : <li>  <a href="/login">Log In</a></li>
                        }
                    </ul>
                </div>
                    :
                    <Link to='/login' className='text-lg  bg-slate-400 w-fit px-4 py-1 text-white '>SignIn </Link>
            }
        </div>

    return (
        <div className="navbar  sticky top-0 bg-gray-600 h-16 md:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 bg-slate-300">
                        {menuItems}
                    </ul>
                </div>
                <a href="">
                    <img className="w-20 h-20 " src="https://i.ibb.co/7JHsfPh/hot-sale-template-23-2147514438-removebg-preview.png" alt="hot-sale-template-23-2147514438-removebg-preview" border="0"></img>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;