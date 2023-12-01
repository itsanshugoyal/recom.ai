import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ key, type, title, cover_image, creation_date, description }) {
  return (
    <div>
      <Link to={`/blogpage`}>
        {/* <Link to={`/blog/${encodeURI(blog)}`}> */}
        <div className="group relative shadow-xl rounded-lg pb-4 bg-white">
          {/*1 image */}
          <div className="p-3 aspect-h-1 aspect-w-1 w-full overflow-hidden bg-slate-50 lg:aspect-none group-hover:opacity-75 lg:h-52">
            <img
              src={cover_image}
              alt={title}
              className="h-full w-full object-fill object-center lg:h-full lg:w-full rounded-sm"
            />
          </div>

          <div className="mt-4 px-3 flex justify-between group-hover:opacity-75">
            {/* type */}

            <p className="text-sm text-left ml-2 font-medium text-gray-700">#{type}</p>
            <p className="text-sm text-gray-700 font-medium">{creation_date}</p>
          </div>
          {/* year */}

          <div className="px-2">
            {/* title */}
            <h3 className=" text-gray-700 my-2 font-extrabold text-2xl">
              <span aria-hidden="true" className="   line-clamp-2 h-16">
                {title}
              </span>
            </h3>
            {/* description */}
            <p aria-hidden="true" className=" mt-1 text-base  text-gray-500 line-clamp-3 h-20 overflow-hidden p-2 ">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
