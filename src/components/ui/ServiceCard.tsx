import { ServiceCardProps } from "@/types";
import Image from "next/image";

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="rounded-[24px] border border-[#f3c7d1] bg-transparent p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="mb-8">
        <Image src={image} alt={title} width={64} height={64} />
      </div>

      <h3 className="max-w-[220px] text-[22px] font-bold leading-[1.25] text-[#111111]">
        {title}
      </h3>

      <p className="mt-4 max-w-[260px] text-sm leading-6 text-[#444444]">
        {description}
      </p>

      <button className="mt-8 rounded-full border border-[#ff4f7b] px-6 py-2 text-sm font-medium text-[#ff4f7b] transition-all duration-300 hover:bg-[#ff4f7b] hover:text-white">
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;
