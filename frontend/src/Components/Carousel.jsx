// Carousel.js
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative  w-10/12 overflow-hidden h-60 bg-slate-700 rounded-xl">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-2 opacity-75 hover:opacity-100"
        onClick={prevSlide}
      >
      &#10094;
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full ">
            <div className='w-9/12 mt-20 ml-36 text-white'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas dolorem iure laboriosam eius ipsa accusamus rem, dicta atque! Illo.</p>
            <div className='flex items-center w-1/2 ml-64 justify-center'>
               <span className='text-yellow-600 flex'>
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
            </span>
            <span>
            Customer name
            </span>
                 

            </div>
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
  );
};

export default Carousel;
