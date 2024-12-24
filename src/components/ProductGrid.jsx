import React from "react";
import {
  ShoppingBag,
  Heart,
  Grid,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useFilters } from "../contexts/FilterContext";
import products from "../utils/dummy";

const ProductGrid = () => {
  const { filters, updateFilters } = useFilters(); // Use updateFilters instead of setFilters

  const handleSortChange = (e) => {
    updateFilters({ sortOption: e.target.value });
  };
  const [viewType, setViewType] = React.useState("grid");

  const filteredProducts = products.filter((product) => {
    if (product.price > filters.priceRange) return false;
    if (filters.onSale && product.price >= product.originalPrice) return false;
    if (
      filters.selectedCategories.length > 0 &&
      !product.category.some((cat) => filters.selectedCategories.includes(cat))
    ) {
      return false;
    }
    if (
      filters.searchQuery &&
      !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });


  //for sorting products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortOption) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "name-a-z":
        return a.name.localeCompare(b.name);
      case "name-z-a":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="flex-1 space-y-6">
      {/* Header with filter controls */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b gap-4">
        {/* Left Section */}
        <div className="flex flex-row items-center justify-between gap-4 w-full sm:w-auto">
          {/* View Toggle */}
          <div className="flex items-center border rounded-lg">
            <button
              className={`p-2 ${viewType === "grid" ? "bg-gray-100" : ""}`}
              onClick={() => setViewType("grid")}
            >
              <Grid size={20} />
            </button>
            <button
              className={`p-2 ${viewType === "list" ? "bg-gray-100" : ""}`}
              onClick={() => setViewType("list")}
            >
              <List size={20} />
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Showing {sortedProducts.length} of {products.length} results
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          {/* Sort Dropdown */}
          <select
            className="border rounded-lg px-3 py-2 bg-white w-full sm:w-auto"
            value={filters.sortOption}
            onChange={handleSortChange}
          >
            <option value="">Default sorting</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A to Z</option>
            <option value="name-z-a">Name: Z to A</option>
          </select>

          {/* Filter Button */}
          <button className="hidden lg:flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
            <SlidersHorizontal size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid ${
          viewType === "grid"
            ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1"
        } gap-4 sm:gap-6`}
      >
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-4 rounded-lg group hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative bg-[#f0efef]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>

              {/* Hover icons */}
              <div className="absolute inset-0 flex flex-col justify-center items-start pl-4 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center group/icon hover:bg-black hover:text-white p-2 rounded-full cursor-pointer">
                  <div className="w-8 h-8 group/icon hover:text-black bg-white rounded-full flex items-center justify-center">
                    <Heart size={20} />
                  </div>
                  <span className="ml-2 hidden group-hover/icon:inline-block text-sm font-medium text-white">
                    Add to Wishlist
                  </span>
                </div>
                <div className="flex items-center group/icon hover:bg-black hover:text-white p-2 rounded-full cursor-pointer">
                  <div className="w-8 h-8 group/icon hover:text-black bg-white rounded-full flex items-center justify-center">
                    <ShoppingBag size={20} />
                  </div>
                  <span className="ml-2 hidden group-hover/icon:inline-block text-sm font-medium text-white">
                    Add to Cart
                  </span>
                </div>
                <div className="flex items-center group/icon hover:bg-black hover:text-white p-2 rounded-full cursor-pointer">
                  <div className="w-8 h-8 group/icon hover:text-black bg-white rounded-full flex items-center justify-center">
                    <MdOutlineRemoveRedEye size={20} />
                  </div>
                  <span className="ml-2 hidden group-hover/icon:inline-block text-sm font-medium text-white">
                    Quick View
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4">
              <div className="text-sm text-gray-500">
                {product.category.join(", ")}
              </div>
              <h3 className="font-semibold mt-1 text-gray-700 group-hover:text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {Array.isArray(
                    Array(Math.min(Math.max(product.rating, 0), 5))
                  ) &&
                    Array(Math.min(Math.max(product.rating, 0), 5))
                      .fill(null)
                      .map((_, i) => <span key={i}>★</span>)}
                  {Array(5 - Math.min(Math.max(product.rating, 0), 5))
                    .fill(null)
                    .map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                </div>
              </div>
              <div className="mt-2">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="ml-2 text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
