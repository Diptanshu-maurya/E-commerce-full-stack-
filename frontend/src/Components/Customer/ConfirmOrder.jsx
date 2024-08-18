import React, { useState } from "react";
import { UserContext } from "../Context";
import { useContext } from "react";
import { CartContext } from "../Context";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"

function ConfirmOrder() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [paymentMethod,setPaymentMethod]=useState('')
 // const [orderStatus,setOrderStatus]=useState(false);

  function updateOrderStatus(orderid,orderStatus){
    
    axios.post(baseUrl + `update-order-status/${orderid}`)
      .then(function (response) {
       console.log(response);
        
        
        

      })
      .catch(function (error) {
        console.log(error);
      });
  }






  const initialOptions = {
    'client-id': 'AVofjYyKIdqeNO4ZjYedUP72lynFoqVH8yy8qWgAioiEzaEiAwrNB5mIwj8U13T5m1tkdbISOfbgU9ZS', // Replace with your PayPal client ID
    currency: 'USD',
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '3.00', // Replace with the amount you want to charge
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      
      alert('Transaction completed by ' + details.payer.name.given_name);
      
      updateOrderStatus(orderid,true)
    });
  };
  // const baseUrl = "http://127.0.0.1:8000/api/";

  // const userContext = useContext(UserContext);
  // const {cartData,setCartData}=useContext(CartContext);
  // //console.log(userContext)

  // if (userContext.login != "true") {
  //   //  window.location.href='Customer/login'
  // }

  // function addOrderInTable() {
  //   const userId = localStorage.getItem("customer_id");
  //   const formdata = new FormData();
  //   formdata.append("user", userId);
  //   //console.log(user)

  //   //submit
    
  //   axios.post(baseUrl + `orders/`, formdata)
  //     .then(function (response) {
  //      // console.log(response.data.id);
  //       var order_id = response.data.id;
  //       orderItems(order_id);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  // function orderItems(order_id) {
  //   var previousCart = localStorage.getItem("cartData");
  //   var cartJson = JSON.parse(previousCart);

  //   if (cartJson != null) {
  //     cartJson.map((cart) => {
  //       const formdata = new FormData();
  //       formdata.append("order", order_id);
  //       formdata.append("product", cart.product.id);
  //       formdata.append("qty", 1);
  //       formdata.append("price", 100);
        
  //       axios.post(baseUrl + `orderitems/`, formdata)
  //         .then(function (response) {
  //           console.log(response);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     });
  //   }
  //   localStorage.removeItem('cartData');
  //   var newCartData=localStorage.getItem('cartData');
  //   setCartData(newCartData)

  // }
  const orderid=localStorage.getItem('orderid')
  // function changePaymentMethod(Method){
  //    setPaymentMethod(Method);
  // }
  function payNow(){
    if(paymentMethod!=''){
      console.log(paymentMethod)
    }else{
      alert('Please select payment option ')
    }
    
  }
    
  

  return (
    <div>
      <div className="border-gray-200 text-center mt-10">
        <div className="flex justify-center items-center">
        <div className="text-green-700 text-3xl p-2" ><FaCheckCircle/></div>
        <div className="text-2xl font-bold text-gray-700">YOUR ORDER HAS BEEN CONFIRMED  </div>
        </div>
        
         <span className="text-gray-700 font-semibold font-sans text-xl">ORDER ID:{orderid}</span>
      
      
      </div>
      <div className=" flex justify-center mt-10 text-lg">

        <form action="">
          <div>
            <label htmlFor="">Payment Options:</label>
          </div>
         <div>
         <label>
            <input type="radio" onChange={() => setPaymentMethod('Paypal')} name="payMethod" id="" /> Paypal
          </label>
         </div>
         <div>
         <label>
            <input type="radio" name="payMethod" onChange={() => setPaymentMethod('Razorpay')} id="" /> Razorpay
          </label>
         </div>
         <div>
         <label>
            <input type="radio" name="payMethod" onChange={() => setPaymentMethod('Stripe')} id="" /> Stripe
          </label>
         </div>
        
               <div className="text-white flex items-center h-6 w-20 bg-green-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90" >
                <div onClick={payNow}>Next</div>
                <span className="text-white ml-1 cursor-pointer">
                  <MdOutlineNavigateNext />
                </span>
              </div>







        </form>
        { paymentMethod=='Paypal' && 
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons createOrder={createOrder} onApprove={onApprove}/>
        </PayPalScriptProvider>
        

         












        }












      </div>
      
    </div>
  );
}

export default ConfirmOrder;
