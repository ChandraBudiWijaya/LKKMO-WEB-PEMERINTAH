'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [isInfoActive, setIsInfoActive] = useState(false)

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/kota_1.png"
                            alt="City Image 1"
                            width={350}
                            height={250}
                            className="rounded-xl object-cover shadow-md"
                        />
                    </div>

                    {/* City Logo and Name */}
                    <div className="text-center">
                        <Image
                            src="/bandarlampung.png"
                            alt="City Logo"
                            width={120}
                            height={120}
                            className="mx-auto mb-4"
                        />
                        <h1 className="text-3xl font-extrabold text-gray-800">
                            KOTA BANDAR LAMPUNG
                        </h1>
                        <p className="text-base italic text-gray-500">
                            Sai Bumi Ruwa Jurai
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/kota_2.png"
                            alt="City Image 2"
                            width={350}
                            height={250}
                            className="rounded-xl object-cover shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Interesting Facts Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-8">Fakta Menarik!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
                            <p className="font-medium">
                                <span className="font-semibold">
                                    Surga Kopi Robusta:
                                </span>{' '}
                                Kopi lovers wajib tahu nih, Lampung adalah
                                penghasil kopi robusta terbaik di Indonesia.
                                Aromanya khas, cita rasanya bold, dan banyak
                                diekspor ke luar negeri.
                            </p>
                        </div>
                        <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
                            <p className="font-medium">
                                <span className="font-semibold">
                                    Kebun Raya Hits Pertama di Sumatera:
                                </span>{' '}
                                Buat yang cinta alam, Bandar Lampung punya Kebun
                                Raya Lembah Hijau, kebun raya pertama di
                                Sumatera! Cocok banget buat healing sambil
                                menikmati keindahan alam.
                            </p>
                        </div>
                        <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
                            <p className="font-medium">
                                <span className="font-semibold">
                                    Budaya Keren Rame-rame:
                                </span>{' '}
                                Bandar Lampung itu colorful banget! Berbagai
                                suku hidup harmonis di sini. Jangan heran kalau
                                ada festival yang merayakan keragaman budaya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hot News Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">
                        HOT NEWS!
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/berita.png"
                                alt="News"
                                width={600}
                                height={300}
                                className="w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-gray-700 mb-2">
                                    Pintu Surga ITERA
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Gedung Kuliah Umum (GKU 1) ITERA adalah
                                    salah satu fasilitas penting bagi
                                    mahasiswa...
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <a href=""></a>
                            <Image
                                src="/berita.png"
                                alt="News"
                                width={600}
                                height={300}
                                className="w-full object-cover"
                            />
                            <div className="p-6">
                                <a href="/berita">
                                <h3 className="font-bold text-lg text-gray-700 mb-2">
                                    Berita Lainnya
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Informasi terbaru seputar kegiatan di Bandar
                                    Lampung...
                                </p>
                                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information and Services Section */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Informasi */}
                    <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold mb-4">Informasi</h3>
                        <div className="flex flex-col space-y-4">
                            <a href="/informasi/institusi-pendidikan">
                            <button
                                className={`py-3 w-full rounded-lg text-white ${
                                    isInfoActive ? 'bg-blue-800' : 'bg-blue-700'
                                } hover:bg-blue-800`}
                                onClick={() => setIsInfoActive(!isInfoActive)}>
                                Daftar Institusi
                            </button>
                               </a>
                            <a href="/informasi/UMKM">
                            <button
                                className={`py-3 w-full  rounded-lg text-white ${
                                    isInfoActive ? 'bg-blue-800' : 'bg-blue-700'
                                } hover:bg-blue-800`}
                                onClick={() => setIsInfoActive(!isInfoActive)}>
                                UMKM
                            </button>
                                </a>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Layanan
                        </h3>
                        <div className="grid grid-cols-3 gap-4 py-10">
                            <CategoryButton icon="" text="E-Lapor" href="https://www.lapor.go.id/" />
                            <CategoryButton icon="" text="Pembuatan KTP" href="/layanan/pembuatan-ktp" />
                            <CategoryButton icon="" text="Pendaftaran KUA" href="/layanan/pendaftaran-kua"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const CategoryButton: React.FC<{ icon: string; text: string; href: string }> = ({ icon, text, href }) => (
    <Link href={href} passHref>
      <div className="bg-blue-800 text-white px-4 py-2 rounded flex items-center cursor-pointer">
        <span className="mr-2">{icon}</span>
        {text}
      </div>
    </Link>
  );
