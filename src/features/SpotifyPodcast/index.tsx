import BrodcastCard from "@/components/ui/brodcastcard";
import Spotify from "@/icons/Spotify";

export default function SpotifyPodcast() {
  const brodCastImg: string[] = [
    "/podcast/podcast-1.png",
    "/podcast/podcast-2.png",
    "/podcast/podcast-3.png",
  ];
  return (
    <section className="bg-[url('/custom-bg/spotify-bg.png')] bg-cover bg-no-repeat flex flex-col justify-center gap-20 px-4 md:px-0 py-11 md:py-24">
      <h1 className="text-4xl lg:text-5xl font-semibold inline-flex items-center gap-4 md:gap-6 justify-center">
        <span>
          <Spotify className="w-36 md:w-44 text-[#1ED760] h-11" />
        </span>
        <span className="text-site-white">Podcasts</span>
      </h1>
      <div className="flex gap-3 md:gap-9 overflow-hidden overflow-x-scroll lg:overflow-x-visible lg:justify-center">
        {brodCastImg.map((item, index) => (
          <BrodcastCard img={item} key={index} />
        ))}
      </div>
      <div className="self-center flex py-4 px-8 md:px-6 bg-[#20C25A] items-center gap-7">
        <h1 className="text-sm lg:text-lg font-semibold text-site-white">
          Visit Our Channel
        </h1>
        <Spotify className="w-24 md:w-28 text-site-white h-8" />
      </div>
    </section>
  );
}
