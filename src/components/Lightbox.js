import React from "react";
import { useState } from "react";
import closeIconWhite from "../images/icon-close-white.svg";

const Lightbox = ({ images, thumbnails, lightboxOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex w-screen h-screen z-50 items-center justify-center">
      <div className="w-[450px]">
        <img
          src={closeIconWhite}
          onClick={() => lightboxOpen(false)}
          className="cursor-pointer opacity-90 w-[1.4rem] ml-auto mb-4"
        />

        <img
          src={images[currentImageIndex]}
          className="cursor-pointer rounded-xl"
        />
        <div className="flex justify-between mt-5 px-5">
          {thumbnails.map((i, index) => (
            <div
              className={
                index === currentImageIndex
                  ? "rounded-xl w-16 lg:w-20 cursor-pointer relative border-orange border-[4px]"
                  : "rounded-xl w-16 lg:w-20 cursor-pointer relative"
              }
            >
              {index === currentImageIndex && (
                <div className="w-full h-full absolute bg-white opacity-60 rounded-lg"></div>
              )}
              {index !== currentImageIndex && (
                <div
                  className="w-full h-full absolute bg-white hover:opacity-60 opacity-0 rounded-lg transition-all"
                  onClick={() => setCurrentImageIndex(index)}
                ></div>
              )}
              <img src={i} key={index} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
