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
    <div className="flex flex-col">
      <div>
        <img src={images[currentImageIndex]} className="rounded-2xl" />
      </div>
      <div className="flex justify-between mt-5">
        {thumbnails.map((i, index) => (
          <img
            src={i}
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageDesktop;
