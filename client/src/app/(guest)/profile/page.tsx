export default function Home() {
    return (
        <div className="px-8 md:px-4 bg-gray-50">
            {/* Sejarah Section */}
            <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-center">SEJARAH</h2>
                <p className="text-justify mt-4">
                    Kota Bandar Lampung dikenal sebagai daerah transmigran saat
                    program transmigrasi penduduk era Orde Baru. Mayoritas
                    transmigran berasal dari Pulau Jawa. Berdiri sejak 1682,
                    kota yang terkenal dengan julukan "Tapis Berseri" ini kini
                    menjadi sentra penggerak ekonomi, jasa, dan sosial politik
                    di Provinsi Lampung.
                </p>
            </section>

            {/* Visi Section */}
            <section className="bg-[#0064B0] border text-center text-white p-8 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Visi</h2>
                <p className="mt-2 font-semibold">
                    Bandar Lampung Sehat, Cerdas, Beriman, Berbudaya, Nyaman,
                    Unggul, dan Berdaya Saing Berbasis Ekonomi untuk Kemakmuran
                    Rakyat.
                </p>
            </section>

            {/* Misi Section */}
            <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md p-6 px-16">
                <h2 className="text-lg font-semibold text-center">Misi</h2>
                <ol className="list-decimal list-inside mt-4 text-left space-y-2">
                    <li>
                        Meningkatkan kualitas dan pelayanan kesehatan
                        masyarakat.
                    </li>
                    <li>
                        Meningkatkan kualitas dan pelayanan pendidikan
                        masyarakat.
                    </li>
                    <li>
                        Meningkatkan daya dukung infrastruktur dalam skala
                        mantap untuk mendukung pengembangan ekonomi dan
                        pelayanan sosial.
                    </li>
                    <li>
                        Mengembangkan dan memperkuat ekonomi daerah untuk
                        meningkatkan kesejahteraan rakyat.
                    </li>
                    <li>
                        Mengembangkan masyarakat religius, berbudaya dan menjaga
                        nilai-nilai budaya lokal.
                    </li>
                    <li>
                        Mewujudkan pembangunan yang bersih, transparan, dan
                        akuntabel.
                    </li>
                    <li>
                        Mempertahankan dan meningkatkan kualitas lingkungan
                        hidup yang sehat, sejuk, bersih, dan nyaman.
                    </li>
                </ol>
            </section>

            {/* Wali Kota & Wakil Wali Kota Section */}
            <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center">
                    <img
                        src="/eva_dwiana.png"
                        alt="Eva Dwiana"
                        className="mx-auto rounded-lg shadow-md w-40 h-40"
                    />
                    <p className="mt-4 text-lg font-semibold">Eva Dwiana</p>
                    <p>Periode: 2021 - 2026</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center">
                    <img
                        src="/deddy_amarullah.jpg"
                        alt="Deddy Amarullah"
                        className="mx-auto rounded-lg shadow-md w-40 h-40"
                    />
                    <p className="mt-4 text-lg font-semibold">
                        Deddy Amarullah
                    </p>
                    <p>Periode: 2021 - 2026</p>
                </div>
            </section>

            {/* Informasi General Section */}
            <section className="my-8 bg-white border border-gray-300 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-center mb-6">INFORMASI GENERAL</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">Logo dan Lagu Daerah</h3>
                        <div className="flex items-center mb-4">
                            <img
                                src="/bandarlampung.png"
                                alt="Logo Bandar Lampung"
                                className="w-20 h-20 mr-4"
                            />
                            <div>
                                <p className="font-semibold">Logo</p>
                                <p className="text-sm">Logo Bandar Lampung mencerminkan identitas dan kekayaan budaya kota.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-4xl mr-4">🎵</span>
                            <div>
                                <p className="font-semibold">Lagu Daerah</p>
                                <p className="text-sm">Tanoh Lado, Sai Bumi Ruwa Jurai, Cangget Agung dsb.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">Agama Mayoritas</h3>
                        <div className="flex justify-center space-x-4">
                            <span className="text-blue-500 text-4xl">☪</span>
                            <span className="text-blue-500 text-4xl">✝</span>
                        </div>
                        <p className="text-center mt-4">Islam dan Kristiani</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="border p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">Lokasi</h3>
                        <span className="text-4xl block text-center mb-4">📍</span>
                        <p className="text-sm text-center">
                            Bandar Lampung terletak di pesisir tenggara Pulau Sumatra, berdekatan dengan Teluk Lampung.
                        </p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">Luas Area</h3>
                        <img
                            src="/balam_geografis.png"
                            alt="Peta Bandar Lampung"
                            className="w-24 h-24 mx-auto mb-4"
                        />
                        <p className="text-sm text-center">
                            Luas wilayah Kota Bandar Lampung adalah sekitar 197,22 km² (76,15 mil persegi)
                        </p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h3 className="font-semibold mb-4">Populasi</h3>
                        <span className="text-4xl block text-center mb-4">👥</span>
                        <p className="text-sm text-center">
                            Populasi Kota Bandar Lampung pada pertengahan tahun 2023 mencapai sekitar 1.096.936 jiwa.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
