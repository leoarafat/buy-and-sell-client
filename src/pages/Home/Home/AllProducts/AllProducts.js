import React, { useContext, useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import useAdmin from "../../../../customHooks/useAdmin";
import { AuthContext } from "../../../../context/AuthProvider";
const AllProducts = ({ product, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  
  const [isBuyer] = useAdmin(user?.email);
  const {
    image_url,
    included,
    location,
    mobile,
    product_name,
    price,
    original_price,
    posted_time,
    posted_date,
    PurchaseYear,
    time,
    seller_name,
  } = product;
  // console.log(product);
  const [LogUser, setLogUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        data.map((dt) => setLogUser(dt));
      });
  }, []);

  // const handleAdvertise = (product)=>{
  //   fetch('http://localhost:5000/advertise',{
  //     method: "POST",
  //     headers:{
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(product)
  //   })
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data)
  //     if(data.acknowledged){
  //       toast.success('advertise successful')
  //     }

  //   })
  // }

  return (
    <>
      <div className="card w-full glass">
        <figure>
          <img className="h-[350px]" src={image_url} alt="laptop!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product_name}</h2>

          <div className="flex">
            <h3 className="text-lg font-semibold mr-1">
              Seller Name: {seller_name}
            </h3>
            {LogUser?.status === "verified" && (
              <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            )}
          </div>

          <p className="text-lg font-semibold mr-1">Included: {included}</p>
          <p className="text-lg font-semibold">Purchase Year: {PurchaseYear}</p>
          <p className="text-lg font-semibold">
            Original Price: {original_price}Tk
          </p>
          <p className="text-lg font-semibold">Sell Price: {price}Tk</p>
          <p className="text-lg font-semibold">Contact: {mobile}</p>
          <p className="text-lg font-semibold">Seller Location: {location}</p>
          {!time && (
            <p className="text-lg font-semibold">Posted Time: {posted_time}</p>
          )}
          {!time && (
            <p className="text-lg font-semibold">Date: {posted_date}</p>
          )}
          {time && (
            <p className="text-lg font-semibold">
              Posted Time: {new Date(time).toLocaleString()}
            </p>
          )}
          <div className="card-actions justify-end">
            {isBuyer && (
              <label
                onClick={() => setBookProduct(product)}
                htmlFor="product-modal"
                className="btn my-2"
              >
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
