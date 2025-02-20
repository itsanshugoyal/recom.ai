import React from "react";
import { FaFilm, FaBook, FaPodcast, FaTv, FaMusic, FaGamepad } from "react-icons/fa";

const HomeInfo = () => {
  return (
    <section id="homeInfo" className="bg-gradient-to-b from-[#121212] to-[#181A1B] py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title & Subtitle */}
        <h2 className="text-4xl font-bold text-[#A3DAFF] mb-4 drop-shadow-lg">
          Your Personalized Gateway to Entertainment
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore tailored recommendations for movies, series, anime, books, podcasts, and more, powered by advanced AI.
        </p>

        {/* Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <FeatureCard
            title="Why Choose Us?"
            points={[
              "Personalized Experience: AI-powered recommendations tailored for you.",
              "Comprehensive Library: Vast entertainment options across multiple categories.",
              "Cutting-Edge AI: Get the best suggestions with smart algorithms.",
              "Community Reviews: Read trusted opinions from like-minded users.",
              "Sleek & Intuitive UI: Enjoy a seamless, user-friendly experience.",
            ]}
          />
          <FeatureCard
            title="Features"
            points={[
              "AI-Powered Recommendations for personalized content.",
              "Trending Now: Stay updated with the latest trends.",
              "Community Insights: Engage with in-depth reviews and ratings.",
              "Diverse Content: Something for every mood and interest.",
              "Easy Navigation: Smooth browsing with a sleek interface.",
            ]}
          />
        </div>

        {/* Entertainment Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard Icon={FaFilm} title="Movies" />
          <CategoryCard Icon={FaTv} title="Series" />
          <CategoryCard Icon={FaBook} title="Books" />
          <CategoryCard Icon={FaPodcast} title="Podcasts" />
          <CategoryCard Icon={FaMusic} title="Music" />
          <CategoryCard Icon={FaGamepad} title="Games" />
        </div>
      </div>
    </section>
  );
};

// Feature Card Component (Glassmorphism Style)
const FeatureCard = ({ title, points }) => (
  <div className="bg-[#22272E]/50 backdrop-blur-md shadow-lg p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#333]">
    <h4 className="text-2xl font-bold text-[#A3DAFF] mb-4">{title}</h4>
    <ul className="list-disc list-inside text-left text-gray-300 space-y-3">
      {points.map((point, index) => (
        <li key={index} className="text-sm">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

// Category Card Component
const CategoryCard = ({ Icon, title }) => (
  <div className="bg-[#22272E] shadow-md hover:shadow-xl rounded-xl p-4 flex flex-col items-center transition-all duration-300 hover:scale-105 border border-[#333]">
    <Icon className="w-10 h-10 text-[#A3DAFF] mb-2" />
    <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
  </div>
);

export default HomeInfo;
