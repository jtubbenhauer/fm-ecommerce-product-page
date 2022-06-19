import React from "react";

const Lightbox = ({ images, thumbnails }) => {
  return (
    <div className="flex w-screen h-screen z-50 items-center justify-center">
      <div className="w-[500px]">
        <img src={images[0]} />
      </div>
    </div>
  );
};

export default Lightbox;
