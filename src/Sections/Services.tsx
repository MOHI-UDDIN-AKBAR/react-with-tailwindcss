import { ServiceCard } from "../Components";
import { services } from "../constants";
import { Service } from "../types";

const Services = () => {
  return (
    <section>
      {services.map((service: Service, i: number) => (
        <ServiceCard key={i} service={service} />
      ))}
    </section>
  );
};

export default Services;
