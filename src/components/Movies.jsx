import React, { useState } from "react";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import BlogResult from "./BlogResult";

function Movies() {
  const [query, setQuery] = useState("");

  return (
    <div className="">
      <Hero category={"Movies"} howto={" to watch"} herobg={"url('./img/moviesbg.png')"} moviesQuery={setQuery} />

      {/* Show Result after search */}
      <MovieResult query={query} />

      {/* 2nd page */}
      {/* movies blog */}

      <BlogResult type={"movie"} />
    </div>
  );
}

export default Movies;
