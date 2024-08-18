import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import javaImage from "../images/java_img.png";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from './Carousel';

import SingleProduct from './SingleProduct';

function Home() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
    
      try {
        
        const response = await fetch(baseUrl+'/Products/?fetch_limit=2');
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const result = await response.json();
       
        setProducts(result.data);
       // setTotalResults(result.count);
        console.log(result.data)
      } catch {
        console.log("something went wrong");
      }
    };
    fetchData();

  },[])

  const product=
    {
      title:'java',
      price:'123'
    }
   
    
  
  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];
  return (
    <div>
       {/* latest product **/}
       <div>
        <div className="flex items-center justify-between mt-3 mx-28">
          <div className="font-semibold text-xl ">Latest Products</div>
          <div className=" border-2 border-white font-semibold bg-black rounded-md h-8  px-1 text-white  hover:cursor-pointer hover:text-black hover:bg-white transition-all hover:border-black hover:transition-all flex items-center justify-center">
            <span><Link to='/products'>View All Product</Link></span>
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap ml-32 gap-8">
        <div className='my-4 h-72 border-2 rounded-md w-1/5 '> 
         {
          products.map((product,index)=>(
            <SingleProduct product={product} key={index}></SingleProduct>
          ))
         }
        
        
        
        </div>
        {/* <div className='my-4 h-72 border-2 rounded-md w-1/5 ml'> <SingleProduct product={product}></SingleProduct></div>
        <div className='my-4 h-72 border-2 rounded-md w-1/5 ml'> <SingleProduct product={product}></SingleProduct></div>
        <div className='my-4 h-72 border-2 rounded-md w-1/5 ml'> <SingleProduct product={product}></SingleProduct></div> */}
        </div>







      </div>

      {/** product category*/}
      <div>
        <div className="flex items-center justify-between mt-3 mx-28 ">
          <div className="font-semibold text-xl ">Popular Categories</div>
          <div className=" border-2 border-white font-semibold bg-black rounded-md h-8  px-1 text-white  hover:cursor-pointer hover:text-black hover:bg-white transition-all hover:border-black hover:transition-all flex items-center justify-center">
          <span><Link to='/category'>View All Category</Link></span>
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mx-10 px-10 ">
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Product Title
              </div>

              <div className="flex items-center justify-between h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Product Downloads:32456
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Product Title
              </div>

              <div className="flex items-center justify-between h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Product Downloads:32456
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Product Title
              </div>

              <div className="flex items-center justify-between h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Product Downloads:32456
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Product Title
              </div>

              <div className="flex items-center justify-between h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Product Downloads:32456
              </div>
            </div>
          </div>
        </div>
      </div>
    
       {/** popular product */}

       <div>
        <div className="flex items-center justify-between mt-3 mx-28">
          <div className="font-semibold text-xl ">Popular Products</div>
          <div className=" border-2 border-white font-semibold bg-black rounded-md h-8  px-1 text-white  hover:cursor-pointer hover:text-black hover:bg-white transition-all hover:border-black hover:transition-all flex items-center justify-center">
            <span>View All Product</span>{" "}
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mx-10 px-10 ">
          <div className=" h-72 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/3 text-lg font-semibold pl-4  ">
                Product Title
              </div>
              <div className="h-1/3 text-md ml-4">Price: Rs.50</div>
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
          <div className=" h-72 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/3 text-lg font-semibold pl-4  ">
                Product Title
              </div>
              <div className="h-1/3 text-md ml-4">Price: Rs.50</div>
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
          <div className=" h-72 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/3 text-lg font-semibold pl-4  ">
                Product Title
              </div>
              <div className="h-1/3 text-md ml-4">Price: Rs.50</div>
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
          <div className=" h-72 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/3 text-lg font-semibold pl-4  ">
                Product Title
              </div>
              <div className="h-1/3 text-md ml-4">Price: Rs.50</div>
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
        </div>
      </div>

      {/** popular sellers */}

      <div>
        <div className="flex items-center justify-between mt-3 mx-28 ">
          <div className="font-semibold text-xl ">Popular Sellers</div>
          <div className=" border-2 border-white font-semibold bg-black rounded-md h-8  px-1 text-white  hover:cursor-pointer hover:text-black hover:bg-white transition-all hover:border-black hover:transition-all flex items-center justify-center">
            <span>View All Categories </span>{" "}
            <span className="ml-1">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mx-10 px-10 ">
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Seller Name
              </div>

              <div className="flex items-center justify-evenly h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Categories: <a href="">java</a> <a href="">python</a>
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Seller Name
              </div>

              <div className="flex items-center justify-evenly h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Categories:<a href="">java</a> <a href="">python</a>
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Seller Name
              </div>

              <div className="flex items-center justify-evenly h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Categories:<a href="">java</a> <a href="">python</a>
              </div>
            </div>
          </div>
          <div className=" h-64 w-1/5  m-8 border-2 rounded-md hover:shadow-md">
            <div className="h-2/3 rounded-md">
              <img src={javaImage} alt="" className="rounded-md" />
            </div>
            <div className="h-1/3">
              <div className="h-1/2 text-lg font-semibold pl-4  ">
                Seller Name
              </div>

              <div className="flex items-center justify-evenly h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                Categories: <a href="">java</a> <a href="">python</a> 
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center my-10">
        <Carousel images={images} />
      </div>
    </div>
  )
}

export default Home
