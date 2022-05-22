import React, { useEffect, useState } from 'react';
import SpiceProduct from '../SpiceProduct/SpiceProduct';

const SpiceProducts = () => {
    const [spiceProducts, setSpiceProducts] = useState([])
    console.log(spiceProducts);
    useEffect(() => {
        fetch('spiceProducts.json')
            .then(res => res.json())
            .then(data => setSpiceProducts(data))
    }, [])
    return (
        <div>
            <h2>All SpiceProducts here more than : {spiceProducts.length}</h2>
            <p>name:{spiceProducts.name}</p>

            {
                spiceProducts.map(spiceProduct => <SpiceProduct
                    key={spiceProduct.id}
                    spiceProduct={spiceProduct}
                >
                </SpiceProduct>)
            }
        </div>
    );
};

export default SpiceProducts;