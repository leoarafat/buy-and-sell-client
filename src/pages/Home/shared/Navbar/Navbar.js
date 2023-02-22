import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import NavAnim from "../../../../Animation/NavAnim.json";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", !dark);
  };

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem("dark-mode"));
    setDark(localDark);
  }, []);
  useEffect(() => {
    if (dark) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "mytheme");
    }
  }, [dark]);

  const navbarItems = (
    <>
      <div className="flex items-center">
        <div className="h-8 w-8" onClick={handleDark}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
      <li>
        <Link className="font-semibold" to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/blog">
          Blog
        </Link>
      </li>
      <>
        {user?.uid ? (
          <li>
            <button
              className="font-semibold  rounded-sm "
              onClick={handleLogOut}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link className="font-semibold bg-yellow-400" to="/login">
              Login
            </Link>
          </li>
        )}
      </>
    </>
  );

  return (
    <div className="navbar flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
        <div className="flex">
          <Lottie
            className="w-full h-[70px] hidden lg:block"
            animationData={NavAnim}
          ></Lottie>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Buy And Sell Used Laptop
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navbarItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
