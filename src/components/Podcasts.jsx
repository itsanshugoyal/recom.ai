import React, { useState } from "react";
import { Hero, PodcastResult, BlogResult } from "../components";

function Podcasts() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero category={"Podcasts"} howto={" to listen"} herobg={"url('./img/podcastbg.png')"} podcastsQuery={setQuery} />

      {/* Show Result after search */}
      <PodcastResult query={query} />

      {/* show podcasts blog */}
      <BlogResult type={"Podcasts"} />
    </div>
  );
}

export default Podcasts;
