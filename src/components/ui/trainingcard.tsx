import Image from "next/image";
import Link from "next/link";

export default function TrainingCard({ data }: { data: string }) {
  return (
    <div className="flex flex-col gap-6 w-[92vw] md:w-[18.1vw] flex-shrink-0">
      <Image
        src={data}
        alt="training"
        width={347}
        height={382}
        className="w-full"
      />
      <p className="text-sm lg:text-base text-site-white line-clamp-2 lg:line-clamp-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
        dignissim.
      </p>
      {/* <Link
        href="/training"
        className="text-site-saffron text-base/[2rem] lg:text-lg font-semibold"
      >
        Explore Now
      </Link> */}
    </div>
  );
}
