import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';
import BookCard from '../BookCard.jsx/BookCard'


const RecentlyAdded = () => {

    const [Data, setData] = useState();

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://ahllibrary.azurewebsites.net/api/Book/GetBooks',
        };

        axios.request(config)
            .then((response) => {
                const data = response.data;
                const lastFourItems = data.slice(-4);
                setData(lastFourItems);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='mt-8 py-3 rounded bg-zinc-700'>
            <h4 className="text-3xl font-semibold">
                <span className="shadow-lg p-2 px-4 bg-gradient-to-r from-zinc-600 to-yellow-200 text-white rounded-md">
                    Recently added books
                </span>
            </h4>
            {!Data &&
                <div className='flex items-center justify-center my-8'>
                    <br />
                    <Loader />
                </div>
            }
            <div className='my-8 px-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {Data &&
                    Data.map((item, i) => (
                        <div key={i}>
                            <BookCard data={item} />{" "}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default RecentlyAdded

