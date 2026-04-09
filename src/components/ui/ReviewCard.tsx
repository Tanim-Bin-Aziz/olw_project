import Image from "next/image";

type ReviewCardProps = {
  name: string;
  image: string;
  review: string;
};

const ReviewCard = ({ name, image, review }: ReviewCardProps) => {
  return (
    <div className="rounded-[12px] bg-white px-8 py-8 shadow-[0_4px_77px_rgba(136,136,136,0.41)]">
      <div className="flex items-center gap-6">
        <div className="h-[104px] w-[104px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            width={104}
            height={104}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[22px] font-semibold leading-none text-[#111111]">
            {name}
          </h3>

          <p className="mt-3 text-[15px] leading-[1.45] text-[#222222]">
            {review}
          </p>

          <div className="mt-3 flex items-center gap-1 text-[16px] leading-none text-[#f59e0b]">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
