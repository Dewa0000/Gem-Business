import React from "react";
import ProductCard from "../Components/productCard";

const ProductsPage = () => {


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

            {/* Product Grid Section */}
            <div className="p-4">
              {/* Category Title */}
              <p className="text-white tracking-light text-[32px] font-bold leading-tight mb-4">
                Precious Stones
              </p>

              {/* Product Grid */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
                <ProductCard category="Precious stones" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;