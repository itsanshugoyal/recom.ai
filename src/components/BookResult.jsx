import React, { useEffect, useRef, useState } from "react";
import BookItem from "./BookItem";

function BookResult({ query }) {
  const [data, setData] = useState([]);

  const ServicesRef = useRef(null);

  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
      forwardRef: true,
      // You can also assign value "auto"
      // to the behavior parameter.
    });

  const refContainer = useRef(null);
  // useEffect(() => {
  //   refContainer.current.scrollIntoView({ behavior: "smooth" });
  // });

  useEffect(() => {
    query &&
      fetch(`https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI(query)}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          refContainer.current.scrollIntoView({ behavior: "smooth" });
        });
  }, [query, refContainer]);
  console.log(data);

  /* 
  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    if (testRef.current) {
      testRef.current.scrollIntoView();
    }
  }, [query]); */

  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
                  ref={refContainer}
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
