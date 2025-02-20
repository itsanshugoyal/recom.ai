import React from "react";
import { BookItem } from "../components";

function BookResult({ query, resource }) {
  const data = resource?.read();
  console.log(data);

  return (
    <div className="bg-[#0D1117] text-white min-h-screen py-12">
      {data && data.length > 0 && (
        <div className="max-w-full mx-28 px-6 lg:px-12">
          {/* Title */}
          <h2 className="font-bold text-3xl sm:text-4xl text-left mb-10 text-[#A3DAFF]">
            📚 Book recommendations for: <span className="text-[#7B61FF]">{query}</span>
          </h2>

          {/* Book Grid */}
          <div className="bg-[#0D1117] bg-opacity-80 backdrop-blur-lg px-6 py-10 sm:px-8 sm:py-14 lg:px-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {data.map((bookdata) => (
                <BookItem data={bookdata} key={bookdata.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookResult;
