import React from 'react';
import { Link } from 'react-router-dom';
import useProductsHook from '../../../ProductsHook/useProductsHook';
import AllProductsHook from '../AllProductsHook/AllProductsHook';
import './AllProducts.css'
const AllProducts = () => {
    const [spiceProducts, setSpiceProducts] = useProductsHook();

    return (
        <div>
            <h2 className='text-center m-3'>All Spices products</h2>
            <div className='allProducts-container'>
                {
                    spiceProducts.map(spiceProduct => <AllProductsHook
                        key={spiceProduct._id}
                        spiceProduct={spiceProduct}
                    ></AllProductsHook>)
                }

            </div>
            <Link className='  addNewProductBtn' to='/addproduct'>Add new Product</Link>

        </div>
    );
};

export default AllProducts;