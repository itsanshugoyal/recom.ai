import React, { useEffect, useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ submit }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Movies like Harry Potter ...",
      "Best Horror shows of all time ...",
      "Anime like Naruto...",
      "Books that explore Human Relationships ...",
      "Manga with great art style like Solo Leveling...",
    ];
    const input = inputRef.current;
    const defaultPlaceholder = input.getAttribute("placeholder");
    let curTextNum = 0;
    let curPlaceholder = "";
    let blinkCounter = 0;
    let animationFrameId = 0;
    let animationActive = false;

    const switchPlaceholder = (timeout) => {
      input.classList.add("imitatefocus");
      setTimeout(() => {
        input.classList.remove("imitatefocus");
        input.setAttribute("placeholder", curTextNum === 0 ? defaultPlaceholder : curPlaceholder);
        setTimeout(() => {
          input.setAttribute("placeholder", curPlaceholder);
          if (animationActive) animationFrameId = window.requestAnimationFrame(animate);
        }, timeout);
      }, timeout);
    };

    const animate = () => {
      if (!animationActive) return;
      let curPlaceholderFullText = texts[curTextNum];
      let timeout = 900;
      if (curPlaceholder === curPlaceholderFullText + "|" && blinkCounter === 3) {
        blinkCounter = 0;
        curTextNum = curTextNum >= texts.length - 1 ? 0 : curTextNum + 1;
        curPlaceholder = "|";
        switchPlaceholder(1500);
        return;
      } else if (curPlaceholder === curPlaceholderFullText + "|" && blinkCounter < 3) {
        curPlaceholder = curPlaceholderFullText;
        blinkCounter++;
      } else if (curPlaceholder === curPlaceholderFullText && blinkCounter < 3) {
        curPlaceholder += "|";
      } else {
        curPlaceholder = curPlaceholderFullText.slice(0, curPlaceholder.length + 1) + "|";
        timeout = 150;
      }
      input.setAttribute("placeholder", curPlaceholder);
      setTimeout(() => {
        if (animationActive) animationFrameId = window.requestAnimationFrame(animate);
      }, timeout);
    };

    const stopAnimation = () => {
      animationActive = false;
      window.cancelAnimationFrame(animationFrameId);
    };

    const startAnimation = () => {
      animationActive = true;
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const focusHandler = () => stopAnimation();
    const blurHandler = (e) => {
      if (e.target.value === "") {
        setTimeout(startAnimation, 2000);
      }
    };

    startAnimation();

    input.addEventListener("focus", focusHandler);
    input.addEventListener("blur", blurHandler);

    return () => {
      stopAnimation();
      input.removeEventListener("focus", focusHandler);
      input.removeEventListener("blur", blurHandler);
    };
  }, []);

  return (
    <>
      {/* <input type="text" id="searchbox" name="searchbox" placeholder="Search term" ref={inputRef} /> */}
      <form onSubmit={submit} className="flex flex-col items-center justify-center mx-auto mt-4 w-full px-4 max-w-7xl">
        <div className="flex flex-col gap-2 w-full lg:flex-row items-center justify-center text-center text-zinc-50 px-2 md:px-6">
          <input
            type="text"
            name="searchQuery"
            id="searchBox"
            placeholder="Search Your Query"
            ref={inputRef}
            className="placeholder:italic placeholder:text-slate-400 bg-transparent border-2 border-sky-500 py-2 px-4 md:py-3 w-full lg:w-7/12 rounded-lg mb-2"
          />

          <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 border-none rounded-full cursor-pointer overflow-hidden transition-transform duration-300 ease-linear transform hover:from-purple-500 hover:to-blue-400 hover:animate-pulse"
          >
            <img src="/img/star.png" alt="ai-logo" className="h-6 w-6 md:h-8 md:w-8 mr-2 glow-icon" />
            Get Recommendation
            <span className="absolute inset-0 w-full h-full bg-gradient-radial from-blue-400/50 to-purple-500/50 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none hover:opacity-100"></span>
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
