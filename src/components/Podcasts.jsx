import React from "react";
import Hero from "./Hero";
import PodcastResult from "./PodcastResult";
import "./Podcasts.css";
function Podcasts() {
  return (
    <div>
      <Hero category={"Podcasts"} howto={" to listen"} herobg={"url('./img/books2.png')"} />

       {/* Show Result after search */}
       <PodcastResult />

    </div>
  );
}

export default Podcasts;
