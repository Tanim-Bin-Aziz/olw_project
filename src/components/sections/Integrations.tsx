import LogoGridCard from "@/components/ui/LogoGridCard";
import { integrations } from "@/data/integrations";

const Integrations = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#111111] md:text-[42px]">
            Our <span className="text-[#ff4f7b]">Tools</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-6 text-[#555555] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-14 rounded-[28px] bg-[#f8f8f8] px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14 lg:py-14">
          <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <LogoGridCard key={item.id} name={item.name} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
