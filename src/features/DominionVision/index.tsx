import Image from "next/image";

export default function DominionVision() {
  return (
    <section className="bg-[url('/custom-bg/dominion-vision-bg.png')] bg-cover bg-no-repeat flex flex-col gap-20 px-4 md:px-0 py-11 md:py-24">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-9">
        <h3 className="text-site-black text-base lg:text-2xl font-medium">
          Our Expertise
        </h3>
        <h1 className="text-site-black text-4xl lg:text-6xl font-bold">
          Driven by Excellence
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28">
        <div className="inline-block relative group">
          <Image
            src="/custom-assets/dominion-vision-cover.jpg"
            alt="dominion vision"
            width={500}
            height={561}
            className="w-[80.5vw] sm:w-[50vw] lg:w-[24.5vw] z-10 relative shadow-[5px_5px_35px_0px_#00000040] transition-all duration-300"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-site-black group-hover:translate-x-0 translate-x-4 group-hover:translate-y-0 -translate-y-4 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col lg:max-w-2xl">
          {["Skills development", "Mental strength development"].map(
            (item, index) => (
              <div
                className="py-6 lg:py-8 border-b border-black/25 flex flex-col items-start gap-3"
                key={index}
              >
                <h2 className="text-xl lg:text-4xl font-bold text-site-black">
                  {item}
                </h2>
                <p className="text-sm lg:text-base text-site-black/70">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Turpis dignissim feugiat vestibulum a mi a volutpat. Lorem
                  ipsum dolor sit amet, consectetur adipis cing elit. Turpis
                  dignissim feugiat vestibulum a mi a volutpat. <br /> Lorem
                  ipsum dolor sit amet, consectetur adipis cing elit. Turpis
                  dignissim feugiat vestibulum a mi a volutpat.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
