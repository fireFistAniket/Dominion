import Image from "next/image";

export default function AffilateProgram() {
  return (
    <section className="bg-[url('/custom-bg/affilate-program-bg.png')] bg-cover bg-no-repeat flex flex-col gap-20 px-4 lg:px-0 py-11 lg:py-24">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-9">
        <h1 className="text-site-black text-4xl lg:text-5xl font-semibold">
          Affiliate Program
        </h1>
        <h3 className="text-site-black/60 text-sm md:text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          dignissim.
        </h3>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-14 items-center justify-center">
        <div className="flex flex-col gap-7 lg:max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-site-black">
            Affiliate program that fits{" "}
            <span className="text-site-white">everyone</span>
          </h1>
          <p className="text-site-black text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipin elit. Turpis
            dignissim Lorem ipsum. Lorem ipsum dolor sit amet, consectetur
            adipin elit. Turpis dignissim Lorem ipsum.
          </p>
          <button
            type="button"
            className="bg-site-white text-site-black text-sm lg:text-base py-4 px-8 font-semibold self-start"
          >
            Become a partner
          </button>
        </div>
        <div className="relative flex items-end justify-end">
          <Image
            className="w-[72vw] lg:w-[36vw]"
            src="/custom-assets/affilate-cover.png"
            width={692}
            height={589}
            alt="affilate"
          />
        </div>
      </div>
    </section>
  );
}
