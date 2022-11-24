import React from 'react';

import Banner from '../Banner/Banner';
import Carasoul from './Carasoul/Carasoul';
import ProductsCategory from './ProductsCategory/ProductsCategory';

const Home = () => {
    
    // console.log(data)
    
    return (
        <div>
            <Banner/>
            <ProductsCategory/>
            <Carasoul/>
        </div>
    );
};

export default Home;