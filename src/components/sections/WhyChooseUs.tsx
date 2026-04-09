import Image from "next/image";
import reasons from "@/data/reasons";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f7f7] px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-[1080px] rounded-[28px] border border-[#f3bccb] bg-[#fdf1f5] px-5 py-6 md:px-7 md:py-7 lg:px-12 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-[360px]">
            <h2 className="mt-2 text-2xl font-semibold leading-[1.12] text-[#111111] md:mt-6 md:text-3xl lg:text-[33px]">
              Few Reasons Why you <br /> Choose us?
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

          <div className="relative order-2 mx-auto mt-2 min-h-[420px] w-full max-w-[320px] sm:min-h-[470px] sm:max-w-[380px] md:min-h-[470px] md:max-w-[460px] lg:order-none lg:min-h-[500px] lg:max-w-[500px]">
            <div className="absolute bottom-0 left-1/2 z-0 w-[255px] -translate-x-1/2 sm:w-[310px] md:w-[360px] lg:bottom-0 lg:right-[10px] lg:left-auto lg:w-[415px] lg:translate-x-0">
              <Image
                src="/images/why-choose-us/background.svg"
                alt="Background shape"
                width={415}
                height={260}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="absolute left-[25px] top-[245px] z-20 w-[120px] sm:left-[22px] sm:top-[26px] sm:w-[145px] md:left-[32px] md:top-[18px] md:w-[180px] lg:left-[48px] lg:top-52 lg:w-[210px]">
              <Image
                src="/images/why-choose-us/card 1.svg"
                alt="Property info card"
                width={210}
                height={84}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute right-[55px] top-[232px] z-20 w-[72px] sm:right-[22px] sm:top-[26px] sm:w-[86px] md:right-[38px] md:top-[12px] md:w-[108px] lg:right-[45px] lg:top-[200px] lg:w-[130px]">
              <Image
                src="/images/why-choose-us/card 2.svg"
                alt="Platform logos card"
                width={130}
                height={130}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute bottom-[-25px] left-[26px] z-10 w-[100px] sm:bottom-[58px] sm:left-[26px] sm:w-[145px] md:bottom-[18px] md:left-[26px] md:w-[165px] lg:bottom-[-40px] lg:left-[42px] lg:z-10 lg:w-[170px]">
              <Image
                src="/images/why-choose-us/card 3.svg"
                alt="Calendar card"
                width={170}
                height={120}
                className="h-auto w-full drop-shadow-[0_12px_20px_rgba(255,105,145,0.14)]"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 z-20 w-[150px] -translate-x-1/2 sm:w-[150px] md:w-[220px] lg:right-[112px] lg:left-auto lg:w-[240px] lg:translate-x-0">
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
