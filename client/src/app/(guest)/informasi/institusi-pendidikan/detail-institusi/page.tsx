'use client';

import React from 'react'
import { Calendar, GraduationCap, Phone } from 'lucide-react'
import axios from "axios";
import { useEffect, useState } from "react";

interface Institusi {
    id: number,
    nama_instansi : string,
    nama_pimpinan : string,
    deskripsi : string,
    foto_kecil?:string,
    foto_instansi?: string,
    foto_pimpinan?: string,
    location?: string,
    alamat:string,
    akreditasi:string,
    tahun:string,
    nomor_telepon:string
  }
  
  interface InstitusiDetail {
    institusi: Institusi;
  }

export default function DetailInstitusi({ institusi }: InstitusiDetail) {
    const [data, setData] = useState([]);  // State untuk menyimpan data Institusi
    const [loading, setLoading] = useState(true);  // State untuk loading
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/institusi/detail-institusi/get');
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
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="text-black p-6">
                <h1 className="text-4xl font-bold">
                    Institut Teknologi Sumatera
                </h1>
            </header>

            {/* Banner Section */}
            <div className="relative h-96">
                <img
                    src={institusi.foto_kecil || "/Logo_ITERA.png"} 
                    alt="Institusi"
                    className="w-full h-full bg-opacity-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-base px-6 text-center leading-relaxed">
                        {institusi.deskripsi}
                    </p>
                </div>
            </div>

            {/* Detail Section */}
            <div className="max-w-4xl mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Rektor Section */}
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Rektor</h2>
                        <img
                            src={institusi.foto_pimpinan}
                            alt="Prof. Dr. I Nyoman Pugeg Aryantha"
                            className="mx-auto w-40 h-52 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                        {institusi.nama_pimpinan}
                        </p>
                    </div>

                    {/* Alamat Section */}
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Alamat</h2>
                        <div className="relative w-full h-64">
                            <a
                                target="blank"
                                href={institusi.location}>
                                <img
                                    src="/lokasiitera.png"
                                    alt="MapsItera"
                                    className="mx-auto w-full h-full scale-90 object-cover rounded-lg mb-4"
                                />
                            </a>
                        </div>
                        <p className="text-gray-700 mt-4">
                            {institusi.alamat}
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <Calendar className="mr-2" />
                    {institusi.tahun}
                </div>
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <GraduationCap className="mr-2" />
                    {institusi.akreditasi}
                </div>
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <Phone className="mr-2" />
                    {institusi.nomor_telepon}
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-center pb-8">
                <a href="#" className="text-blue-600 hover:underline text-sm">
                    Selengkapnya &gt; silahkan hubungi web Halaman Utama - ITERA
                </a>
            </div>
        </div>
    )
}