import React from "react";
import { useCart } from "../Context/cartContext";

const CartReviewPage = () => {
  const { cart, setCart } = useCart();
  const total = cart.items.reduce((acc,item) => {return acc + item.price*item.quantity,0})
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

            {cart.length > 0 ? (
              <div className="p-4">
                <div className="grid gap-4">
                  {cart.map((item, index) => {
                    return (<article className="flex justify-between items-center border-b border-[#dde1e3] py-2" key={index}>
                      <div  className="flex items-center text-white text-base font-medium gap-4 bg-[#1b3124] px-4 min-h-[72px] py-2 justify-between">
                        {item.name}</div>
                      <div  className="flex items-center text-white text-base font-medium gap-4 bg-[#1b3124] px-4 min-h-[72px] py-2 justify-between">
                      ₹{item.price} x {item.quantity}</div>
                        <button onClick={() => removeFromCart()} className="text-red-500 text-sm font-medium hover:text-red-700">Remove</button>
                    </article>)
                  })}
                </div>
              </div>
            ) : (<div className="text-[#6a7881] text-sm font-normal leading-normal p-4">Your Cart is empty</div>)}
            

            {/* Order Summary */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Order Summary
            </h3>
            <div className="p-4 bg-[#1b3124]">
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">total</p>
                <p className="text-white text-sm font-normal leading-normal text-right">₹{total}</p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Shipping</p>
                <p className="text-white text-sm font-normal leading-normal text-right">Free</p>
              </div>
              <div className="flex justify-between gap-x-6 py-2">
                <p className="text-[#96c5a8] text-sm font-normal leading-normal">Taxes</p>
                <p className="text-white text-sm font-normal leading-normal text-right">₹50</p>
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