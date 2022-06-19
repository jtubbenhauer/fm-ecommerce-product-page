import React from "react";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import imageOne from "../images/image-product-1.jpg";
import imageTwo from "../images/image-product-2.jpg";
import imageThree from "../images/image-product-3.jpg";
import imageFour from "../images/image-product-4.jpg";
import ImageDesktop from "./ImageDesktop";

const imageArray = [imageOne, imageTwo, imageThree, imageFour];

const Product = ({ product, addToCart }) => {
  return (
    <div className="flex flex-col md:flex-row w-4/5 items-center md:justify-evenly">
      <ImageCarousel images={imageArray} />
      <ImageDesktop images={imageArray} />
      <ProductInfo product={product} addToCart={addToCart} />
    </div>
  );
};

export default Product;
