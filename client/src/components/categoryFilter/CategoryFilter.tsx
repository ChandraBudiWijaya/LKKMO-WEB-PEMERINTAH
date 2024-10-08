'use client';

const CategoryFilter = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-8">
      <button className="bg-blue-400 text-white px-4 py-2 mb-2 rounded-full">Semua Berita</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Politik</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Teknologi</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Kesehatan</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Pendidikan</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Lingkungan</button>
      <button className="bg-gray-200 text-gray-600 px-4 py-2 mb-2 rounded-full">Ekonomi</button>
    </div>
  );
};

export default CategoryFilter;
