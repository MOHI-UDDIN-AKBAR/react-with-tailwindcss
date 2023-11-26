import React from "react";
import { Service } from "../types";

interface ServiceCardPropsType {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardPropsType> = ({ service }) => {
  return <div>ServiceCard</div>;
};

export default ServiceCard;
