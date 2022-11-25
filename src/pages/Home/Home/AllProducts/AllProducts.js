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
  } = product;
  console.log(product);

  return (
    <div className="card w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="h-[350px]" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-col mt-5">
          <div className="badge badge-outline my-2">RAM: {RAM}</div>
          <div className="badge badge-outline my-2">
            Generation: {Generation}
          </div>
          <div className="badge badge-outline my-2">Storage: {Storage}</div>
          <div className="badge badge-outline my-2">
            Communication: {Communication}
          </div>
         
          <div className="badge badge-outline my-2">Condition: {condition}</div>
          <div className="badge badge-outline my-2">
            Purchase Year {included}
          </div>
          <div className="badge badge-outline my-2">Location: {location}</div>
          <div className="flex flex-col">
            <div className="btn btn-xs btn-primary ">Mobile: {mobile}</div>
            
              <div className="btn btn-xs btn-primary my-1">
                Original Price: {original_price}
              </div>
              <div className="btn btn-xs btn-primary">
                Resell Price: {price}
              </div>
            
          </div>

          <div className="text-center">
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
    </div>
  );
};

export default AllProducts;
