import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroContent, { floatingBadges, floatingDots } from "@/data/hero";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#EFE7ED] bg-[#FBF9FA]"
    >
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
              {heroContent.title}
            </h1>

            <h2 className="hero-text-load hero-text-delay-2 mt-3 text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[44px] lg:text-[52px]">
              {heroContent.subtitle}
            </h2>

            <p className="hero-text-load hero-text-delay-3 mt-10 max-w-[860px] text-[16px] leading-[1.45] text-[#171717] sm:px-6">
              {heroContent.description}
            </p>

            <div className="hero-text-load hero-text-delay-4 mt-12 flex flex-col items-center gap-8">
              <Link
                href={heroContent.primaryButton.href}
                className="hero-btn group inline-flex h-[60px] items-center justify-center gap-2 overflow-hidden rounded-[6px] bg-[#F43F6D] px-8 text-[16px] font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-[#EA2F60] hover:shadow-[0_14px_30px_rgba(244,63,109,0.28)]"
              >
                <span>{heroContent.primaryButton.label}</span>

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
                href={heroContent.secondaryButton.href}
                className="group relative inline-block text-[16px] font-medium text-[#111111] transition-opacity duration-200 hover:opacity-70"
              >
                <span>{heroContent.secondaryButton.label}</span>
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
