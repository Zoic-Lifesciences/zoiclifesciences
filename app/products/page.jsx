"use client";
import { useState } from "react";
import ProductSidebar from "../components/ProductSidebar";
import TopBar from "../components/ProductTopBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "@/data/products.json";
import { FiSearch } from "react-icons/fi";



export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPacking, setSelectedPacking] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");


  const filteredProducts = products.filter(item => {
  const matchCategory =
    selectedCategory === "All" || item.category === selectedCategory;

  const matchPacking =
    selectedPacking === "All" || item.productPacking === selectedPacking;

  const search = searchTerm.toLowerCase();
  const matchSearch =
    item.title.toLowerCase().includes(search) ||
    item.description.toLowerCase().includes(search);

  return matchCategory && matchPacking && matchSearch;
});


  

  return (
    <div className="flex ">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[20%] bg-white flex justify-center sticky top-0 h-[100vh] overflow-y-auto">
        <ProductSidebar
          products={products}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-[80%] flex flex-col">
        <div className="sticky top-[6vh] w-full rounded-2xl pb-6 py-10 bg-white">
           <TopBar
          products={products}
          selectedPacking={selectedPacking}
          setSelectedPacking={setSelectedPacking}
        />
        <div className="w-[95%] flex justify-end mt-5">
          <input
    type="text"
    placeholder="Search by brand or composition..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border border-gray-200 px-4 py-2 rounded-lg w-1/3 focus:ring-2 focus:ring-green-600"
  />
  
        </div>
        
        </div>
       

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map((item, idx) => (
              <ProductCard key={idx} {...item} />
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>

  );
}
