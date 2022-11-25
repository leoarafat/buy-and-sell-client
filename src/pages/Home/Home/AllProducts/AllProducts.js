import React from "react";

const AllProducts = ({ product, setBookProduct }) => {
  const {
    image_url,
    Communication,
    Display,
    Generation,
    RAM,
    Storage,
    condition,
    description,
    included,
    location,
    mobile,
    product_name,
    price,
    original_price,
    posted_time,
    posted_date
  } = product;
  console.log(product);

  return (
    <div className="card w-full glass">
      <figure>
        <img className="h-[350px]" src={image_url} alt="laptop!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p>{included}</p>
        <p>Purchase Year{product.owner.Purchase_Year}</p>
        <p>Original Price: {original_price}Tk</p>
        <p>Sell Price: {price}Tk</p>
        <p>Contact: {mobile}</p>
        <p>Seller Location: {location}</p>
        <p>{included}</p>
        <p>Posted Time: {posted_time}</p>
        <p>Date: {posted_date}</p>
        
        <div className="card-actions justify-end">
          <label
            onClick={() => setBookProduct(product)}
            htmlFor="product-modal"
            className="btn my-2"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
