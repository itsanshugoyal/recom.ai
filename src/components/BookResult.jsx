import React, { useEffect, useState } from "react";

function BookResult({ query }) {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("https://web-production-e62e.up.railway.app/")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  //   //   .catch((error)=>{
  //   // console.error("Errror fetching data:",error});

  // }, []);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(`https://web-production-e62e.up.railway.app/books/suggest-many?q=${query}`)
      ).json();

      // set state when the data received
      setData(data);
      console.log(data);
    };

    dataFetch();
  }, [query]);
  console.log(data);


  return (
    <div className=" max-w-sm lg:w-1/4 xl:w-1/5 m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Cover    image */}
      <a href="#">
        <img
          className=" p-4 rounded-t-lg"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/713ygCSExlL.jpg"
          alt=""
        />
        {/* <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg"
        alt=""
      /> */}
      </a>

      <div className="p-1">
        {/* imdb ratting */}
        {/* <div className="flex ">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <p className="mx-2">8.4</p>
      </div> */}

        {/* Genre */}
        <p className="mx-2 font-medium text-left">Genre: Wealth, Happiness</p>

        {/* Title */}
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            The Almanack of Naval Ravikant{" "}
          </h5>
        </a>
        {/* Book description */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          The Almanack of Naval Ravikant compiles the valuable lessons of Naval Ravikant, who teaches people how to
          build wealth and achieve long-term happiness by working on a few essential skills, all while discovering the
          secrets of living a good life.
        </p>

        {/* any link */}
        <a
          href="#"
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
  );
}

export default BookResult;
