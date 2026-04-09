"use client";

import Image from "next/image";
import { useState } from "react";
import faqs from "@/data/faqs";
import AccordionItem from "@/components/ui/AccordionItem";

const FAQ = () => {
  const [openId, setOpenId] = useState<number>(1);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section className="bg-[#f7f7f7] px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[24px] bg-[#f9f9f9] px-6 py-10 md:px-10 md:py-12 lg:px-16">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold leading-tight text-[#111111] md:text-[42px]">
              Frequently asked <span className="text-[#ff4f87]">questions</span>
            </h2>

            <p className="mt-4 text-[16px] leading-7 text-[#444444]">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[980px]">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[24px] bg-[#f9f9f9] px-6 py-10 text-center md:px-10 md:py-12">
          <div className="mx-auto flex w-fit items-center">
            <div className="relative h-10 w-[86px]">
              <Image
                src="/images/faqs/Avatar Group.svg"
                alt="Team avatars"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="mt-5 text-[28px] font-semibold leading-tight text-[#111111]">
            Still have Questions?
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-[#888888]">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>

          <button className="mt-6 rounded-[8px] bg-[#ff4f87] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#e63f77]">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
