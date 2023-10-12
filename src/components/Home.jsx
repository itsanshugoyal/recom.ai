import React, { useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import PodcastResult from "./PodcastResult";
import BlogResult from "./BlogResult";

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
      {query && <h1 className="font-bold text-5xl  left-0 text-left mt-5 mx-8 mb-10 ">Movies/Webseries</h1>}
      <MovieResult query={query} />
      {query && <h1 className="font-bold text-5xl  left-0 text-left mt-5 mx-8 mb-10 ">Books</h1>}
      <BookResult query={query} />
      {/* {query && <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Podcasts</h1>}{" "}
      <PodcastResult query={query} /> */}

      {/* blog of all categories */}
      <BlogResult />
    </div>
  );
}

export default Home;
