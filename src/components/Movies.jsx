import React, { useState, Suspense, useRef } from "react";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import BlogResult from "./BlogResult";
import Loader from "./Loader";

function Movies() {
  const [query, setQuery] = useState("");

  const handleClickScroll = () => {
    const element = document.getElementById("movieResult");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      <div id="movieResult">
        <Suspense fallback={<Loader />}>
          <MovieResult query={query} />
        </Suspense>
      </div>

      {/* 2nd page */}
      {/* movies blog */}

      <BlogResult type={"movie"} />
    </div>
  );
}

export default Movies;
