import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductsHook from '../../ProductsHook/useProductsHook';
import useSingleProductHook from '../SingleProductHook/useSingleProductHook';

const ProductDetail = () => {
    const { productId } = useParams();
    const [singleProductHook, setSingleProductHook] = useSingleProductHook()
    const { name, img, price, quantity, description, supplierName } = singleProductHook;
    // const [product, setProduct] = useState({});
    // const { quantity, name } = product;

    // useEffect(() => {
    //     const url = `http://localhost:5000/product/${productId}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])


    // add to stock input field handle
    const handleAddTOStock = event => {
        event.preventDefault();

        // send data to the server
        const url = `http://localhost:5000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })



    }
    // deliver button handle
    const handleDeliverBtn = async () => {
        console.log('Delivary btn clicked');
        const url = `http://localhost:5000/product/${productId}`;

        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Your product successfully delivered")
            })


    }
    return (
        <div>
            <h2>this is our single product detail :{name}</h2>

            <div className='w-50 mx-auto card'>
                <img src={img} alt="" />
                <div className='card-body'>
                    <p>Name: {name}</p>
                    <p>price:{price}</p>
                    <p>quantity:{quantity}</p>
                    {/* <input className='mb-2 form-control-plaintext' value={quantity} /> */}

                    <p>description:{description}</p>
                    <p>supplierName:{supplierName}</p>
                    <button onClick={handleDeliverBtn}>Delivered</button>
                </div>
                <form onSubmit={handleAddTOStock}>
                    <input className='mb-2 w-50 ' placeholder='Quantity' name='number' type="number" />
                    <input type="submit" value="Add to stock" />
                </form>

            </div>
        </div>
    );
};

export default ProductDetail;