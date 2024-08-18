// Carousel.js
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

const CarousalForProductDetail = ({ productImgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImgs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productImgs.length) % productImgs.length);
  };

  return (
    <div className="relative  w-10/12 overflow-hidden h-60 bg-slate-700 rounded-xl">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-2 opacity-75 hover:opacity-100 z-10"
        onClick={prevSlide}
      >
      &#10094;
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
         {
          productImgs.map((img,index)=>(
            <img className='h-[250px] w-[600px]' src={img.image} alt="" key={index}/>
          ))
         }
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

export default CarousalForProductDetail;
