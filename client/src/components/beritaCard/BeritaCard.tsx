'use client';

const BeritaCard = ({ imageSrc, category, title }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-20 h-20 aspect-square object-cover"
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
  );
};

export default BeritaCard;
