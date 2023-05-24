import { servicesData } from "../utils/data";

const Services = () => {

  return (
    <div>
      <section className="section bg-grey">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-center section-center">
          {servicesData.map((service) => (
            <article className="service" key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <h4>{service.title}</h4>
              <div className="underline"></div>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
