import React from "react";

function BookItem({ data }) {
  return (
    <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 bg-[#181A1B] flex flex-col justify-between h-full w-[260px] sm:w-[300px] lg:w-[320px] mx-auto">
      {/* Book Cover */}
      <div className="relative w-full h-56 bg-[#22272E] rounded-t-lg">
        <img src={data.cover_image_url} alt={data.title} className="h-full w-full object-cover rounded-t-lg" />
      </div>

      {/* Book Details */}
      <div className="p-3 bg-[#181A1B] text-white flex flex-col flex-grow">
        {/* Title & Author */}
        <h3 className="text-lg font-bold text-[#E2E8F0] mb-1 mt-9 text-center">{data.title}</h3>
        <p className="text-sm font-medium text-gray-400 text-center mt-2">{data.author}</p>

        {/* Description */}
        {data.description ? (
          <p className="text-xs text-gray-400 line-clamp-3 h-12 mt-2">{data.description}</p>
        ) : (
          <div className="h-12 flex items-center justify-center text-gray-500 text-xs"></div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="hidden sm:group-hover:flex flex-col absolute inset-0 bg-[#22272E]/80 p-4 rounded-lg transition-opacity duration-300 shadow-xl pointer-events-none">
        <div className="flex items-start">
          <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
            <img src={data.cover_image_url} alt={data.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">{data.title}</h3>
            <p className="text-xs text-gray-300">{data.author}</p>
          </div>
        </div>
        <p className="text-xs text-gray-300 mt-2 leading-snug">
          {(data.description ? data.description.slice(0, 120) : "No description available") +
            (data.description && data.description.length > 120 ? "..." : "")}
        </p>
      </div>

      {/* Read Button */}
      <div className="flex justify-center items-center p-3 bg-[#181A1B] relative z-10">
        <a
          href={data.preview_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#7B61FF] to-[#A3DAFF] rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105 focus:ring-4 focus:ring-[#7B61FF]/50"
        >
          Read Now
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BookItem;
