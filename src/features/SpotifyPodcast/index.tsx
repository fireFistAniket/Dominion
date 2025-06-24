import { Button } from "@/components/ui/button";
import Spotify from "@/icons/Spotify";
import { Headphones, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SpotifyPodcast() {
  return (
    <section className="bg-[url('/custom-bg/spotify-bg.png')] md:items-center bg-cover bg-no-repeat flex flex-col justify-center gap-20 px-4 md:px-16 py-11 md:py-24 basis-full lg:basis-[60%] md:mx-auto">
      <h1 className="text-4xl lg:text-5xl font-semibold inline-flex items-center gap-4 md:gap-6 justify-center">
        <span>
          <Spotify className="w-36 md:w-44 text-[#1ED760] h-11" />
        </span>
        <span className="text-site-white">Podcasts</span>
      </h1>
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:items-stretch gap-6 basis-full lg:basis-1/2">
          <h3 className="font-bold xl:text-2xl lg:text-xl text-lg text-site-white">
            Now Playing
          </h3>
          <Image
            src="/podcast/maria-izzy-cover.jpg"
            alt="podcast cover"
            width={419}
            height={437}
            className="w-full lg:w-auto"
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-medium xl:text-2xl lg:text-xl text-lg text-site-white">
              Izzy &amp; Maria Show
            </h3>
            <p className="lg:text-base text-sm text-site-white">
              Real talk, raw faith, and the untold stories behind the
              spotlight—join Maria and Izzy as they share heart, humor, and hope
              every episode.
            </p>
          </div>
          <div className="flex items-center">
            <Button type="button" className="bg-transparent shadow-none">
              <Image
                src="/icons/play-button.png"
                width={42}
                height={42}
                alt="play"
                className="size-8 lg:size-11"
              />
            </Button>
            <h3 className="text-site-white xl:text-lg lg:text-base text-sm font-semibold">
              Play Podcast
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-6 basis-full lg:basis-1/2">
          <h3 className="font-bold xl:text-2xl lg:text-xl text-lg text-site-white text-center lg:text-left">
            Trending Shows
          </h3>
          <div className="flex flex-col gap-7">
            {[
              {
                cover: "/podcast/maria-izzy-cover.jpg",
                title: "Maria & Izzy - Lukewarm Season",
                count: "311",
                href: "https://open.spotify.com/episode/33LOvAxWZw0SXd5KopNy3M?si=a65BXtMRSm6u0wZsViSCpw",
              },
              {
                cover: "/podcast/maria-izzy-cover.jpg",
                title: "The Izzy & Maria Show - with Eddie Pettybourne",
                count: "425",
                href: "https://open.spotify.com/episode/7ewe4aXSoVDeEt9rFJQhdc?si=N66Mxg5oQCu1ZnHWSWSVwA",
              },
              {
                cover: "/podcast/maria-izzy-cover.jpg",
                title: "The Izzy & Maria Show - with Kylie Jensen",
                count: "320",
                href: "https://open.spotify.com/episode/381jnEf4xfyU4N5G7yv2Qx?si=_IZGvdmoRhqdo2k0flujOg",
              },
              {
                cover: "/podcast/maria-izzy-cover.jpg",
                title: "The Izzy & Maria Show - with Samu Karevi",
                count: "389",
                href: "https://open.spotify.com/episode/2pwsgOzahFpS14aDwvgoAT?si=X4W_NM3SSLWVHfo-5R5yHA",
              },
              {
                cover: "/podcast/maria-izzy-cover.jpg",
                title: "The Izzy & Maria Show - with Mitchell Orval",
                count: "427",
                href: "https://open.spotify.com/episode/4x3U6gtRAFFZ31rzuVq6GV?si=Ir_BbNCmQ0-dNarIJx6hGA",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex bg-site-black py-3 px-8 gap-4 transition-all duration-500 hover:scale-110"
              >
                <Image
                  src={item.cover}
                  alt="cover"
                  width={59}
                  height={59}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col gap-1 justify-between flex-1">
                  <h3 className="font-semibold text-base text-site-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-[#A5A5A5] text-sm gap-2">
                    <Headphones size={14} />
                    <h3 className="font-medium">{item.count}k</h3>
                  </div>
                </div>
                <button type="button" className="text-[#A5A5A5]">
                  <Play />
                </button>
              </Link>
            ))}
          </div>
          <Link
            href="https://open.spotify.com/show/1Q5974H2kch31Qy5JC4QEy?si=68e01dba713649d6"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex py-4 px-8 md:px-6 bg-[#20C25A] items-center justify-center gap-7"
          >
            <h1 className="text-sm lg:text-lg font-semibold text-site-white">
              Visit Our Channel
            </h1>
            <Spotify className="w-24 md:w-28 text-site-white h-8" />
          </Link>
        </div>
      </div>
    </section>
  );
}
