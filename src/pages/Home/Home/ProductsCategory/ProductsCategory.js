import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsCategory = () => {
    const [categories, setCategories] = useState([]);
console.log(categories)

    useEffect( () =>{
        fetch('http://localhost:5000/category')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
             <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category._id}>
                        <Link to={`/category/${category.c_id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default ProductsCategory;