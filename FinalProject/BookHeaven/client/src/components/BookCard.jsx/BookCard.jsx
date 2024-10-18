import React from 'react';
import axios from 'axios';

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
        <div>
            <div className='bg-zinc-800 rounded p-4 flex flex-col'>
                <div className='bg-zinc-900 rounded flex items-center justify-center'>
                    <img
                        src={`https://ahllibrary.azurewebsites.net/${data.photoPath}`}
                        alt={data.title}
                        className="h-[25vh]"
                    />
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
        </div>
    );
};

export default BookCard;
