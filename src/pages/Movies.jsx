import React, { Suspense, useEffect, useRef, useState } from "react";
import { Hero, MovieResult, BlogResult, Loader } from "../components";
import { fetchData } from "../services/fetchdata";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Movies = () => {
  const movieResultRef = useRef(null);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  const handleClickScroll = () => {
    movieResultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (q !== null) handleClickScroll();
  }, [q]);

  return (
    <main>
      <Helmet>
        <title>Find personalized movie recommendations - Recommendmesomething</title>
        <meta
          name="description"
          content="Discover the best movies to watch with Recommendmesomething, your ultimate movie suggestion companion. Our recommendation engine goes beyond generic suggestions, ensuring personalized movie suggestions for your unique preferences. Find good movies across genres, get movie suggestions on Amazon Prime, Netflix, Disney, etc., and explore curated picks for an exceptional viewing experience."
        />
        <meta
          name="keywords"
          content="movie recommendation, best movies to watch, personalized movie picks, Netflix movie suggestions, best movies 2024, top-rated movies"
        />
        <meta property="og:title" content="Find personalized movie recommendations - Recommendmesomething" />
        <meta
          property="og:description"
          content="Get the best movie recommendations tailored to your taste. Find hidden gems, trending films, and must-watch classics with Recommendmesomething."
        />
      </Helmet>

      <Hero
        page={"Movies"}
        howto={"to watch"}
        herobg={"url('./img/moviesbg.webp')"}
        scrollToResult={handleClickScroll} // Click triggers fetch
      />

      {/* Show Results Only After Clicking "Get Recommendation" */}

      <section ref={movieResultRef}>
        <Suspense key={q} fallback={<Loader />}>
          {q !== null && (
            <MovieResult
              query={q}
              resource={fetchData(
                `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURIComponent(q)}`
              )}
            />
          )}
        </Suspense>
      </section>

      {/* Movies Blog Section */}
      <BlogResult type={"Movies"} />
    </main>
  );
};

export default Movies;
