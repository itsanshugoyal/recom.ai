import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <main className="w-full  bg-[#EEF0F2] pt-12 py-10">
      <Helmet>
        <title>About - recommendmesomething</title>

        <meta
          name="description"
          content="Founded with a passion for enhancing the entertainment discovery journey, RecommendMeSomething was born out of the desire to
        make exploring new movies, books, music, and more exciting and accessible. Whether you're a seasoned enthusiast
        or just starting to explore different forms of entertainment, our tool aims to be your go-to companion for
        finding one."
        />
        <meta name="keywords" content="about us, about,about recommend me something,about recommendmesomething" />
        {/* <meta name="author" content={postDetail.author.name} /> */}
        <meta property="og:title" content="About - recommendmesomething" />
        <meta
          property="og:description"
          content="Founded with a passion for enhancing the entertainment discovery journey, RecommendMeSomething was born out of the desire to
        make exploring new movies, books, music, and more exciting and accessible. Whether you're a seasoned enthusiast
        or just starting to explore different forms of entertainment, our tool aims to be your go-to companion for
        finding one."
        />
        {/* <meta property="og:image" content={postDetail.seoOverride.image?.url} /> */}
        {/* <meta property="og:url" content="https://example.com/my-page" /> */}
        <meta name="twitter:title" content="About - recommendmesomething" />
        <meta
          name="twitter:description"
          content="Founded with a passion for enhancing the entertainment discovery journey, RecommendMeSomething was born out of the desire to
        make exploring new movies, books, music, and more exciting and accessible. Whether you're a seasoned enthusiast
        or just starting to explore different forms of entertainment, our tool aims to be your go-to companion for
        finding one."
        />
        {/* <meta name="twitter:image" content={postDetail.seoOverride.image.url} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <div className="items-start m-auto w-11/12 sm:w-5/6 lg:w-7/12  justify-start flex  bg-white rounded-lg md:p-12 p-4  sm:p-16">
        <div className="container my-8 text-left text-lg p-3 flex flex-col text-gray-700 gap-4 ">
          <div>
            <h1 className="my-1 font-extrabold text-4xl text-center text-sky-900">
              Welcome to Recommend Me Something{" "}
            </h1>
            <h2 className="mt-3 mb-8   font-bold text-2xl text-center text-sky-900">
              - The Personalized Recommendation Hub!
            </h2>
            {/* <img alt="recommendmesomething_logo" src="./img/logo2.png" className="max-w-full h-32 w-80" /> */}
          </div>
          <p className="leading-relaxed text-[19px]">
            <a href="/" className="text-sky-900 italic hover:text-sky-600 ">
              RecommendMeSomething
            </a>{" "}
            believes that discovering the perfect movie, book, or music should be a delightful experience. This
            innovative tool is designed to make the entertainment selection process a breeze, offering personalized
            recommendations tailored to unique preferences.
          </p>
          <h3 className="my-3 font-semibold text-2xl text-gray-900">The Story:</h3>
          <p className="leading-relaxed text-[19px]">
            Founded with a passion for enhancing the entertainment discovery journey,{" "}
            <a href="/" className="text-sky-900 hover:text-sky-600 ">
              RecommendMeSomething
            </a>{" "}
            was born out of the desire to make exploring new movies, books, music, and more exciting and accessible.
            Whether you're a seasoned enthusiast or just starting to explore different forms of entertainment, our tool
            aims to be your go-to companion for finding one.
          </p>
          <h3 className="my-3 font-semibold text-2xl text-gray-900">How it works:</h3>
          <p className="leading-relaxed text-[19px]">
            The recommendation engine goes beyond generic suggestions. It understands that every moment, whether it's
            for entertainment, knowledge, or inspiration, is special. Your choices should reflect your current needs,
            interests, and cravings. Simply share a bit about what you're looking for, and let{" "}
            <a href="/" className="text-sky-900 hover:text-sky-600  ">
              RecommendMeSomething
            </a>{" "}
            curate a personalized list for you.
          </p>
          <h3 className="my-3 font-semibold text-2xl text-gray-900">Key Features:</h3>
          <div className="flex md:flex-row flex-col items-start justify-evenly gap-4 text-center py-5  w-full ">
            <div className="md:w-1/3">
              {/* <img src="./img/icon1.gif" alt="recommendation_icon" /> */}

              <h4 className="my-2 py-3 underline font-medium text-xl text-gray-800">Multi-Genre Recommendations:</h4>
              <p className="leading-relaxed text-[19px]">
                Whether you're in the mood for a gripping book, an upbeat song, an engaging movie, or something else
                entirely, the tool provides diverse recommendations to cater to varied interests.
              </p>
            </div>
            <div className="md:w-1/3">
              {/* <img src="./img/icon2.gif" alt="information_icon"  className=""/> */}
              <h4 className="my-2 py-3 underline font-medium text-xl text-gray-800">Comprehensive Information:</h4>
              <p className="leading-relaxed text-[19px]">
                Explore more than just titles. Dive into detailed information, previews, and reviews for a well-rounded
                understanding of the entertainment options suggested.
              </p>
            </div>
            <div className="md:w-1/3">
              {/* <img src="./img/icon3.gif" alt="ui_icon" /> */}
              <h4 className="my-2 py-3 underline font-medium text-xl text-gray-800"> User-Friendly Interface:</h4>
              <p className="leading-relaxed text-[19px]">
                Navigating{" "}
                <a href="/" className="text-sky-900 hover:text-sky-600 ">
                  RecommendMeSomething
                </a>{" "}
                is simple and intuitive. No complex processes - just straightforward recommendations tailored to you.
              </p>
            </div>
          </div>

          <h3 className="my-3 font-semibold text-2xl text-gray-900">Get Started:</h3>
          <p className="leading-relaxed text-[19px]">
            Ready to elevate your entertainment experiences? Join the{" "}
            <a href="/" className="text-sky-900 hover:text-sky-600 ">
              RecommendMeSomething
            </a>{" "}
            community today! Input your preferences, discover exciting options, and make your leisure time more
            enjoyable than ever.
          </p>
          <h3 className="my-3 font-semibold text-2xl text-gray-900">Help Us Grow:</h3>
          <p className="leading-relaxed text-[19px]">
            As "recommendmesomething" embarks on the journey to enhance entertainment discovery, your feedback is
            invaluable. Share your thoughts, suggestions, and experiences with the tool. Help make this tool even better
            for you and fellow entertainment enthusiasts. Thank you for using{" "}
            <a href="/" className="text-sky-900 hover:text-sky-600 ">
              RecommendMeSomething.
            </a>{" "}
            Let's make every entertainment moment memorable together!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
