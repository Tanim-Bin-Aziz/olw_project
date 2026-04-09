import Image from "next/image";

type StepCardProps = {
  id: string;
  title: string;
  image: string;
};

const StepCard = ({ id, title, image }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-20 top-0 z-10 flex h-16 w-16 -translate-x-4 -translate-y-4 items-center justify-center rounded-full border-[3px] border-[#ff2f6d] bg-white text-base font-medium text-[#111111] shadow-sm">
        {id}
      </div>

      <div className="flex h-[150px] w-3/5 items-center justify-center rounded-[18px] border border-[#f2d6de] bg-transparent px-6 py-6">
        <div className="relative h-[62px] w-[62px] md:h-[72px] md:w-[72px]">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>

      <h3 className="mt-5 max-w-[260px] whitespace-pre-line text-center text-[22px] font-semibold leading-[1.4] text-[#111111]">
        {title}
      </h3>
    </div>
  );
};

export default StepCard;
