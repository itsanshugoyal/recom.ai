import React, { Suspense, useEffect, useState } from "react";
import { BlogItem, Loader } from "../components";
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

  const filteredData = type ? posts.filter((item) => item.node.categories[0]?.name === type) : posts;

  return (
    <Suspense fallback={<Loader />}>
      <section className="bg-[#EEF0F2]">
        {filteredData.length > 0 && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {/* Title */}
            <h2 className="font-bold text-4xl text-left mx-auto mb-14 max-w-7xl">Wise-recoms</h2>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {filteredData.map((blogdata) => (
                <BlogItem key={blogdata.node.title} post={blogdata.node} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Suspense>
  );
}
export default BlogResult;
