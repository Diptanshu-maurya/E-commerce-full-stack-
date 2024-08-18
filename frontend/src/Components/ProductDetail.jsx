import React from "react";
import javaImage from "../images/java_img.png";
import jiraiya from "../images/jiraiya.jpg";
import { IoBagAdd } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Carousel from "./Carousel";
import SingleProduct from "./SingleProduct";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarousalForProductDetail from "./CarousalForProductDatail";
import RelatedProduct from "./RelatedProduct";
import { UserContext,CartContext } from "./Context";
import { useContext } from "react";

function ProductDetail() {
  const images = [javaImage, jiraiya, javaImage, jiraiya, jiraiya];
  const baseUrl = "http://127.0.0.1:8000/api";
  const { product_slug, product_id } = useParams();
  const [productImgs, setProductImgs] = useState([]);
  const [productData, setproductData] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setrelatedProducts] = useState([]);
  const [cartButtonStatus,setCartButtonStatus]=useState(false)
  const {cartData,setCartData}=useContext(CartContext)

  const product = {
    title: "java",
    price: "123",
  };

  const fetchData = async (baseurl) => {
    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const result = await response.json();

      setproductData(result);
      setProductImgs(result.product_imgs);
      setProductTags(result.tag_list);
      var previousCart = localStorage.getItem('cartData');
      var cartJson = JSON.parse(previousCart);
      if (cartJson && cartJson.some(cart => cart.product.id === result.id)) {
        setCartButtonStatus(true);
      }
    } catch {
      console.log("something went wrong");
    }
  };
  const fetchRelatedData = async (baseurl) => {
    

    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const result = await response.json();

      setrelatedProducts(result.data);
      
    } catch {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    fetchData(baseUrl + "/Product/" + product_id);
    fetchRelatedData(baseUrl + "/Related-products/" + product_id);
   // localStorage.removeItem('cartData');



    
  }, []);

  const tag_links = [];
  for (let i = 0; i < productTags.length; i++) {
    let tag = productTags[i].trim();
    tag_links.push(
      <Link
        to={`/products/${tag}`}
        className="h-[30px] w-24 rounded-lg flex items-center justify-center text-white bg-slate-800 cursor-pointer"
      >
        
        #{tag}
      </Link>
    );
  }

  const cartAddButtonHandler=()=>{
    
    var previousCart=localStorage.getItem('cartData');
    console.log(previousCart)
    
    var cartJson=JSON.parse(previousCart)
    
    const cartData=
      {
        'product':{
          'id':productData.id,
          'title':productData.title
        },
        'user':{
          'id':1
        }
      }
      if(cartJson!=null){
        cartJson.push(cartData);
        
        var cartString=JSON.stringify(cartJson);
        setCartData(cartJson);
      }else{
        var newCartList=[];
        newCartList.push(cartData);
        console.log(newCartList);
        var cartString=JSON.stringify(newCartList)
        
      }
    localStorage.setItem('cartData',cartString);
    setCartButtonStatus(true)

  }
  const cartRemoveButtonHandler = () => {
    // Retrieve the previous cart data from local storage
    var previousCart = localStorage.getItem('cartData');

    // Parse the retrieved JSON string into a JavaScript object
    var cartJson = JSON.parse(previousCart);

    // Filter out the item that matches the productData.id
    var updatedCartJson = cartJson.filter(cart => cart.product.id !== productData.id);

    // Convert the updated cart object back to a JSON string
    var cartString = JSON.stringify(updatedCartJson);

    // Store the updated cart back to local storage
    localStorage.setItem('cartData', cartString);

    // Update the state and button status
    setCartButtonStatus(false);
    setCartData(updatedCartJson);
};


  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className=" flex container  w-10/12">
          <div className="h-[250px] w-[400px]  flex items-center justify-between rounded-lg ">
            <CarousalForProductDetail
              productImgs={productImgs}
            ></CarousalForProductDetail>
          </div>
          <div className="w-7/12">
            <div className="font-bold p-2 text-xl">{productData.title}</div>
            <div className="p-2">
              <p>{productData.detail}</p>
            </div>
            <div className="font-bold p-2 text-lg">
              Price:Rs {productData.price}
            </div>
            <div className="flex ml-2 gap-4">
              <Link to={productData.demo_url}>
              <div className="flex items-center h-8 w-28 bg-black text-white rounded-lg p-1 justify-center cursor-pointer hover:opacity-90">
                <div className>Demo </div>
                <span className="text-white ml-1">
                  <IoBagAdd />
                </span>
              </div>
              
              </Link>

              {
                !cartButtonStatus &&
                <div className="text-white flex items-center h-8 w-28 bg-blue-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90" onClick={cartAddButtonHandler}>
                <div className="">Add to cart</div>
                <span className="text-white ml-1 cursor-pointer">
                  <FaCartPlus />
                </span>
              </div>
              }
              {
                cartButtonStatus &&
                <div className="text-white flex items-center h-8 w-28 bg-yellow-500 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90" onClick={cartRemoveButtonHandler}>
                <div className="">Remove</div>
                <span className="text-white ml-1 cursor-pointer">
                  <FaCartPlus />
                </span>
              </div>
              }

              <div className="text-white flex items-center h-8 w-28 bg-green-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90">
                <div className>Buy Now </div>
                <span className="text-white ml-1">
                  <IoBagAdd />
                </span>
              </div>
              <div className="text-white flex items-center h-8 w-28 bg-red-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90">
                <div className="">Wishlist</div>
                <span className="text-white ml-1">
                  
                  <FaHeart />
                </span>
              </div>
            </div>
            <div className="p-2">
              <div className="font-bold  text-lg flex ">Tags </div>
              <div className="flex gap-2 ">{tag_links}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="ml-32 mt-10 flex justify-center items-center font-semibold text-2xl">
          Related Product
        </div>
        <div className="ml-32 mt-10 flex justify-center items-center ">
          {relatedProducts.length>0 && <RelatedProduct relatedProducts={relatedProducts}></RelatedProduct>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
