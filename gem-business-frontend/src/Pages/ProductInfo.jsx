import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchProducts from "../Hooks/useFetchProducts";

function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading, error } = useFetchProducts(id); // Fetch single product
  const [quantity, setQuantity] = useState(1);
  const product = products[0]; // Access the first (and only) product

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${product.name} to cart`);
    navigate("/cart");
  };

  if (loading) return <div className="text-center text-[#96c5a8] font-medium">Loading product...</div>;
  if (error) return <div className="text-center text-red-400 text-sm italic">{error}</div>;
  if (!product) return <div className="text-center text-red-300 text-sm italic">Product not found.</div>;

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[800px] md:max-w-[1000px] w-full flex-1">
            <div className="flex justify-between items-center gap-4 p-6 bg-[#1b3124]/80 rounded-xl shadow-lg mb-6">
              <h1 className="text-[#96c5a8] text-4xl font-extrabold leading-tight tracking-wide">
                Product Details
              </h1>
              <button
                onClick={() => navigate(-1)}
                className="bg-[#96c5a8] text-white px-4 py-2 rounded hover:bg-[#a0d1b9] transition-colors"
              >
                Back
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md mb-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-1/3 h-auto object-cover rounded-lg border border-[#366347]/50"
                />
                <div className="flex-1">
                  <h2 className="text-[#96c5a8] text-2xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-[#c5dceb] text-lg font-medium mb-4">
                    ${product.price}
                  </p>
                  <p className="text-white text-base mb-4">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="text-white text-base mb-4">
                    <strong>Description:</strong> {product.description}
                  </p>
                  <p className="text-white text-base mb-4">
                    <strong>Created At:</strong>{" "}
                    {new Date(product.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-white text-base mb-4">
                    <strong>Updated At:</strong>{" "}
                    {new Date(product.updatedAt).toLocaleDateString()}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <label className="text-[#96c5a8] text-sm font-medium">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                      className="p-2 w-20 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]"
                    />
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="bg-[#96c5a8] text-white px-6 py-2 rounded hover:bg-[#a0d1b9] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;