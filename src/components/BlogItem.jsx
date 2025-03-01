import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ post }) {
  const date = new Date(`${post.createdAt}`).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <Link to={`/post/${post.slug}`}>
        <div className="group relative shadow-xl rounded-lg pb-4 bg-white">
          {/*1 image */}
          <div className="p-3 aspect-h-1 aspect-w-1 w-full overflow-hidden bg-slate-50 group-hover:opacity-75 lg:h-52 h-36">
            <img
              src={post.coverImage.url}
              alt={post.title}
              className="h-full w-full object-fill p-3 object-center lg:h-full lg:w-full rounded-sm "
              loading="lazy"
            />
          </div>
          {/* type  and date*/}

          <div className="mt-4 px-3 flex justify-between group-hover:opacity-75">
            <p className="text-sm text-left ml-2 font-medium text-gray-700">#{post.categories[0]?.name}</p>
            <p className="text-sm text-gray-700 font-medium">{date}</p>
          </div>
          {/* year */}

          <div className="px-2">
            {/* title */}
            <h3 aria-label="post heading" className=" text-gray-700 my-2 font-extrabold text-2xl">
              <span aria-hidden="true" className="   line-clamp-2 h-16">
                {post.title}
              </span>
            </h3>
            {/* description */}
            <p aria-hidden="true" className=" mt-1 text-base  text-gray-500 line-clamp-3 h-20 overflow-hidden p-2 ">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
