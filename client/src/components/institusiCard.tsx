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
    <div className="bg-white p-4 rounded-xl flex h-full flex-col shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Nama Institusi */}
      <h1 className="text-lg font-bold mb-2 text-black text-center">
        Institut Teknologi Sumatera
      </h1>

      {/* Gambar Logo Institusi */}
      <div className="flex items-center justify-center mb-4">
        <img
          src={"/Logo_ITERA.png"}  // Sesuaikan dengan path logo
          alt={"Institut Teknologi Sumatera"}
          className="w-40 h-40 my-8" // Ukuran gambar diubah agar sesuai dengan card
        />
      </div>

      {/* Lokasi Institusi */}
      <div className="text-sm flex items-center justify-center mb-4 text-black">
        <MapPin className="mr-2" size={20} />
        <p className="text-center">Jati Agung, Lampung Selatan, Lampung</p>
      </div>

      {/* Deskripsi Singkat */}
      <p className="text-sm text-center text-gray-700 mb-4">
        Institut Teknologi Sumatera disingkat ITERA, adalah sebuah perguruan tinggi negeri yang...
      </p>

      {/* Tombol Lihat Detail */}
      <Link href={`/informasi/institusi-pendidikan/detail-institusi`} passHref>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
          Lihat Detail
        </button>
      </Link>
    </div>
  );
}
