import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import AddProduct from "../AllProducts/AddProduct/AddProduct";
import AllProducts from "../AllProducts/AllProducts";
import BookingProduct from "../AllProducts/BookingProduct/BookingProduct";

const Category = () => {
  const { user } = useContext(AuthContext);
  const category = useLoaderData();
  const [bookProduct, setBookProduct] = useState(null);
  //   console.log(category);

  return (
    <section>
      <>
        <div className="grid md:grid-cols-2 gap-3">
          {category.map((product) => (
            <AllProducts
              key={product._id}
              setBookProduct={setBookProduct}
              product={product}
            />
          ))}
        </div>
        {user?.role === "seller" && (
          <div className="w-[600px] mx-auto">
            <AddProduct />
          </div>
        )}
      </>
      {bookProduct && (
        <BookingProduct
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        />
      )}
    </section>
  );
};

export default Category;
