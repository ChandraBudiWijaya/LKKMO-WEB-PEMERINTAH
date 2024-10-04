import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Informasi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Kartu Institusi Pendidikan */}
        <a 
          href="/informasi/instansi" 
          className="block bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-500 transform hover:scale-105 overflow-hidden"
        >
          <div className="flex justify-center mb-4">
            <img
              src="institusi.png"
              alt="Institusi Pendidikan"
              className="w-64 h-36 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Institusi Pendidikan</h2>
            <p className="text-gray-600 text-center">
              Lembaga formal yang berisi informasi Institut Pendidikan di daerah Bandar Lampung dan sekitarnya untuk mendukung informasi pendidikan.
            </p>
            <div className="text-right mt-4">
              <span className="text-blue-500 hover:underline">Selengkapnya &gt;</span>
            </div>
          </div>
        </a>
        
        {/* Kartu UMKM */}
        <a 
          href="/informasi/UMKM" 
          className="block bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-500 transform hover:scale-105 overflow-hidden"
        >
          <div className="flex justify-center mb-4">
            <img
              src="umkm.png"
              alt="UMKM"
              className="w-64 h-36 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">UMKM</h2>
            <p className="text-gray-600 text-center">
              Unit usaha lokal yang menawarkan produk atau jasa untuk memenuhi kebutuhan masyarakat setempat dan mendukung perekonomian lokal.
            </p>
            <div className="text-right mt-4">
              <span className="text-blue-500 hover:underline">Selengkapnya &gt;</span>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  );
};

export default InfoSection;
