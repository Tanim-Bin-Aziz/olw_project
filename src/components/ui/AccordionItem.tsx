"use client";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-[#f3bccb] py-5">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <h3 className="text-[18px] font-semibold leading-[1.3] text-[#111111]">
            {question}
          </h3>

          {isOpen && (
            <p className="mt-3 max-w-[860px] text-[14px] leading-7 text-[#666666]">
              {answer}
            </p>
          )}
        </div>

        <div className="mt-1 shrink-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#ff4f87] text-[#ff4f87]">
            <span className="text-[16px] leading-none">
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AccordionItem;
