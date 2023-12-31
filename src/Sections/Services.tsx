import { ServiceCard } from "../Components";
import { services } from "../constants";
import { Service } from "../types";

const Services = () => {
  return (
    <section
      id="about-us"
      className="my-16 flex w-full flex-row flex-wrap items-center justify-center gap-8 p-4 lg:py-24"
    >
      {services.map((service: Service, i: number) => (
        <ServiceCard key={i} service={service} />
      ))}
    </section>
  );
};

export default Services;
