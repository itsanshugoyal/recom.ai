import React from "react";
import BookResult from "./BookResult";
import "./Books.css";
import Hero from "./Hero";
function Books() {
  return (
    <div
      className=" bg-cover bg-center "
      style={{
        backgroundImage: "url('../public/img/booksbg.png')",}
      }
    >
      <Hero category={"Books"} howto={" to read"} />
      {/* Show Result after search */}
      <BookResult />

    </div>
  );
}

export default Books;
