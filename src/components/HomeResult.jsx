import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import BookItem from "./BookItem";

function HomeResult({ query }) {
  const [moviesdata, setMoviesData] = useState([]);
  const [booksdata, setBooksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          await Promise.resolve(
            new Promise((resolve) => {
              setTimeout(() => {
                console.log("waiting");
                resolve(); // Resolve the Promise after the timeout
              }, 50000);
            })
          );
          const movieResponse = await fetch(
            `https://web-production-e62e.up.railway.app/movies/suggest-many?q=${encodeURI(query)}`
          );
          const movieResult = await movieResponse.json();
          setMoviesData(movieResult);

          const bookResponse = await fetch(
            `https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI(query)}`
          );
          const bookResult = await bookResponse.json();
          setBooksData(bookResult);
          // Store the data in local storage
          localStorage.setItem("homeMovieData", JSON.stringify(movieResult));
          localStorage.setItem("homeBookData", JSON.stringify(bookResult));
          // localStorage.setItem("bookData", JSON.stringify(podcastResult));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [query]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedMovieData = localStorage.getItem("homeMovieData");
    if (storedMovieData) {
      setMoviesData(JSON.parse(storedMovieData));
    }
    const storedBookData = localStorage.getItem("homeBookData");
    if (storedBookData) {
      setBooksData(JSON.parse(storedBookData));
    }
  }, []);

  return (
    <div>
      {/* movie result */}
      <div>
        {moviesdata.length > 0 && (
          <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="font-bold text-5xl  left-0 text-left mx-2 mb-14">Movie-wisePicks</h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {moviesdata.map((moviedata) => {
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

      {/* book result */}
      <div>
        {booksdata.length > 0 && (
          <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="font-bold text-5xl  left-0 text-left mx-2 mb-14   ">Book-wisePicks</h1>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
              {booksdata.map((bookdata) => {
                return (
                  <BookItem
                    key={bookdata.id}
                    title={bookdata.title}
                    author={bookdata.author}
                    cover_image={bookdata.cover_image_url}
                    external_link={bookdata.preview_url}
                    overview={bookdata.description}
                    rating={bookdata.rating}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeResult;
