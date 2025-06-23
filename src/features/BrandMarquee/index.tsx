import { Marquee } from "@/components/ui/marquee";

export default function BrandMarquee() {
  return (
    <div className="flex gap-2">
      <div className="hidden md:flex bg-site-saffron flex-col items-start py-6 2xl:py-10 px-12">
        <h2 className="text-lg font-medium text-site-black">Brands</h2>
        <h1 className="text-2xl font-semibold text-site-black whitespace-nowrap">
          We Endorse
        </h1>
      </div>
      <Marquee
        className="bg-site-saffron items-center flex"
        items={[
          { image: "/brand-logo/Appifinity-Logo.png" },
          { image: "/brand-logo/LevelPlay-Logo.png" },
          { image: "/brand-logo/SMSFLC-Logo.png" },
          { image: "/brand-logo/yurhub-logo.png" },
          { image: "/brand-logo/Appifinity-Logo.png" },
          { image: "/brand-logo/LevelPlay-Logo.png" },
          { image: "/brand-logo/SMSFLC-Logo.png" },
          { image: "/brand-logo/yurhub-logo.png" },
        ]}
      />
    </div>
  );
}
