"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

export default function GalleryCarousel() {
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

  const carouselImages: string[] = [
    "/gallery-slider/Gallery-Crousel-IMG1.png",
    "/gallery-slider/Gallery-Crousel-IMG2.png",
    "/gallery-slider/Gallery-Crousel-IMG3.png",
    "/gallery-slider/Gallery-Crousel-IMG4.png",
    "/gallery-slider/Gallery-Crousel-IMG5.png",
    "/gallery-slider/Gallery-Crousel-IMG6.png",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[url('/custom-bg/gallery-slider.png')] bg-no-repeat bg-cover flex flex-col gap-16 items-center px-4 py-9">
      <div className="relative flex justify-center">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full max-w-[72vw] mt-[10%] py-10"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 group">
            {carouselImages.map((img, index) => (
              <CarouselItem
                key={index}
                className={`pl-1 md:basis-1/2 lg:basis-1/3 self-end group`}
              >
                <div
                  className={`p-1 group transition-transform duration-500 ${
                    index + 1 === current
                      ? "scale-100" // Highlight the current item
                      : "scale-75" // Shrink others
                  }`}
                >
                  <Image
                    src={img}
                    alt="slider"
                    width={543}
                    height={374}
                    className={`group:transition-all object-cover duration-300 ${
                      index + 1 === current
                        ? "md:h-96 h-[31.6rem]"
                        : "md:h-auto h-[28.4rem]"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <div className="py-2 text-center text-sm text-muted-foreground absolute bottom-[3%] left-1/2 -translate-x-1/2 flex gap-1">
          {Array.from({ length: count }).map((_, ind) => (
            <span
              key={ind}
              onClick={() => handlePaginationClick(ind)}
              className={`size-1 md:size-3 ${
                current === ind + 1 ? "bg-white" : "bg-gray-600"
              } rounded-full`}
            ></span>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col items-center gap-3 max-w-[91vw]">
        <h1 className="font-bold text-4xl text-site-white text-center">
          The journey of our lives
        </h1>
        <p className="text-xs font-light text-site-white text-center max-w-[53vw]">
          Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu.
        </p>
      </div>
    </section>
  );
}
