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
      title: "Netball for Beginners: Shooting Basics for Newbies",
      cover: "/training/cards/training-2.png",
      description:
        "Step into the game with confidence as Maria and Gretel guide you through essential fundamentals of shooting techniques. Learn proper body positioning, hand placement, shot height, and the power of practice. Master the basics through repetition and build the confidence to shine on court. Your journey to becoming a skilled netballer starts right here.",
      tag: "Beginner",
      color: "#EAB400",
    },
    {
      title: "Netball for Intermediate: Run, Aim and Apply",
      cover: "/training/cards/training-3.png",
      description:
        "Ready to level up? This program sharpens your shooting accuracy, stamina, and decision-making under pressure. This program is tailored for players ready to move beyond the basics and sharpen their competitive edge with drills that build precision, consistency, and strategy. Train smarter, aim sharper, and step confidently into your next phase as a netballer.",
      tag: "Intermediate",
      color: "#7AC700",
    },
    {
      title: "Netball for Advanced: Sharp Shooters Summit",
      cover: "/training/cards/training-4.png",
      description:
        "Step into elite territory with advanced drills that sharpen accuracy, control, and composure under pressure. Designed for experienced players, this program pushes your limits and perfects every technical detail. Build confidence, master pressure moments, and deliver with precision when it matters most. This is where sharp shooters are made—and champions rise.",
      tag: "Advance",
      color: "#DD0004",
    },
  ];
  return (
    <section className="bg-site-black px-4 py-14 lg:py-28 lg:container flex items-center justify-center mx-auto">
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col items-center justify-center gap-7">
          <h2 className="text-sm lg:text-base font-medium tracking-[0.2em] text-site-saffron">
            Top Picks
          </h2>
          <h1 className="font-semibold text-site-white text-2xl lg:text-4xl">
            Training Courses
          </h1>
        </div>
        <div className="flex flex-col gap-6 overflow-hidden overflow-x-scroll md:overflow-x-visible md:justify-center">
          {cardData.map((item, index) => (
            <TrainingCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
