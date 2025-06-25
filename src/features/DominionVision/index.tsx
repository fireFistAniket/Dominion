import Image from "next/image";

export default function DominionVision() {
  return (
    <section className="bg-[url('/custom-bg/dominion-vision-bg.png')] bg-cover bg-no-repeat flex flex-col gap-20 px-4 md:px-0 py-11 md:py-24">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-9">
        <h3 className="text-site-black text-base lg:text-2xl font-medium">
          Our Expertise at Dominion
        </h3>
        <h1 className="text-site-black text-4xl lg:text-6xl font-bold">
          Driven by Excellence
        </h1>
        <h5 className="text-site-black text-sm lg:text-base font-semibold">
          At Dominion, Maria and Israel Folau bring world-class experience and
          heartfelt purpose into their every offering—crafted to help you rise
          in sport and in life.
        </h5>
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
          {[
            {
              title: "Skill Development Courses",
              description:
                "Learn from the best through tailored training modules that sharpen your game and build foundational techniques across netball, rugby, and athletic performance.",
            },
            {
              title: "Mental & Strength Coaching",
              description:
                "Join our dynamic programs and 1:1 sessions that cultivate resilience, inner strength, and physical conditioning—the same principles that carried us through elite sport.",
            },
            {
              title: "Motivational eBooks",
              description:
                "Explore powerful stories of triumph and trials in our eBooks, where we share the unfiltered journey behind the spotlight to uplift and inspire your own path.",
            },
            {
              title: "Nutritional Wisdom",
              description:
                "Fuel your body and mind with practical, science-backed nutritional videos designed to help athletes and everyday champions lead stronger, healthier lives.",
            },
          ].map((item, index) => (
            <div
              className="py-6 lg:py-8 border-b border-black/25 flex flex-col items-start gap-3"
              key={index}
            >
              <h2 className="text-xl lg:text-4xl font-bold text-site-black">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base text-site-black/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
