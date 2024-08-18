import React from "react";

import SingleProduct from "./SingleProduct";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function CategotyProduct() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const {category_slug,category_id}=useParams();
  

  const fetchData = async (baseurl) => {
    
    try {
      
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const result = await response.json();
     
      setProducts(result.data);
      setTotalResults(result.count);
      console.log(result.data)
    } catch {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    

    fetchData(baseUrl+'/ProductCategory/?category='+category_id);
  }, []);

  function changeUrl(baseurl) {
    
   
    fetchData(baseurl);
  }

  var links = [];
  for (let i = 1; i <= totalResults; i++) {
    links.push(
      <Link 
        key={i}
        onClick={() => changeUrl(baseUrl+`/ProductCategory/category=${category_id}&?page=${i}`)}
        to={`/category/${category_slug}/${category_id}/?page=${i}`}
        aria-current="page"
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        {i}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mt-3 mx-36">
        <div className="font-semibold text-xl "> All Products</div>
      </div>
      {console.log(products)}
      <div className="flex flex-wrap gap-6 my-4 ml-36 ">
        {products.map((product) => (
            <div className="my-4 h-72 border-2 rounded-md w-1/5">
              <SingleProduct key={product.id} product={product}></SingleProduct>
            </div>
        ))}
      </div>

      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              class="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              {links}

              <a
                href=""
                class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategotyProduct;


