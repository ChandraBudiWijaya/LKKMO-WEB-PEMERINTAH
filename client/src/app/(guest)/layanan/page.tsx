'use client';

// import Breadcrumb from "@/components/Breadcrumb"; // Path ini sesuaikan dengan file Breadcrumb Anda

export default function Home() {
  return (
    <div className="px-8 py-8">
      {/* BreadCrumb Navigation */}
      {/* <Breadcrumb /> */}

      <h1 className="text-3xl font-bold mb-6">Layanan Publik</h1>

      {/* Grid Layout for the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Pengaduan Masyarakat Card */}
        <a href="https://www.lapor.go.id/" className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow duration-300">
          <img src="/pengaduan.png" alt="Pengaduan Masyarakat" className="w-full h-60 object-cover mb-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Pengaduan Masyarakat</h3>
            <p className="text-gray-600">
              Layanan Aspirasi dan Pengaduan Online Rakyat. Sampaikan laporan Anda langsung kepada instansi pemerintah berwenang di bawah ini!
            </p>
          </div>
          <span className="mt-4 text-blue-600 font-semibold">
            Selengkapnya &gt;
          </span>
        </a>

        {/* Pembuatan KTP Card */}
        <a href="/layanan/pembuatan-ktp" className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow duration-300">
          <img src="/ktp.png" alt="Pembuatan KTP" className="w-full h-60 object-cover mb-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Pembuatan KTP</h3>
            <p className="text-gray-600">
              Tujuan dari pelayanan pendaftaran online ini adalah untuk memudahkan masyarakat dalam membuat permohonan pelayanan dengan tidak mengantre di loket Disdukcapil Kota Bandar Lampung.
            </p>
          </div>
          <span className="mt-4 text-blue-600 font-semibold">
            Selengkapnya &gt;
          </span>
        </a>

        {/* Pendaftaran KUA Card */}
        <a href="/layanan/pendaftaran-kua" className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:scale-105 transition-shadow duration-300">
          <img src="/KUA.png" alt="Pendaftaran KUA" className="w-full h-60 object-cover mb-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Pendaftaran KUA</h3>
            <p className="text-gray-600">
              Pernikahan adalah ibadah terutama bagi sepasang suami dan istri. Pernikahan menjadi awal kehidupan banyak orang sehingga dianggap sesuatu yang sakral.
            </p>
          </div>
          <span className="mt-4 text-blue-600 font-semibold">
            Selengkapnya &gt;
          </span>
        </a>

      </div>
    </div>
  );
}
