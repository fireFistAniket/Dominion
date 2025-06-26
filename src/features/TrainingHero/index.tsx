// import { Button } from "@/components/ui/button";
// import { MoveUpRight } from "lucide-react";
// import Image from "next/image";

export default function TrainingHero() {
  return (
    <section className="flex mt-[12%] lg:mt-auto lg:h-[48.125rem] justify-center flex-col lg:flex-row relative">
      {/* <div className="flex flex-col gap-6 justify-center items-center lg:items-stretch absolute lg:static bottom-[0%] left-1/2 -translate-x-1/2 lg:translate-x-0 bg-gradient-to-b lg:bg-site-black from-transparent via-[#2f2f2f] to-[#2f2f2f] w-full lg:w-[50vw] py-4 lg:pl-32">
        <h1 className="text-5xl lg:text-7xl text-center lg:text-start inline-flex flex-col gap-6 font-bold text-site-white capitalize">
          <span>Want to book</span>
          <span className="text-transparent [-webkit-text-stroke:_1.5px_#fefae0]">
            1 to 1
          </span>
          <span>consultation</span>
        </h1>
        <p className="text-sm lg:text-base text-site-white text-center lg:text-start max-w-xs lg:max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <Button
          type="button"
          className="px-7 py-4 text-site-black bg-site-saffron font-medium text-sm md:text-lg inline-flex items-center self-center lg:self-start gap-2 hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300"
        >
          <span>Book Now</span>
          <MoveUpRight className="text-base" />
        </Button>
      </div>
      <div className="flex">
        <Image
          src="/training/cover/training-cover.png"
          width={1114}
          height={969}
          className="lg:w-[50vw] object-cover h-[40rem] lg:h-auto"
          alt=""
        />
      </div> */}
      <video
        src="/training/Dominion Video - Muted.mp4"
        autoPlay
        loop
        muted
        className="size-full object-cover"
      ></video>
    </section>
  );
}
