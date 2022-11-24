import React from "react";

const AllProducts = ({ product }) => {
  const {
    image_url,
    CPU,
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
  } = product;
  console.log(product);

  return (
    <div className="card w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="h-[350px]" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          { product_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-col mt-5">
          {/* <div className="badge badge-outline">CPU: {CPU}</div> */}
          <div className="badge badge-outline my-2">RAM: {RAM}</div>
          <div className="badge badge-outline my-2">Generation: {Generation}</div>
          <div className="badge badge-outline my-2">Storage: {Storage}</div>
          <div className="badge badge-outline my-2">Communication: {Communication}</div>
          <div className="badge badge-outline my-2">Display: {Display}</div>
          <div className="badge badge-outline my-2">Condition: {condition}</div>
          <div className="badge badge-outline my-2">Purchase Year {included}</div>
          <div className="badge badge-outline my-2">Location: {location}</div>
          <div className="">
          <div className="btn btn-xs btn-primary mr-2">Mobile: {mobile}</div>
          <div className="btn btn-xs btn-primary">Price: {price}</div>
          </div>
          <button className="btn btn-outline my-3">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
