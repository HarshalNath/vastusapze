import { REVIEWS } from "../constants";

const Review = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="review">
      <h2 className="mb-12 text-center uppercase text-xl lg:text-3xl tracking-wide">
        REviews
      </h2>

      <p className="text-center max-w-5xl mx-auto text-lg lg:text-2xl">
        {REVIEWS.text}
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-20 mb-12">
        {REVIEWS.reviews.map((review, index) => (
          <div className="border border-gray-400 mx-4 px-10 rounded-3xl max-w-xs pt-10 pb-5 ">
            <p>{review.review}</p>
            <div className="flex items-center gap-5 mt-10 ml-7">
              <img
                src={review.image}
                alt=""
                className="rounded-full w-12 h-12"
              />
              <h2 className="font-medium">{review.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
