import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AwesomeLoader from "../../../../components/AwesomeLoader";


const ProductsCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://buy-and-sell-server.vercel.app/category", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <AwesomeLoader />;
  }
  return (
    <div className="w-full mx-auto text-center p-3 my-3 ">
      {/* <h4>All Category: {categories.length}</h4> */}
      <button className="relative bg-purple-400 px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
        ALl Products Category {categories.length}
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
          New
        </span>
      </button>
      <div className="flex justify-around items-center">
        {categories?.map((category) => (
          <div key={category._id}>
            <ul className="menu rounded-box my-1">
              <li className="hover-bordered">
                <Link to={`/category/${category.c_id}`}>
                  <img className="w-[300px]" src={category.logo} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductsCategory;
