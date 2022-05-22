import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useSingleProductHook = () => {
    const { productId } = useParams();

    const [singleProductHook, setSingleProductHook] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProductHook(data))
    }, [])
    return [singleProductHook, setSingleProductHook];
}
export default useSingleProductHook;