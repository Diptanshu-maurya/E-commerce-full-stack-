import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div>
       <div className=''>
            <div className=' bg-blue-600 h-1/7 flex items-center rounded-t-md p-1'><Link to='/Customer/dashboard'>Dashboard</Link></div>
            <hr />

             <div className='h-1/7 flex items-center p-1 cursor-pointer hover:opacity-80' ><Link  to='/Customer/orders'>Order</Link></div>
              <hr />
             <div className='h-1/7 flex items-center p-1 cursor-pointer hover:opacity-80'><Link to='/Customer/wishlist'>Wishlist</Link></div>
             <hr />
             <div className='h-1/7 flex items-center p-1 cursor-pointer hover:opacity-80'><Link to='/Customer/profile'>Profile</Link></div>
             <hr />
             <div className='h-1/7 flex items-center p-1 cursor-pointer hover:opacity-80'><Link>Change password </Link></div>
             <hr />
             <div className='h-1/7 flex items-center rounded-md p-1 cursor-pointer hover:opacity-80'><Link to='/customer/addresses'>Address</Link></div>
             <hr />
             <div className='h-1/7 flex items-center rounded-md p-1 cursor-pointer hover:opacity-80'><Link>Logout</Link></div>
             
            
            
            
            
            </div>
    </div>
  )
}

export default Sidebar
