import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519')] bg-cover bg-center">

      {/* Overlay (optional gradient like your design) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-orange-400/60"></div>

      {/* Navbar */}
      <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-md px-8 py-4 flex justify-between items-center z-10">
        
        {/* Logo */}
        <div className="text-xl font-bold">KARMA</div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">Shop</li>
          <li className="cursor-pointer hover:text-orange-500">Blog</li>
          <li className="cursor-pointer hover:text-orange-500">Pages</li>
          <li className="cursor-pointer hover:text-orange-500">Contact</li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 text-lg">
          <span className="cursor-pointer">🛒</span>
          <span className="cursor-pointer">🔍</span>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 top-1/2 -translate-y-1/2 ml-10 max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          Nike New Collection!
        </h1>
        <p className="mb-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition">
          + Add to Bag
        </button>
      </div>
    </div>
  );
};

export default Hero;