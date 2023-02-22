import React from "react";
import { useContext } from "react";
import AwesomeLoader from "../../../components/AwesomeLoader";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../customHooks/useTitle";
import Blogs from "../Blogs/Blogs";
import BuyAndSell from "../BuyAndSell/BuyAndSell";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/Pricing";
import AdvertiseItem from "./AdvertiseItem/AdvertiseItem";
import Carasoul from "./Carasoul/Carasoul";
import ProductsCategory from "./ProductsCategory/ProductsCategory";
import UserReview from "./userReview/UserReview";

const Home = () => {
  useTitle("home");
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <AwesomeLoader />;
  }

  return (
    <div>
      <Carasoul />
      <BuyAndSell />
      <ProductsCategory />
      <AdvertiseItem />
      <Pricing />
      <Blogs />
      <UserReview />
      <Contact />
    </div>
  );
};

export default Home;
