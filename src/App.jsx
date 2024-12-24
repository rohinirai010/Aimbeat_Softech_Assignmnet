import React, { useState } from "react";
import { FilterProvider } from "./contexts/FilterContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import { Menu } from "lucide-react";

const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="px-[1.5rem] md:px-[3rem] lg:px-[6rem] py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Shop Grid
            </h1>
            <button
              className="lg:hidden flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={20} />
              <span>Filters</span>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with overlay for mobile */}
            {/* Sidebar with independent scrolling */}
            <div
              className={` fixed lg:relative inset-0 z-50 lg:z-auto
                                       transform lg:transform-none transition-transform duration-300
                                  ${
                                    isSidebarOpen
                                      ? "translate-x-0"
                                      : "-translate-x-full lg:translate-x-0"
                                  }
                                 bg-white lg:bg-transparent
                                  h-full lg:h-auto overflow-y-auto
                                  `}
            >
              {/* Close button for mobile */}
              <button
                className="lg:hidden absolute right-4 top-4 text-gray-500"
                onClick={() => setIsSidebarOpen(false)}
              >
                ✕
              </button>
              <div className="h-full">
                <Sidebar />
              </div>
            </div>

            {/* Overlay background */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Product grid with responsive scrolling */}
            <div className="flex-1 overflow-y-auto">
              <ProductGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <FilterProvider>
      <AppContent />
    </FilterProvider>
  );
};

export default App;
