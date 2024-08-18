import React from 'react'
import javaImage from "../../images/java_img.png";
import { FaCircleCheck } from "react-icons/fa6";
import { ImSpinner } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import Sidebar from './Sidebar';


function Wishlist() {
  return (
    <div>
      <div className='flex justify-evenly m-10'>
       <div className='w-1/5 h-60 border-[0.5px] rounded-md '>
         <Sidebar></Sidebar>
       </div>
       <div className=' border-4 w-[800px] container '>
       <table class="min-w-full border-collapse border border-gray-300">
         <thead>
             <tr>
                 <th class="py-2 px-4 border border-gray-300 bg-gray-200">Sno</th>
                 <th class="py-2 px-4 border border-gray-300 bg-gray-200">Product</th>
                 <th class="py-2 px-4 border border-gray-300 bg-gray-200">Price</th>    
                 <th class="py-2 px-4 border border-gray-300 bg-gray-200">Action</th>
             </tr>
         </thead>
         <tbody>
             <tr className=''>
                 <td class="py-12 px-4 border border-gray-300">
                   1
                 </td>
                 <td class="py-4 px-4 border border-gray-300">
                   <div className='w-36 h-24'> <img src={javaImage} alt="" /></div>
                   <div> <span>Django</span></div>
                 </td>
                 <td class="py-12 px-4 border border-gray-300"><span>Rs 500</span></td>
                 
                 <td class="py-12 px-4 border border-gray-300 ">
                 <div className='text-white flex items-center h-8 w-24 bg-red-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90'>

                   <div>Remove</div>
                        </div>
                 </td>
             </tr>
             <tr className=''>
                 <td class="py-12 px-4 border border-gray-300">
                   1
                 </td>
                 <td class="py-4 px-4 border border-gray-300">
                   <div className='w-36 h-24'> <img src={javaImage} alt="" /></div>
                   <div> <span>Django</span></div>
                 </td>
                 <td class="py-12 px-4 border border-gray-300"><span>Rs 500</span></td>
                 
                 <td class="py-12 px-4 border border-gray-300 ">
                 <div className='text-white flex items-center h-8 w-24 bg-red-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90'>

                   <div>Remove</div>
                        </div>
                 </td>
             </tr>
             <tr className=''>
                 <td class="py-12 px-4 border border-gray-300">
                   1
                 </td>
                 <td class="py-4 px-4 border border-gray-300">
                   <div className='w-36 h-24'> <img src={javaImage} alt="" /></div>
                   <div> <span>Django</span></div>
                 </td>
                 <td class="py-12 px-4 border border-gray-300"><span>Rs 500</span></td>
                
                 <td class="py-12 px-4 border border-gray-300 ">
                 <div className='text-white flex items-center h-8 w-24 bg-red-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90'>

                   <div>Remove</div>
                        </div>
                 </td>
             </tr>
             <tr className=''>
                 <td class="py-12 px-4 border border-gray-300">
                   1
                 </td>
                 <td class="py-4 px-4 border border-gray-300">
                   <div className='w-36 h-24'> <img src={javaImage} alt="" /></div>
                   <div> <span>Django</span></div>
                 </td>
                 <td class="py-12 px-4 border border-gray-300"><span>Rs 500</span></td>
                
                 <td class="py-12 px-4 border border-gray-300 ">
                 <div className='text-white flex items-center h-8 w-24 bg-red-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90'>

                   <div>Remove</div>
                        </div>
                 </td>
             </tr>
         </tbody>
     </table>
       </div>
    

     
      </div>
    </div>
  )
}

export default Wishlist
