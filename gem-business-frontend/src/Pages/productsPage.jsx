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
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {Array.isArray(products) &&
                products.map((product) => (
                  <div key={product._id} className="flex flex-col gap-3 pb-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                      style={{
                        backgroundImage: `url(${product.image || "https://via.placeholder.com/158"})`,
                      }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">{product.name}</p>
                      <p className="text-[#96c5a8] text-sm font-normal leading-normal">
                        ${product.price || "N/A"}
                      </p>
                    </div>
                    <div className="flex gap-2 px-4">
                      <button
                        type="submit"
                        onSubmit={() => {}}
                        className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Add to Cart</span>
                      </button>
                      <button
                        type="submit"
                        onSubmit={() => {}}
                        className="flex-1 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em]"
                      >
                        <span className="truncate">Buy Now</span>
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