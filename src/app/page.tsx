import AffilateProgram from "@/features/AffilateProgram";
import BrandMarquee from "@/features/BrandMarquee";
import DominionVision from "@/features/DominionVision";
import HomeTrainingCourses from "@/features/HomeTrainingCourses";
// import NewsLetter from "@/features/NewsLetter";
import OurVision from "@/features/OurVision";
import RugbyForDummies from "@/features/RugbyForDummies";
import Slider from "@/features/Slider";
import SpotifyPodcast from "@/features/SpotifyPodcast";
import UpcomingEvents from "@/features/UpcomingEvents";
import Image from "next/image";
// import UpcomingEvents from "@/features/UpcomingEvents";

export default function Home() {
  return (
    <>
      <Slider />
      <BrandMarquee />
      <OurVision />
      <DominionVision />
      <HomeTrainingCourses />
      {/* <HomeMarchendise /> */}
      <RugbyForDummies />
      <div className="flex flex-col lg:flex-row">
        <SpotifyPodcast />
        <Image
          src="/events/netball-tournament.png"
          alt="event tournament"
          width={775}
          height={1068}
          className="basis-full lg:basis-[40%] object-cover"
        />
      </div>
      <AffilateProgram />
      {/* <NewsLetter /> */}
    </>
  );
}
