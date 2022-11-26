import React from "react";

import toast from "react-hot-toast";

const AddProduct = () => {
 
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const SellerName = form.SellerName.value;
    const included = form.included.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const product_name = form.product_name.value;
    const originalPrice = form.originalPrice.value;
    // const PurchaseYear = form.PurchaseYear.value;
    const category_id = form.category_id.value;
    const mobile = form.mobile.value;

    const booking = {
        SellerName,
        included,
        location,
        price,
        condition,
        product_name,
        originalPrice,
        time: new Date(),
        mobile,
        category_id
      };

      fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                
                toast.success('Booking confirmed');
                // refetch();
            }
            else{
                toast.error(data.message);
            }
        })

  };

  return (
    <div>
      <div >
        <form onSubmit={handleAdd} className="grid grid-cols-3 gap-3 mt-10">
          <input
            name="SellerName"
            type="text"
            
            placeholder="Seller Name"
            className="input w-full input-bordered"
          />
          <input
            name="included"
            type="text"
            
            placeholder="Included(Warranty)"
            className="input w-full input-bordered"
          />
          <input
            name="price"
            type="text"
            
            placeholder="Selling Price"
            className="input w-full input-bordered"
          />
          <input
            required
            name="condition"
            type="text"
            placeholder="Condition"
            className="input w-full input-bordered"
          />
          <input
            required
            name="location"
            type="text"
            placeholder="Location"
            className="input w-full input-bordered"
          />
          <input
            required
            name="product_name"
            type="text"
            placeholder="Product Name"
            className="input w-full input-bordered"
          />
          <input
            required
            name="originalPrice"
            type="text"
            placeholder="OriginalPrice"
            className="input w-full input-bordered"
          />
          <input
            required
            name="PurchaseYear"
            type="text"
            placeholder="PurchaseYear"
            className="input w-full input-bordered"
          />
          <input
            required
            name="mobile"
            type="text"
            placeholder="Phone Number"
            className="input w-full input-bordered"
          />
          <input
            required
            name="category_id"
            type="number"
            placeholder="Category_id"
            className="input w-full input-bordered"
          />
          <input
            // required
            name="image"
            type="file"
            className="input w-full input-bordered"
          />
          <br />
          
          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
