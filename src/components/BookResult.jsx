import React, { useEffect, useRef, useState } from "react";
import BookItem from "./BookItem";

function BookResult({ query }) {
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
      fetch(`https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI(query)}`)
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
          <h1 className="font-bold text-5xl  left-0 text-left mt-5 mx-8 mb-10   ">Wise-picks</h1>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
            {data.map((bookdata) => {
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
  );
}

export default BookResult;
