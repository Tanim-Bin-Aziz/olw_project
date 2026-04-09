import StepCard from "@/components/ui/StepCard";
import steps from "@/data/steps";

const GettingStarted = () => {
  return (
    <section className="bg-[#f7f7f7] py-20 md:py-24">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-6xl">
          Getting Started is <span className="text-[#ff2f6d]">Easy</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[820px] text-base leading-8 text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1180px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <StepCard
            key={step.id}
            id={step.id}
            title={step.title}
            image={step.image}
          />
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
