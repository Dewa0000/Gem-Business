import React from "react";

const CartReviewPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Breadcrumb and Title */}
            <div className="flex flex-wrap gap-2 p-4">
              <a className="text-[#96c5a8] text-base font-medium leading-normal" href="#">
                Shopping Bag
              </a>
              <span className="text-[#96c5a8] text-base font-medium leading-normal">/</span>
              <span className="text-white text-base font-medium leading-normal">Review Items</span>
            </div>
            <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Review Items
            </h1>

            {/* Item 1 */}
            <div className="flex items-center gap-4 bg-[#1b3124] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAEXGNma_DOPfTMstM_bEq7Sw_tXd4KsyIfAOrI_Z7BxrSUkxi2b1_pwqSCyLvw0pvowi8VwCEV14k95niBQrj0rEq0C8H36ellu-KKh9AqQHqTrdPiGlZuHDb-8xDAyCQtjP2CquHeLKthzxY0GeJ5J-B4bF3pYO2OMHf-2BAqERY_J47zel_4KkaPgIh01iuJnfjwHce3AU38RyttHwhOEtvf0HCcFURuQ_5VbqX0771E4h_VRbZ1NhTPLIwTMA37t6Ry97ygAQ")`,
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">Sapphire Pendant</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal line-clamp-2">Quantity: 1</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-white text-base font-normal leading-normal">$250</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 bg-[#1b3124] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIzhPk-8q1DY07LRQ9SFj0TxjIwUB2xmmF-bKnnygc5zpEUdevGY2sdO_Kt38J-hdvKGWuO9wCzN1LN636HbluE0xUFFvq8BV43a1B0gRYWjGnsojCxqDed1K2Zd1on_qEol2A9tH6cHD-QowvWf1GSZQKCzt1ip9s_IN3_OdWZFV0oFtVDwdIS3dQiLO3WJEch240Qj5pE77aDEQmpz_cWcqqz6i_DdmBp4pyzxLftP5DL6H90aG3C_zeuv0w3btYG0DVYBYFjrY")`,
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">Diamond Stud Earrings</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal line-clamp-2">Quantity: 2</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-white text-base font-normal leading-normal">$400</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 bg-[#1b3124] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIMMwPr4U4skTj_sT_CRAcV7_e4khNzswm9WpmPEBQN6MId8DgrFUX4stpqTTBkRB_BqHrOLXxOQAoqk8dIa4uZrJ2D-aA5G6soLRrIGDrtsMDlx0-4WUvuGoaYCrXDCrV-KpZpgEwBXua_U-308BRKcf0nJlMbIuQf-oRf6QoXV6We0bc89_NQVcDW8Oo4RDNrXTKqnB0jGZr5iwhhAquiyrPSe_CCUoMGH5hPhc_wZd7TKAErhyJEIxcHepQK9qvpbGWU4O-WdA")`,
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">Ruby Ring</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal line-clamp-2">Quantity: 1</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-white text-base font-normal leading-normal">$350</p>
              </div>
            </div>

            {/* Order Summary */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Order Summary
            </h3>
            <div className="p-4 bg-[#1b3124]">
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Subtotal</p>
                <p className="text-white text-sm font-normal leading-normal text-right">$1000</p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Shipping</p>
                <p className="text-white text-sm font-normal leading-normal text-right">Free</p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Taxes</p>
                <p className="text-white text-sm font-normal leading-normal text-right">$50</p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Total</p>
                <p className="text-white text-sm font-normal leading-normal text-right">$1050</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between bg-[#1b3124]">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-2.5 bg-[#1b3124] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Continue Shopping</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-2.5 bg-[#1b3124] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Proceed to Checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartReviewPage;