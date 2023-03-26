import React from "react";

import { Link } from "react-router-dom";

const AdvertiseCard = ({ advertise, handleDelete }) => {
  // console.log(advertise);
  const {
    _id,
    image_url,
    included,
    location,

    product_name,
    price,
    original_price,
    description,
    seller_name,
    time,
  } = advertise;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden">
    <div className="relative">
      <img
        src={image_url}
        alt=""
        className="w-full h-64 object-cover object-center transition duration-500 ease-in-out transform hover:scale-105"
      />
      <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-tr-md">
        <span className="text-xs font-semibold">{new Date(time).toLocaleString()}</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 capitalize">{product_name}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex items-center mb-2">
        <img src={''} alt="" className="w-8 h-8 rounded-full mr-2" />
        <Link href="#" className="text-sm font-medium hover:text-primary">{seller_name}</Link>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Included:</p>
          <p className="text-sm text-gray-700">{included}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Price:</p>
          <p className="text-sm text-gray-700">${price}</p>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
          onClick={() => handleDelete(_id)}
        >
          Delete Item
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default AdvertiseCard;
