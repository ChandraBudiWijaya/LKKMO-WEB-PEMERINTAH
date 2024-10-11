import React from 'react';

const UMKMInfoPage: React.FC = () => {
  return (
    <div className="bg-blue-100 min-h-screen text-white bg-cover bg-center" style={{backgroundImage: "url(/umkm_page.jpg)"}}>
      {/* Navigation */}
      <nav className="bg-blue-900 bg-opacity-50 p-4">
        <p className="text-sm">Informasi &gt; Informasi UMKM</p>
      </nav>

      {/* Main content*/}
      <div className="relative">
        <div className="absolute inset-0 bg-cover"/>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 " />
        <div className="relative z-10 p-6">
          <div className='flex flex-col md:flex-row space-x-40'>
            {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold leading-tight">
              USAHA MIKRO,<br />
              KECIL DAN<br />
              MENENGAH
            </h1>
            <div className="bg-blue-900 mt-8 p-4 rounded-lg mb-8 max-w-2xl font-bold">
            <p className="text-sm">
              UMKM adalah usaha kerakyatan yang saat ini mendapat perhatian dan
              keistimewaan yang diamanatkan oleh undang-undang, antara lain bantuan
              kredit usaha dengan bunga rendah, kemudahan persyaratan izin usaha,
              bantuan pengembangan usaha dari lembaga pemerintah, serta beberapa
              kemudahan lainnya.
            </p>
          </div>
          </header>

          {/* Requirements Section */}
          <div className="bg-white text-blue-900 p-4 rounded-lg mb-28 max-2-1">
            <h2 className="text-xl font-semibold mb-4">Syarat Mengurus Izin UMKM :</h2>
            <ol className="list-decimal list-inside">
              <li>Surat Pengantar dari RT, RW, dan Kelurahan</li>
              <li>Fotokopi KTP</li>
              <li>Fotokopi Kartu Keluarga</li>
              <li>Pas Foto berwarna 4x6 sejumlah 2 lembar</li>
              <li>Mengisi formulir UMKM</li>
            </ol>
          </div>
          </div>
          
          {/* Categories */}
          <div className="flex space-x-40 justify-around">
            <CategoryButton icon="🍽️" text="KULINER" page='/informasi/UMKM/detail-umkm'/>
            <CategoryButton icon="🎨" text="KERAJINAN" page='/informasi/UMKM/detail-umkm' />
            <CategoryButton icon="👚" text="FASHION" page='/informasi/UMKM/detail-umkm'/>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryButton: React.FC<{ icon: string; text: string; page:string }> = ({ icon, text, page }) => (
  <a href={page}>
  <button className="bg-blue-900 text-white font-bold px-10 text-xl py-5 rounded flex items-center cursor-pointer">
    <span className="mr-2">{icon}</span>
    {text}
  </button>

  </a>
);

export default UMKMInfoPage;