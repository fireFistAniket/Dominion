"use client";
import { Button } from "@/components/ui/button";
import useClickOutSide from "@/hooks/useClickOutSide";
import Image from "next/image";
import { useState } from "react";

export default function LiveTraining() {
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const playerRef = useClickOutSide(() => setShowVideoModal(false));
  return (
    <section className="flex items-center justify-center py-14 lg:py-28">
      <div className="flex flex-col gap-16 items-center max-w-[80vw] justify-center">
        <div className="flex flex-col gap-9 max-w-80 lg:max-w-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-center text-site-white">
            Watch Our Live Training
          </h1>
          <p className="text-sm text-center text-site-white">
            &quot;Be Inspired. Be Awesome. Be Amazing&quot;
          </p>
        </div>
        <div className="bg-site-black p-4">
          <div className="flex items-center justify-center relative">
            <Image
              src="/training/cover/live-training-thumb.png"
              alt="live"
              width={1541}
              height={864}
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
        </div>
      </div>
      {showVideoModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-site-black/80 z-[1100] flex items-center justify-center overflow-hidden">
          <div
            className={`w-[80vw] h-[33vh] lg:h-[75vh] relative`}
            ref={playerRef}
          >
            <iframe
              src="https://drive.google.com/file/d/1168SN199iauX0TA-g5etu5ZAnPN0sZPV/preview"
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
