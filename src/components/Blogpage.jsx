import React from "react";

function Blogpage() {
  return (
    <div>
      {/* <MetaTag
        title={blog.data.title}
        description={blog.data.description}
        siteUrl={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}`}
        previewImage={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}/${blog.data.blogImage}`}
      /> */}
      <main className="w-full flex flex-col  flex-1 items-center pt-28">
        <div className="w-3/5 ">
          {/* Header */}

          <div className=" w-full border-b-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <img
              className="object-contain w-full h-72 m-4 rounded-lg"
              //   src={`/blog/${blog.slug}/${blog.data.blogImage}`}
              src="https://mdbcdn.b-cdn.net/img/new/slides/146.webp"
              alt="Article "
            />
            <p className="text-3xl p-4 font-bold text-center mb-4 dark:text-gray-50">heyhey</p>
            {/* <p className="text-3xl p-4 font-bold text-center mb-4 dark:text-gray-50">{blog.data.title}</p> */}
            {/* <UserCard blog={blog} /> */}
            <div className="mb-4" />
          </div>
          {/* Mdx */}
          <div className="w-full">
            <article className="prose lg:prose-lg py-7 dark:prose-dark max-w-full">
              {/* <MDXRemote {...blog.content} /> */}
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blogpage;
