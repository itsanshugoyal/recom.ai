import React, { useState, Suspense, useRef } from "react";
import { Hero, MovieResult, BlogResult, Loader } from "../components";

const Movies = () => {
  const [query, setQuery] = useState("");
  const movieResultRef = useRef(null);

  const handleClickScroll = () => {
    movieResultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero
        category={"Movies"}
        howto={" to watch"}
        herobg={"url('./img/moviesbg.png')"}
        moviesQuery={setQuery}
        scrollToResult={handleClickScroll}
      />

      {/* Show Result after search */}
      <div ref={movieResultRef}>
        <Suspense fallback={<Loader />}>
          <MovieResult query={query} />
        </Suspense>
      </div>

      {/* 2nd page */}
      {/* movies blog */}

      <BlogResult type={"Movies"} />
    </div>
  );
};

export default Movies;
