import React from "react";
import "./Books.css";
import Hero from "./Hero";
function Books() {
  return (
    <div
      className=" bg-cover bg-center "
      style={{
        backgroundImage: "url('../public/img/booksbg.png')",
      }}
    >
      <Hero category={"Books"} howto={" to read"} />
    </div>
  );
}

export default Books;
