import React from 'react'

const UmkmKuliner: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
            {/* Breadcrumb Section */}
            <div className="bg-gray-900 bg-opacity-70 p-4">
                <p className="text-sm">Informasi &gt; Kuliner</p>
            </div>

            {/* Main Container */}
            <div className="container mx-auto py-16 px-4 md:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold uppercase mb-4">
                        Usaha Mikro, <br /> Kecil dan <br /> Menengah <br />{' '}
                        (Kuliner)
                    </h1>
                    <p className="text-base leading-relaxed max-w-2xl">
                        UMKM Kuliner adalah salah satu jenis usaha yang bergerak
                        di bidang makanan dan minuman. Jenis usaha ini sangat
                        diminati oleh masyarakat karena potensinya yang besar
                        dalam memenuhi kebutuhan konsumsi sehari-hari, baik di
                        kota maupun pedesaan.
                    </p>
                </div>

                {/* Requirements Section */}
                <div className="bg-blue-800 bg-opacity-70 p-6 rounded-lg shadow-lg mb-8 max-w-3xl">
                    <h2 className="text-xl font-bold mb-4">
                        Syarat Mengurus Izin UMKM Kuliner:
                    </h2>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Surat Pengantar dari RT, RW, dan Kelurahan</li>
                        <li>Fotokopi KTP</li>
                        <li>Fotokopi Kartu Keluarga</li>
                        <li>Pas Foto berwarna 4x6 sejumlah 2 lembar</li>
                        <li>Mengisi formulir IUMKM</li>
                        <li>
                            Sertifikat Kelayakan Kesehatan dari Dinas Kesehatan
                        </li>
                    </ol>
                </div>

                {/* Benefits Section */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg max-w-3xl">
                    <h2 className="text-lg font-bold mb-4">
                        Keuntungan UMKM Kuliner:
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Tingkat permintaan pasar yang tinggi.</li>
                        <li>Dapat dimulai dengan modal kecil.</li>
                        <li>
                            Fleksibilitas dalam pengembangan menu dan konsep.
                        </li>
                        <li>
                            Potensi keuntungan yang tinggi jika dikelola dengan
                            baik.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UmkmKuliner
