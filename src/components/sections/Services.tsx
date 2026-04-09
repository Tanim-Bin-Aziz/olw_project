import ServiceCard from "@/components/ui/ServiceCard";
import servicesContent, { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-[#111111]">
            {servicesContent.title}{" "}
            <span className="text-[#ff3b6b]">{servicesContent.highlight}</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#555555] sm:text-base">
            {servicesContent.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
