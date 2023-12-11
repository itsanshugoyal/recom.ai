import React, { Suspense, useRef, useState } from "react";
import { Hero, BlogResult, HomeResult, Loader } from "../components";

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
          <HomeResult query={query} />
        </Suspense>
      </div>

      {/* blog of all categories */}
      <BlogResult />
    </div>
  );
}

export default Home;
