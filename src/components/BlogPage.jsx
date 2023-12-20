import React, { useEffect, useState } from "react";
import { getPostDetails } from "../services";
import { useParams } from "react-router-dom";

function BlogPage() {
  const [postDetail, setPostDetail] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetails(postId);
        setPostDetail(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.code) {
        modifiedText = <code key={index}>{text}</code>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
      default:
        return modifiedText;
    }
  };

  console.log(postDetail);
  return (
    postDetail && (
      <div>
        {/* <MetaTag
        title={blog.data.title}
        description={blog.data.description}
        siteUrl={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}`}
        previewImage={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}/${blog.data.blogImage}`}
      /> */}
        <main className="w-full flex flex-col  flex-1 items-center pt-28 bg-[#EEF0F2]">
          <div className="w-3/5 ">
            {/* Header */}

            <div className=" w-full border-b-4 border-yellow-500 dark:border-yellow-400 mb-4">
              <img
                className="object-contain w-full h-72 m-4 rounded-lg"
                src={postDetail.coverImage.url}
                alt={postDetail.title}
              />
              <p className="text-3xl p-4 font-bold text-center mb-4 text-black dark:text-gray-50">{postDetail.title}</p>
              {/* <p className="text-3xl p-4 font-bold text-center mb-4 dark:text-gray-50">{blog.data.title}</p> */}
              {/* <UserCard blog={blog} /> */}
              <div className="mb-4" />
            </div>
            {/* Mdx */}
            <div className="w-full">
              <article className="prose lg:prose-lg py-7 dark:prose-dark max-w-full">
                {postDetail.content.raw.children.map((typeObj, index) => {
                  const children = typeObj.children.map((item, itemIndex) =>
                    getContentFragment(itemIndex, item.text, item)
                  );

                  return getContentFragment(index, children, typeObj, typeObj.type);
                })}
              </article>
            </div>
          </div>
        </main>
      </div>
    )
  );
}

export default BlogPage;
