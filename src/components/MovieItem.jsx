import React from "react";

function MovieItem({ data }) {
  return (
    <div className="relative group shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 bg-[#181A1B] flex flex-col justify-between h-full w-[280px] sm:w-[320px] lg:w-[360px] mx-auto">
      {/* Movie Image */}
      <div className="relative aspect-w-1 aspect-h-1 w-full bg-[#22272E] rounded-t-lg">
        <img src={data.poster_url} alt={data.title} className="h-full w-full object-cover rounded-t-lg" />
      </div>

      {/* Movie Details */}
      <div className="p-4 bg-[#181A1B] text-white flex flex-col flex-grow">
        {/* Genre & Rating */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-[#A3DAFF]">{data.genre_names.toString()}</p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-[#7B61FF]">{Math.round(data.vote_average * 10) / 10}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#E2E8F0] mb-1">{data.title}</h3>

        {/* Overview */}
        <p className="text-sm text-gray-400 line-clamp-3 h-14 flex-grow">{data.overview}</p>
      </div>

      {/* Hover Overlay (No Blurry Text, Does Not Cover Button) */}
      <div className="hidden sm:group-hover:flex flex-col absolute inset-0 bg-[#22272E]/80 p-4 rounded-lg transition-opacity duration-300 shadow-xl pointer-events-none">
        <div className="flex items-start">
          {/* Small Poster Image */}
          <div className="w-14 h-14 rounded-lg overflow-hidden mr-3">
            <img src={data.poster_url} alt={data.title} className="w-full h-full object-cover" />
          </div>
          {/* Title & Year */}
          <div>
            <h3 className="text-lg font-bold text-white">{data.title}</h3>
            <p className="text-sm text-gray-300">{data.release_date}</p>
          </div>
        </div>
        {/* Expanded Overview */}
        <p className="text-xs text-gray-300 mt-3 leading-snug">
          {data.overview.length > 150 ? data.overview.slice(0, 150) + "..." : data.overview}
        </p>
      </div>

      {/* Button (Now Clickable) */}
      <div className="flex justify-center items-center p-4 bg-[#181A1B] relative z-10">
        <a
          href={data.trailer_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#7B61FF] to-[#A3DAFF] rounded-lg shadow-lg hover:shadow-2xl transition-all hover:scale-105 focus:ring-4 focus:ring-[#7B61FF]/50"
        >
          Watch Trailer
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

export default MovieItem;
