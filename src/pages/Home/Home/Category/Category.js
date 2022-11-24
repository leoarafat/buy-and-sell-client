import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';

const Category = () => {

    const category = useLoaderData()
    console.log(category)
    
    return (
        <div className='grid md:grid-cols-2 gap-3'>
            {
                category.map(product => <AllProducts product={product}/> )
            }
        </div>
    );
};

export default Category;