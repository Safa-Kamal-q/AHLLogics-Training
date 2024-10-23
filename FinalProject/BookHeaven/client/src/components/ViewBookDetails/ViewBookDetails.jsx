import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import { CiImageOff } from "react-icons/ci";
import { MdOutlineLanguage } from "react-icons/md";

const ViewBookDetails = () => {
    const { id } = useParams();

    const [Data, setData] = useState();

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

    return (
        <>
            {Data ?
                <div className='px-4 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row  gap-8'>
                    {Data && Data.photoPath ? (
                        <div className='bg-zinc-800 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center'>
                            <img
                                src={`https://ahllibrary.azurewebsites.net/${Data.photoPath}`}
                                alt={Data.title}
                                className='h-[50vh] lg:h-[70vh] rounded '
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className='text-zinc-300 font-semibold mb-4 text-5xl'>No Cover Page</p>
                            <CiImageOff className="text-zinc-300 text-8xl" />
                        </div>
                    )}
                    <div className="p-4 w-full lg:w-3/6 ">
                        <h1 className='text-4xl text-zinc-300 font semibold'>{Data && Data.title}</h1>
                        <p className="text-zinc-400 mt-1">by {Data.author}</p>
                        <p className="text-zinc-500 mt-4 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officiis voluptates quisquam vitae temporibus rem nulla minus animi omnis sequi beatae odio, optio iure at, mollitia corrupti quia vel facilis eos veritatis reiciendis similique. Consequatur asperiores alias voluptate tempora cupiditate quas sequi eos eius nam quos facere libero vitae dignissimos expedita, et rem aut minima dicta, possimus sunt doloremque. Veniam corrupti unde facilis hic beatae iste sapiente saepe voluptatem, tenetur atque, nisi, esse consequatur ullam commodi sunt velit architecto quas perspiciatis accusamus. Fugiat, eveniet? Quibusdam iure delectus provident. Error sed optio obcaecati soluta voluptatem asperiores quaerat ea veniam ad ullam.</p>
                        <p className='flex mt-4 item-center justify-start text-zinc-400'>
                            <MdOutlineLanguage className="me-3" /> {Data.language ? Data.language : "not specified"}
                        </p>
                        <p className='mt-4 text-zinc-100 text-3xl font-semibold'>
                            Price:₪ {Data.price}{" "}
                        </p>
                    </div>
                    <div className='p-4 w-3/6'></div>
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

