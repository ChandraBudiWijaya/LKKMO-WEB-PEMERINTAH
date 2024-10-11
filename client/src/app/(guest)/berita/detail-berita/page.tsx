'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface NewsDetail {
  id: number;
  judul: string;
  isi: string;
  foto: string;
  author: string;
  tanggal_rilis: string;
}

const NewsDetailPage: React.FC = () => {
  const [news, setNews] = useState<NewsDetail | null>({
    id: 1,
    judul: "Selebgram Tewas Usai Mobil Tertabrak Kereta Api di Lampung",
    isi: `KOMPAS.com - Seorang selebgram, Regita Cisillia Maharani (22), meninggal usai mobilnya tertabrak kereta api di Bandar Lampung. Peristiwa itu terjadi di pelintasan kereta api Kelurahan Kampung Baru, Kecamatan Kedaton, Bandar Lampung. Jumat (30/8/2024). Korban yang menaiki mobil Honda Brio bernomor polisi B 2607S IJ bersama rekannya, Ali Akbar Chumaidi (24), tertabrak Kereta Api Ekspres Rajabasa. Manajer Humas KAI Divre IV Tanjungkarang Azhar Zaki Assjari membenarkan adanya kejadian itu. "Dari kecelakaan tersebut pengendara terseret sekitar 30 meter, dan pelintasan tersebut resmi yang dijaga oleh petugas Dinas Perhubungan (Dishub)," ujarnya, Jumat, dikutip dari Tribun Lampung.`,
    foto: "/berita.png",
    author: "Reza KM",
    tanggal_rilis: "01/09/2024"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Penggunaan data dummy, jadi tidak perlu fetching data dengan axios

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{news?.judul}</h1>
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={news?.foto}
            alt={news?.judul}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
          {/* Sorotan bagian bawah foto */}
          <div className="flex items-center bg-blue-100 p-2 mt-2 rounded-md text-sm text-gray-700">
            <span className="mr-4">Sorotan</span>
            <div className="flex items-center mr-4">
              <i className="far fa-calendar-alt mr-1"></i>
              {news?.tanggal_rilis}
            </div>
            <div className="flex items-center">
              <i className="far fa-user mr-1"></i>
              {news?.author}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-6">
          <p className="text-lg">{news?.isi}</p>
        </div>
      </div>
      {/* Daftar berita tambahan di bawah */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Sorotan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="text-blue-600 hover:underline">Kongkalikong Kerek Suara Caleg, Anggota KPU Bandar Lampung Dipecat</a>
          <a href="#" className="text-blue-600 hover:underline">Hadirkan Layanan Kemasan, UMKM Bandar Lampung Siap Naik Kelas</a>
          <a href="#" className="text-blue-600 hover:underline">Calon Petahana Pilkada Bandar Lampung Punya Kekayaan Rp 14,3 Miliar</a>
          <a href="#" className="text-blue-600 hover:underline">SPAM Kota Bandar Lampung Diresmikan, Layani 60.000 Sambungan Rumah</a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
