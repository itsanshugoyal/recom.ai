import { RichText } from "@graphcms/rich-text-react-renderer";
import { Helmet } from "react-helmet";

function PostDetail({ post }) {
  // const date = new Date(`${post.createdAt}`).toLocaleDateString("en-gb", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  return (
    <div>
      {/* meta data */}

      <Helmet>
        <title>{post.seoOverride.title}</title>
        <meta name="description" content={post.seoOverride.description} />
        <meta name="keywords" content={post.seoOverride.keywords} />
        <meta name="author" content={post.author.name} />
        <meta property="og:title" content={post.seoOverride.title} />
        <meta property="og:description" content={post.seoOverride.description} />
        <meta property="og:image" content={post.seoOverride.image?.url} />
        {/* <meta property="og:url" content="https://example.com/my-page" /> */}
        <meta name="twitter:title" content={post.seoOverride.title} />
        <meta name="twitter:description" content={post.seoOverride.description} />
        {/* <meta name="twitter:image" content={post.seoOverride.image.url} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>

      {/* Main content */}
      <div className="w-11/12 sm:w-5/6 lg:w-7/12 mx-auto bg-white p-6 sm:p-12 my-10 rounded-lg shadow-lg">
        {/* Header */}
        <div className="w-full border-b-4 border-yellow-500 dark:border-yellow-400 mb-6">
          <img
            className="object-cover w-full h-48 sm:h-72 mb-8 rounded-lg"
            src={post.coverImage.url}
            alt={post.title}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl p-4 font-bold text-center mb-4 text-black dark:text-gray-600">
            {post.title}
          </h1>
        </div>
        {/* Mdx */}
        <div className="w-full">
          <article className="prose text-base sm:text-lg lg:text-xl py-7 dark:prose-dark max-w-full text-left text-pretty">
            <RichText
              content={post.content.json}
              references={post.references}
              renderers={{
                h1: ({ children }) => (
                  <h1 className="text-3xl sm:text-4xl font-semibold my-4 text-[#1a202c]">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-medium mt-4 mb-7 text-[#1a202c]">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl leading-8 font-medium mt-3 mb-6 text-[#1a202c]">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg sm:text-xl font-medium my-2 text-[#1a202c]">{children}</h4>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-800 hover:text-teal-500 font-medium"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => <h4 className="text-red-300">{children}</h4>,
                p: ({ children }) => (
                  <p className="mb-6 text-slate-700 leading-relaxed text-base md:text-[19px] sm:text-lg">{children}</p>
                ),
                code_block: ({ children }) => (
                  <pre className="border bg-blue-900 border-collapse whitespace-pre-wrap px-8 py-3 mb-8">
                    <code className="text-slate-300">{children}</code>
                  </pre>
                ),
                img: ({ src, altText }) => (
                  <img
                    className="w-72 inline-block h-48 sm:h-72 mx-auto px-3 m-3 rounded-lg mb-12 shadow-lg object-contain object-center"
                    src={src}
                    alt={altText}
                    loading="lazy"
                  />
                ),
              }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
