import { Review } from "../types";
import { reviews } from "../constants";
import { ReviewCard } from "../Components";

const CustomerReviews = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-center justify-center bg-blue-100 px-2 py-10 lg:h-screen">
      <div className="grid place-items-center">
        <h1 className="font-noto-Sans p-2 text-[40px] font-bold leading-normal text-slate-900 max-sm:grid lg:text-4xl ">
          What Our
          <span className="mx-2 text-blue-600">Customers</span>
          Say?
        </h1>
        <p className="mx-auto mb-16 mt-2 w-8/12 leading-normal text-slate-600">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-4">
        {reviews.map((review: Review, i: number) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
