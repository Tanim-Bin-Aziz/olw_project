import testimonials from "@/data/testimonials";
import ReviewCard from "@/components/ui/ReviewCard";

const Testimonials = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#111111] md:text-4xl">
            Check Our Clients <span className="text-[#ff4f87]">Review</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-[#444444] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <ReviewCard
              key={item.id}
              name={item.name}
              image={item.image}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
