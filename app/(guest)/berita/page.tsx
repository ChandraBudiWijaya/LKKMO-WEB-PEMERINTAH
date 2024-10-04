'use client';

import CategoryFilter from "@/components/categoryFilter/CategoryFilter"; // Sesuaikan dengan path ke CategoryFilter
import BeritaCard from "@/components/beritaCard/BeritaCard"; // Sesuaikan dengan path ke BeritaCard

export default function Home() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header Berita */}
      <h1 className="text-3xl font-bold text-center mb-6">BERITA DAERAH</h1>

      {/* Category Filter */}
      <CategoryFilter />

      {/* Berita dengan Navigasi */}
      <div className="relative flex items-center mt-8">
        {/* Left Navigation Button */}
        <button className=" bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Berita Cards */}
        <div className="flex overflow-x-scroll space-x-6 pl-12 pr-12 py-4 scrollbar-hide">
          <BeritaCard
            imageSrc="/path-to-image.jpg"
            category="Politik"
            title="Eva Dwiana Legawa Tidak Diusung Partainya di Pilkada Bandar Lampung"
          />
          <BeritaCard
            imageSrc="/path-to-image.jpg"
            category="Sorotan"
            title="Selebgram Tewas Usai Mobil Tertabrak Kereta Api di Lampung"
          />
          <BeritaCard
            imageSrc="/path-to-image.jpg"
            category="Pendidikan"
            title="APP Group Sambut 65 Mahasiswa Magang Merdeka, Perkuat Hubungan Industri dan Dunia Pendidikan"
          />
          {/* Tambahkan lebih banyak BeritaCard jika diperlukan */}
        </div>

        {/* Right Navigation Button */}
        <button className=" bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}