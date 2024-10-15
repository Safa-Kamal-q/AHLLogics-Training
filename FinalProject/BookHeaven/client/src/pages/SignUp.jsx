import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center'>
      <div className='bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
        <p className='text-zinc-200 text-xl'>Sign Up</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className="text-zinc-400">
              UserName
            </label>
            <input
              type="text"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='user name'
              name="userName"
              required
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='' className='text-zinc-400'>Full Name</label>
            <input
              type="text"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='full name'
              name="fullName"
              required
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='' className='text-zinc-400'>Password</label>
            <input
              type="text"
              className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
              placeholder='password'
              name="password"
              required
            />
          </div>
          <div className='mt-6 flex justify-center'>
            <button className="w-full px-20 py-4 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300" >Sign Up</button>
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
