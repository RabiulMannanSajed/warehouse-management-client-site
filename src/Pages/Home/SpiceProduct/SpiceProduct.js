import React from 'react';

const SpiceProduct = ({ spiceProduct }) => {
    const { name, price, img, quantity, supplierName, description, } = spiceProduct;
    return (
        <div>
            <h2> we show here it in home page only 6 product </h2>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>price:{price}</p>
            <p>quantity:{quantity}</p>
            <p>description</p>
            <p>description:{description}</p>
            <p>supplierName:{supplierName}</p>
        </div>
    );
};

export default SpiceProduct;