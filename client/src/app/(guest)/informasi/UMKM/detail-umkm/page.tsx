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
    { name: 'Mimi Kitchen Lpg', category: 'KULINER', image: '/mimi.jpg', link: 'https://maps.app.goo.gl/afeobbQir9ZcWjQeA', instagram: 'https://instagram.com/mimi.kitchen.lpg', instagramUsername: 'mimi.kitchen.lpg' },
    { name: 'Humble Donuts', category: 'KULINER', image: '/humble_donuts.png', link: 'https://maps.app.goo.gl/S14yth5dANcP6LFc9', instagram: 'https://instagram.com/humbledonuts', instagramUsername: 'humbledonuts' },
    { name: 'Dawpur', category: 'KULINER', image: '/dawpur.png', link: 'https://maps.app.goo.gl/Zw9MUYaFuf86CaQ9', instagram: 'https://instagram.com/dawpur', instagramUsername: 'dawpur' },
    { name: 'Kukka Eats', category: 'KULINER', image: '/kukka_eats.png', link: 'https://maps.app.goo.gl/UD5xu7VXTv8ohvHp6', instagram: 'https://instagram.com/kukka_eats', instagramUsername: 'kukka_eats' },
    { name: 'Kaway Lampung Souvenir', category:'KERAJINAN', image: '/kaway.png', link: 'https://maps.app.goo.gl/pT91Gnf3F82YqoBx6', instagram: 'https://instagram.com/kawaylpg', instagramUsername: 'kawaylpg' },
    { name: 'Find.nyy Craft', category: 'KERAJINAN', image: '/find_ny.png', link: 'https://maps.app.goo.gl/estQc7tNH4XePcAL7', instagram: 'https://instagram.com/find.nyy', instagramUsername: 'find.nyy' },
    { name: 'Catchi Id', category: 'FASHION', image: '/catchi.png', link: 'https://maps.app.goo.gl/xwB9cNrmor2LJ2ZS8', instagram: 'https://instagram.com/catchi.id', instagramUsername: 'catchi.id' },
    { name: 'Artemis Fashion', category: 'FASHION', image: '/artemis.png', link: 'https://maps.app.goo.gl/1B3gGeUsVSq6uot9A', instagram: 'https://instagram.com/artemis_fashionn', instagramUsername: 'artemis_fashionn' },
    { name: 'Ical Craft Lampung', category: 'FASHION', image: '/ical_craft.png', link: 'https://maps.app.goo.gl/AWLgJRejp1GPFPyi9', instagram: 'https://instagram.com/nuwa_ical_art', instagramUsername: 'nuwa_ical_craft' },
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
            className={`flex items-center px-4 py-2 rounded transition ${
              activeCategory === category.name ? 'bg-blue-100 text-blue-800 shadow-lg' : 'bg-blue-800 text-white hover:bg-blue-700'
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
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline mt-2"
              >
                @{item.instagramUsername}
              </a>
              <br />
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
    </div>
  );
};

export default CulinaryFashionPage;
