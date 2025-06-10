import HomeTrainingCourses from "@/features/HomeTrainingCourses";
import LiveTraining from "@/features/LiveTraining";
// import NewsLetter from "@/features/NewsLetter";
// import SpotifyPodcast from "@/features/SpotifyPodcast";
import TrainingCourses from "@/features/TrainingCourses";
import TrainingHero from "@/features/TrainingHero";
// import TrainingMethod from "@/features/TrainingMethods";30

export default function Training() {
  return (
    <>
      <TrainingHero />
      <TrainingCourses />
      {/* <TrainingMethod /> */}
      <HomeTrainingCourses showButton={false} />
      <LiveTraining />
      {/* <SpotifyPodcast /> */}
      {/* <NewsLetter /> */}
    </>
  );
}
