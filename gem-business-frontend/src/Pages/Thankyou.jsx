import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-20">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center">
            {/* Thank You Message */}
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-white text-[40px] font-bold leading-tight tracking-[-0.02em]">
                Thank You for Your Order!
              </h1>
              <p className="text-[#96c5a8] text-lg font-medium leading-relaxed max-w-[600px]">
                Your order has been successfully placed. We appreciate your purchase and will notify you with tracking details soon. Happy shopping!
              </p>
              <div className="w-24 h-24 bg-[#1b3124] rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-[#96c5a8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Return Button */}
            <div className="mt-10">
              <button
                onClick={handleReturnHome}
                className="flex min-w-[120px] max-w-[300px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#1b3124] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#2a3b32] transition-colors duration-200"
              >
                <span className="truncate">Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;