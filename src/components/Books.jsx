import React, { useState } from "react";
import BookResult from "./BookResult";
import "./Books.css";
import Hero from "./Hero";
function Books() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero category={"Books"} howto={" to read"} herobg={"url('./img/books2.png')"} booksQuery={setQuery} />

      {/* Show Result after search */}
      <BookResult query={query} />
    </div>
  );
}

export default Books;
