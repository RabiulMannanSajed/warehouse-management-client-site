import React, { useEffect, useState } from 'react';

const useProductsHook = () => {
    const [spiceProducts, setSpiceProducts] = useState([])
    useEffect(() => {

        //!!  Here this fetch part will come from "Backend  server"
        //!!  This time (spiceProducts.json) will not use here
        fetch('https://afternoon-lowlands-44113.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setSpiceProducts(data))
    }, [])
    return [spiceProducts, setSpiceProducts]
};

export default useProductsHook;

