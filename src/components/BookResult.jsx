import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

function BookResult({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    query &&
      fetch(`http://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI( query )}`)
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
      <div className="container flex-wrap flex justify-around max-w-full ">
        {data.length > 0 &&
          data.map((bookdata) => {
            return (
              <BookItem
                key={bookdata.id}
                title={bookdata.title}
                author={bookdata.author}
                cover_image_url={bookdata.cover_image_url}
                preview_url={bookdata.preview_url}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BookResult;
