import { PORTFOLIO_PROJECTS } from "../constants";

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div>
        <h2 className="text-xl lg:text-3xl text-center mb-20 mt-12 tracking-tight">
          Portfoilo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl mx-4 relative  group overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover group-hover:scale-110 duration-500 transition-transform "
              />

              <div className=" inset-0 absolute flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 backdrop-blur-lg duration-500 transition-opacity ">
                <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                <p className="p-4 mb-12">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
