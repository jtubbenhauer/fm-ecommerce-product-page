import React from "react";
import { useState } from "react";
import ThumbnailOne from "../images/image-product-1-thumbnail.jpg";
import ThumbnailTwo from "../images/image-product-2-thumbnail.jpg";
import ThumbnailThree from "../images/image-product-3-thumbnail.jpg";
import ThumbnailFour from "../images/image-product-4-thumbnail.jpg";

const thumbnails = [ThumbnailOne, ThumbnailTwo, ThumbnailThree, ThumbnailFour];

const ImageDesktop = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="hidden lg:block">
      <img
        src={images[currentImageIndex]}
        className="rounded-xl max-h-[400px]"
      />
      <div className="flex justify-between mt-5">
        {thumbnails.map((i, index) => (
          <div
            className={
              index === currentImageIndex
                ? "rounded-xl w-16 lg:w-20 cursor-pointer relative border-orange border-[3px]"
                : "rounded-xl w-16 lg:w-20 cursor-pointer relative"
            }
          >
            {index === currentImageIndex && (
              <div className="w-full h-full absolute bg-white opacity-60 rounded-lg"></div>
            )}
            <img
              src={i}
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDesktop;
