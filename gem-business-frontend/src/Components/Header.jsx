import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useCart } from "../Context/cartContext";
import { useState } from "react";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const token = localStorage.getItem("token");
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#366347] px-10 py-3 bg-[#122118] text-white border-2 border-red-500"> {/* Added border for visibility */}
      <div className="flex items-center gap-4">
        <div className="w-4 h-4">
          <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Luxe Gems</h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        {
          ["Home", "Gemstones", "About Us", "Shop", "Gem Recommendation", "Contact Us"].map((item) => {
            return (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium leading-normal text-white hover:text-[#96c5a8] ${
                    isActive ? "text-[#96c5a8] underline" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            );
          })
        }
        <div className="flex gap-2">
          {/* Search Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>

          

          {/* Sign In Link */}
          {!token && (
            <NavLink
              to="/login"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
              </svg>
              <span className="truncate">Sign In</span>
            </NavLink>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle navigation menu"
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-[60px] left-0 right-0 bg-[#122118] border-b border-[#366347] shadow-md md:hidden z-10">
              <div className="flex flex-col items-center gap-4 py-4">
                {["Home", "Gemstones", "About Us", "Shop", "Gem Recommendation", "Contact Us"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-sm font-medium leading-normal text-white hover:text-[#96c5a8] ${
                        isActive ? "text-[#96c5a8] underline" : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>
          )}

          {/* Cart and My Account Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white hover:bg-[#2a3b32] transition"
              aria-label={`View cart with ${totalItems} items`}
            >
              <FaShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
            {token && (
              <NavLink
                to="/my-account"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white hover:bg-[#2a3b32] transition"
                aria-label="Go to my account"
              >
                <FaUser size={20} />
              </NavLink>
            )}
          </div>

          {/* Cart and My Account Dropdown (Mobile) */}
          <div className="relative md:hidden">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white hover:bg-[#2a3b32] transition"
              aria-label="Toggle cart and account menu"
            >
              <FaUser size={20} />
            </button>
            {isProfileOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#122118] border border-[#366347] shadow-md rounded-md z-10">
                <NavLink
                  to="/cart"
                  className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#1b3124]"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <FaShoppingCart size={16} />
                  <span>Cart ({totalItems})</span>
                </NavLink>
                {token && (
                  <NavLink
                    to="/my-account"
                    className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#1b3124]"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FaUser size={16} />
                    <span>My Account</span>
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;