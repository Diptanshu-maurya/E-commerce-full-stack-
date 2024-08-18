import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { UserContext } from './Context'
import { useContext } from 'react'
import { CartContext } from './Context'

function Header() {
 //const userContext=useContext(UserContext);
  const {cartData,setcartData}=useContext(CartContext)

  if(cartData==null){
    var cartItems=0;
  }else{
    var cartItems=cartData.length;
  }



  
  

  return (
    <div>
      <div className=" container mx-auto h-16  flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-500 mt-[-2px] ">
        <div className="text-xl font-bold ml-10 hover:opacity-85"><Link to='/'>JAVA MARKET PLACE</Link></div>
        <div className="text-lg font-semibold flex ">

         <div className="mr-10 hover:opacity-50 transition-all">
         <Link to='/' >
            Home
          </Link>
         </div>
         <div  className="mr-10 hover:opacity-50 hover:transition-all">
         <Link
            to='/category'
           
          >
            Categories
          </Link>
         </div>
         <div  className="mr-10 hover:opacity-50 hover:transition-all">
         <Link
            to='/mycart'
           
          >
            My cart[{cartItems}]
          </Link>
         </div>
        
         <div  className="mr-10  hover:transition-all">
         
         <Dropdown></Dropdown>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Header
