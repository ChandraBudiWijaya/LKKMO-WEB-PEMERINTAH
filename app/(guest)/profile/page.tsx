export default function Home() {
  return (
    <div className="px-8 md:px-4 bg-gray-50">
      {/* Sejarah Section */}
      <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-center">SEJARAH</h2>
        <p className="text-justify mt-4">
          Kota Bandar Lampung dikenal sebagai daerah transmigran saat program transmigrasi penduduk era Orde Baru.
          Mayoritas transmigran berasal dari Pulau Jawa. Berdiri sejak 1682, kota yang terkenal dengan julukan 
          "Tapis Berseri" ini kini menjadi sentra penggerak ekonomi, jasa, dan sosial politik di Provinsi Lampung.
        </p>
      </section>

      {/* Visi Section */}
      <section className="bg-[#0064B0] border text-center text-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Visi</h2>
        <p className="mt-2 font-semibold">
          Bandar Lampung Sehat, Cerdas, Beriman, Berbudaya, Nyaman, Unggul, dan Berdaya Saing 
          Berbasis Ekonomi untuk Kemakmuran Rakyat.
        </p>
      </section>

      {/* Misi Section */}
      <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md p-6 px-16">
        <h2 className="text-lg font-semibold text-center">Misi</h2>
        <ol className="list-decimal list-inside mt-4 text-left space-y-2">
          <li>Meningkatkan kualitas dan pelayanan kesehatan masyarakat.</li>
          <li>Meningkatkan kualitas dan pelayanan pendidikan masyarakat.</li>
          <li>Meningkatkan daya dukung infrastruktur dalam skala mantap untuk mendukung pengembangan ekonomi dan pelayanan sosial.</li>
          <li>Mengembangkan dan memperkuat ekonomi daerah untuk meningkatkan kesejahteraan rakyat.</li>
          <li>Mengembangkan masyarakat religius, berbudaya dan menjaga nilai-nilai budaya lokal.</li>
          <li>Mewujudkan pembangunan yang bersih, transparan, dan akuntabel.</li>
          <li>Mempertahankan dan meningkatkan kualitas lingkungan hidup yang sehat, sejuk, bersih, dan nyaman.</li>
        </ol>
      </section>

      {/* Wali Kota & Wakil Wali Kota Section */}
      <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center">
          <img src="/path-to-wali-kota-image.jpg" alt="Eva Dwiana" className="mx-auto rounded-lg shadow-md w-40 h-40" />
          <p className="mt-4 text-lg font-semibold">Eva Dwiana</p>
          <p>Periode: 2021 - 2026</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center">
          <img src="/path-to-wakil-wali-kota-image.jpg" alt="Deddy Amarullah" className="mx-auto rounded-lg shadow-md w-40 h-40" />
          <p className="mt-4 text-lg font-semibold">Deddy Amarullah</p>
          <p>Periode: 2021 - 2026</p>
        </div>
      </section>

      {/* Informasi General Section */}
      <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-center mb-4">Informasi General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center p-4">
          <div className="border-t pt-4">
            <h3 className="font-semibold">Logo dan Lagu Daerah</h3>
              <div className="flex flex-row gap-4 p-4">
                <img src="bandarlampung.png" alt="Bandar Lampung" className="rounded-lg shadow-md w-20 h-30"/>
                <p className="mt-2">Logo Bandar Lampung mencerminkan identitas dan kekayaan budaya kota.</p>
              </div>
              <div className="flex flex-row gap-4 p-4">
                <img src="bandarlampung.png" alt="Bandar Lampung" className="rounded-lg shadow-md w-20 h-30"/>
                <p className="mt-2">Lagu Daerah: Tanoh Lado, Sai Bumi Ruwa Jurai, Cangget Agung, dsb.</p>
              </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold">Agama Utama</h3>
            <p className="mt-2">Islam dan Kristiani</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-32 p-4 text-center">
          <div className="border-t pt-4">
            <h3 className="font-semibold">Lokasi</h3>
            <p className="mt-2">Populasi Kota Bandar Lampung pada 2023 mencapai sekitar 1.096.936 jiwa.</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold">Populasi</h3>
            <p className="mt-2">Populasi Kota Bandar Lampung pada 2023 mencapai sekitar 1.096.936 jiwa.</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold">Luas Area</h3>
            <p className="mt-2">Populasi Kota Bandar Lampung pada 2023 mencapai sekitar 1.096.936 jiwa.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
