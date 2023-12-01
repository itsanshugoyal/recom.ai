import React from "react";

function MovieItem({ title, genre, cover_image, external_link, overview, rating, release_date }) {
  return (
    <div>
      <div className="group relative shadow-inner rounded-lg">
        {/*1 image */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={cover_image} alt={title} className="h-full w-full object-fill object-center lg:h-full lg:w-full" />
        </div>

        {/*2 details of card  */}
        <div className="mt-4 flex justify-between group-hover:opacity-75">
          {/* genre */}
          <div>
            <p className="text-sm text-left ml-2 font-medium text-gray-900">{genre}</p>
          </div>
          {/* rating */}
          <div className="flex">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className=" mx-2 text-sm font-medium text-gray-900">{Math.round(rating * 10) / 10}</p>
          </div>
        </div>

        <div className="px-2">
          {/* title */}
          <h3 className=" text-gray-700 my-2 font-extrabold text-lg">
            <a href={external_link}>
              <span aria-hidden="true" className="absolute inset-0 flex" />
              {title}
            </a>
          </h3>
          {/* overview */}
          <p className="flex mt-1 text-sm text-gray-500 line-clamp-3 h-14">{overview}</p>
        </div>

        {/* Trailer button */}
        <div className="group-hover:opacity-100">
          {/* <span className="text-3xl font-bold text-gray-500 tracking-wider leading-relaxed font-sans">
            Paris city of light
          </span> */}
          <div className="pt-8 text-center">
            {/* any link */}
            <a
              href={external_link}
              target="blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            >
              Trailer
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
        {/* Overlay card */}
        <div className="hidden group-hover:block absolute top-0 left-1/4 z-50 w-full">
          <div className="flex flex-col gap-3 items-start bg-white/90  rounded-xl px-4 py-3 shadow-md w-full">
            <div className="flex items-start w-full mb-3">
              {/* image */}

              <div className="w-12 h-12 rounded-lg  overflow-hidden mr-2">
                <img src={cover_image} alt={title} className="relative bg-no-repeat bg-cover z-10" />
              </div>
              {/* card details */}
              <div className="flex flex-col">
                {/* title */}
                <h3 className="text-sm font-bold">{title}</h3>
                {/* year */}
                <p className="text-sm text-gray-600 font-bold">{release_date}</p>
              </div>
            </div>
            {/* overview */}
            <p className="h-3/4 text-xs">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
