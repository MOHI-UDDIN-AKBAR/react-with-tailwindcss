import React from "react";
import { Product } from "../types";
import { FaStar } from "react-icons/fa";

type ProductCardPropsType = {
  product: Product;
};
const ProductCard: React.FC<ProductCardPropsType> = ({
  product: { imgURL, name, price },
}) => {
  const randomReviewStarPoint = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  console.log(randomReviewStarPoint);
  return (
    <div className="">
      <img src={`${imgURL}`} alt={`${name}`} className="object-contain" />
      <div className="flex flex-col items-start justify-start pl-2 pt-2">
        <span className="flex items-center gap-1 text-blue-400">
          <FaStar className="text-2xl" />
          <span className="text-lg text-slate-500">
            ({randomReviewStarPoint}.{randomReviewStarPoint})
          </span>
        </span>
        <h2 className="py-1 text-lg font-semibold leading-normal text-black">
          {name}
        </h2>
        <span className="my-1 text-2xl font-semibold text-blue-500">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
