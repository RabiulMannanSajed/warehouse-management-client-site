import React, { useEffect, useState } from 'react';

const useProductsHook = () => {
    const [spiceProducts, setSpiceProducts] = useState([])
    useEffect(() => {

        //!!  Here this fetch part will come from "Backend  server"
        //!!  This time (spiceProducts.json) will not use here
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setSpiceProducts(data))
    }, [])
    return [spiceProducts, setSpiceProducts]
};

export default useProductsHook;

