import React from "react";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import imageOne from "../images/image-product-1.jpg";
import imageTwo from "../images/image-product-2.jpg";
import imageThree from "../images/image-product-3.jpg";
import imageFour from "../images/image-product-4.jpg";
import AddToCart from "./AddToCart";
import ImageDesktop from "./ImageDesktop";

const imageArray = [imageOne, imageTwo, imageThree, imageFour];

const Product = ({ product, addToCart }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row max-w-full">
        <div className="sm:hidden">
          <ImageCarousel images={imageArray} />
        </div>
        <div className="hidden sm:block w-full">
          <ImageDesktop images={imageArray} />
        </div>
        <div className="flex flex-col">
          <ProductInfo product={product} />
          <AddToCart product={product} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
};

export default Product;
