import React, { Suspense, useEffect, useState } from "react";
import { getPostDetails } from "../services";
import { useParams } from "react-router-dom";
import { Author, Comments, CommentsForm, Loader, PostDetail } from "../components";

function BlogPage() {
  const [postData, setPostData] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetails(postId);
        setPostData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);

  // const getContentFragment = (index, text, obj, type) => {
  //   let modifiedText = text;

  //   if (obj) {
  //     if (obj.bold) {
  //       modifiedText = <b key={index}>{text}</b>;
  //     }
  //     if (obj.href) {
  //       modifiedText = (
  //         <a key={index} href={obj.href} target="_blank">
  //           {text}
  //         </a>
  //       );
  //     }

  //     if (obj.italic) {
  //       modifiedText = <em key={index}>{text}</em>;
  //     }

  //     if (obj.underline) {
  //       modifiedText = <u key={index}>{text}</u>;
  //     }
  //     if (obj.code) {
  //       modifiedText = <code key={index}>{text}</code>;
  //     }
  //     if (obj.pre) {
  //       modifiedText = <pre index={index}>{text}</pre>;
  //     } else {
  //       // modifiedText = <pre key={index}>{text}</pre>;
  //       console.log(obj);
  //     }
  //   }

  //   switch (type) {
  //     case "heading-three":
  //       return (
  //         <h3 key={index} className="text-3xl font-semibold my-4">
  //           {modifiedText.map((item, i) => (
  //             <React.Fragment key={i}>{item}</React.Fragment>
  //           ))}
  //         </h3>
  //       );
  //     case "paragraph":
  //       return (
  //         <p key={index} className="mb-8">
  //           {modifiedText.map((item, i) => (
  //             <React.Fragment key={i}>{item}</React.Fragment>
  //           ))}
  //         </p>
  //       );
  //     case "heading-four":
  //       return (
  //         <h4 key={index} className="text-2xl font-semibold my-4 ">
  //           {modifiedText.map((item, i) => (
  //             <React.Fragment key={i}>{item}</React.Fragment>
  //           ))}
  //         </h4>
  //       );
  //     case "heading-one":
  //       return (
  //         <h1 key={index} className="text-3xl font-semibold my-4 ">
  //           {modifiedText.map((item, i) => (
  //             <React.Fragment key={i}>{item}</React.Fragment>
  //           ))}
  //         </h1>
  //       );
  //     case "image":
  //       return <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
  //     case "code-block":
  //       return (
  //         <pre className="border border-collapse whitespace-pre-wrap px-8 py-3 mb-8">
  //           <code key={index} className="mb-4 font-medium  ">
  //             {modifiedText.map((item, i) => (
  //               <React.Fragment key={i}>{item}</React.Fragment>
  //             ))}
  //           </code>
  //         </pre>
  //       );
  //     case "link":
  //       return (
  //         <a key={index} href={obj.href} target="_blank" className="underline">
  //           {modifiedText.map((item, i) => (
  //             <React.Fragment key=
  // {i}>{item}</React.Fragment>
  //           ))}
  //         </a>
  //       );
  //     default:
  //       return modifiedText;
  //   }
  // };

  return (
    postData && (
      <main className="w-full flex flex-col m-auto pt-20 sm:pt-28 bg-[#EEF0F2]">
        <PostDetail post={postData} />
        {/* <Author author={post.author} /> */}
        {/* <CommentsForm slug={post.slug} /> */}
        {/* <Comments slug={postData.post.slug} /> */}
      </main>
    )
  );
}

export default BlogPage;
