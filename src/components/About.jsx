import about from "../assets/about.webp";
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl uppercase text-center tracking-tighter mb-12">
        About
      </h2>
      <img src={about} alt="" className="p-4 h-auto w-full" />
      <p className="text-xl lg:text-2xl p-4 mt-12 tracking-wide leading-10 text-center mb-12">
        VastuSpaze is a home renovation company that specializes in creating
        beautiful and functional living spaces. We offer a wide range of
        services, including interior design, construction, and landscaping. Our
        team of experienced professionals is passionate about creating spaces
        that are both aesthetically pleasing and practical. We believe that a
        well-designed home can have a positive impact on your life, and we are
        committed to helping our clients create spaces that they love.
      </p>
    </section>
  );
};

export default About;
