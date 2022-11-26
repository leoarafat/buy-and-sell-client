import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../customHooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [LogUser, setLogUser] = useState([]);
console.log(LogUser)

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        data.map((dt) => setLogUser(dt));
      });
  }, []);

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
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>

            {LogUser?.role === "seller" && (
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
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
