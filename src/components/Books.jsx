import React, { Suspense, useRef, useState } from "react";
import { BookResult, Hero, BlogResult, Loader } from "../components";

function Books() {
  const [query, setQuery] = useState("");
  const bookResultRef = useRef(null);

  const handleClickScroll = () => {
    bookResultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero
        category={"Books"}
        howto={" to read"}
        herobg={"url('./img/books2.png')"}
        booksQuery={setQuery}
        scrollToResult={handleClickScroll}
      />

      {/* Show Result after search */}
      <div ref={bookResultRef}>
        <Suspense fallback={<Loader />}>
          <BookResult query={query} />
        </Suspense>
      </div>
      {/* show books blog */}
      <BlogResult type={"Books"} />
    </div>
  );
}

export default Books;
