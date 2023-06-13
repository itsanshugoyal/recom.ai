import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieResult({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    query &&
      fetch(
        `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(
          query
        )}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });
  }, [query]);
  console.log(data);

    // const data = [
    //   {

    //     adult: false,
    //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    //     genre_ids: [27, 53],
    //     genre_names: ['Horror', 'Thriller'],
    //     id: 2,
    //     original_language: "en",
    //     original_title: "The Shining",
    //     overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    //     popularity: 41.038,
    //     poster_path: "/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     poster_url: "https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     release_date: "1980-05-23",
    //     title: "The Shining",
    //     trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    //     video: false,
    //     vote_average: 8.22,
    //     vote_count: 15783,

    //   },{

    //     adult: false,
    //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    //     genre_ids: [27, 53],
    //     genre_names: ['Horror', 'Thriller'],
    //     id: 3,
    //     original_language: "en",
    //     original_title: "The Shining",
    //     overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    //     popularity: 41.038,
    //     poster_path: "/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     poster_url: "https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     release_date: "1980-05-23",
    //     title: "The Shining",
    //     trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    //     video: false,
    //     vote_average: 8.22,
    //     vote_count: 15783,

    //   },{

    //     adult: false,
    //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    //     genre_ids: [27, 53],
    //     genre_names: ['Horror', 'Thriller'],
    //     id: 4,
    //     original_language: "en",
    //     original_title: "The Shining",
    //     overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    //     popularity: 41.038,
    //     poster_path: "/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     poster_url: "https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     release_date: "1980-05-23",
    //     title: "The Shining",
    //     trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    //     video: false,
    //     vote_average: 8.22,
    //     vote_count: 15783,

    //   },{

    //     adult: false,
    //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    //     genre_ids: [27, 53],
    //     genre_names: ['Horror', 'Thriller'],
    //     id: 6,
    //     original_language: "en",
    //     original_title: "The Shining",
    //     overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    //     popularity: 41.038,
    //     poster_path: "/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     poster_url: "https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     release_date: "1980-05-23",
    //     title: "The Shining",
    //     trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    //     video: false,
    //     vote_average: 8.22,
    //     vote_count: 15783,

    //   },{

    //     adult: false,
    //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
    //     genre_ids: [27, 53],
    //     genre_names: ['Horror', 'Thriller'],
    //     id: 8,
    //     original_language: "en",
    //     original_title: "The Shining",
    //     overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    //     popularity: 41.038,
    //     poster_path: "/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     poster_url: "https://image.tmdb.org/t/p/original//nRj5511mZdTl4saWEPoj9QroTIu.jpg",
    //     release_date: "1980-05-23",
    //     title: "The Shining",
    //     trailer_url: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
    //     video: false,
    //     vote_average: 8.22,
    //     vote_count: 15783,

    //   },
     
    // ];


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          
            {data.length > 0 &&
              data.map((moviedata) => {
                return (
                  <MovieItem
                    key={moviedata.id}
                    title={moviedata.title}
                    genre={moviedata.genre_names.toString()}
                    poster_url={moviedata.poster_url}
                    trailer_url={moviedata.trailer_url}
                    vote_average={moviedata.vote_average}
                    overview={moviedata.overview}
                  />
                );
              })}
          
        </div>
      </div>

      {/* <div className="container flex-wrap flex justify-around max-w-full ">
        {data.length > 0 &&
          data.map((moviedata) => {
            return (
              <MovieItem
                key={moviedata.id}
                title={moviedata.title}
                genre={moviedata.genre_names.toString()}
                poster_url={moviedata.poster_url}
                trailer_url={moviedata.trailer_url}
                vote_average={moviedata.vote_average}
                overview={moviedata.overview}
              />
            );
          })}
      </div> */}
    </div>
  );
}

export default MovieResult;
