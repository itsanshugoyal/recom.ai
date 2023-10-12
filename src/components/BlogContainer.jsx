import React from "react";
import BlogItem from "./BlogItem";
//backdrop-blur-md
function BlogContainer({ type }) {
  const data = [
    {
      id: 1,
      type: "movie",
      title: "the greatest movies of all time",
      description: "here are the list of the movies which are greatest of all time",
      creation_date: "2023-08-25",
    },
    {
      id: 2,
      type: "movie",
      title: "lorem siposhof iauef asndf  awek flaksudfhwe ailuefhw e fdvhjsdtvg uifksd cjkhcuiweyfu kctufe ",
      description:
        "here are the list of the movies which are greatest of all timehere are the list of the movies which are greatest of all timehere are the list of the movies which are greatest of all time",
      creation_date: "2023-08-25",
    },
    {
      id: 3,
      type: "book",
      title: "the greatest books of all time",
      description: "here are the list of the books which are greatest of all time",
      creation_date: "2023-08-25",
    },
  ];
  const filteredData = type ? data.filter((item) => item.type === type) : data;

  return (
    <div className="bg-[#EEF0F2] ">
      {filteredData.length > 0 && (
        <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="font-bold text-5xl  left-0 text-left mt-5 mx-8 mb-10   ">Wise-picks</h1>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredData.map((blogdata) => {
              return (
                <BlogItem
                  key={blogdata.id}
                  type={blogdata.type}
                  title={blogdata.title}
                  cover_image={""}
                  description={blogdata.description}
                  creation_date={blogdata.creation_date}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogContainer;
