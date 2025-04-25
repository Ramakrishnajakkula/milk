import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

function Products() {
  const [activeTab, setActiveTab] = useState("milk");
  const { addToCart, toggleLiked, likedItems } = useCart();

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const TabNavigation = () => (
    <div className="sticky top-0 z-10 bg-white shadow-md mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 py-4">
          <button
            onClick={() => scrollToSection("milk")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "milk"
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            Milk Products
          </button>
          <button
            onClick={() => scrollToSection("semen")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "semen"
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}>
            Breed Semen
          </button>
        </div>
      </div>
    </div>
  );

  const milkProducts = [
    {
      id: 1,
      name: "Premium Cow Milk",
      description: "Fresh A2 milk from indigenous Gir cows",
      price: "₹80/liter",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    },
    {
      id: 2,
      name: "Buffalo Milk",
      description: "Rich and creamy Murrah buffalo milk",
      price: "₹90/liter",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/295391624/FE/UG/ZE/187917559/fresh-buffalo-milk-500x500.jpg",
    },
  ];

  const semenProducts = [
    {
      id: 1,
      name: "Gir Cow Semen",
      description: "Premium quality semen from pure Gir breed bulls",
      price: "₹1200/straw",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/323466961/VX/PI/IN/188161453/gir-cow-semen-500x500.jpg",
    },
    {
      id: 2,
      name: "Murrah Buffalo Semen",
      description: "High-grade semen from elite Murrah bulls",
      price: "₹1500/straw",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/SY/DP/DN/163548147/buffalo-bull-semen-500x500.jpg",
    },
  ];

  const handleImageError = (e) => {
    e.target.src = "https://placehold.co/600x400?text=Product+Image";
  };

  const ProductCard = ({ product, type }) => {
    const isLiked = likedItems.some(
      (item) => item.id === product.id && item.type === type
    );

    const handleLike = () => {
      toggleLiked({ ...product, type });
    };

    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
            onError={handleImageError}
          />
          <button
            onClick={handleLike}
            className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm">
            {isLiked ? (
              <HeartSolidIcon className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-primary font-bold">{product.price}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <TabNavigation />
      <div className="max-w-7xl mx-auto px-4">
        {/* Milk Products Section */}
        <section id="milk" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Fresh Milk Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {milkProducts.map((product) => (
              <ProductCard key={product.id} product={product} type="milk" />
            ))}
          </div>
        </section>

        {/* Semen Products Section */}
        <section id="semen" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Premium Breed Semen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {semenProducts.map((product) => (
              <ProductCard key={product.id} product={product} type="semen" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
