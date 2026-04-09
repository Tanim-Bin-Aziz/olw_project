import Image from "next/image";

const brands = [
  {
    name: "airbnb",
    src: "/images/brands/airbnb.svg",
    alt: "Airbnb",
    width: 120,
    height: 36,
  },
  {
    name: "booking",
    src: "/images/brands/booking.svg",
    alt: "Booking.com",
    width: 170,
    height: 40,
  },
  {
    name: "vrbo",
    src: "/images/brands/vrbo.svg",
    alt: "Vrbo",
    width: 150,
    height: 40,
  },
  {
    name: "tripadvisor",
    src: "/images/brands/trip.svg",
    alt: "Tripadvisor",
    width: 170,
    height: 40,
  },
  {
    name: "agoda",
    src: "/images/brands/agoda.svg",
    alt: "Agoda",
    width: 130,
    height: 40,
  },
  {
    name: "expedia",
    src: "/images/brands/expedia.svg",
    alt: "Expedia",
    width: 150,
    height: 40,
  },
  {
    name: "hometogo",
    src: "/images/brands/home.svg",
    alt: "HomeToGo",
    width: 120,
    height: 42,
  },
];

const marqueeBrands = [...brands, ...brands];

const TrustedBrands = () => {
  return (
    <section className="bg-[#f5f5f5] py-14">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-[#f1f1f1] py-8">
          <h2 className="text-center text-[22px] font-semibold text-[#111111] sm:text-[26px]">
            Trusted by leaders in 50+ industries
          </h2>

          <div className="relative mt-8 overflow-hidden rounded-[20px] bg-[#ebebeb] py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#ebebeb] to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#ebebeb] to-transparent sm:w-16" />

            <div className="trusted-brands-marquee flex w-max items-center">
              {marqueeBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-[44px] min-w-fit items-center justify-center px-5 sm:h-[48px] sm:px-7 lg:px-10"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={brand.width}
                    height={brand.height}
                    className="h-auto max-h-[26px] w-auto object-contain sm:max-h-[30px] lg:max-h-[34px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
