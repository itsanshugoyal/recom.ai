import React, { useState } from "react";
import { Hero, PodcastResult, BlogResult } from "../components";

function Podcasts() {
  const [query, setQuery] = useState("");

  return (
    <main>
      <Hero page={"Podcasts"} howto={" to listen"} herobg={"url('./img/podcastbg.webp')"} />

      {/* Show Result after search */}
      <PodcastResult query={query} />

      {/* show podcasts blog */}
      <BlogResult type={"Podcasts"} />
    </main>
  );
}

export default Podcasts;
