import React from 'react'
import i from "../assets/i.jpg"
import { Form } from 'react-router-dom'
const Intro = () => {
  return (
    <div className=' gap-10 flex items-center justify-center flex-col md:flex-row' >
        <div className='flex flex-col sm:w-1/3 gap-5 ms-2 sm:ms-0'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold'>Take Control of <span className='text-blue-400'>Your Money</span></h1>
            <p className='text-sm sm:text-base lg:text-lg'>
            Personal budgeting is the secret to financial freedom. Start your journey today.
            </p>
            <Form method='post'>
              <input type="text" name='username' placeholder='Enter Your Name...' required className='border-slate-300 rounded border-2 w-6/12 md:w-8/12 lg:w-9/12 p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:border-blue-400 duration-150'/>
              <input type="hidden" name="_action" value="newUser" />
              <br/><button className='border mt-5 p-1 sm:p-2 px-3 sm:px-4 lg:px-8 bg-black rounded hover:outline-4 hover:outline hover:outline-offset-2 duration-100'>
                <span className='text-white text-xs sm:text-sm lg:text-base'>Create Account</span>
                </button>
            </Form>
        </div>
        <img src={i} alt="" className='w-4/5 sm:w-2/5' />
    </div>
  )
}

export default Intro
