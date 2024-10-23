import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import { CiImageOff } from "react-icons/ci";

const BookCard = ({ data, borrowed }) => {

    const handleReturnBook = async (id) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://ahllibrary.azurewebsites.net/api/Book/ReturnBook/${id}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(response)
                alert("Book returned successfully");
                window.location.reload()
            })
            .catch((error) => {
                alert(error.response?.data[0]?.description || "An error occurred");
            });
    };

    return (
        <Link to={`/view-book-details/${data.id}`}>
            <div className='bg-zinc-800 rounded p-4 flex flex-col'>
                <div className='bg-zinc-900 rounded flex items-center justify-center h-[25vh]'>
                    {data.photoPath ? (
                        <img
                            src={data.photoPath ? `https://ahllibrary.azurewebsites.net/${data.photoPath}` : 'path/to/default-image.jpg'}
                            alt={data.title ? data.title : 'No cover image available'}
                            className="h-[25vh]"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className='text-zinc-300 font-semibold mb-4'>No Cover Page</p>
                            <CiImageOff className="text-zinc-300 text-4xl" />
                        </div>
                    )}
                </div>
                <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>
                    {data.title}
                </h2>
                <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
                <p className='mt-2 text-zinc-200 font-semibold text-xl'>₪ {data.price}</p>
                {borrowed &&
                    <button
                        className='px-4 py-2 bg-blue-100 rounded border border-zinc-900 hover:bg-zinc-400 text-zinc-900 transition-all duration-300 mt-4'
                        onClick={() => handleReturnBook(data.id)}  // Pass as callback function
                    >
                        Return the book
                    </button>
                }
            </div>
        </Link>
    );
};

export default BookCard;
