import React from "react";
import { Service } from "../types";

interface ServiceCardPropsType {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardPropsType> = ({
  service: { imgURL, label, subtext },
}) => {
  return (
    <div className="mx-auto flex min-w-[300px] flex-1 flex-col items-start justify-start rounded-3xl px-4 py-8 shadow-lg xl:w-1/3 xl:px-6  xl:py-12">
      <img
        src={`${imgURL}`}
        alt={`${label}`}
        className="h-12 w-12 rounded-full bg-blue-900 p-2 px-2"
      />
      <h1 className="font-noto-Sans  p-1 text-3xl leading-normal">
        Free shipping
      </h1>
      <p className="text-md my-1 py-2 leading-normal text-slate-600">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
