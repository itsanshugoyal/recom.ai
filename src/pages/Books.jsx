import React, { Suspense, useEffect, useRef } from "react";
import { BookResult, Hero, BlogResult, Loader } from "../components";
import { fetchData } from "../services/fetchdata";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Books() {
  const bookResultRef = useRef(null);
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  const handleClickScroll = () => {
    bookResultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (q !== null) handleClickScroll();
  }, [q]);

  return (
    <main>
      <Helmet>
        <title>Find personalized book recommendations - Recommendmesomething</title>
        <meta
          name="description"
          content="Explore the best books to read with recommendmesomething, your ultimate book recommendation companion. Our recommendation engine goes beyond generic suggestions, delivering personalized lists for the most recommended self-help books, novels, and top picks for 2023, and more. Whether you're craving knowledge, inspiration, or entertainment, recommendmesomething tailors recommendations to your unique interests and preferences."
        />
        <meta
          name="keywords"
          content="movie recommendation, book recommendation, suggest me movies, suggest me books, books, movies, recommendation, recommend me something, recommendmesomething"
        />
        {/* <meta name="author" content={postDetail.author.name} /> */}
        <meta property="og:title" content="Find personalized book recommendations - Recommendmesomething" />
        <meta
          property="og:description"
          content="Explore the best books to read with recommendmesomething, your ultimate book recommendation companion. Our recommendation engine goes beyond generic suggestions, delivering personalized lists for the most recommended self-help books, novels, and top picks for 2023, and more. Whether you're craving knowledge, inspiration, or entertainment, recommendmesomething tailors recommendations to your unique interests and preferences."
        />
        {/* <meta property="og:image" content={postDetail.seoOverride.image?.url} /> */}
        {/* <meta property="og:url" content="https://example.com/my-page" /> */}
        <meta name="twitter:title" content="Find personalized book recommendations - Recommendmesomething" />
        <meta
          name="twitter:description"
          content="Explore the best books to read with recommendmesomething, your ultimate book recommendation companion. Our recommendation engine goes beyond generic suggestions, delivering personalized lists for the most recommended self-help books, novels, and top picks for 2023, and more. Whether you're craving knowledge, inspiration, or entertainment, recommendmesomething tailors recommendations to your unique interests and preferences."
        />
        {/* <meta name="twitter:image" content={postDetail.seoOverride.image.url} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>

      <Hero page={"Books"} howto={" to read"} herobg={"url('./img/books2.webp')"} scrollToResult={handleClickScroll} />
      {/* Show Result after search */}
      <section ref={bookResultRef}>
        <Suspense key={q} fallback={<Loader />}>
          {q !== null && (
            <BookResult
              query={q}
              resource={fetchData(
                `https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURIComponent(q)}`
              )}
            />
          )}
        </Suspense>
      </section>
      {/* show books blog */}
      <BlogResult type={"Books"} />
    </main>
  );
}

export default Books;
