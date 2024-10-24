import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Profile/Sidebar';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const userProfile = localStorage.getItem("user");
        if (userProfile) {
            setProfile(userProfile);
        }
    }, []); 

    return (
        <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white'>
            <div className="w-full md:w-1/6 ">
                <Sidebar data={Profile}/>
            </div>
            <div className="w-full md:w-5/6 h-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
