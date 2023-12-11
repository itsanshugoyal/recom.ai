import React, { useEffect, useState } from "react";
import { BookItem } from "../components";

function BookResult({ query }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://web-production-e62e.up.railway.app/books/suggest-many?q=${encodeURI(query)}`
          );
          const result = await response.json();
          setData(result);
          // Store the data in local storage
          localStorage.setItem("bookData", JSON.stringify(result));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [query]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("bookData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="font-bold text-5xl  left-0 text-left mx-2 mb-14   ">Book-wisePicks</h1>

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
