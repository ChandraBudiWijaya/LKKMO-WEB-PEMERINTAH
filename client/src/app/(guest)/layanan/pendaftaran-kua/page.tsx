import React from "react";

const PendaftaranKUA: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 font-sans">
      <h1 className="text-2xl font-bold mb-4">Pendaftaran KUA</h1>
      <p className="mb-4">
        Pernikahan adalah ibadah terlama bagi sepasang suami dan istri. Pernikahan menjadi awal kehidupan
        banyak orang sehingga dianggap sesuatu yang sakral. Tujuan menikah bagi setiap orang tidak sama,
        bahkan dua individu dalam sebuah hubungan juga mempunyai tujuan yang berbeda. Yuk simak dokumen
        persyaratan yang dibawa calon pengantin ke KUA!
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Dokumen yang dibawa calon pengantin ke KUA</h2>
      <ol className="list-decimal list-inside mb-4 bg-white p-4 rounded shadow">
        <li>Surat Keterangan untuk nikah (didapat dari kelurahan)</li>
        <li>Persetujuan calon mempelai</li>
        <li>Foto copy akte kelahiran</li>
        <li>Foto copy KTP</li>
        <li>Foto copy Kartu Keluarga</li>
        <li>Pas foto 2x3 4 lembar</li>
        <li>Pas foto 4x6 2 lembar</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Dokumen Tambahan</h2>
      <ol className="list-decimal list-inside bg-white p-4 rounded shadow">
        <li>Surat Dispensasi Pengadilan Agama bagi calon pengantin berusia dibawah 19 tahun</li>
        <li>Surat Akte Cerai (jika calon pengantin sudah cerai)</li>
        <li>Surat Izin Komandan (jika calon pengantin TNI atau Polri)</li>
        <li>Surat Akta Kematian (jika calon pengantin duda/janda ditinggal mati)</li>
        <li>Surat Rekomendasi dari KUA setempat (jika pernikahan di luar wilayah KUA)</li>
      </ol>
    </div>
  );
};

export default PendaftaranKUA;
