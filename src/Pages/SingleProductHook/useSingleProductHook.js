import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useSingleProductHook = () => {
    const { productId } = useParams();

    const [singleProductHook, setSingleProductHook] = useState([])
    useEffect(() => {
        fetch(`https://afternoon-lowlands-44113.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProductHook(data))
    }, [])
    return [singleProductHook, setSingleProductHook];
}
export default useSingleProductHook;