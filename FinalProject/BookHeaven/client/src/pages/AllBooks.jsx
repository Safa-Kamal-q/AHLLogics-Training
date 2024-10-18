import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../components/Loader/Loader'
import BookCard from '../components/BookCard.jsx/BookCard'

const AllBooks = () => {

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
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='bg-zinc-900 h-auto px-12 py-8 '>
      <h4 className="text-3xl py-5 text-white text-center font-semibold">
        All Books
      </h4>
      {!Data &&
        <div className='flex items-center justify-center my-8'>
          <br />
          <Loader />
        </div>
      }
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
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

export default AllBooks
