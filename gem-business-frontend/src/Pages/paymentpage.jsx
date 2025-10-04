import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice, orderId } = location.state || {};

  const upiId = "yourupiid@okicici"; // replace with your actual UPI ID
  const upiUrl = `upi://pay?pa=${upiId}&pn=Your%20Business%20Name&am=${totalPrice}&cu=INR&tn=Order%20${orderId}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#122118] text-white">
      <h2 className="text-2xl font-bold mb-6">Complete Your Payment</h2>
      
      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`} 
        alt="UPI QR Code" 
        className="mb-4 border-4 border-white rounded-lg"
      />

      <p className="text-[#96c5a8] text-lg mb-6">
        Scan this QR to pay ₹{totalPrice}
      </p>

      <button
        onClick={() => navigate("/thank-you")}
        className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-bold"
      >
        I Have Paid
      </button>
    </div>
  );
};

export default PaymentPage;
