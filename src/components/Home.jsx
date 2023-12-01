import React, { Suspense, useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import MovieResult from "./MovieResult";
import PodcastResult from "./PodcastResult";
import BlogResult from "./BlogResult";
import HomeResult from "./HomeResult";
import Loader from "./Loader";

function Home() {
  const [query, setQuery] = useState("");
  const handleClickScroll = () => {
    const element = document.getElementById("homeResult");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Hero
        homehead={"Bored? Get perfect Recomendation and"}
        category={" your Interest "}
        howto={"to watch!"}
        herobg={"url('./img/books2.png')"}
        homeQuery={setQuery}
        scrollToResult={handleClickScroll}
      />
      {/* Result displayed after search */}

      <div id="homeResult">
        <Suspense fallback={<Loader />}>
          <HomeResult query={query} />
        </Suspense>
      </div>

      {/* blog of all categories */}
      <BlogResult />
    </div>
  );
}

export default Home;
