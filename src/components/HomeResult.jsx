import React from "react";
import { MovieItem, BookItem } from "../components";

function HomeResult({ query, movieResource, bookResource }) {
  const booksdata = bookResource?.read();
  const moviesdata = movieResource?.read();

  return (
    <div className="bg-[#0D1117] min-h-screen py-12">
      <div className="max-w-full  px-4 sm:px-6 lg:px-8 mx-28">
        {/* Movie Results */}
        {moviesdata && moviesdata.length > 0 && (
          <div className="bg-[#0D1117] bg-opacity-80 backdrop-blur-lg text-white px-6 py-10 sm:px-8 sm:py-14 lg:px-12 rounded-2xl shadow-lg">
            <h2 className="font-bold text-3xl sm:text-4xl text-left mb-10 text-[#A3DAFF]">
              🎬 Movie recommendations for: <span className="text-[#7B61FF]">{query}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {moviesdata.map((moviedata) => (
                <MovieItem key={moviedata.id} data={moviedata} />
              ))}
            </div>
          </div>
        )}

        {/* Book Results */}
        {booksdata && booksdata.length > 0 && (
          <div className="bg-[#0D1117] bg-opacity-80 backdrop-blur-lg text-white mt-14 px-6 py-10 sm:px-8 sm:py-14 lg:px-12 rounded-2xl shadow-lg">
            <h2 className="font-bold text-3xl sm:text-4xl text-left mb-10 text-[#A3DAFF]">
              📚 Book recommendations for: <span className="text-[#7B61FF]">{query}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {booksdata.map((bookdata) => (
                <BookItem key={bookdata.id} data={bookdata} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeResult;
