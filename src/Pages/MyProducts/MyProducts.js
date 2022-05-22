import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [addedProduct, setAddedProduct] = useState([])

    useEffect(() => {

        const myProduct = async () => {

            const url = `https://afternoon-lowlands-44113.herokuapp.com/addedItem`;
            const { data } = await axios.get(url);
            setAddedProduct(data);
        }
        myProduct();
    }, [])
    return (
        <div className='w-50 mx-auto card mt-5'>
            {
                addedProduct.map(addedProducts => <div key={addedProducts._id}>
                    <img className='img-of-products card-img-top' src={addedProducts.img} alt="" />
                    <p>Name: {addedProducts.name}</p>
                    <p>price:{addedProducts.price}</p>
                    <p>quantity:{addedProducts.quantity}</p>
                    <p>description:{addedProducts.description}</p>
                    <p>supplierName:{addedProducts.supplierName}</p>
                </div>)
            }
        </div>
    );
};

export default MyProducts;