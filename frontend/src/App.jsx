import React from "react";

import Header from "./Components/Header";
import Home from "./Components/Home";

import Footer from "./Components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Category from "./Components/Category";
import CategotyProduct from "./Components/CategotyProduct";
import AllProducts from "./Components/AllProducts";
import ProductDetail from "./Components/ProductDetail";
import Checkout from "./Components/Checkout";
import Register from "./Components/Customer/Register";
import Login from "./Components/Customer/Login";
import Dashboard from "./Components/Customer/Dashboard";
import Orders from "./Components/Customer/Orders";
import OrderSuccess from "./Components/OrderSuccess";
import OrderFailure from "./Components/OrderFailure";
import Wishlist from "./Components/Customer/Wishlist";
import Address from "./Components/Customer/Address";
import TagProduct from "./Components/TagProduct";
import Logout from "./Components/Customer/Logout";
import { CartContext } from "./Components/Context";
import { useState } from "react";
import MyCart from "./Components/Customer/MyCart";
import ConfirmOrder from "./Components/Customer/ConfirmOrder";
import Profile from "./Components/Customer/Profile";

const checkCart=localStorage.getItem('cartData');


function App() {
  
    const [cartData,setCartData]=useState(JSON.parse(checkCart));
  
  
  
  
 
  return (
    <div>
      <BrowserRouter>
      <CartContext.Provider value={{cartData,setCartData}}>
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
        <Route path='/confirm-order' element={<ConfirmOrder/>}/>

        <Route path='/category/:category_slug/:category_id' element={<CategotyProduct/>}/>
        <Route path='/products/:tag' element={<TagProduct/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
        <Route path='/Customer/register' element={<Register/>}/>
        <Route path='/Customer/login' element={<Login/>}/>
        <Route path='/Customer/logout' element={<Logout/>}/>
        <Route path='/Customer/profile' element={<Profile/>}/>
        <Route path='/Customer/dashboard' element={<Dashboard/>}/>
        <Route path='/Customer/orders' element={<Orders/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order/success' element={<OrderSuccess/>}/>
        <Route path='/order/failure' element={<OrderFailure/>}/>
        <Route path='/Customer/orders' element={<Orders/>}/>
        <Route path='/Customer/wishlist' element={<Wishlist/>}/>
        <Route path='/customer/addresses' element={<Address/>}/>
       </Routes>

      
      <Footer></Footer>
      </CartContext.Provider>
      </BrowserRouter>






    </div>
  );
}

export default App;
