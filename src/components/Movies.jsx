import React, { useState } from "react";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import BlogContainer from "./BlogContainer";

function Movies() {
  const [query, setQuery] = useState("");

  return (
    <div className="">
      <Hero category={"Movies"} howto={" to watch"} herobg={"url('./img/moviesbg.png')"} moviesQuery={setQuery} />

      {/* 2nd page */}
      {/* movies blog */}

      <BlogContainer type={"movie"} />

      {/* Show Result after search */}
      <MovieResult query={query} />
    </div>
  );
}

export default Movies;
