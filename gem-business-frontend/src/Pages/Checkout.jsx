import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/cartContext";

const CheckoutPage = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    shippingMethod: "",
    paymentMethod: "",
  });

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const requiredFields = ["fullName", "phoneNumber", "address", "city", "postalCode", "country"];
    if (requiredFields.some((field) => !form[field])) {
      alert("Please fill all required fields");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You're not logged in. Please login to place order.");
      navigate("/login");
      return;
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
      const res = await fetch(`${backendUrl}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...form,
          items: cart,
          total,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Ordered products:", data);
        setCart([]);
        navigate("/thank-you");
      } else {
        console.log("Error Message:", data.message);
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.log(err.message);
      alert("Network error or server issue");
    }
  };

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
                Home
              </a>
              <span className="text-[#96c5a8] text-base font-medium leading-normal">/</span>
              <a className="text-[#96c5a8] text-base font-medium leading-normal" href="#">
                Cart
              </a>
              <span className="text-[#96c5a8] text-base font-medium leading-normal">/</span>
              <span className="text-white text-base font-medium leading-normal">Checkout</span>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Checkout</p>
            </div>

            {/* Shipping Progress */}
            <div className="flex flex-col gap-3 p-4 bg-[#1b3124]">
              <div className="flex gap-6 justify-between">
                <p className="text-white text-base font-medium leading-normal">Shipping</p>
              </div>
              <div className="rounded bg-[#dbe0e6]">
                <div className="h-2 rounded bg-white" style={{ width: "33%" }}></div>
              </div>
              <p className="text-[#96c5a8] text-sm font-normal leading-normal">Step 1 of 3</p>
            </div>

            {/* Shipping Information */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Shipping Information
            </h3>
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Full Name</p>
                  <input
                    placeholder="Enter your full name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    placeholder="Enter your address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="text"
                    name="address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Phone Number</p>
                  <input
                    placeholder="Enter your phone number"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Address</p>
                  <input
                    placeholder="Enter your address"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">City</p>
                  <input
                    placeholder="Enter your city"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Postal Code</p>
                  <input
                    placeholder="Enter your postal code"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">Country</p>
                  <select
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#1b3124] focus:border-none h-14 placeholder:text-[#96c5a8] p-4 text-base font-normal leading-normal"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                  </select>
                </label>
              </div>

              {/* Shipping Method */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Shipping Method
              </h3>
              <div className="flex flex-col gap-3 p-4 bg-[#1b3124]">
                <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dbe0e6] p-[15px]">
                  <input
                    type="radio"
                    className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-white checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-white"
                    name="shippingMethod"
                    value="Standard Shipping"
                    checked={form.shippingMethod === "Standard Shipping"}
                    onChange={handleChange}
                  />
                  <div className="flex grow flex-col">
                    <p className="text-white text-sm font-medium leading-normal">Standard Shipping</p>
                    <p className="text-[#96c5a8] text-sm font-normal leading-normal">Estimated delivery: 5-7 business days</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dbe0e6] p-[15px]">
                  <input
                    type="radio"
                    className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-white checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-white"
                    name="shippingMethod"
                    value="Express Shipping"
                    checked={form.shippingMethod === "Express Shipping"}
                    onChange={handleChange}
                  />
                  <div className="flex grow flex-col">
                    <p className="text-white text-sm font-medium leading-normal">Express Shipping</p>
                    <p className="text-[#96c5a8] text-sm font-normal leading-normal">Estimated delivery: 2-3 business days</p>
                  </div>
                </label>
              </div>

              {/* Payment Method */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Payment Method
              </h3>
              <div className="flex flex-col gap-3 p-4 bg-[#1b3124]">
                <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dbe0e6] p-[15px]">
                  <input
                    type="radio"
                    className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-white checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-white"
                    name="paymentMethod"
                    value="Credit Card"
                    checked={form.paymentMethod === "Credit Card"}
                    onChange={handleChange}
                  />
                  <div className="flex grow flex-col">
                    <p className="text-white text-sm font-medium leading-normal">Credit Card</p>
                  </div>
                </label>
                <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dbe0e6] p-[15px]">
                  <input
                    type="radio"
                    className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-white checked:bg-white focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-white"
                    name="paymentMethod"
                    value="PayPal"
                    checked={form.paymentMethod === "PayPal"}
                    onChange={handleChange}
                  />
                  <div className="flex grow flex-col">
                    <p className="text-white text-sm font-medium leading-normal">PayPal</p>
                  </div>
                </label>
              </div>



              {/* Order Summary */}
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Order Summary
              </h3>
              <div className="gap-4 bg-[#1b3124] px-4 py-3">
                {cart && cart.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-[#1a2b22] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#2a3b32]"
                      >
                        {item.image && (
                          <div
                            className="w-16 h-16 bg-cover bg-center rounded-md"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        )}
                        <div className="flex-1">
                          <p className="text-white text-base font-medium leading-tight line-clamp-1">{item.name}</p>
                          <p className="text-[#96c5a8] text-sm font-normal leading-snug">
                            ₹{item.price.toLocaleString()} x {item.quantity} = ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#96c5a8] text-sm font-normal text-center py-4">Your cart is empty</p>
                )}
              </div>
              <div className="p-4 bg-[#1b3124]">
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">Subtotal</p>
                  <p className="text-white text-sm font-normal leading-normal text-right">₹{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">Shipping</p>
                  <p className="text-white text-sm font-normal leading-normal text-right">Free</p>
                </div>
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">Total</p>
                  <p className="text-white text-sm font-normal leading-normal text-right">₹{total.toFixed(2)}</p>
                </div>
              </div>

              {/* Place Order Button */}
              <div className="flex px-4 py-3 bg-[#1b3124]">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#1b3124] text-white text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Place Order</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;