import Image from "next/image";

export default function TrainingCard({
  data,
}: {
  data: {
    cover: string;
    title: string;
    description: string;
    tag: string;
    color: string;
  };
}) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={data.cover}
        alt="training"
        width={347}
        height={382}
        className="w-full object-cover"
      />
      <h4 className="font-semibold xl:text-3xl md:text-2xl text-xl text-white">
        {data.title}
      </h4>
      <p className="text-sm lg:text-base text-site-white line-clamp-2">
        {data.description}
      </p>
      <span
        className={`font-medium xl:text-lg md:text-base text-sm`}
        style={{ color: data.color }}
      >
        {data.tag}
      </span>
    </div>
  );
}
