"use client";

import { AccordionItemProps } from "@/types";
import { Minus, Plus } from "lucide-react";

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-[#f3b3c5]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 py-7 text-left"
      >
        <div>
          <h3 className="text-[24px] font-semibold leading-[1.35] text-[#111111] md:text-[28px]">
            {question}
          </h3>
        </div>

        <div
          className={`mt-1 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-[#ff4f87] text-[#ff4f87] transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <Minus size={16} strokeWidth={2.2} />
          ) : (
            <Plus size={16} strokeWidth={2.2} />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[760px] pb-7 text-[16px] leading-8 text-[#444444]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
