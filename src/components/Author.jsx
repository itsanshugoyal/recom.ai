import React from "react";

function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <img src={author.photo.url} alt={author.name} className="h-25 w-25 rounded-full align-middle" />
      </div>
      <h3 className="text-xl font-bold text-white my-4">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}

export default Author;
