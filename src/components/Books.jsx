import React from "react";
import BookResult from "./BookResult";
import "./Books.css";
import Hero from "./Hero";
function Books() {
  return (
    <div>
      <Hero category={"Books"} howto={" to read"} herobg={"url('./img/books2.png')"} />
      {/* Show Result after search */}
      <BookResult />
    </div>
  );
}

export default Books;
