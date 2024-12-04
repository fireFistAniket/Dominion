import HomeTrainingCourses from "@/features/HomeTrainingCourses";
import LiveTraining from "@/features/LiveTraining";
import NewsLetter from "@/features/NewsLetter";
import SpotifyPodcast from "@/features/SpotifyPodcast";
import TrainingCourses from "@/features/TrainingCourses";
import TrainingHero from "@/features/TrainingHero";
import TrainingMethod from "@/features/TrainingMethods";

export default function Training() {
  return (
    <>
      <TrainingHero />
      <TrainingCourses />
      <TrainingMethod />
      <HomeTrainingCourses />
      <LiveTraining />
      <SpotifyPodcast />
      <NewsLetter />
    </>
  );
}
