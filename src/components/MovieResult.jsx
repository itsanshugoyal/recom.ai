import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieResult({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    query &&
      fetch(`https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("movieData", JSON.stringify(data));
          return data; // Ensure this line returns a promise
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    // const fetchData = async () => {
    //   if (query) {
    //     try {
    //       const response = await fetch(
    //         `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`
    //       );
    //       const result = await response.json();
    //       setData(result);
    //       // Store the data in local storage
    //       localStorage.setItem("movieData", JSON.stringify(result));
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }
    // };

    // fetchData();
  }, [query]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("movieData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  // const data = [
  //   {
  //     adult: false,
  //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
  //     genre_ids: [27, 53],
  //     genre_names: ["Horror", "Thriller"],
  //     id: 2,
  //     original_language: "en",
  //     original_title: "The Shining",
  //     overview:
  //       "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
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
  //   {
  //     adult: false,
  //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
  //     genre_ids: [27, 53],
  //     genre_names: ["Horror", "Thriller"],
  //     id: 3,
  //     original_language: "en",
  //     original_title: "The Shining",
  //     overview:
  //       "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he,Jack Torrance accepts a caretaker job at the Overlook Hotel, where he,  along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
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
  //   {
  //     adult: false,
  //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
  //     genre_ids: [27, 53],
  //     genre_names: ["Horror", "Thriller"],
  //     id: 4,
  //     original_language: "en",
  //     original_title: "The Shining",
  //     overview:
  //       "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
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
  //   {
  //     adult: false,
  //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
  //     genre_ids: [27, 53],
  //     genre_names: ["Horror", "Thriller"],
  //     id: 6,
  //     original_language: "en",
  //     original_title: "The Shining",
  //     overview:
  //       "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
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
  //   {
  //     adult: false,
  //     backdrop_path: "/mmd1HnuvAzFc4iuVJcnBrhDNEKr.jpg",
  //     genre_ids: [27, 53],
  //     genre_names: ["Horror", "Thriller"],
  //     id: 8,
  //     original_language: "en",
  //     original_title: "The Shining",
  //     overview:
  //       "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
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
  // console.log(data);
  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="font-bold text-5xl  left-0 text-left mx-2 mb-14">Movie-wisePicks</h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((moviedata) => {
              return (
                <MovieItem
                  key={moviedata.id}
                  title={moviedata.title}
                  genre={moviedata.genre_names.toString()}
                  cover_image={moviedata.poster_url}
                  external_link={moviedata.trailer_url}
                  rating={moviedata.vote_average}
                  overview={moviedata.overview}
                  release_date={moviedata.release_date}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieResult;
