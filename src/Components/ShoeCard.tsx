import React from "react";
import { ShoeType } from "../types";

type ShoeCardProps = {
  shoe: ShoeType;
  selectedShoe: ShoeType;
  setSelectedShoe: React.Dispatch<React.SetStateAction<ShoeType>>;
};

const ShoeCard: React.FC<ShoeCardProps> = ({
  selectedShoe,
  shoe,
  setSelectedShoe,
}) => (
  <div
    className={`bg-card cursor-pointer rounded-lg bg-cover ${
      selectedShoe.bigShoe === shoe.bigShoe ? "border-2 border-blue-500" : ""
    }`}
    onClick={() => setSelectedShoe(shoe)}
  >
    <img
      src={`${shoe.bigShoe}`}
      alt={`${shoe.thumbnail}`}
      className="h-[100px] w-[100px] object-contain  sm:h-[160px] sm:w-[160px]"
    />
  </div>
);

export default ShoeCard;
