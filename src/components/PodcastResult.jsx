import React, { useEffect, useRef, useState } from "react";
import { PodcastItem } from "../components";

function PodcastResult({ query }) {
  const [data, setData] = useState([]);

  const ref = useRef(null);

  const scrollToElement = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToElement();
  }, [data]);

  useEffect(() => {
    query &&
      fetch(`https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`)
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
      {data.length > 0 && (
        <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" ref={ref}>
          <h1 className="font-bold text-5xl  left-0 text-left mx-2 mb-14   ">Podcast-wisePicks</h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((podcastdata) => {
              return <PodcastItem key={podcastdata.id} data={podcastdata} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PodcastResult;
