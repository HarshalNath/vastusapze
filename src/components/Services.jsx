import { SERVICES_CONTENT } from "../constants";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className=" my-20">
        <h1 className="text-xl text-center mb-20 lg:text-3xl tracking-tight uppercase">
          Our Home renovation services
        </h1>

        {SERVICES_CONTENT.map((service, index) => (
          <div className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div
              key={index}
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 == 0 ? "" : "lg:order-2"
              } `}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 == 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <h1 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h1>
              <p className="mb-4 lg:tracking-wider text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
