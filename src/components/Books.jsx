import React, { Suspense, useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import BlogResult from "./BlogResult";
import Loader from "./Loader";
function Books() {
  const [query, setQuery] = useState("");

  const handleClickScroll = () => {
    const element = document.getElementById("bookResult");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      <div id="bookResult">
        <Suspense fallback={<Loader />}>
          <BookResult query={query} />
        </Suspense>
      </div>
      {/* show books blog */}
      <BlogResult type={"book"} />
    </div>
  );
}

export default Books;
