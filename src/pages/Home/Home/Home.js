import React from 'react';



import Banner from '../Banner/Banner';
import DiscountPage from '../DiscountPage/DiscountPage';
import AdvertiseItem from './AdvertiseItem/AdvertiseItem';
import Carasoul from './Carasoul/Carasoul';
import ProductsCategory from './ProductsCategory/ProductsCategory';

const Home = () => {
    
    // console.log(data)
    
    return (
        <div>
            <Banner/>
            <ProductsCategory/>
            <DiscountPage/>
            <AdvertiseItem/>
            <Carasoul/>
        </div>
    );
};

export default Home;