import React from "react";
import FetchProducts from "../Hooks/useFetchProducts";
import { useCart } from "../Context/cartContext";

function ProductCard(){
    const {products,error} = FetchProducts();
    const {addtoCart} = useCart();
    return (
        <>
        {Array.isArray(products) &&
                products.map((product) => (
                  <div
                    key={product._id}
                    className="flex flex-col gap-3 pb-4 bg-[#0f1a13] rounded-xl p-3 shadow-md"
                  >
                    {/* Product Image */}
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                      style={{
                        backgroundImage: `url(${product.image || "https://via.placeholder.com/220"})`,
                      }}
                    ></div>

                    {/* Product Name & Price */}
                    <div className="flex flex-col">
                      <p className="text-white text-base font-medium leading-tight">
                        {product.name}
                      </p>
                      <p className="text-[#96c5a8] text-sm font-normal">
                      ₹{product.price || "N/A"}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
                      <button
                        type="button"
                        onClick={() => addtoCart(product)}
                        className="w-full sm:w-auto min-w-[120px] cursor-pointer rounded-lg h-10 px-4 bg-[#22d760] text-white text-sm font-bold hover:bg-[#18b64a] transition-colors"
                      >
                        Add to Cart
                      </button>
                      
                    </div>
                  </div>
                ))}
        </>
    )
}

export default ProductCard;