"use client";
import React, { useState } from 'react';
import { Coffee, Package, ShoppingBag } from 'lucide-react';

const CulinaryFashionPage = () => {
  // Tambahkan state untuk kategori aktif
  const [activeCategory, setActiveCategory] = useState('KULINER');

  const categories = [
    { name: 'KULINER', icon: <Coffee className="w-6 h-6" /> },
    { name: 'KERAJINAN', icon: <Package className="w-6 h-6" /> },
    { name: 'FASHION', icon: <ShoppingBag className="w-6 h-6" /> },
  ];

  const items = [
    { name: 'Kitchen.lpg', category: 'KULINER', image: '/api/placeholder/400/300', link: 'https://maps.app.goo.gl/kvKmcm8dw7nXkJji8' },
    { name: 'Humble Donuts', category: 'KULINER', image: '/humble_donuts.png', link: 'https://maps.app.goo.gl/S14yth5dANcP6LFc9' },
    { name: 'Dawpur', category: 'KULINER', image: '/dawpur.png', link: 'https://maps.app.goo.gl/Zw9MUYaFuf86CaQ9' },
    { name: 'Kukka Eats', category: 'KULINER', image: '/kukka_eats.png', link: 'https://maps.app.goo.gl/kvKmcm8dw7nXkJji8' },
    { name: 'Crafty Hands', category: 'KERAJINAN', image: '/crafty_hands.png', link: 'https://maps.app.goo.gl/xyz' },
    { name: 'Handmade Bliss', category: 'KERAJINAN', image: '/handmade_bliss.png', link: 'https://maps.app.goo.gl/xyz' },
    { name: 'Modern Chic', category: 'FASHION', image: '/modern_chic.png', link: 'https://maps.app.goo.gl/abc' },
    { name: 'Trendy Apparel', category: 'FASHION', image: '/trendy_apparel.png', link: 'https://maps.app.goo.gl/abc' },
  ];

  // Filter items berdasarkan kategori aktif
  const filteredItems = items.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto p-4">
      {/* Kategori Button */}
      <div className="flex space-x-2 mb-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category.name)}  // Mengubah kategori aktif
            className={`flex items-center px-4 py-2 rounded ${
              activeCategory === category.name ? 'bg-blue-100 text-blue-800' : 'bg-blue-800 text-white'
            }`}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Tampilkan item berdasarkan kategori */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Maps
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <a href="#" className="text-blue-600 hover:underline">
          Selengkapnya &gt;
        </a>
      </div>
    </div>
  );
};

export default CulinaryFashionPage;