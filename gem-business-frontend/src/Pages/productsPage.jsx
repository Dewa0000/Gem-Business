import React from "react";
import FetchProducts from "../Hooks/useFetchProducts";

const ProductsPage = () => {
  const { products, error } = FetchProducts();

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Explore Our Collection Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Explore Our Collection
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6 p-4">
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
                        ${product.price || "N/A"}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-2">
                      <button
                        type="button"
                        onClick={() => { }}
                        className="w-full sm:w-auto min-w-[120px] cursor-pointer rounded-lg h-10 px-4 bg-[#22d760] text-white text-sm font-bold hover:bg-[#18b64a] transition-colors"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        onClick={() => { }}
                        className="w-full sm:w-auto min-w-[120px] cursor-pointer rounded-lg h-10 px-4 bg-[#22d760] text-white text-sm font-bold hover:bg-[#18b64a] transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;