import React from "react";

import Lottie from "lottie-react";
import Animation from "../../../Animation/Animation.json";
const BuyAndSell = () => {
  return (
    <div>
     <div>
  <div class="py-16">
    <div class="container m-auto space-y-8 px-6 lg:px-20">
      <div class="justify-center items-center gap-6 text-center lg:flex lg:text-left lg:items-center lg:gap-16">
        <div class="order-last mb-6 space-y-6 lg:mb-0 lg:w-6/12">
          <h1 class="text-4xl font-bold text-gray-800 lg:text-5xl dark:text-white">
            Buy now and benefit up to{" "}
            <span class="text-primary dark:text-sky-300">30% off</span>
          </h1>
          <p class="text-lg ">
            30% discount is running for regular visitors on our website. Use
            coupon code and avail discount.
          </p>
          <div class="flex flex-wrap gap-6">
            <a
              href="#/"
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white dark:text-dark">
                Shop now
              </span>
            </a>
            <a
              href="#/"
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span class="relative text-base font-semibold text-primary dark:text-white">
                More about
              </span>
            </a>
          </div>
        </div>
        <div class="lg:w-6/12">
          <Lottie class="w-full h-[600px]" animationData={Animation}></Lottie>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default BuyAndSell;
