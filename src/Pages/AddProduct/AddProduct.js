import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddProduct = () => {

    // findout the user name
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/addedItem`;
        // sanding data of add product
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2> please add a service</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' value={user.displayName} readOnly />
                <input className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add product' />
            </form>
        </div>
    );
};

export default AddProduct;