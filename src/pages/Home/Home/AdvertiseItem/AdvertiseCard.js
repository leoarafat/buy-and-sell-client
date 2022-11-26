import React from "react";

const AdvertiseCard = ({ advertise }) => {
  console.log(advertise);
  const {
    image_url,
    included,
    location,
    mobile,
    product_name,
    price,
    original_price,
    posted_time,
    seller_name,
  } = advertise;

  return (
    <div className="card w-full glass">
      <figure>
        <img src={image_url} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>{included}</p>
        <p>{seller_name}</p>
        <p>{location}</p>
        <p>{mobile}</p>
        <p>{price}</p>
        <p>{original_price}</p>
        <p>{posted_time}</p>
        

      </div>
    </div>
  );
};

export default AdvertiseCard;
