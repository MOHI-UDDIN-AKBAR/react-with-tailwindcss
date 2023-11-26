import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";

type ButtonPropsType = {
  label?: string;
  icon?: boolean;
};

const Button: React.FC<ButtonPropsType> = ({ label, icon }) => (
  <button
    type="button"
    className="my-2 flex w-fit items-center justify-center rounded-full bg-blue-900  px-10 py-2 text-white hover:ring-2 hover:ring-blue-500 lg:px-10
    lg:py-[14px]"
  >
    <span className={`text-lg capitalize ${icon === false ? "mr-0" : "mr-4"}`}>
      {label !== "" ? label : "Shop Now"}
    </span>
    {icon && (
      <span className="h-5 w-5 rounded-full bg-white text-xl font-bold text-blue-900">
        <IoIosArrowRoundForward />
      </span>
    )}
  </button>
);

export default Button;
