import React from "react";
import { MovieItem, BookItem } from "../components";

function HomeResult({ query, movieResource, bookResource }) {
  const booksdata = bookResource?.read();
  const moviesdata = movieResource?.read();

  return (
    <div>
      {/* movie result */}
      <div>
        {moviesdata && moviesdata.length > 0 && (
          <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="font-bold text-4xl  left-0 text-left mx-2 mb-14">
              Showing movies recomendation for: {query}
            </h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {moviesdata.map((moviedata) => {
                return <MovieItem key={moviedata.id} data={moviedata} />;
              })}
            </div>
          </div>
        )}
      </div>

      {/* book result */}
      <div>
        {booksdata && booksdata.length > 0 && (
          <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="font-bold text-4xl  left-0 text-left mx-2 mb-14">
              Showing books recomendation for: {query}
            </h1>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
              {booksdata.map((bookdata) => {
                return <BookItem key={bookdata.id} data={bookdata} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeResult;
