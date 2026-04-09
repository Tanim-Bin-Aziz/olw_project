"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import PricingCard from "@/components/ui/PricingCard";
import { pricingPlans } from "@/data/pricingPlans";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const recommendedPlanId = useMemo(() => {
    return pricingPlans.find((plan) => plan.isRecommended)?.id ?? null;
  }, []);

  return (
    <section className="bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="text-[28px] font-semibold leading-tight text-[#161616] md:text-[42px]">
            Airbnb Assistent <span className="text-[#f43f7a]">pricing</span>
          </h2>

          <p className="mt-3 text-sm text-[#7d7d7d] md:text-base">
            Choose a plan that&apos;s right for you
          </p>

          <div className="relative mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-medium text-[#222222] md:text-sm">
                Pay Monthly
              </span>

              <button
                type="button"
                aria-label="Toggle pricing"
                onClick={() => setIsYearly((prev) => !prev)}
                className={`relative h-6 w-[42px] rounded-full transition-all duration-300 ${
                  isYearly ? "bg-[#f43f7a]" : "bg-[#cfcfd4]"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all duration-300 ${
                    isYearly ? "left-[22px]" : "left-1"
                  }`}
                />
              </button>

              <span className="text-[12px] font-medium text-[#222222] md:text-sm">
                Pay Yearly
              </span>
            </div>

            <div className="pointer-events-none md:absolute md:left-[68%] md:top-1/2 md:-translate-y-1/2">
              <Image
                src="/images/discount arrow.svg"
                alt="Save 25%"
                width={150}
                height={60}
                className="h-auto w-[110px] md:w-[130px] lg:w-[145px]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const isHovered = hoveredCardId === plan.id;
            const isRecommended =
              hoveredCardId === null && recommendedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredCardId(plan.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <PricingCard
                  plan={plan}
                  isYearly={isYearly}
                  isRecommended={isRecommended}
                  isHovered={isHovered}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
