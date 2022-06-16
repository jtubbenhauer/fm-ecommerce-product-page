import React from "react";
import { useState } from "react";
import imageOne from "../images/image-product-1.jpg";
import imageTwo from "../images/image-product-2.jpg";
import imageThree from "../images/image-product-3.jpg";
import imageFour from "../images/image-product-4.jpg";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";

const imageArray = [imageOne, imageTwo, imageThree, imageFour];

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  // Carousel logic
  const forwards = () => {
    imageIndex === 3 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  };
  const backwards = () => {
    imageIndex === 0 ? setImageIndex(3) : setImageIndex(imageIndex - 1);
  };

  return (
    <div className="h-[300px] sm:h-[400px] w-screen flex relative">
      <div className="absolute h-full w-full flex items-center justify-between px-7">
        <div
          className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
          onClick={backwards}
        >
          <img src={iconPrevious} alt="Previous Icon" className="h-3 mr-1" />
        </div>
        <div
          className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
          onClick={forwards}
        >
          <img src={iconNext} alt="Next Icon" className="h-4" />
        </div>
      </div>
      <img
        src={imageArray[imageIndex]}
        className="object-cover overflow-hidden w-full h-full"
        alt="Product Photo"
      />
    </div>
  );
};

export default ImageCarousel;
