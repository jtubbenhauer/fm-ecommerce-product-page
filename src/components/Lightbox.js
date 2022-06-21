import React from "react";

const Lightbox = ({
  images,
  thumbnails,
  lightboxOpen,
  currentIndex,
  setCurrentIndex,
}) => {
  const handlePrev = () => {
    setCurrentIndex(currentIndex == 0 ? 0 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex == 3 ? 3 : currentIndex + 1);
  };

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
        <div className="relative">
          <img
            src={images[currentIndex]}
            className="cursor-pointer rounded-xl"
          />
          <div
            className="absolute top-1/2 -left-7 flex items-center justify-center bg-white rounded-full w-14 h-14 cursor-pointer group"
            onClick={handlePrev}
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-very-dark-blue group-hover:stroke-orange transition-all -translate-x-0.5"
            >
              <path d="M11 1 3 9l8 8" stroke-width="3" fill="none" />
            </svg>
          </div>
          <div
            className="absolute top-1/2 -right-7 flex items-center justify-center bg-white rounded-full w-14 h-14 cursor-pointer group"
            onClick={handleNext}
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:stroke-orange stroke-very-dark-blue transition-all"
            >
              <path d="m2 1 8 8-8 8" stroke-width="3" fill="none" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-9 px-7">
          {thumbnails.map((i, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "rounded-xl w-16 lg:w-24 cursor-pointer relative border-orange border-[4px]"
                  : "rounded-xl w-16 lg:w-24 cursor-pointer relative"
              }
            >
              {index === currentIndex && (
                <div className="w-full h-full absolute bg-white opacity-50 rounded-lg"></div>
              )}
              {index !== currentIndex && (
                <div
                  className="w-full h-full absolute bg-white hover:opacity-20 opacity-0 rounded-lg transition-all"
                  onClick={() => setCurrentIndex(index)}
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
