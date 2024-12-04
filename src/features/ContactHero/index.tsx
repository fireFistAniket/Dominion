import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-site-black">
      <div className="flex items-center justify-center lg:pt-[10%] pt-0">
        <div className="flex lg:flex-col-reverse w-full items-center justify-center relative">
          <div className="relative w-full flex justify-center">
            <Image
              src="/custom-assets/contact-cover.png"
              alt="contact"
              width={1597}
              height={360}
              className="min-h-[45vh] lg:h-auto object-cover lg:w-[75vw] relative z-10"
            />
            <div className="hidden md:block h-[40vh] absolute top-1/2 -translate-y-1/2 left-0 w-full bg-site-lavender"></div>
          </div>
          <div className="absolute lg:static bottom-0 left-1/2 -translate-x-1/2 lg:translate-x-0 bg-site-black/80 z-10 flex flex-col items-center justify-end md:justify-center w-full p-4 gap-6 h-[50%]">
            <h1 className="font-semibold text-site-white text-4xl text-center">
              Contact Us
            </h1>
            <p className="text-sm font-light text-site-white/70 text-center">
              Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis
              eu neque sit etiam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}