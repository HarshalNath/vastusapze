import { HERO_CONTENT } from "../constants";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col  items-center my-20">
        <h1 className=" text-6xl uppercase font-bold p-2 lg:text-[10rem]">
          {HERO_CONTENT.title}
        </h1>
        <p className="tracking-tighter text-sm lg:mt-6 mb-4 font-medium">
          {HERO_CONTENT.subtitle}
        </p>

        <img
          src={HERO_CONTENT.image}
          alt=""
          className="w-full h-[65vh] object-cover p-3 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
