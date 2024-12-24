import React, { useState } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu visibility

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm border-b hidden md:block">
        <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] flex items-center justify-between py-2">
          <div className="flex items-center">
           
            <span className="flex gap-2 items-center border-r-2 pr-4">
              <span className="text-blue-600">
                <svg viewBox="0 0 320 512" className="h-4 w-4 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </span>
              <span>7500k Followers</span>
            </span>
            <span className="flex gap-2 items-center ml-4">
              <span className="text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 stroke-current"
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>+ (402) 763 282 46</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language, currency, and settings dropdown */}
            <select className="bg-transparent text-gray-600 border-r-2 pr-4 outline-none">
              <option>English</option>
            </select>
            <select className="bg-transparent text-gray-600 border-r-2 pr-4 outline-none">
              <option>$USD</option>
            </select>
            <select className="bg-transparent text-gray-600 outline-none">
              <option>Setting</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b">
        <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem]">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              {/* Logo and navigation links */}
              <img src="./logo.png" alt="Shofy" className="h-8 md:h-10" />
              <div className="hidden md:flex ml-10 space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-blue-600 font-medium border-blue-600"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Search input field */}
              <div className="hidden xl:block relative">
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="w-48 lg:w-80 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search
                  className="absolute right-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Wishlist button */}
              <button className="relative">
                <Heart size={24} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  4
                </span>
              </button>

              {/* Shopping bag button */}
              <button className="relative">
                <ShoppingBag size={24} className="text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Mobile menu toggle button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-100 to-blue-50 z-50 shadow-lg">
              <div className="flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm">
                <img src="/logo.png" alt="Shofy" className="h-8" />
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} className="text-gray-700 hover:text-blue-500" />
                </button>
              </div>

              {/* Mobile menu links */}
              <div className="flex flex-col items-center mt-10 space-y-6">
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-xl font-semibold transition duration-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-xl font-semibold transition duration-200"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-xl font-semibold transition duration-200"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="text-blue-600 text-xl font-semibold border-b-4 border-blue-600 pb-1 transition duration-200"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-xl font-semibold transition duration-200"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-xl font-semibold transition duration-200"
                >
                  Contact
                </a>

                {/* Search input in mobile menu */}
                <div className="relative w-10/12">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 border-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                  <Search
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-blue-500"
                    size={20}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-16 text-center text-sm text-gray-600">
                <p>&copy; 2024 Shofy. All rights reserved.</p>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
