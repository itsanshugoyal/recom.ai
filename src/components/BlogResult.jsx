import React, { useEffect, useState } from "react";
import { BlogItem } from "../components";
import { getPosts } from "../services";
//backdrop-blur-md

function BlogResult({ type }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const filteredData = type ? posts.filter((item) => item.node.categories[0].name === type) : posts;

  return (
    <div className="bg-[#EEF0F2] ">
      {filteredData.length > 0 && (
        <div className=" mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="font-bold text-4xl  left-0 text-left mx-2 mb-14   ">Wise-recoms</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredData.map((blogdata) => {
              return <BlogItem key={blogdata.node.title} post={blogdata.node} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogResult;
