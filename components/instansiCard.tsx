import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

const InstansiCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl max-w-sm shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Institut Teknologi Sumatera</h2>
      
      {/* Image Section */}
      <div className="flex items-center justify-center mb-6">
        <img 
          src="/Logo_ITERA.png" 
          alt="Institut Teknologi Sumatera" 
          className="w-40 h-52 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Subheading */}
      <h3 className="text-lg font-medium mb-2 text-gray-700">ITERA</h3>

      {/* Location Section */}
      <div className="flex items-center mb-4 text-gray-500">
        <MapPin className="mr-2" size={20} />
        <p>Jati Agung, Lampung Selatan, Lampung</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2">
      Institut Teknologi Sumatera disingkat ITERA, adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung di Pulau Sumatra . ITERA didirikan berdasarkan Peraturan Presiden Nomor 124 Tahun 2014 tentang Pendirian Institut Teknologi Sumatera (Lembaran Negara Republik Indonesia Tahun 2014 Nomor 253) yang ditetapkan Presiden Republik Indonesia Dr. H. Susilo Bambang Yudhoyono pada tanggal 6 Oktober 2014 dan diundangkan tanggal 9 Oktober 2014.
      </p>

      {/* Button */}
      <Link href="/informasi/instansi/detail-instansi" passHref>
        <button className="bg-blue-600 text-white py-3 px-4 rounded-xl w-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
          Lihat Detail
        </button>
      </Link>
    </div>
  );
};

export default InstansiCard;
