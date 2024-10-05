import React from 'react'

const PendaftaranKTP: React.FC = () => {
    return (
        <div
            className="p-8 bg-gray-100 font-sans"
            style={{
                backgroundImage: `url("/ktp.png")`, // Ganti dengan path image Anda
                backgroundSize: '30%', // Untuk memastikan background menutupi area
                backgroundPosition: 'center', // Pusatkan background
                opacity: 0.9, // Atur opasitas jika diperlukan
            }}
        >
            <div
                className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
                style={{ backdropFilter: 'blur(5px)' }} // Opsional untuk menambahkan efek blur
            >
                <h1 className="text-2xl font-bold mb-4">Pendaftaran KTP</h1>
                <p className="mb-4">
                    Persyaratan utama untuk daftar KTP online adalah Anda sudah
                    berusia 17 tahun, sudah kawin atau pernah kawin. Selain itu,
                    wajib untuk melampirkan fotokopi Kartu Keluarga (KK).
                </p>
                <p className="mb-4">
                    Saat ini layanan daftar KTP online bisa dilakukan di
                    masing-masing Dukcapil Kabupaten/Kota, misalnya Dukcapil
                    Bandar Lampung yang memiliki layanan Alpukat Betawi dengan
                    langkah-langkah daftar KTP online sebagai berikut:
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">
                    Langkah-langkah Pendaftaran
                </h2>
                <ol className="list-decimal list-inside bg-white p-4 rounded shadow mb-4">
                    <li>
                        Mengakses link{' '}
                        <a
                            href="https://disdukcapil.bandarlampungkota.go.id/pendaftaran"
                            className="text-blue-600 underline">
                            https://disdukcapil.bandarlampungkota.go.id/pendaftaran
                        </a>
                    </li>
                    <li>
                        Mengisi data pada form pendaftaran dengan memilih jenis
                        pelayanan, lalu mengisi data diri diantaranya:
                        <ul className="list-disc list-inside ml-6 mt-2">
                            <li>Nama Lengkap</li>
                            <li>NIK/No identitas</li>
                            <li>Nomor KK</li>
                            <li>Nomor Telp/HP</li>
                            <li>Email</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PendaftaranKTP
