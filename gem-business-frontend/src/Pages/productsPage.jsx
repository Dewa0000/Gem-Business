import React from "react";
import FetchProducts from "../Hooks/useFetchProducts";

const ProductsPage = () => {
    const [products,error] = FetchProducts();
    return (
    <>
         <div>
            {products.map((product) => {
                return (
                    <div>
                        {product.name}
                    </div>
                )
            })}
            </div>   
    </>
    )
}

export default ProductsPage;