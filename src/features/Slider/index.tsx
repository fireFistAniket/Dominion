"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function Slider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handlePaginationClick = (index: number) => {
    if (api) {
      api.scrollTo(index); // Use the CarouselApi's goTo method to scroll to the selected slide
      setCurrent(index + 1); // Update the current state
    }
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselImages: string[] = [
    "/slider-images/slider-1.png",
    "/slider-images/slider-2.png",
    "/slider-images/slider-3.png",
    "/slider-images/slider-4.png",
    "/slider-images/slider-5.png",
  ];

  return (
    <div className="mx-auto relative">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselImages.map((img: string, index: number) => (
            <CarouselItem key={index} className="relative">
              <Image
                src={img}
                alt="slider"
                width={1920}
                height={800}
                className="object-cover h-[75vh] md:h-[90vh] w-full"
              />
              <div className="absolute top-0 left-0 lg:w-full h-full flex justify-center items-end bg-black/50 pb-12">
                <div className="max-w-lg lg:max-w-6xl flex flex-col gap-4 mb-10 md:mx-auto">
                  <h2 className="text-base md:text-2xl text-center block text-site-white tracking-widest">
                    INTERNATIONAL NETBALL &amp; RUGBY STAR
                  </h2>
                  <h1 className="uppercase text-site-white text-4xl md:text-6xl text-center tracking-widest font-bold">
                    MARIA FOLAU &amp; Israel Folau
                  </h1>
                  <p className="text-center font-light text-sm md:text-base text-site-white line-clamp-2 md:line-clamp-none mt-5 mx-4 md:mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod do tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <Link
                    href="#our-vision"
                    className="text-site-black font-medium text-base lg:text-xl bg-site-white py-5 lg:py-4 px-8 lg:px-11 self-center capitalize hover:bg-transparent hover:border hover:border-site-white hover:text-site-white transition-colors duration-300 mt-5"
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground absolute bottom-[3%] left-1/2 -translate-x-1/2 flex gap-1">
        {Array.from({ length: count }).map((_, ind) => (
          <span
            key={ind}
            onClick={() => handlePaginationClick(ind)}
            className={`size-1 md:size-3 ${
              current === ind + 1 ? "bg-white" : "bg-gray-600"
            } rounded-full`}
          ></span>
        ))}
      </div>
    </div>
  );
}
