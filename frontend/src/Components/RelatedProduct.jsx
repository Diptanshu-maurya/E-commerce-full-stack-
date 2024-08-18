import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useState } from 'react';
import SingleProduct from './SingleProduct';


function RelatedProduct({relatedProducts}) {

  const product=
    {
      title:'java',
      price:'123'
    }
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % relatedProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + relatedProducts.length) % relatedProducts.length);
  };

  return (
    <div className="relative  w-[720px] overflow-hidden h-80 bg-slate-400 rounded-xl">
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-2 opacity-75 hover:opacity-100"
      onClick={prevSlide}
    >
    &#10094;
    </button>
    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      
      {relatedProducts.map((product, index) => (
        <div key={index} className="min-w-full  ">
           
          <div className='flex  items-center justify-center  '>
          <div className=' border-2 rounded-md h-10/12 mt-2 '> <SingleProduct product={product}></SingleProduct></div>
          
          </div>
          
          
          
        </div>
      ))}
      
    </div>
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-2 opacity-75 hover:opacity-100"
      onClick={nextSlide}
    >
      &#10095;
    </button>
  </div>
  )
}

export default RelatedProduct
