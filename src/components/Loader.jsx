import React from "react";
import "./loader.css";
function Loader() {
  console.log("Loader component rendered");
  return (
    <div className="items-centerflex">
      <h5 className="font-bold text-3xl  left-0 text-center mx-2 my-7">Fetching recomendations...</h5>

      <div className="h-[34rem] justify-center items-center flex">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
/* <div className="h-96 justify-center items-center flex">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-sky-800 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div> */

export default Loader;
