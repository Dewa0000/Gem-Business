import { useState,useEffect } from "react";

const FetchProducts =  () => {
     const [products,setProducts] = useState([]);
     const [error, setError] = useState("")
    try{
     async function fetchProducts(){
            const res = await fetch("https://gem-business.onrender.com/products");
            const data = await res.json();
            setProducts(data)
        }
        fetchProducts();
    }   catch(err){
       setError(err.message)
    } 
    return {products,error}
}

export default FetchProducts;