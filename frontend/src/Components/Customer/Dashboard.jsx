import React from 'react'
import Sidebar from './Sidebar'
import javaImage from "../../images/java_img.png";
import { FaCircleCheck } from "react-icons/fa6";
import { ImSpinner } from "react-icons/im";
import { MdCancel } from "react-icons/md";

function Dashboard() {
  return (
    <div>
           <div className='flex justify-evenly m-10'>
              <div className='w-1/5 h-60 border-[0.5px] rounded-md '>
                <Sidebar></Sidebar>
              </div>
              <div className='  w-[800px] container flex items-center justify-evenly'>
                <div className='border-2 py-1 px-6 rounded-md'>
                  <div className='font-semibold text-lg'>Total order</div>
                  <p className='font-md text-md'>123</p>
                </div>
                <div className='border-2 py-1 px-6 rounded-md'>
                  <div className='font-semibold text-lg'>Total order</div>
                  <p className='font-md text-md'>123</p>
                </div>
                <div className='border-2 py-1 px-6 rounded-md'>
                  <div className='font-semibold text-lg'>Total order</div>
                  <p className='font-md text-md'>123</p>
                </div>
             
              </div>
           

            
             </div>
    </div>
    
  )
}

export default Dashboard
