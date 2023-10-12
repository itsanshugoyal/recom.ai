import React, { useState } from "react";
import BookResult from "./BookResult";
import Hero from "./Hero";
import BlogResult from "./BlogResult";
function Books() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero category={"Books"} howto={" to read"} herobg={"url('./img/books2.png')"} booksQuery={setQuery} />

      {/* Show Result after search */}
      <BookResult query={query} />

      {/* show books blog */}
      <BlogResult type={"book"} />
    </div>
  );
}

export default Books;
