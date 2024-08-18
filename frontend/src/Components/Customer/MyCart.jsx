import React, { createContext, useContext, useState } from "react";
import javaImage from "../../images/java_img.png";
import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import axios from "axios";

import { CartContext } from "../Context";


function MyCart() {
  const { cartData, setCartData } = useContext(CartContext);
  const userContext=useContext(UserContext);
  
  
 
  if (cartData == null) {
    var cartItems = 0;
  } else {
    var cartItems = cartData.length;
  }
  const baseUrl = "http://127.0.0.1:8000/api/";

 // const userContext = useContext(UserContext);
 // const {cartData,setCartData}=useContext(CartContext);
  //console.log(userContext)

  if (userContext.login != "true") {
    //  window.location.href='Customer/login'
  }

  function addOrderInTable() {
    const userId = localStorage.getItem("customer_id");
    const formdata = new FormData();
    formdata.append("user", userId);
    //console.log(user)

    //submit
    
    axios.post(baseUrl + `orders/`, formdata)
      .then(function (response) {
       // console.log(response.data.id);
        var order_id = response.data.id;
        localStorage.setItem('orderid',order_id)
        
        orderItems(order_id);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function orderItems(order_id) {
    var previousCart = localStorage.getItem("cartData");
    var cartJson = JSON.parse(previousCart);

    if (cartJson != null) {
      cartJson.map((cart) => {
        const formdata = new FormData();
        formdata.append("order", order_id);
        formdata.append("product", cart.product.id);
        formdata.append("qty", 1);
        formdata.append("price", 100);
        
        axios.post(baseUrl + `orderitems/`, formdata)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
    localStorage.removeItem('cartData');
    var newCartData=localStorage.getItem('cartData');
    setCartData(newCartData)
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div>
        <h1 className="text-xl bold">All Items[{cartItems}]</h1>
        

        {cartItems > 0 && (
          <div className=" border-4 w-[800px] container ">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border border-gray-300 bg-gray-200">
                    Sno
                  </th>
                  <th class="py-2 px-4 border border-gray-300 bg-gray-200">
                    Product
                  </th>
                  <th class="py-2 px-4 border border-gray-300 bg-gray-200">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData &&
                  cartData.map((data, index) => (
                    <tr key={index}>
                      <td class="py-12 px-4 border border-gray-300">
                        {index + 1} {console.log(data)}
                      </td>
                      <td class="py-4 px-4 border border-gray-300">
                        <div className="w-36 h-24">
                          
                          <img src={javaImage} alt="" />
                        </div>
                        <div>
                         
                          <span>{data.product.title}</span>
                        </div>
                      </td>
                      <td class="py-12 px-4 border border-gray-300">
                        <span>{data.product.price}</span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-white flex items-center h-8 w-24 bg-green-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90 ml-80 mt-4">
              <Link to='/confirm-order'>
                <div onClick={addOrderInTable}>Procced </div>
                
              </Link>
            </div>
          </div>
        )}
        {cartItems == 0 && (
          <div>
            <div className="text-2xl font-bold my-4">Nothing in the cart</div>
            <div className="text-white flex items-center h-8 w-20 bg-green-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90 my-4">
              <Link to="/">Home</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCart;
