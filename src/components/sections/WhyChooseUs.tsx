import Image from "next/image";
import reasons from "@/data/reasons";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-[1080px] rounded-[28px] border border-[#f3bccb] bg-[#fdf1f5] px-5 py-6 md:px-7 md:py-7 lg:px-12">
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[360px]">
            <h2 className="text-2xl mt-12 font-bold leading-[1.12] text-[#111111] md:text-3xl lg:text-36px]">
              Few Reasons Why you Choose us?
            </h2>

            <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#222222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <div className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f8c7d5] text-sm font-semibold text-[#ff2f6d]">
                    ✓
                  </div>
                  <p className="text-[15px] font-sans text-[#111111] md:text-base">
                    {reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <button className="inline-flex items-center rounded-xl bg-[#ff2f6d] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(255,47,109,0.2)] transition duration-300 hover:-translate-y-0.5">
                Schedule A Meeting
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          <div className="relative mx-auto min-h-[500px] w-full max-w-[500px] md:min-h-[300px]">
            <div className="absolute bottom-0 right-[10px] z-0 w-[350px] md:w-[415px]">
              <Image
                src="/images/why-choose-us/background.svg"
                alt="Background shape"
                width={260}
                height={160}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="absolute left-[52px] top-3 z-20 w-[135px] md:w-[210px]">
              <Image
                src="/images/why-choose-us/card 1.svg"
                alt="Property info card"
                width={150}
                height={60}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute bottom-[-40px] left-[42px] z-20 w-[112px] md:w-[170px]">
              <Image
                src="/images/why-choose-us/card 3.svg"
                alt="Calendar card"
                width={126}
                height={90}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute right-[45px] top-[4px] z-20 w-[78px] md:w-[130px]">
              <Image
                src="/images/why-choose-us/card 2.svg"
                alt="Platform logos card"
                width={88}
                height={88}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute bottom-0 right-[112px] z-20 w-[205px] md:w-[225px] lg:w-[240px]">
              <Image
                src="/images/why-choose-us/person.svg"
                alt="Team member"
                width={240}
                height={300}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
