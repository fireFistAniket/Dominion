import PlayerProgress from "@/icons/PlayerProgress";
import { Pause } from "lucide-react";
import Image from "next/image";

export default function BrodcastCard({ img }: { img: string }) {
  return (
    <div className="flex flex-col">
      <div className="bg-site-black md:bg-inherit md:hover:bg-site-black p-5">
        <Image
          src={img}
          alt="podcast"
          width={402}
          height={433}
          className="w-[67vw] lg:w-[21vw]"
        />
      </div>
      <div className="bg-site-black py-7 flex justify-center items-center gap-12 px-5">
        <div className="w-24 lg:w-36 h-14 lg:h-20">
          <PlayerProgress />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-site-white font-semibold text-sm tracking-wide">
            01:27
          </span>
          <span className="text-site-black bg-site-saffron p-3 rounded-full text-lg md:text-3xl">
            <Pause />
          </span>
        </div>
      </div>
    </div>
  );
}
