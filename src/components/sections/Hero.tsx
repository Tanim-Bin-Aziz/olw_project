import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const floatingBadges = [
  {
    id: "airbnb",
    src: "/images/hero/logo1.svg",
    alt: "Airbnb",
    width: 90,
    height: 90,
    top: 112,
    left: 230,
    rotation: -30,
    shadow: "0 14px 28px rgba(255, 90, 95, 0.22)",
    delay: "0.1s",
    duration: "6.2s",
  },
  {
    id: "vrbo",
    src: "/images/hero/logo3.svg",
    alt: "Vrbo",
    width: 75,
    height: 75,
    top: 520,
    left: 260,
    rotation: -23.23,
    shadow: "0 14px 24px rgba(14, 33, 75, 0.22)",
    delay: "0.25s",
    duration: "7s",
  },
  {
    id: "booking",
    src: "/images/hero/logo2.svg",
    alt: "Booking",
    width: 75,
    height: 75,
    top: 120,
    left: 950,
    rotation: 27.61,
    shadow: "0 14px 26px rgba(15, 74, 167, 0.22)",
    delay: "0.4s",
    duration: "6.8s",
  },
  {
    id: "tripadvisor",
    src: "/images/hero/logo4.svg",
    alt: "Tripadvisor",
    width: 75,
    height: 75,
    top: 525,
    left: 940,
    rotation: 33.8,
    shadow: "0 14px 26px rgba(52, 224, 161, 0.22)",
    delay: "0.55s",
    duration: "7.4s",
  },
];

const floatingDots = [
  {
    id: "purple",
    className: "left-[67px] top-[130px] h-[13px] w-[13px]",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #7A73FF 0%, #635BFF 58%, #4B42F1 100%)",
      boxShadow: "0 -2px 6.3px rgba(0,0,0,0.25)",
    },
    delay: "0.12s",
    duration: "5.6s",
  },
  {
    id: "green",
    className: "left-1/2 top-[134px] h-[18px] w-[18px] -translate-x-1/2",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #4CE2AF 0%, #2ECC91 60%, #14B97D 100%)",
      boxShadow: "0 -2px 6.3px rgba(0,0,0,0.18)",
    },
    delay: "0.22s",
    duration: "6.4s",
  },
  {
    id: "yellow-right",
    className: "right-[105px] top-[270px] h-[15px] w-[15px]",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #F2E06B 0%, #E0CA43 60%, #C1A620 100%)",
      boxShadow: "0 -2px 6.3px rgba(0,0,0,0.16)",
    },
    delay: "0.32s",
    duration: "5.9s",
  },
  {
    id: "red",
    className: "left-[132px] top-[338px] h-[15px] w-[15px]",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #FF7A83 0%, #F05660 60%, #D93C45 100%)",
      boxShadow: "0 -2px 6.3px rgba(0,0,0,0.16)",
    },
    delay: "0.42s",
    duration: "6.7s",
  },
  {
    id: "yellow-left-bottom",
    className: "left-[102px] bottom-[82px] h-[8px] w-[8px]",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #F2E06B 0%, #E0CA43 60%, #C1A620 100%)",
      boxShadow: "0 -2px 4px rgba(0,0,0,0.14)",
    },
    delay: "0.52s",
    duration: "5.4s",
  },
  {
    id: "cyan",
    className: "left-[700px] bottom-[46px] h-[17px] w-[17px] -translate-x-1/2",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #6EEAF5 0%, #47D7E7 60%, #23B9C9 100%)",
      boxShadow: "0 -2px 6.3px rgba(0,0,0,0.16)",
    },
    delay: "0.62s",
    duration: "6.9s",
  },
  {
    id: "blue-small",
    className: "right-[38px] bottom-[128px] h-[8px] w-[8px]",
    style: {
      background:
        "radial-gradient(circle at 35% 35%, #1E60BF 0%, #11449C 60%, #082C73 100%)",
      boxShadow: "0 -2px 4px rgba(0,0,0,0.16)",
    },
    delay: "0.72s",
    duration: "5.8s",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#EFE7ED] bg-[#FBF9FA]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,24,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,24,0.055)_1px,transparent_1px)] bg-[size:112px_104px]" />

      <div className="absolute inset-x-0 top-0 h-[140px] bg-[linear-gradient(180deg,rgba(245,221,229,0.42)_0%,rgba(250,241,245,0.18)_42%,rgba(255,255,255,0)_100%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[84px]">
        <div className="relative min-h-[700px] py-14 sm:py-16 lg:py-[68px]">
          {floatingBadges.map((badge) => (
            <div
              key={badge.id}
              className="hero-badge pointer-events-none absolute hidden md:block"
              style={{
                top: `${badge.top}px`,
                left: `${badge.left}px`,
                filter: `drop-shadow(${badge.shadow})`,
                ["--badge-rotate" as string]: `${badge.rotation}deg`,
                ["--badge-delay" as string]: badge.delay,
                ["--badge-duration" as string]: badge.duration,
              }}
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}

          {floatingDots.map((dot) => (
            <span
              key={dot.id}
              className={`hero-dot pointer-events-none absolute hidden rounded-full md:block ${dot.className}`}
              style={{
                ...dot.style,
                ["--dot-delay" as string]: dot.delay,
                ["--dot-duration" as string]: dot.duration,
              }}
            >
              <span className="absolute left-[18%] top-[18%] h-[24%] w-[24%] rounded-full bg-white/18 blur-[0.2px]" />
            </span>
          ))}

          <div className="mx-auto flex min-h-[448px] max-w-[860px] flex-col items-center justify-center pt-[130px] text-center">
            <h1 className="hero-text-load hero-text-delay-1 max-w-[900px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0E0E0E] sm:text-[54px] lg:text-[62px]">
              Airbnb Assistants For
            </h1>

            <h2 className="hero-text-load hero-text-delay-2 mt-3 text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[44px] lg:text-[52px]">
              Property Management
            </h2>

            <p className="hero-text-load hero-text-delay-3 mt-10 max-w-[860px] text-[16px] leading-[1.45] text-[#171717] sm:px-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="hero-text-load hero-text-delay-4 mt-12 flex flex-col items-center gap-8">
              <Link
                href="/contact"
                className="hero-btn group inline-flex h-[60px] items-center justify-center gap-2 overflow-hidden rounded-[6px] bg-[#F43F6D] px-8 text-[16px] font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#EA2F60] hover:shadow-[0_14px_30px_rgba(244,63,109,0.28)]"
              >
                <span>Schedule A Meeting</span>

                <span className="relative flex h-[16px] w-[16px] items-center justify-center overflow-hidden">
                  <span className="hero-arrow hero-arrow-first absolute inset-0 flex items-center justify-center">
                    <ArrowRight className="size-[16px]" strokeWidth={2.2} />
                  </span>

                  <span className="hero-arrow hero-arrow-second absolute inset-0 flex items-center justify-center">
                    <ArrowRight className="size-[16px]" strokeWidth={2.2} />
                  </span>
                </span>
              </Link>

              <Link
                href="/pricing"
                className="group relative inline-block text-[16px] font-medium text-[#111111] transition-opacity duration-200 hover:opacity-70"
              >
                <span>See Pricing</span>
                <span className="absolute left-1/2 top-full mt-[4px] h-[1.5px] w-0 -translate-x-1/2 bg-[#111111] transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
