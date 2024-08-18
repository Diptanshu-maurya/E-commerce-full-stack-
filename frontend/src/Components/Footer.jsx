import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <hr className='mt-10' />

<div className="h-32 w-10/12 my-4 ml-32 flex  justify-between">
   <div>JavaScripts @ 2022 Company.inc</div>
   <div className="flex justify-evenly text-3xl">
   <span className="p-2"><FaFacebook /></span>
   <span className="p-2"><FaInstagram /></span>
  <span className="p-2"> <FaTwitter /></span>
    
  </div>
</div>
    </div>
  )
}

export default Footer
