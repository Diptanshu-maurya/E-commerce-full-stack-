import React from "react";
import javaImage from "../../images/java_img.png";
import { FaCircleCheck } from "react-icons/fa6";
import { ImSpinner } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [orderItem, setOrderItem] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem("customer_id");

    function customerOrder() {
      axios
        .get(baseUrl + `customer/${user_id}/orderitems/`)
        .then(function (response) {
          setOrderItem(response.data);
          //console.log(response.data)

          //  console.log(response.data[0].product.title)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    customerOrder();
  }, []);

  return (
    <div>
      <div className="flex justify-evenly m-10">
        <div className="w-1/5 h-52 border-[0.5px] rounded-md ">
          <Sidebar></Sidebar>
        </div>
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
                <th class="py-2 px-4 border border-gray-300 bg-gray-200">
                  Status
                </th>
                <th class="py-2 px-4 border border-gray-300 bg-gray-200">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orderItem.map((item, index) => (
                <tr key={index}>
                  <td class="py-12 px-4 border border-gray-300">{index + 1}</td>
                  <td class="py-4 px-4 border border-gray-300">
                    <div className="w-36 h-24">
                      {" "}
                      <img src={javaImage} alt="" />
                    </div>
                    <div>
                      {" "}
                      <span>{item.product.title}</span>
                    </div>
                  </td>
                  <td class="py-12 px-4 border border-gray-300">
                    <span>Rs {item.product.price}</span>
                  </td>
                  <td class="py-4  px-4 border border-gray-300">
                    <div className="flex items-center text-green-700 justify-center">
                      {" "}
                      <span>
                        <FaCircleCheck />
                      </span>{" "}
                      <span>Completed</span>
                    </div>
                  </td>
                  <td class="py-12 px-4 border border-gray-300 ">
                    <div className="text-white flex items-center h-8 w-24 bg-blue-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90">
                      <div>Download</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
