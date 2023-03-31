import React from "react";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import "./Movies.css";

function Movies() {
  return (
    <div className="">
      <Hero category={"Movies"} howto={" to watch"} />

       {/* Show Result after search */}
       <MovieResult />

    </div>
  );
}

export default Movies;
