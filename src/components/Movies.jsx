import React from "react";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import "./Movies.css";

function Movies() {
  return (
    <div className="">
      <Hero category={"Movies"} howto={" to watch"} herobg={"url('./img/books2.png')"} />

       {/* Show Result after search */}
       <MovieResult />

    </div>
  );
}

export default Movies;
