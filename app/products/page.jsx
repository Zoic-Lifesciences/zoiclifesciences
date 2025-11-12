"use client";
import { useState } from "react";
import Sidebar from "../components/ProductSidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const products = [
  {
    img: "/product.png",
    title: "Boxq-10",
    description: "This is the complete product description...",
    pack: "10*1*10 ALU ALU",
    price: "3737.00",
    category: "Tablets",
    speciality: "Ortho"
  },
  {
    img: "/product.png",
    title: "ONDIBOX-4",
    description: "This is the complete product description...",
    pack: "10*10 ALU ALU",
    price: "478.00",
    category: "Tablets",
    speciality: "Ortho"
  },
  {
    img: "/product.png",
    title: "PANBX 40",
    description: "This is the complete product description...",
    pack: "10*10 ALU ALU",
    price: "984.00",
    category: "Sachets",
    speciality: "Ortho"
  },
  {
    img: "/product.png",
    title: "Product X",
    description: "This is the complete product description...",
    pack: "10*10",
    price: "Unknown",
    category: "Syrup",
    speciality: "Ortho"
  },
  {
    img: "/product.png",
    title: "Oil Supreme",
    description: "Herbal oil for relief...",
    pack: "200ml Bottle",
    price: "320.00",
    category: "Oil",
    speciality: "Ortho"
  },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <div className="flex gap-8 p-8 bg-gray-100 min-h-screen pt-[15vh]">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex-1">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, idx) => (
                <ProductCard key={idx} {...item} />
              ))
            ) : (
              <p className="text-gray-500 text-center w-full">
                No products available in this category.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
