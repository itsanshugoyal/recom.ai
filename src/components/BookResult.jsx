import React from "react";
import { BookItem } from "../components";
function BookResult({ query, resource }) {
  const data = resource?.read();
  console.log(data);
  return (
    <div>
      {data && data.length > 0 && (
        <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="font-bold text-4xl  left-0 text-left mx-2 mb-14">Showing books recomendation for: {query}</h1>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
            {data.map((bookdata) => {
              return <BookItem data={bookdata} key={bookdata.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookResult;
