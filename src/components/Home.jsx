import React from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import "./Home.css";
import MovieResult from "./MovieResult";
import PodcastResult from "./PodcastResult";

function Home() {
  return (
    <div>
      <Hero homehead={"Bored? Get perfect Recomendation and"} category={" your Interest "} howto={"to watch!"} />
      {/* Result displayed after search */}
      <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Movies/Webseries</h1>
      <div className="container flex-wrap flex justify-around max-w-full ">
        <MovieResult />
        <MovieResult />
        <MovieResult />
        <MovieResult />
      </div>

      <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Books</h1>
      <div className="container flex-wrap flex justify-around max-w-full">
        <BookResult />
        <BookResult />
        <BookResult />
        <BookResult />
      </div>
      <h1 className="font-medium text-3xl  left-0 text-left mt-5 mx-8 mb-10 underline">Podcasts</h1>
      <div className="container flex-wrap flex justify-around max-w-screen-xl ">
        <PodcastResult />
        <PodcastResult />
        <PodcastResult />
        <PodcastResult />
      </div>
    </div>
  );
}

export default Home;
