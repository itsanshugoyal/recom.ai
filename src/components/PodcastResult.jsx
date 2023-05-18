import React, { useEffect, useState } from "react";
import PodcastItem from "./PodcastItem";

function PodcastResult({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    query &&
      fetch(`http://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
  }, [query]);
  console.log(data);

  return (
    <div>
      <div className="container flex-wrap flex justify-around max-w-full ">
        {data.length > 0 &&
          data.map((podcastdata) => {
            return (
              <PodcastItem
                key={podcastdata}
                title={podcastdata.title}
                poster_url={podcastdata.poster_url}
                trailer_url={podcastdata.trailer_url}
                vote_average={podcastdata.vote_average}
                overview={podcastdata.overview}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PodcastResult;
