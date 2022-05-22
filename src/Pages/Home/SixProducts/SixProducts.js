import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SixProducts.css';
const SixProducts = ({ spiceProduct }) => {
    const { _id, name, price, img, quantity, supplierName, description, } = spiceProduct;
    //   use navigate to inventory route
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div >
            <div className='products-Section card'>
                <img className='img-of-products card-img-top' src={img} alt="" />
                <div className='card-body'>
                    <p>Name: {name}</p>
                    <p>price:{price}</p>
                    <p>quantity:{quantity}</p>
                    <p>description:{description}</p>
                    <p>supplierName:{supplierName}</p>
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
                </div>

            </div>

        </div >
    );
};

export default SixProducts;