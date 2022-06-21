import React from "react";
import { useState } from "react";

import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";

const ImageCarousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // Carousel logic
  const forwards = () => {
    imageIndex === 3 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  };
  const backwards = () => {
    imageIndex === 0 ? setImageIndex(3) : setImageIndex(imageIndex - 1);
  };

  return (
    <div className="sm:max-h-[400px] max-h-[300px] lg:hidden w-screen sm:w-4/5 flex relative">
      <div className="absolute h-full w-full flex items-center justify-between px-7">
        <div
          className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer group"
          onClick={backwards}
        >
          <img src={iconPrevious} alt="Previous Icon" className="h-3 mr-1" />
        </div>
        <div
          className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
          onClick={forwards}
        >
          <img src={iconNext} alt="Next Icon" className="h-3 " />
        </div>
      </div>
      <img
        src={images[imageIndex]}
        className="object-cover overflow-hidden w-full h-full"
        alt="Product Photo"
      />
    </div>
  );
};

export default ImageCarousel;
