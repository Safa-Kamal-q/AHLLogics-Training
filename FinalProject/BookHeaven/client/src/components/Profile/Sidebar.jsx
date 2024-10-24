import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import { authAction } from '../../store/auth'

const Sidebar = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state) => state.auth.role);

    function logout() {
        dispatch(authAction.logout());
        dispatch(authAction.changeRole("user"))
        localStorage.clear("id")
        localStorage.clear("token")
        localStorage.clear("role")
        navigate("/")
    }

    return (
        <div className="bg-zinc-800 p-4 rounded flex flex-col items-center gap-8 justify-center h-[100%]">
            <div className='flex items-center flex-col justify-center'>
                <img
                    src="../public/img/circleAvatar.svg"
                    className="h-[12vh]"
                />
                <p className='mt-3 text-xl text-zinc-100 font-semibold'>
                    {data.fullName || "Full Name"}
                </p>
                <p className='mt-1 text-normal text-zinc-300'>{data.email || "user@example.com"}</p>
                <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
            </div>
            {role === "Admin" &&
                <Link
                    to="/profile/add-book"
                    className='text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-'
                >
                    Add Book
                </Link>
            }
            <button
                className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300"
                onClick={logout}
            >
                Log Out <FaArrowRightFromBracket className="ms-4" />
            </button>
        </div>
    )
}

export default Sidebar
