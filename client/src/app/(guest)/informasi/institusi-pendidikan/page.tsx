'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import InstitusiCard from '@/components/institusiCard';

// Import Swiper stylesS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function institusiList() {
  const [data, setData] = useState([]);  // State untuk menyimpan data institusi
  const [loading, setLoading] = useState(true);  // State untuk loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/institusi/get');
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;  // Tampilan saat loading
  if (!data.length) return <p>No data available</p>;  // Tampilan jika tidak ada data

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header institusi */}
      <h1 className="text-3xl font-bold text-center mb-6">DAFTAR INSTITUSI</h1>

      {/* institusi dengan Navigasi */}
      <div className="relative flex items-center mt-8">
        {/* institusi Cards */}
        <Swiper
            style={{ height: '450px' }}
          centeredSlides={true}
          spaceBetween={10}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,  // 1 slide per view di bawah 640px
            },
            768: {
              slidesPerView: 2,  // 2 slides per view di bawah 768px
            },
            1024: {
              slidesPerView: 3,  // 3 slides per view di atas 1024px
            },
          }}
        >
          {data.map((institusi) => (
            <SwiperSlide key={institusi.id}>
            <div className="flex h-full p-6 rounded-2xl w-64 max-w-md duration-300 gap-8">
                <InstitusiCard institusi={institusi} />  {/* Menggunakan institusiCard */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
