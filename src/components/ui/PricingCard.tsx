"use client";

import { PricingCardProps } from "@/types";
import { Check, X } from "lucide-react";

const PricingCard = ({
  plan,
  isYearly,
  isRecommended,
  isHovered,
}: PricingCardProps) => {
  const yearlyOriginal = plan.monthlyPrice * 12;
  const yearlyDiscounted = yearlyOriginal - yearlyOriginal * 0.25;

  const displayPrice = isYearly ? yearlyDiscounted : plan.monthlyPrice;
  const formattedPrice =
    displayPrice % 1 === 0 ? displayPrice.toFixed(0) : displayPrice.toFixed(2);

  const isPink = isHovered || isRecommended;

  return (
    <div
      className={`flex h-full flex-col rounded-[20px] border p-5 transition-all duration-300 ease-out ${
        isPink
          ? "border-[#f43f7a] bg-[#f43f7a] text-white"
          : "border-[#f3c7d1] bg-transparent text-[#161616]"
      } ${isHovered ? "-translate-y-1 shadow-[0_18px_40px_rgba(0,0,0,0.08)]" : ""}`}
    >
      <div className="flex min-h-[210px] flex-col">
        <div className="mb-4">
          <h3 className="text-[20px] font-semibold leading-none md:text-[22px]">
            {plan.name}
          </h3>

          <p
            className={`mt-3 max-w-[220px] text-[12px] leading-6 md:text-[13px] ${
              isPink ? "text-white/85" : "text-[#6f6f79]"
            }`}
          >
            {plan.description}
          </p>
        </div>

        <div className="mt-auto mb-5">
          {isYearly && plan.monthlyPrice > 0 ? (
            <div className="mb-1 flex items-center gap-2">
              <span
                className={`text-[12px] line-through ${
                  isPink ? "text-white/70" : "text-[#9a9aa3]"
                }`}
              >
                ${yearlyOriginal}
              </span>

              <span
                className={`text-[11px] font-medium ${
                  isPink ? "text-white/85" : "text-[#f43f7a]"
                }`}
              >
                Save 25%
              </span>
            </div>
          ) : null}

          <div className="flex items-end gap-1.5">
            <span className="text-[40px] font-semibold leading-none md:text-[46px]">
              ${formattedPrice}
            </span>

            <span
              className={`mb-1 text-[12px] ${
                isPink ? "text-white/85" : "text-[#6f6f79]"
              }`}
            >
              /{isYearly ? "Year" : "Month"}
            </span>
          </div>
        </div>
      </div>

      <button
        className={`mb-6 flex h-10 w-full items-center justify-center rounded-[10px] border text-[13px] font-medium transition-all duration-300 ${
          isPink
            ? "border-white bg-white text-[#f43f7a]"
            : "border-[#f43f7a] bg-transparent text-[#f43f7a]"
        }`}
      >
        Get Started Now
      </button>

      <div className="space-y-3">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                feature.included
                  ? isPink
                    ? "bg-white text-[#f43f7a]"
                    : "bg-[#ffd9e5] text-[#f43f7a]"
                  : isPink
                    ? "bg-white text-[#161616]"
                    : "bg-[#f1f1f1] text-[#161616]"
              }`}
            >
              {feature.included ? (
                <Check size={10} strokeWidth={3} />
              ) : (
                <X size={10} strokeWidth={3} />
              )}
            </span>

            <p
              className={`text-[12px] leading-5 md:text-[13px] ${
                isPink
                  ? "text-white"
                  : feature.included
                    ? "text-[#161616]"
                    : "text-[#a5a5ad]"
              }`}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
