// src/components/Hero.jsx

import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "./SearchBox";

function Hero({ page, howto, herobg, scrollToResult }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = (event) => {
    event.preventDefault();
    scrollToResult();

    let params = event.target.searchQuery.value;
    setSearchParams({ q: params });
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `${herobg}`,
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-4 sm:px-6 md:px-12 w-full mx-auto">
            <div className="mb-6 md:mb-12">
              {page === "Home" && (
                <h1
                  aria-label="Get Recommendation"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent text-white te"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.75)" }}
                >
                  Bored? Get perfect
                  <br />
                  Recommendation for{" "}
                  <span className="text-sky-800 bg-transparent inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-7 text-left leading-tight [&_li]:block">
                      <li className="max-sm:text-center">Movies</li>
                      <li className="max-sm:text-center">Webseries</li>
                      <li className="max-sm:text-center">Anime</li>
                      <li className="max-sm:text-center">Books</li>
                      <li className="max-sm:text-center">Manga</li>
                      <li className="max-sm:text-center">Music</li>
                      <li className="max-sm:text-center">Podcasts</li>
                      <li aria-hidden="true" className="text-center">
                        Movies
                      </li>
                    </ul>
                  </span>
                </h1>
              )}
              {page !== "Home" && (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Find <span className="text-sky-900">{page}</span>
                  {howto}
                </h1>
              )}
            </div>
            <p className="font-semibold md:text-xl">Discover with the power of AI</p>
            <SearchBox submit={submit} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
