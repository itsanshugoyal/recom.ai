import React from "react";
import Hero from "./Hero";
import "./Home.css";
import HomeResult from "./HomeResult";

function Home() {
  return (
    <div>
      <Hero homehead={"Bored? Get perfect Recomendation and"} category={" your Interest "} howto={"to watch!"} />

      <h1 className="font-medium text-3xl  left-0 text-left mx-8 mb-10 underline">Movies/Webseries</h1>
      <div className="container flex justify-between">
      <HomeResult />
      <HomeResult />
      <HomeResult />
      <HomeResult />

      </div>
      
    </div>
  );
}

export default Home;
