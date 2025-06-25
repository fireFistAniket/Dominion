"use client";
import { Button } from "@/components/ui/button";
import useClickOutSide from "@/hooks/useClickOutSide";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OurVision() {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const playerRef = useClickOutSide(() => setShowVideoModal(false));

  return (
    <section
      className="bg-[url('/custom-bg/vision-bg.png')] bg-no-repeat bg-cover bg-right flex items-center justify-center lg:h-[49vw]"
      id="our-vision"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 container mx-4 lg:mx-20 justify-center my-10">
        <div className="flex relative">
          <Image
            src="/video-thumb/vision-thumb.png"
            alt="vision-cover"
            width={809}
            height={519}
            className="lg:w-[50vw] object-cover"
          />
          <Button
            type="button"
            onClick={() => setShowVideoModal(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent"
          >
            <Image
              src="/icons/play-button.png"
              width={93}
              height={93}
              alt="play"
              className="w-11 h-11 lg:w-24 lg:h-24"
            />
          </Button>
        </div>
        <div className="flex flex-col gap-6 lg:max-w-md xl:max-w-xl self-center">
          <h3 className="font-semibold text-sm lg:text-xl text-white uppercase tracking-wider">
            Maria Folau &amp; Israel Folau
          </h3>
          <h1 className="font-bold text-3xl lg:text-5xl text-white capitalize">
            Our Vision to create{" "}
            <span className="text-site-saffron">Dominion</span>
          </h1>
          <p className="text-sm lg:text-base text-white">
            At the heart of Dominion lies the vision of Maria and Israel
            Folau—two international sporting icons who have been blessed to
            compete at the highest levels in Netball and Rugby. Through years of
            elite competition, they have gained invaluable wisdom, discipline,
            and purpose, which they now feel called to share. <br /> <br />{" "}
            Anchored deeply in their Christian faith, Maria and Israel believe
            in giving back to the community by nurturing the next generation—not
            just as athletes, but as whole individuals. Dominion is their way of
            serving others through transformative training programs,
            inspirational eBooks, and powerful nutritional guidance. Whether you
            dream of sporting greatness or simply seek a stronger, better life,
            Maria and Israel welcome you to walk this journey with them.
          </p>
          <Link
            href="/training"
            className="text-site-black font-medium text-base lg:text-xl bg-site-saffron py-5 lg:py-4 px-8 lg:px-11 self-start capitalize hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300 mt-4"
          >
            Explore more
          </Link>
        </div>
      </div>
      {showVideoModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-site-black/80 z-[1100] flex items-center justify-center overflow-hidden">
          <div
            className={`w-[80vw] h-[33vh] lg:h-[75vh] relative`}
            ref={playerRef}
          >
            <iframe
              src="https://drive.google.com/file/d/1YY5aqBh6UvWNv7_2Bgd-MPdrgEJo9QFh/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
