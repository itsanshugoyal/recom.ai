import React from "react";
import "./Hero.css";
function Hero({ homehead, category, howto, head2, head3 }) {
  return (
    <div className="container h-full m-auto px-10 py-32 ">
      <div className="heading mb-14">
        <h1 className=" font-bold text-6xl mb-1">{homehead} </h1>

        <h1 className=" font-bold text-6xl mb-2">
          Find <span className="text-sky-900">{category}</span>
          {howto}
        </h1>
        <h2 className=" font-bold text-2xl ">{head2}</h2>
      </div>
      <h3 className="font-semibold text-2xl"> Discover {category} with the power of AI</h3>

      <div className=" flex mx-auto justify-center my-3">
        <input type="text" className="border-2 border-sky-500 p-2 md:w-2/6"></input>
        <button className="border-2 bg-sky-700 mx-3 rounded-md p-2 md:w-2/12">Get Recommendation</button>
      </div>
    </div>
  );
}

export default Hero;
