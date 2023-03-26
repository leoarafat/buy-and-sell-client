import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useBookings from "../../../customHooks/useBookkngs";
import useTitle from "../../../customHooks/useTitle";

const MyOrders = () => {
  useTitle("myorders");
  const { user } = useContext(AuthContext);

  const bookingsProduct = useBookings(user?.email);
  return (
    <div>
      <h1>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {bookingsProduct &&
              bookingsProduct.map((product) => (
                <tr className="hover">
                  <th>{product.name}</th>
                  <td>{product.location}</td>
                  <td>{product.phone}</td>
                  <td>{product.price}Tk</td>
                  <td>
                    {product.price && !product.paid && (
                      <Link to={`/dashboard/payment/${product._id}`}>
                        <button className="btn btn-sm btn-success">Pay</button>
                      </Link>
                    )}
                    {product.price && product.paid && (
                      <span className="text-success">Paid Success</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
