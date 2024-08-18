import React, { useState, useEffect } from 'react';
import javaImage from "../images/java_img.png";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import SingleProduct from './SingleProduct';

function Category() {
  
   
    const baseUrl = "http://127.0.0.1:8000/api";
    const [categories, setCategories] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    
  
    const fetchData = async (baseurl) => {
      
      try {
        
        const response = await fetch(baseurl);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const result = await response.json();
       
        setCategories(result.data);
        setTotalResults(result.count);
        console.log(result.data)
      } catch {
        console.log("something went wrong");
      }
    };
  
    useEffect(() => {
      
  
      fetchData(baseUrl+'/Categories/');
    }, []);
  
    function changeUrl(baseurl) {
      
     
      fetchData(baseurl);
    }
  
    var links = [];
    for (let i = 1; i <= totalResults; i++) {
      links.push(
        <Link 
          key={i}
          onClick={() => changeUrl(baseUrl+`/Categories/?page=${i}`)}
          to={`/Category/?page=${i}`}
          aria-current="page"
          class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          {i}
        </Link>
      );
    }

    return (
      <div>
        {/** product category*/}
        <div>
          <div className="flex items-center justify-between mt-3 mx-28 ">
            <div className="font-semibold text-xl ">All Categories</div>
          </div>
          <div className="flex flex-wrap mx-10 px-10 ">
            {categories.map((category) => (
              <div key={category.id} className="h-64 w-1/5 m-8 border-2 rounded-md hover:shadow-md">
                <div className="h-2/3 rounded-md">
                  <img src={javaImage} alt="" className="rounded-md" />
                </div>
                <div className="h-1/3">
                  <div className="h-1/2 text-lg font-semibold pl-4">
                    <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
                  </div>
                  <div className="flex items-center justify-between h-1/2 bg-slate-200 rounded-md mt-1 text-md pl-4">
                    Product Downloads: 32456
                    {console.log('Inpage')}
                  </div>
                </div>
              </div>
            ))}
            
           
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {links}
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
}

export default Category;
