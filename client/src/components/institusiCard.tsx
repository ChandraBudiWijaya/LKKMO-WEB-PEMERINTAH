import { MapPin } from 'lucide-react';
import Link from 'next/link';

interface Institusi {
  id: number;
  nama_instansi: string;
  foto_instansi?: string;
  location?: string;
}

interface InstitusiCardProps {
  institusi: Institusi;
}

export default function InstitusiCard({ institusi }: InstitusiCardProps) {
  return (
    <div className="bg-blue-200 p-4 rounded-2xl flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 h-full ">
      <h1 className="text-lg font-medium mb-1 text-black text-center">
        {institusi.nama_instansi || 'Institut Teknologi Sumatera'}
      </h1>

      {/* Image Section */}
      <div className="flex items-center justify-center w-full mb-4">
        <img
          src={institusi.foto_instansi || "/Logo_ITERA.png"}  // Ganti dengan logo dari API jika tersedia
          alt={institusi.nama_instansi || "Institut Teknologi Sumatera"}
          className="w-10 h-10 object-cover bg-transparent" // Ganti bentuk menjadi bulat
        />
      </div>


      {/* Location Section */}
      <div className="text-sm flex items-center mb-2 text-black justify-center">
        <MapPin className="mr-2" size={20} />
        <p>{institusi.location || 'Jati Agung, Lampung Selatan, Lampung'}</p>
      </div>

      {/* Button */}
      <Link href={`/informasi/institusi/detail-institusi/${institusi.id}`} passHref>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-xl w-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
          Lihat Profil Institusi
        </button>
      </Link>
    </div>
  );
}
