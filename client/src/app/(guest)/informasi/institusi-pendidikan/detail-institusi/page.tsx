import React from 'react'
import { Calendar, GraduationCap, Phone } from 'lucide-react'

const DetailInstansi: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="text-black p-6">
                <nav className="text-sm text-black mb-2">
                    Informasi &gt; Daftar Institusi &gt; Institut Teknologi
                    Sumatera
                </nav>
                <h1 className="text-4xl font-bold">
                    Institut Teknologi Sumatera
                </h1>
            </header>

            {/* Banner Section */}
            <div className="relative h-96">
                <img
                    src="/lataritera.png"
                    alt="ITERA Campus"
                    className="w-full h-full bg-opacity-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-base px-6 text-center leading-relaxed">
                        Institut Teknologi Sumatera disingkat ITERA, adalah
                        sebuah perguruan tinggi negeri yang terdapat di Provinsi
                        Lampung di Pulau Sumatra . ITERA didirikan berdasarkan
                        Peraturan Presiden Nomor 124 Tahun 2014 tentang
                        Pendirian Institut Teknologi Sumatera (Lembaran Negara
                        Republik Indonesia Tahun 2014 Nomor 253) yang ditetapkan
                        Presiden Republik Indonesia Dr. H. Susilo Bambang
                        Yudhoyono pada tanggal 6 Oktober 2014 dan diundangkan
                        tanggal 9 Oktober 2014.
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
                            src="/nyoman.png"
                            alt="Prof. Dr. I Nyoman Pugeg Aryantha"
                            className="mx-auto w-40 h-52 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                            Prof. Dr. I Nyoman Pugeg Aryantha
                        </p>
                    </div>

                    {/* Alamat Section */}
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Alamat</h2>
                        <div className="relative w-full h-64">
                            <a
                                target="blank"
                                href="https://maps.app.goo.gl/Pco8MchziZ9yeyxRA">
                                <img
                                    src="/lokasiitera.png"
                                    alt="MapsItera"
                                    className="mx-auto w-full h-full scale-90 object-cover rounded-lg mb-4"
                                />
                            </a>
                        </div>
                        <p className="text-gray-700 mt-4">
                            Jalan Terusan Ryacudu, Way Hui, Kecamatan Jati
                            Agung, Lampung Selatan
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <Calendar className="mr-2" />
                    Tahun Berdiri: 2014
                </div>
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <GraduationCap className="mr-2" />
                    Akreditasi: B
                </div>
                <div className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded transition">
                    <Phone className="mr-2" />
                    Kontak
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-center pb-8">
                <a href="https://www.itera.ac.id/" target='blank' className="text-blue-600 hover:underline text-sm">
                    Selengkapnya &gt; silahkan hubungi web Halaman Utama - ITERA
                </a>
            </div>
        </div>
    )
}

export default DetailInstansi