import Image from "next/image";
import brandsContent, { brands } from "@/data/brands";

const TrustedBrands = () => {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="trusted-brands" className="bg-[#f5f5f5] py-14">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-[#f1f1f1] py-8">
          <h2 className="text-center text-[22px] font-semibold text-[#111111] sm:text-[26px]">
            {brandsContent.title}
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
