import React, { useEffect, useState } from "react";
import { getPostDetails } from "../services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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
  //             <React.Fragment key={i}>{item}</React.Fragment>
  //           ))}
  //         </a>
  //       );
  //     default:
  //       return modifiedText;
  //   }
  // };

  /* <MetaTag
        title={blog.data.title}
        description={blog.data.description}
        siteUrl={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}`}
        previewImage={`https://blog.mohitsojitra.tech/blog/${blog.data.slug}/${blog.data.blogImage}`}
      /> */
  return (
    postDetail && (
      <main className="w-full flex flex-col  flex-1 m-auto pt-28 bg-[#EEF0F2]">
        {/* meta data */}
        <Helmet>
          <title>{postDetail.seoOverride.title}</title>
          <meta name="description" content={postDetail.seoOverride.description} />
          <meta name="keywords" content={postDetail.seoOverride.keywords} />
          <meta name="author" content={postDetail.author.name} />
          <meta property="og:title" content={postDetail.seoOverride.title} />
          <meta property="og:description" content={postDetail.seoOverride.description} />
          <meta property="og:image" content={postDetail.seoOverride.image?.url} />
          <meta property="og:url" content="https://example.com/my-page" />
          <meta name="twitter:title" content={postDetail.seoOverride.title} />
          <meta name="twitter:description" content={postDetail.seoOverride.description} />
          {/* <meta name="twitter:image" content={postDetail.seoOverride.image.url} /> */}
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
        </Helmet>

        {/* Main content */}
        <div className="w-11/12 sm:w-5/6 lg:w-7/12 items-start justify-start text-left mx-auto bg-white p-8 sm:p-16 my-10">
          {/* Header */}
          <div className=" w-full border-b-4 border-yellow-500 dark:border-yellow-400 mb-4">
            <img
              className="object-contain w-full h-72 m-4 rounded-lg"
              src={postDetail.coverImage.url}
              alt={postDetail.title}
            />
            <p className="text-4xl p-4 font-bold text-center mb-4 text-black dark:text-gray-600">{postDetail.title}</p>
            {/* <p className="text-3xl p-4 font-bold text-center mb-4 dark:text-gray-50">{blog.data.title}</p> */}
            {/* <UserCard blog={blog} /> */}
            <div className="mb-4" />
          </div>
          {/* Mdx */}
          <div className="w-full">
            <article className="prose text-lg lg:prose-lg  py-7 dark:prose-dark max-w-full">
              {/* {postDetail.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) =>
                  getContentFragment(itemIndex, item.text, item)
                );


                return getContentFragment(index, children, typeObj, typeObj.type);
              })} */}
              <RichText
                content={postDetail.content.raw}
                renderers={{
                  h1: ({ children }) => <h1 className="text-4xl font-semibold my-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-medium mt-4 mb-7">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-[26px] leading-8 font-medium mt-3 mb-6">{children}</h3>,
                  h4: ({ children }) => <h4 className="text-2xl font-medium my-2">{children}</h4>,
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className=" text-sky-800 hover:text-teal-400 font-medium"
                    >
                      {children}
                    </a>
                  ),
                  code: ({ children }) => <h4 className="text-red-300">{children}</h4>,

                  p: ({ children }) => <p className="mb-6 text-slate-800 leading-relaxed text-[19px]">{children}</p>,
                  code_block: ({ children }) => (
                    <pre className="border bg-blue-900 border-collapse whitespace-pre-wrap px-8 py-3 mb-8">
                      <code className="text-slate-300">{children}</code>
                    </pre>
                  ),
                }}
              />
            </article>
          </div>
        </div>
      </main>
    )
  );
}

export default BlogPage;
