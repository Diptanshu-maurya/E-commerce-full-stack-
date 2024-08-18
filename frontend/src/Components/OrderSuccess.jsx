import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div className='container flex items-center justify-center mt-16 '>
        <div className='text-center border-2 rounder-md w-2/3 '>
          <div className='flex items-center justify-center text-3xl p-2 text-green-700'><span><FaCircleCheck/></span></div>
          <div className='flex items-center justify-center text-2xl p-2 text-green-700 font-semibold'><span>Thanks for the order</span></div>
          <div className='flex items-center justify-center p-2'>
            <Link to='/'><span className='text-white flex items-center h-8 w-24 bg-blue-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90 mr-2'>Home

</span></Link>
          <Link to='/Customer/dashboard'>
          <span className='text-white flex items-center h-8 w-24 bg-gray-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90'>Dashboard</span>
          
          </Link>
          
          </div>
        </div>
    </div>
  )
}

export default OrderSuccess
