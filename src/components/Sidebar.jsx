import React from "react";
import { useFilters } from "../contexts/FilterContext";

const Sidebar = () => {
  const { filters, updateFilters } = useFilters();

  // Handle price range change via range input
  const handlePriceChange = (e) => {
    updateFilters({ priceRange: parseInt(e.target.value) }); 
  };

  // Toggle a filter status 
  const handleStatusChange = (status) => {
    updateFilters({ [status]: !filters[status] }); 
  };

  // Handle category selection 
  const handleCategoryClick = (category) => {
    const updatedCategories = filters.selectedCategories.includes(category)
      ? filters.selectedCategories.filter((c) => c !== category) 
      : [...filters.selectedCategories, category]; 
    updateFilters({ selectedCategories: updatedCategories });
  };

  // Handle color selection 
  const handleColorClick = (color) => {
    const updatedColors = filters.selectedColors.includes(color)
      ? filters.selectedColors.filter((c) => c !== color)
      : [...filters.selectedColors, color]; 
    updateFilters({ selectedColors: updatedColors });
  };

  return (
    <div className="w-64 p-4 border-r border-gray-200 space-y-8 bg-white">
      {/* Price Filter Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Filter</h3>
        <div className="space-y-4">
       
          <input
            type="range"
            min="95"
            max="2500"
            className="w-full"
            value={filters.priceRange} 
            onChange={handlePriceChange} // Update priceRange on change
          />
          {/* Display price range */}
          <div className="flex justify-between text-sm">
            <span>$95</span>
            <span>${filters.priceRange}</span>
          </div>
          {/* Reset button for price filter */}
          <button
            className="text-blue-500 text-sm"
            onClick={() => updateFilters({ priceRange: 200 })} // Reset to default price range (500)
          >
            Reset
          </button>
        </div>
      </div>

      {/* Product Status Section */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Product Status</h3>
        <div className="space-y-2">
          {/* Checkbox for On Sale filter */}
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.onSale} 
              onChange={() => handleStatusChange("onSale")} // Toggle onSale status
            />
            On sale
          </label>
          {/* Checkbox for In Stock filter */}
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2"
              checked={filters.inStock} 
              onChange={() => handleStatusChange("inStock")} // Toggle inStock status
            />
            In stock
          </label>
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Categories</h3>
        <div className="space-y-2">
          {/* Render category list */}
          {[
            { name: "Leather", count: 10 },
            { name: "Classic Watch", count: 28 },
            { name: "Leather Man Watch", count: 12 },
            { name: "Trending Watch", count: 17 },
            { name: "Google", count: 22 },
            { name: "Woman Watch", count: 14 },
            { name: "Tables", count: 19 },
            { name: "ShopEngine", count: 29 },
          ].map((category) => (
            <div
              key={category.name}
              className={`flex justify-between items-center text-sm cursor-pointer ${
                filters.selectedCategories.includes(category.name)
                  ? "text-blue-500 bg-blue-100" // Highlight selected category
                  : ""
              } p-1 rounded`}
              onClick={() => handleCategoryClick(category.name)} // Handle category selection/deselection
            >
              <div className="flex items-center gap-[0.5rem]">
                <span
                  className={`inline-block w-2 h-2 mr-2 rounded-full ${
                    filters.selectedCategories.includes(category.name)
                      ? "bg-blue-500"
                      : "bg-gray-400"
                  }`}
                ></span>
                <span>{category.name}</span>
              </div>
              <span className="text-gray-500">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Color Filter Section */}
      <div>
        <h3 className="text-lg font-semibold border-b pb-2 mb-4">Filter by Color</h3>
        <div className="space-y-2">
          {/* Render color options */}
          {[
            { color: "bg-red-500", name: "Red", count: 8 },
            { color: "bg-blue-800", name: "Dark Blue", count: 14 },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center text-sm cursor-pointer ${
                filters.selectedColors.includes(item.name)
                  ? "text-blue-500 bg-blue-100"
                  : ""
              } p-1 rounded `}
              onClick={() => handleColorClick(item.name)} 
            >
              <div className={`w-4 h-4 rounded-full ${item.color} mr-2`}></div>
              <span>{item.name}</span>
              <span className="ml-auto">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
