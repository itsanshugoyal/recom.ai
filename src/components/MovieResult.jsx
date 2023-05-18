import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieResult({query}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    query &&
      fetch(`http://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI( query )}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
  }, [query]);
  console.log(data);

  /*   const data = [
      {
        adult: false,
        backdrop_path: "/ecKQlAEG95k62SMGhvX83oEqANK.jpg",
        genre_ids: [27, 53],
        id: 1,
        original_language: "en",
        original_title: "The Conjuring",
        overview:
          "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
        popularity: 103.574,
        poster_path: "/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        release_date: "2013-07-18",
        title: "The Conjuring",
        video: false,
        vote_average: 7.539,
        vote_count: 10352,
        trailer_url: "https://www.youtube.com/watch?v=ejMMn0t58Lc",
        poster_url: "https://image.tmdb.org/t/p/original//wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      },
     
    ]; */

  return (
    <div>
      <div className="container flex-wrap flex justify-around max-w-full ">
        {data.length>0 && data.map((moviedata) => {
          return (
            <MovieItem
              key={moviedata.id}
              title={moviedata.title}
              poster_url={moviedata.poster_url}
              trailer_url={moviedata.trailer_url}
              vote_average={moviedata.vote_average}
              overview={moviedata.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieResult;
