import React from 'react'
import { Link } from "react-router-dom"


const BookCard = ({ data }) => {
    return (
        <>
            <div>
                <div className='bg-zinc-800 rounded p-4 flex flex-col'>
                    <div className='bg-zinc-900 rounded flex item-center justify-center'>
                        <img
                            src={`https://ahllibrary.azurewebsites.net/${data.photoPath}`}
                            alt="/"
                            className="h-[25vh]"
                        />
                    </div>
                    <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>
                        {data.title}
                    </h2>
                    <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
                    <p className='mt-2 text-zinc-200 font-semibold text-xl'>₪ {data.price}</p>
                </div>
            </div>
        </>
    )
}

export default BookCard
