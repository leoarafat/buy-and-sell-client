import React from "react";
import { useContext } from "react";
import AwesomeLoader from "../../../components/AwesomeLoader";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../customHooks/useTitle";
import New from "../../../New";
import BuyAndSell from "../BuyAndSell/BuyAndSell";
import Contact from "../Contact/Contact";

import AdvertiseItem from "./AdvertiseItem/AdvertiseItem";
import Carasoul from "./Carasoul/Carasoul";
import ProductsCategory from "./ProductsCategory/ProductsCategory";
import UserReview from "./userReview/UserReview";

const Home = () => {
  useTitle('home')
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <AwesomeLoader />;
  }

  return (
    <div>
      <Carasoul />
      <BuyAndSell />
      {/* <Banner /> */}
      <ProductsCategory />
      <AdvertiseItem />
      <UserReview />
      <Contact />
      {/* <New/> */}
    </div>
  );
};

export default Home;
