"use client";
import React from 'react';
import Link from 'next/link';

const UMKMInfoPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="bg-gray-900 bg-opacity-70 p-4">
        <p className="text-sm">Informasi &gt; UMKM</p>
      </div>

      {/* Header */}
      <header className="bg-blue-800 text-white p-6">
        <h1 className="text-4xl font-bold">
          USAHA MIKRO,<br />
          KECIL DAN<br />
          MENENGAH
        </h1>
      </header>

      {/* Main content */}
      <main className="p-6">
        <div className="mb-8">
          <p className="text-sm">
            UMKM adalah usaha kerakyatan yang saat ini mendapat perhatian dan
            keistimewaan yang diamanatkan oleh undang-undang, antara lain bantuan
            kredit usaha dengan bunga rendah, kemudahan persyaratan izin usaha,
            bantuan pengembangan usaha dari lembaga pemerintah, serta beberapa
            kemudahan lainnya.
          </p>
        </div>

        {/* Requirements Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Syarat Mengurus Izin UMKM :</h2>
          <ol className="list-decimal list-inside">
            <li>Surat Pengantar dari RT, RW, dan Kelurahan</li>
            <li>Fotokopi KTP</li>
            <li>Fotokopi Kartu Keluarga</li>
            <li>Pas Foto berwarna 4x6 sejumlah 2 lembar</li>
            <li>Mengisi Formulir UMKM</li>
          </ol>
        </div>

        {/* Categories */}
        <div className="flex justify-around mt-8">
          <CategoryButton icon="🍽️" text="KULINER" href="/informasi/UMKM/detail-umkm" />
          <CategoryButton icon="🎨" text="KERAJINAN" href="/informasi/UMKM/detail-umkm" />
          <CategoryButton icon="👚" text="FASHION" href="/informasi/UMKM/detail-umkm"/>
        </div>
      </main>
    </div>
  );
};

const CategoryButton: React.FC<{ icon: string; text: string; href: string }> = ({ icon, text, href }) => (
  <Link href={href} passHref>
    <div className="bg-blue-800 text-white px-4 py-2 rounded flex items-center cursor-pointer">
      <span className="mr-2">{icon}</span>
      {text}
    </div>
  </Link>
);

export default UMKMInfoPage;
