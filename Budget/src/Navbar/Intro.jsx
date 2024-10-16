import React from 'react'
import i from "../assets/i.jpg"
const Intro = () => {
  return (
    <div className='flex items-center justify-center' >
        <div className='flex flex-col w-1/3 gap-5'>
            <h1 className='text-7xl font-bold'>Take Control of <span className='text-blue-400'>Your Money</span></h1>
            <p className='text-2xl'>
            Personal budgeting is the secret to financial freedom. Start your journey today.
            </p>
        </div>
        <img src={i} alt="" />
    </div>
  )
}

export default Intro
