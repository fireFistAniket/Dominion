import Image from "next/image";

export default function OurVision() {
  return (
    <section className="bg-[url('/custom-bg/vision-bg.png')] bg-no-repeat bg-cover bg-right flex items-center justify-center lg:h-[49vw]">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 container mx-4 lg:mx-20 justify-center my-10">
        <div className="flex relative">
          <Image
            src="/video-thumb/vision-thumb.png"
            alt="vision-cover"
            width={809}
            height={519}
            className="lg:w-[50vw] object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 lg:max-w-md xl:max-w-xl">
          <h3 className="font-semibold text-sm lg:text-xl text-white uppercase tracking-wider">
            MARIA FOLAU &amp; Israel Folau
          </h3>
          <h1 className="font-bold text-3xl lg:text-5xl text-white capitalize">
            Our Vision to create{" "}
            <span className="text-site-saffron">Dominions</span>
          </h1>
          <p className="text-sm lg:text-base text-white">
            Lorem ipsum dolor sit amet consectetur. Viverra eu urna tortor
            pellentesque duis quam. Placerat sed mattis et cursus elementum.
            Pretium varius condimentum lobortis diam lectus viverra. Scelerisque
            magna hendrerit nisl quis eget. Aliquam urna placerat ac ipsum proin
            morbi. Lorem ipsum dolor sit amet consectetur. Viverra eu urna
            tortor pellentesque duis quam.
          </p>
          <button
            type="button"
            className="text-site-black font-medium text-base lgtext-xl bg-site-saffron py-5 lg:py-6 px-8 lg:px-11 self-start"
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
}
