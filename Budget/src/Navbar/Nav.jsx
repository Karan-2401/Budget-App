import React from 'react'
import { Form,NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.png"
const Nav = ({username}) => {
  return (
    <div className='px-2 py-4 sm:pr-8 flex items-center justify-between box-border border'>
      <NavLink to="/" aria-label='go to home' className="inline-flex gap-2 items-center border border-white w-auto p-3 rounded-2xl hover:border-blue-400 border-2">
        <img src={Logo} alt="" className='w-8 rounded-lg'/>
        <span className='text-xl text-black font-semibold hidden sm:block'>HomeBudget</span>
      </NavLink>
      
      {{username} ? (
        <Form 
            method='post'
            action='logout'
            onSubmit={(e)=>{
                if(!confirm("are you sure to logout?")){
                    e.preventDefault();
                }
            }}
        >
           <button type='submit' className='border-red-700 border-2 rounded-xl p-2 hover:bg-red-700'>
                <span className='text-red-500 font-medium hover:text-white'>Delete User</span>
                
            </button> 
            
        </Form>
      ):(<h2>bye</h2>)}
    </div>
  )
}

export default Nav
