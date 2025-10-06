import React from "react";
import FetchProducts from "../Hooks/useFetchProducts";
import { useCart } from "../Context/cartContext";
import { useNavigate } from "react-router-dom"; // ✅ For navigation

function ProductCard({ category }) {
  const { products, error } = FetchProducts();
  const { addtoCart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize navigation hook

  // ✅ Filter products by category
  const filterProducts = Array.isArray(products)
    ? products.filter((product) => product.category === category)
    : [];

  // ✅ Handle error case (optional)
  if (error) {
    return (
      <div className="text-red-500 text-center py-4">
        Failed to load products: {error}
      </div>
    );
  }

  return (
    <>
      {Array.isArray(filterProducts) &&
        filterProducts.map((product) => (
          <div
            key={product._id}
            className="flex flex-col gap-3 pb-4 bg-[#0f1a13] rounded-xl p-3 shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            {/* ✅ Product Image — Click to View Details */}
            <div
              onClick={() => navigate(`/product/${product._id}`)} // 🔗 Navigate to details page
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${
                  product.image || "https://via.placeholder.com/220"
                })`,
              }}
            ></div>

            {/* ✅ Product Name & Price — Also Clickable */}
            <div
              onClick={() => navigate(`/products/${product._id}`)} // 🔗 Navigate to details page
              className="flex flex-col cursor-pointer"
            >
              <p className="text-white text-base font-medium leading-tight">
                {product.name}
              </p>
              <p className="text-[#96c5a8] text-sm font-normal">
                ₹{product.price || "N/A"}
              </p>
            </div>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
              <button
                type="button"
                onClick={() => addtoCart(product)} // 🛒 Add to cart stays same
                className="w-full sm:w-auto min-w-[120px] cursor-pointer rounded-lg h-10 px-4 bg-[#22d760] text-white text-sm font-bold hover:bg-[#18b64a] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductCard;
