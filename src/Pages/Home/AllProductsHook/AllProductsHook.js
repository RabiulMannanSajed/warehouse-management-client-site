import React from 'react';
import { Link } from 'react-router-dom';
import useProductsHook from '../../../ProductsHook/useProductsHook';
import AllProducts from '../AllProducts/AllProducts';
import './AllproductsHook.css';
const AllProductsHook = ({ spiceProduct }) => {

    const { id, name, price, img, quantity, supplierName, description } = spiceProduct;

    return (
        <div>
            <div className='products-Section card'>
                <img className='img-of-products card-img-top' src={img} alt="" />
                <div className='card-body'>
                    <p>Name: {name}</p>
                    <p>price:{price}</p>
                    <p>quantity:{quantity}</p>
                    <p>description:{description}</p>
                    <p>supplierName:{supplierName}</p>
                </div>

            </div>

        </div>
    );
};

export default AllProductsHook;