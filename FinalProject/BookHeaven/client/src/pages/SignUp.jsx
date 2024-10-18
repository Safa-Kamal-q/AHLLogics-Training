import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {authAction} from "../store/auth"
import axios from 'axios'
import { useDispatch } from 'react-redux'

const SignUp = () => {
  const [Values, setValues] = useState({ username: "", fullname: "", password: "" })

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value })
  }

  const submit = async () => {
    try {
      if (Values.username === "" || Values.fullname === "" || Values.password === "") {
        alert("All fields are Required")
      } else {
        const response = await axios.post("https://ahllibrary.azurewebsites.net/api/Account/CreateUser", Values)
        alert("Signed Successfully")
        const data = response.data[0];

        dispatch(authAction.login());
        dispatch(authAction.changeRole(data.role));

        localStorage.setItem("id", data.userId);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        navigate("/")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Sign Up</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="username" className="text-zinc-400">Username</label>
            <input
              type="text"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='user name'
              name="username"
              required
              value={Values.username}
              onChange={change}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='fullname' className='text-zinc-400'>Full Name</label>
            <input
              type="text"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='full name'
              name="fullname"
              required
              value={Values.fullname}
              onChange={change}
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='password' className='text-zinc-400'>Password</label>
            <input
              type="password"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='xxxxxxxxxxxx'
              name="password"
              required
              value={Values.password}
              onChange={change}
            />
          </div>
          <div className='mt-6 flex justify-center'>
            <button
              className="w-full px-20 py-4 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300"
              onClick={submit}
            >
              Sign Up
            </button>
          </div><br />
          <div className='mt-4 justify-center text-wight'>
            <p className='text-zinc-200 text-xl flex justify-center'>Or</p>
            <p className='text-zinc-200 text-xl mt-4 flex justify-center'>
              Already have an account?
              <a href='/LogIn' className='ml-2 text-blue-400 hover:underline'>Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
