import { LogoGridCardProps } from "@/types";
import Image from "next/image";

const LogoGridCard = ({ name, image }: LogoGridCardProps) => {
  return (
    <div className="flex h-[120px] items-center justify-center rounded-[18px] transition-all duration-300 ease-out hover:-translate-y-1">
      <Image
        src={image}
        alt={name}
        width={300}
        height={140}
        className="h-auto w-auto max-h-[120px] object-contain"
      />
    </div>
  );
};

export default LogoGridCard;
