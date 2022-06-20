import React from "react";
import { useState } from "react";
import ThumbnailOne from "../images/image-product-1-thumbnail.jpg";
import ThumbnailTwo from "../images/image-product-2-thumbnail.jpg";
import ThumbnailThree from "../images/image-product-3-thumbnail.jpg";
import ThumbnailFour from "../images/image-product-4-thumbnail.jpg";
import Lightbox from "./Lightbox";

const thumbnails = [ThumbnailOne, ThumbnailTwo, ThumbnailThree, ThumbnailFour];

const ImageDesktop = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div
        className={
          lightboxOpen
            ? "bg-black/70 absolute top-0 bottom-0 left-0 right-0 z-40"
            : "hidden"
        }
      >
        <Lightbox
          images={images}
          thumbnails={thumbnails}
          lightboxOpen={setLightboxOpen}
        />
      </div>
      <div className="hidden lg:block">
        <img
          src={images[currentImageIndex]}
          className="cursor-pointer rounded-xl max-h-[400px]"
          onClick={() => setLightboxOpen(!lightboxOpen)}
        />
        <div className="flex justify-between mt-5">
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
    </>
  );
};

export default ImageDesktop;
