import { Link } from "react-router-dom";

const Header = () => {
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
        <div className="flex items-center gap-9">
          <Link className="text-sm font-medium leading-normal" to="/">
            Home
          </Link>
          <Link className="text-sm font-medium leading-normal" to="/products">
            Gemstones
          </Link>
          <Link className="text-sm font-medium leading-normal" to="/about-us">
            About Us
          </Link>
          <Link className="text-sm font-medium leading-normal" to="/products">
            Shop
          </Link>
          <Link className="text-sm font-medium leading-normal" to="/gem-recommendation">
            Gem Recommendation
          </Link>
          <Link className="text-sm font-medium leading-normal" to="/contact-us">
            Contact Us
          </Link>
        </div>

        <div className="flex gap-2">
          {/* Search Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </button>

          {/* User Button */}
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
          </button>

          {/* Sign In Link */}
          <Link to="/login" className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1b3124] text-white gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
            <span className="truncate">Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;