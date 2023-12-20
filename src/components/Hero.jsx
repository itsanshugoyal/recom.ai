import React from "react";
import { useLocation } from "react-router-dom";
function Hero({
  homehead,
  category,
  howto,
  head2,
  head3,
  herobg,
  moviesQuery,
  booksQuery,
  podcastsQuery,
  homeQuery,
  scrollToResult,
}) {
  const location = useLocation();

  function submit(e) {
    e.preventDefault();
    scrollToResult();

    const q = e.target.searchQuery.value;
    if (location.pathname === "/books") {
      booksQuery(q);
    } else if (location.pathname === "/movies") {
      moviesQuery(q);
    } else if (location.pathname === "/podcasts") {
      podcastsQuery(q);
    } else if (location.pathname === "/") {
      homeQuery(q);
    }
  }

  return (
    <div
      className="relative h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: "50%",
        // backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
        backgroundImage: `${herobg}`,

        // height: "720px",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12 sm:w-11/12 w-full">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{homehead}</h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ">
                Find <span className="text-sky-900">{category}</span>
                {howto}
              </h1>
            </div>
            <h3 className="font-semibold text-xl"> Discover {category} with the power of AI</h3>
            <form onSubmit={submit}>
              <div className="mt-4 flex gap-2 max-md:flex-col mx-auto items-center justify-center text-center text-zinc-50 px-6 md:px-12">
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search Your Query"
                  className="bg-transparent border-2 border-sky-500 max-sm:py-2 px-5 max-md:py-1 sm:py-3  md:w-3/6 xl:w-3/6 rounded mb-2"
                ></input>
                <button
                  type="submit"
                  className="mb-2 max-sm:py-2 sm:py-4 sm:px-7 sm:mx-3 max-sm:w-1/2 border-2 border-sky-300 font-medium text-sm leading-snug uppercase rounded hover:bg-sky-900 hover:bg-opacity-25 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  // onClick={scrollToResult}
                >
                  Get Recomendation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
