import React, { useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import PodcastResult from "./PodcastResult";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero
        homehead={"Bored? Get perfect Recomendation and"}
        category={" your Interest "}
        howto={"to watch!"}
        herobg={"url('./img/books2.png')"}
        homeQuery={setQuery}
      />
      {/* Result displayed after search */}
      {query && <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Movies/Webseries</h1>}
      <MovieResult query={query} />
      {query && <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Books</h1>}{" "}
      <BookResult query={query} />
      {/* {query && <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Podcasts</h1>}{" "}
      <PodcastResult query={query} /> */}
    </div>
  );
}

export default Home;
