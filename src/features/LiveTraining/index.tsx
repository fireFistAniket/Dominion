import Image from "next/image";

export default function LiveTraining() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col gap-16 items-center max-w-[80vw] justify-center">
        <div className="flex flex-col gap-9 max-w-80 lg:max-w-full items-center justify-center">
          <h1 className="text-4xl font-semibold text-center text-site-white">
            Watch Our Live Training
          </h1>
          <p className="text-sm text-center text-site-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            dignissim.
          </p>
        </div>
        <div className="bg-site-black p-4">
          <div className="flex items-center justify-center">
            <Image
              src="/training/cover/live-training-thumb.png"
              alt="live"
              width={1541}
              height={864}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
