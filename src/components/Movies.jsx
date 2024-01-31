import React, { useState, Suspense, useRef } from "react";
import { Hero, MovieResult, BlogResult, Loader } from "../components";
import { fetchData } from "../services/fetchdata";

const Movies = () => {
  const [query, setQuery] = useState("");
  const movieResultRef = useRef(null);

  const handleClickScroll = () => {
    movieResultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Hero
        category={"Movies"}
        howto={" to watch"}
        herobg={"url('./img/moviesbg.webp')"}
        moviesQuery={setQuery}
        scrollToResult={handleClickScroll}
      />

      {/* Show Result after search */}
      <section ref={movieResultRef}>
        {query.trim() !== "" && (
          <Suspense fallback={<Loader />}>
            <MovieResult
              query={query}
              resource={fetchData(
                `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`
              )}
            />
          </Suspense>
        )}
      </section>

      {/* 2nd page */}
      {/* movies blog */}
      <BlogResult type={"Movies"} />
    </main>
  );
};

export default Movies;
