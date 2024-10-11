'use client';

import CategoryFilter from "@/components/categoryFilter/CategoryFilter"; // Sesuaikan dengan path ke CategoryFilter
import BeritaCard from "@/components/beritaCard/BeritaCard"; // Sesuaikan dengan path ke BeritaCard
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { X } from "lucide-react";

export default async function Home() {
  const { data } = await axios.get('http://127.0.0.1:8000/api/berita/get')
  console.log(data);
  
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto coba">
      {/* Header Berita */}
      <h1 className="text-3xl font-bold text-center mb-6">BERITA DAERAH</h1>

      {/* Berita dengan Navigasi */}
      <div className="relative flex items-center mt-8">
        {/* Left Navigation Button */}
        {/* <button className=" bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}
        {/* Berita card nya di loop */}
        {/* Berita Cards */}
        <div className="flex overflow-x-scroll space-x-6 pl-12 pr-12 py-4 scrollbar-hide h-full">
            <Swiper
            style={{height:'520px'}}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              // Saat lebar layar kurang dari 640px
              640: {
                slidesPerView: 2, // 1 slide per view
              },
              // Saat lebar layar antara 640px dan 768px
              768: {
                slidesPerView: 3, // 2 slides per view
              },
              // Saat lebar layar lebih dari 768px
              1024: {
                slidesPerView: 3, // 3 slides per view
              },
            }}
          >
            {data.data.map((dataItem) => (
            <SwiperSlide key={dataItem.id_berita}>
              <BeritaCard
                imageSrc={dataItem.foto}
                title={dataItem.judul}
                description={dataItem.isi}
                author={dataItem.author}                
              />
            </SwiperSlide>
          ))}
          </Swiper>
          {/* Tambahkan lebih banyak BeritaCard jika diperlukan */}
        </div>

      </div>
    </div>
  );
}
