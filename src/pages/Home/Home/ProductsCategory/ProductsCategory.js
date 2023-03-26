import React from "react";
import { Link } from "react-router-dom";
import AwesomeLoader from "../../../../components/AwesomeLoader";
import useCategories from "../../../../customHooks/useCategories";

const ProductsCategory = () => {
  const [categories, isLoading] = useCategories();
  if (isLoading) {
    return <AwesomeLoader />;
  }
  return (
    <div className="w-full mx-auto text-center p-3 my-3">
      <button className="relative bg-purple-400 px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
        Products Categories ({categories.length})
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
          New
        </span>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 justify-items-center">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <Link to={`/category/${category.c_id}`}>
              <img
                className="w-full object-cover"
                src={category.logo}
                alt={category.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
