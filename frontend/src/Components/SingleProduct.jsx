import React from 'react'
import javaImage from "../images/java_img.png";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SingleProduct({product}) {
  return (
    <div className='border-1  rounded-md'>
       
            <div className="h-2/3 rounded-md ">
            
              <Link to={`/product/${product.title}/${product.id}`}><img src={javaImage} alt="" className="rounded-md" /></Link>
            </div>
            <div className="h-1/3 mt-14">
              <Link to={`/product/${product.title}/${product.id}`}><div className="h-1/3 text-lg font-semibold pl-4  ">
                {product.title}
              </div></Link>
              <div className="h-1/3 text-md ml-4">Price: Rs.{product.price}</div>
              <div className="flex items-center justify-between h-1/3 bg-slate-200 rounded-md mt-1">
                <div className="text-2xl ml-4 text-green-700">
                  <FaCartPlus />
                </div>
                <div className="text-2xl mr-4 text-red-700">
                  <FaHeart /> 
                </div>
              </div>
            </div>
          </div>
    
  )
}

export default SingleProduct
