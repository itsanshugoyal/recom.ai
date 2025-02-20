import React, { Suspense, useEffect, useRef, useState } from "react";
import { Hero, BlogResult, HomeResult, Loader } from "../components";
import { fetchData } from "../services/fetchdata";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  const homeResultRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [movieData, setMovieData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(false);

  const q = searchParams.get("q");

  const handleClickScroll = () => {
    if (homeResultRef.current) {
      homeResultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (q !== null) {
      setLoading(true);
      Promise.all([
        fetchData(`https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURIComponent(q)}`),
        fetchData(`https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURIComponent(q)}`),
      ])
        .then(([movies, books]) => {
          setMovieData(movies);
          setBookData(books);
          setLoading(false);
          setTimeout(handleClickScroll, 500); // Scroll after loading
        })
        .catch((error) => {
          console.error("Error fetching recommendations:", error);
          setLoading(false);
        });
    }
  }, [q]); // Runs when `q` changes

  return (
    <main>
      <Helmet>
        <title>Recommend Me Something</title>
        <meta name="description" content="Find the best recommendations for movies, books, and more!" />
      </Helmet>

      <Hero page={"Home"} howto={"to watch!"} herobg={"url('./img/books2.webp')"} scrollToResult={handleClickScroll} />

      {/* Result Section */}
      <section ref={homeResultRef}>
        <Suspense fallback={<Loader />}>
          {q !== null && <HomeResult query={q} movieResource={movieData} bookResource={bookData} />}
        </Suspense>
      </section>

      {/* Blog Section */}
      <BlogResult />
    </main>
  );
}

export default Home;
