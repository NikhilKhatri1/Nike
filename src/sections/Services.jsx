import { services } from "../Constants/index";
import { ServiceCard } from "../Components/ServiceCard";

export const Services = () => {
  return (
    <section className='flex flex-wrap justify-center max-container gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;