import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { CiImageOff } from "react-icons/ci";
import { MdOutlineLanguage } from "react-icons/md";
import { useSelector } from 'react-redux';

const ViewBookDetails = () => {
    const navigate =useNavigate();
    const { id } = useParams();
    const [Data, setData] = useState();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const role = useSelector((state) => state.auth.role);
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    }
    
    function handleBorrowBook() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://ahllibrary.azurewebsites.net/api/Book/BuyBook/${id}`,
            headers
        };

        axios.request(config)
            .then((response) => {
                alert("The book has been borrowed successfully.");
                window.location.reload()
            })
            .catch((error) => {
                alert(error.response.data.message || "An error occurred");
                console.log(error)
            });
    }

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://ahllibrary.azurewebsites.net/api/Book/GetBook/${id}`,
        };

        axios.request(config)
            .then((response) => {
                const data = response.data;
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

   
    const deleteBook = async () => {
        try {
            const response = await axios.delete(
                `https://ahllibrary.azurewebsites.net/api/Book/DeleteBook/${id}`,
                { headers }
            )
            alert("The Book Deleted Successfully")
            navigate("/all-books")
        } catch (error) {
            alert("Something went wrong")
            console.log(error)

        }
    }

    return (
        <>
            {Data ?
                <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row gap-8'>
                    <div className='w-full lg:w-3/6 '>
                        <div className='flex flex-col lg:flex-row items-center justify-around bg-zinc-800 py-12 rounded'>
                            {Data && Data.photoPath ? (
                                <>
                                    {" "}
                                    <img
                                        src={`https://ahllibrary.azurewebsites.net/${Data.photoPath}`}
                                        alt={Data.title}
                                        className='h-[70vh] rounded ml-10'
                                    />
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-[70vh]">
                                    <p className='text-zinc-300 font-semibold mb-4 text-5xl'>No Cover Page</p>
                                    <CiImageOff className="text-zinc-300 text-8xl" />
                                </div>
                            )}
                            {isLoggedIn && role === "Admin" &&
                                <div className='flex flex-col items-center justify-center lg:justify-start mt-4 lg:mt-0 gap-5'>
                                    <Link to={`/update-book/${id}`}
                                        className='bg-white rounded lg:rounded-full text-3xl p-3 flex items-center justify-center'
                                    >
                                        <FaEdit />{" "}
                                        <span className='ms-2 block lg:hidden text-2xl'>Update Book</span>
                                    </Link>
                                    <button
                                        className='text-red-500 rounded lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-white flex items-center justify-center'
                                        onClick={deleteBook}
                                    >
                                        <MdDeleteForever />{" "}
                                        <span className='ms-2 block lg:hidden text-2xl'>Delete the Book</span>
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="p-4 w-full lg:w-3/6 flex flex-col justify-center gap-2">
                        <h1 className='text-5xl text-zinc-300 font semibold'>{Data && Data.title}</h1>
                        <p className="text-zinc-400 mt-1">by {Data.author}</p>
                        <p className="text-zinc-500 mt-4 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officiis voluptates quisquam vitae temporibus rem nulla minus animi omnis sequi beatae odio, optio iure at, mollitia corrupti quia vel facilis eos veritatis reiciendis similique. Consequatur asperiores alias voluptate tempora cupiditate quas sequi eos eius nam quos facere libero vitae dignissimos expedita, et rem aut minima dicta, possimus sunt doloremque. Veniam corrupti unde facilis hic beatae iste sapiente saepe voluptatem, tenetur atque, nisi, esse consequatur ullam commodi sunt velit architecto quas perspiciatis accusamus. Fugiat, eveniet? Quibusdam iure delectus provident. Error sed optio obcaecati soluta voluptatem asperiores quaerat ea veniam ad ullam.</p>
                        <p className='flex mt-4 items-center justify-start text-zinc-400'>
                            <MdOutlineLanguage className="me-2" /> {Data.language ? Data.language : "not specified"}
                        </p>
                        <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
                            Price:₪ {Data.price}{" "}
                        </p>
                        {isLoggedIn && role !== "Admin" && Data.isAvaliable &&
                            <>
                                <button
                                    className="w-full mt-5 px-20 py-4 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300"
                                    onClick={handleBorrowBook}
                                >
                                    <b>Borrow Book</b>
                                </button>
                            </>

                        }
                    </div>
                </div>
                : <>
                    <div className='flex items-center justify-center bg-zinc-900 h-screen px-12 py-8 '>
                        <br />
                        <Loader />
                    </div>
                </>

            }
        </>
    )
}

export default ViewBookDetails

