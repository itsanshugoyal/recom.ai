import React, { useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import BlogContainer from "./BlogContainer";
function Books() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero category={"Books"} howto={" to read"} herobg={"url('./img/books2.png')"} booksQuery={setQuery} />

      {/* Show Result after search */}
      <BookResult query={query} />

      {/* show books blog */}
      <BlogContainer type={"book"} />
    </div>
  );
}

export default Books;
