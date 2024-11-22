import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [Data, setData] = useState({
        title: "",
        author: "",
        price: "",
        photoPath: ""
    })

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    };

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };

    const submit = async () => {
        try {
            if (Data.title === "" || Data.author === "" || Data.price === "" || Data.photoPath === "") {
                alert("All Fields Required");

            } else {
                const formData = new FormData();
                formData.append("title", Data.title);
                formData.append("author", Data.author);
                formData.append("price", Data.price);
                formData.append("photo", Data.photoPath);

                const response = await axios.put(
                    `https://ahllibrary.azurewebsites.net/api/Book/Editbook/${id}`,
                    formData,
                    { headers }
                );

                setData({
                    title: "",
                    author: "",
                    price: "",
                    photoPath: ""
                });
                alert("The Book Updated Successfully ");
                navigate(`/view-book-details/${id}`)
            }
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
    };

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
        <div className='bg-zinc-900 h-[90vh] p-0 md:p-4 flex flex-col'>
            <h1 className='mt-5 text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
                Update Book
            </h1>
            <div className="p-4 bg-zinc-800 rounded">
                <div>
                    <label htmlFor="title" className="text-zinc-400">
                        Title
                    </label>
                    <input
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="Book Title"
                        name="title"
                        required
                        value={Data.title}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="author" className="text-zinc-400">
                        Author
                    </label>
                    <input
                        type="text"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="Book Author"
                        name="author"
                        required
                        value={Data.author}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="price" className="text-zinc-400">
                        Price
                    </label>
                    <input
                        type="number"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="Book Borrow Price"
                        name="price"
                        required
                        value={Data.price}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="photoPath" className="text-zinc-400">
                        Image
                    </label>
                    <input
                        type="url"
                        className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="url of image"
                        name="photoPath"
                        required
                        value={Data.photoPath}
                        onChange={change}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="" className="text-zinc-400">
                        Description
                    </label>
                    <textarea
                        className="w-full py-10 mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                        placeholder="Book Description"
                        name="description"
                        required
                    // value={Data.photoPath}
                    // onChange={change}
                    />
                </div>

                <button
                    className="w-full mt-5 px-20 py-4 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300"
                    onClick={submit}
                >
                    <p className='text-3xl'>Update Book</p>
                </button>
            </div>
        </div>
    )
}

export default UpdateBook
