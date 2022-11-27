import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../../components/Loader";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../customHooks/useAdmin";
import useBuyer from "../../customHooks/useBuyer";
import useSeller from "../../customHooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  if (isAdminLoading) {
    return <Loader />;
  }
  if (isSellerLoading) {
    return <Loader />;
  }
  if (isBuyerLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-purple-200 md:bg-white">
            {isBuyer && (
              <li>
                <Link to="/dashboard/myOrder">My Orders</Link>
              </li>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myProducts">My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allUser">All users</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
