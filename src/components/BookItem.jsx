import React from "react";

function BookItem({ data }) {
  return (
    <div>
      <div className="group relative shadow-inner rounded-lg">
        {/*1 image */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80 sm:h-40">
          <img src={data.cover_image_url} alt={data.title} className="h-full w-full object-fill object-center " />
        </div>

        <div className="mt-4 flex justify-between group-hover:opacity-75">
          {/* genre */}
          <p className="text-sm text-left ml-2 font-medium text-gray-900">{data.author}</p>
        </div>

        <div className="px-2  h-14">
          {/* title */}
          <h3 className=" text-gray-700 my-2 font-extrabold text-lg">
            <a href={data.preview_url} target="blank">
              <span aria-hidden="true" className="absolute inset-0 flex" />
              {data.title}
            </a>
          </h3>
          {/* overview */}
          <p className="flex mt-1 text-sm text-gray-500 line-clamp-3">{data.description}</p>
        </div>

        {/* Trailer button */}
        <div className="group-hover:opacity-100">
          {/* <span className="text-3xl font-bold text-gray-500 tracking-wider leading-relaxed font-sans">
            Paris city of light
          </span> */}
          <div className="pt-8 text-center">
            {/* any link */}
            <a
              href={data.preview_url}
              target="blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
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
        {/* Overlay card */}
        <div className="p-1 hidden sm:group-hover:block absolute top-3 sm:left-14 md:left-1/4 z-50 w-full">
          <div className="flex flex-col gap-3 items-start bg-white/90 rounded-xl px-4 py-3 shadow-md w-full">
            <div className="flex items-start w-full mb-3">
              {/* image */}

              <div className="w-12 h-12 rounded-lg  overflow-hidden mr-2">
                <img src={data.cover_image_url} alt={data.title} className="relative bg-no-repeat bg-cover z-10" />
              </div>
              {/* card details */}
              <div className="flex flex-col">
                {/* title */}
                <h3 className="text-sm font-bold">{data.title}</h3>
                {/* year */}
                {/* <p className="text-sm text-gray-600 font-bold">{release_date}</p> */}
              </div>
            </div>
            {/* overview */}
            <p className="h-3/4 text-xs">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
