import TrainingCard from "@/components/ui/trainingcard";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeTrainingCourses({
  showButton = true,
}: {
  showButton?: boolean;
}) {
  const cardDetails: string[] = [
    "/training/cards/training-1.png",
    "/training/cards/training-2.png",
    "/training/cards/training-3.png",
    "/training/cards/training-4.png",
  ];

  const cardData = [
    {
      title: "Fitness Training",
      cover: "/training/cards/training-2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Beginner",
      color: "#EAB400",
    },
    {
      title: "Fitness Training",
      cover: "/training/cards/training-3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Intermediate",
      color: "#7AC700",
    },
    {
      title: "Fitness Training",
      cover: "/training/cards/training-4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis dignissim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "Expert",
      color: "#DD0004",
    },
  ];
  return (
    <section className="bg-site-black px-4 py-14 lg:py-28 flex items-center justify-center">
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col items-center justify-center gap-7">
          <h2 className="text-sm lg:text-base font-medium tracking-[0.2em] text-site-saffron">
            Top Picks
          </h2>
          <h1 className="font-semibold text-site-white text-2xl lg:text-4xl">
            Training Courses
          </h1>
        </div>
        <div className="flex gap-6 overflow-hidden overflow-x-scroll md:overflow-x-visible md:justify-center max-w-[90vw]">
          {cardData.map((item, index) => (
            <TrainingCard key={index} data={item} />
          ))}
        </div>
        {showButton && (
          <Link
            href="/training"
            className="px-4 py-4 text-site-black bg-site-saffron font-medium text-sm lg:text-lg inline-flex items-center self-center gap-2 hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300"
          >
            <span>Visit Courses Page</span>
            <MoveUpRight className="text-base" />
          </Link>
        )}
      </div>
    </section>
  );
}
