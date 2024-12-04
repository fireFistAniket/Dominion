import AffilateProgram from "@/features/AffilateProgram";
import BrandMarquee from "@/features/BrandMarquee";
import DominionVision from "@/features/DominionVision";
import HomeTrainingCourses from "@/features/HomeTrainingCourses";
import NewsLetter from "@/features/NewsLetter";
import OurVision from "@/features/OurVision";
import RugbyForDummies from "@/features/RugbyForDummies";
import Slider from "@/features/Slider";
import SpotifyPodcast from "@/features/SpotifyPodcast";

export default function Home() {
  return (
    <>
      <Slider />
      <BrandMarquee />
      <OurVision />
      <DominionVision />
      <HomeTrainingCourses />
      <SpotifyPodcast />
      <AffilateProgram />
      <RugbyForDummies />
      <NewsLetter />
    </>
  );
}