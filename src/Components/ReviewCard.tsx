import React from "react";
import { Review } from "../types";
import { FaStar } from "react-icons/fa";

interface ReviewCardPropsType {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardPropsType> = ({
  review: { imgURL, customerName, rating, feedback },
}) => {
  return (
    <div className="grid place-items-center">
      <img
        src={`${imgURL}`}
        alt={`${customerName}`}
        width={130}
        height={130}
        className="my-2 rounded-full object-cover"
      />
      <p className="text-md w-6/12 p-2 text-left leading-normal text-slate-800">
        {feedback}
      </p>
      <div className="grid grid-flow-col place-items-center">
        <span className="text-blue-700">
          <FaStar className="text-2xl" />
        </span>
        <span className="ml-1 text-slate-700">({rating})</span>
      </div>
      <h1 className=" p-2 text-2xl font-bold text-slate-700">{customerName}</h1>
    </div>
  );
};

export default ReviewCard;
