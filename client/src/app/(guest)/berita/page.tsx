'use client';

import { useRef } from 'react';
import BeritaCard from "@/components/beritaCard/BeritaCard"; // Sesuaikan dengan path ke BeritaCard

export default function Home() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // jumlah scroll ke kiri
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // jumlah scroll ke kanan
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header Berita */}
      <h1 className="text-3xl font-bold text-center mb-6">BERITA DAERAH</h1>

      {/* Berita dengan Navigasi */}
      <div className="relative flex items-center mt-8">
        {/* Left Navigation Button */}
        <button 
          onClick={scrollLeft}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Berita Cards */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row w-full overflow-hidden scroll-smooth space-x-6 pl-12 pr-12 py-4 snap-x snap-mandatory"
        >
          <div className="snap-center">
            <BeritaCard
              imageSrc="/berita.png"
              category="Politik"
              title="Eva Dwiana Legawa Tidak Diusung Partainya di Pilkada Bandar Lampung"
            />
          </div>
          <div className="snap-center">
            <BeritaCard
              imageSrc="/berita.png"
              category="Sorotan"
              title="Selebgram Tewas Usai Mobil Tertabrak Kereta Api di Lampung"
            />
          </div>
          <div className="snap-center">
            <BeritaCard
              imageSrc="/berita.png"
              category="Pendidikan"
              title="APP Group Sambut 65 Mahasiswa Magang Merdeka, Perkuat Hubungan Industri dan Dunia Pendidikan"
            />
          </div>
        </div>

        {/* Right Navigation Button */}
        <button 
          onClick={scrollRight}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
