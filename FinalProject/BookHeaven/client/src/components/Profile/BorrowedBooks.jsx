import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../BookCard.jsx/BookCard';

const BorrowedBooks = () => {

  const [BorrowedBooks, setBorrowedBooks] = useState();

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://ahllibrary.azurewebsites.net/api/Book/GetBooks',
    };

    axios.request(config)
      .then((response) => {
        const data = response.data;
        let borrowedBook = [];

        data.forEach(element => {
          if (element.userId === localStorage.getItem("id")) {
            borrowedBook.push({ ...element });
          }
        });

        setBorrowedBooks(borrowedBook);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!BorrowedBooks || BorrowedBooks.length === 0 && (
        <div className='text-5xl font-semibold h-[100%] text-zinc-500 flex items-center justify-center w-full'>
          No Borrowed Books
        </div>
      )}

      <div className='grid grid-cols-4 gap-4'>
        {BorrowedBooks &&
          BorrowedBooks.map((item, i) => (
            <div
              key={i}>
              <BookCard data={item} borrowed={true} />
            </div>
          ))}
      </div>
    </>
  )
}

export default BorrowedBooks
