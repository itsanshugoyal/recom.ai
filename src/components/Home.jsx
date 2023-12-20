import React, { Suspense, useRef, useState } from "react";
import { Hero, BlogResult, HomeResult, Loader } from "../components";
import { fetchData } from "../services/fetchdata";

function Home() {
  const [query, setQuery] = useState("");
  const homeResultRef = useRef(null);

  const handleClickScroll = () => {
    homeResultRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div ref={homeResultRef}>
        <Suspense fallback={<Loader />}>
          {query.trim() !== "" && (
            <HomeResult
              query={query}
              movieResource={fetchData(
                `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`
              )}
              bookResource={fetchData(
                `https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI(query)}`
              )}
            />
          )}
        </Suspense>
      </div>

      {/* blog of all categories */}
      <BlogResult />
    </div>
  );
}

export default Home;
