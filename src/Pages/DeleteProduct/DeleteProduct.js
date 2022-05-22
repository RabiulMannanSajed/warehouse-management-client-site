import React, { useEffect, useState } from 'react';

const DeleteProduct = () => {
    const [myProduct, setMyProduct] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/addedItem`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProduct(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/addedItem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myProduct.filter(myProducts => myProduct._id !== id)
                    setMyProduct(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            {
                myProduct.map(myProducts => <div key={myProducts._id}>
                    <img style={{ width: '100px' }} src={myProducts.img} alt="" />
                    <h3>{myProducts.name} <button onClick={() => handleDelete(myProducts._id)}>X</button></h3>
                </div>)
            }
        </div>
    );
};

export default DeleteProduct;