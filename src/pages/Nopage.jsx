import React from "react";

function Nopage() {
  console.log("heyhey");
  return (
    <main className="w-full h-full pt-12 py-10">
      <section className="items-start m-auto w-11/12 sm:w-5/6 lg:w-7/12  justify-start flex  bg-white rounded-lg p-12  sm:p-16">
        <div className="container  ">
          <div className="mx-4 px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-gray-700 sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-gray-700">
                Oops! That page can't be found
              </h4>
              <p className="mb-8 text-lg text-gray-700">The page you are looking for it maybe deleted</p>
              <a
                href="/"
                className="inline-block rounded-lg border border-sky-900 px-8 py-3 text-center text-base font-semibold text-gray-700 transition hover:bg-sky-900 hover:text-white"
              >
                Go To Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Nopage;
