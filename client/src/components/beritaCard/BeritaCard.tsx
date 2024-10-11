'use client';

const BeritaCard = ({ imageSrc, category, title }) => {
  return (
    <a href="/berita/detail-berita">
      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />

        {/* Category and Title */}
        <div className="p-4">
          <span className="text-xs text-blue-500 font-semibold uppercase">
            {category}
          </span>

          {/* Title */}
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            {title}
          </h3>
        </div>
      </div>
    </a>

  );
};

export default BeritaCard;
