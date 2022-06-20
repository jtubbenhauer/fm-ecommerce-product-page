import React from "react";
import { useState } from "react";

const Lightbox = ({ images, thumbnails, lightboxOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex w-screen h-screen z-50 items-center justify-center">
      <div className="w-[550px]">
        <svg
          viewBox="0 0 16 16"
          onClick={() => lightboxOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer w-[1.4rem] h-[1.4rem] ml-auto mb-4 hover:fill-orange fill-light-grayish-blue"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill-rule="evenodd"
          />
        </svg>

        <img
          src={images[currentImageIndex]}
          className="cursor-pointer rounded-xl"
        />
        <div className="flex justify-between mt-9 px-7">
          {thumbnails.map((i, index) => (
            <div
              key={index}
              className={
                index === currentImageIndex
                  ? "rounded-xl w-16 lg:w-24 cursor-pointer relative border-orange border-[4px]"
                  : "rounded-xl w-16 lg:w-24 cursor-pointer relative"
              }
            >
              {index === currentImageIndex && (
                <div className="w-full h-full absolute bg-white opacity-50 rounded-lg"></div>
              )}
              {index !== currentImageIndex && (
                <div
                  className="w-full h-full absolute bg-white hover:opacity-20 opacity-0 rounded-lg transition-all"
                  onClick={() => setCurrentImageIndex(index)}
                ></div>
              )}
              <img
                src={i}
                key={index}
                className="rounded-lg"
                alt="Product Image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
