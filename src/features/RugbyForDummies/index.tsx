import Image from "next/image";

export default function RugbyForDummies() {
  return (
    <section className="bg-[url('/custom-bg/dominion-vision-bg.png')] bg-cover bg-no-repeat flex justify-center gap-20 px-4 lg:px-0 py-11 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-11">
        <Image
          src="/custom-assets/rugby-for-dummies-cover.png"
          alt="rugby"
          width={649}
          height={600}
        />
        <div className="flex flex-col gap-2 md:gap-5 lg:max-w-lg">
          <h3 className="text-sm md:text-2xl font-light text-site-black">
            THE UNLIMITED GUIDE TO HIT
          </h3>
          <h1 className="text-[#0E0B3D] font-extrabold text-4xl lg:text-5xl">
            Rugby For Dummies
          </h1>
          <h3 className="text-[#0E0B3D] text-xl lg:text-3xl">
            Burn Fat, Build Muscle, Get in Shape Fast
          </h3>
          <p className="text-base lg:text-lg font-light text-site-gray">
            Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
            arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
            ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur. Tellus consectetur vitae arcu interdr.
          </p>
          <button
            type="button"
            className="text-site-black font-medium text-sm lg:text-lg px-3 lg:px-7 py-5 lg:py-6 bg-site-saffron self-start"
          >
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
}
