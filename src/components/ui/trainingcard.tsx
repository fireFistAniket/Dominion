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
    <div className="flex flex-col lg:flex-row gap-6 md:gap-12 xl:gap-16">
      <Image
        src={data.cover}
        alt="training"
        width={242}
        height={267}
        className="w-full lg:w-auto object-cover"
      />
      <div className="flex flex-col gap-6 items-center lg:items-stretch self-center lg:max-w-2xl">
        <div className="flex gap-4 items-center">
          <h4 className="font-semibold xl:text-3xl md:text-2xl text-xl text-white">
            {data.title}
          </h4>
          <span
            className={`font-medium lg:text-base text-sm text-white py-2 px-4 lg:px-6`}
            style={{ background: data.color }}
          >
            {data.tag}
          </span>
        </div>
        <p className="text-sm lg:text-base text-site-white line-clamp-3">
          {data.description}
        </p>
      </div>
      <button
        type="button"
        className="text-sm lg:text-lg px-3 lg:px-7 py-4 text-black font-medium bg-site-saffron self-center border border-site-saffron hover:bg-transparent transition-colors duration-300 hover:text-site-saffron"
      >
        Explore Now
      </button>
    </div>
  );
}
