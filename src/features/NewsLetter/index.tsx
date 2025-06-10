import { Button } from "@/components/ui/button";
import Email from "@/icons/Email";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <section className="bg-[url('/custom-bg/newsletter-bg.png')] bg-no-repeat bg-cover bg-right flex justify-center">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-60 px-4 py-20">
        <div className="flex flex-col gap-6 lg:max-w-md">
          <h1 className="text-black text-2xl font-bold">
            Subscribe to our newsletter
          </h1>
          <p className="text-black/60 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipin elit. Turpis
            dignissim Lorem ipsum. Lorem ipsum dolor sit amet, consectetur
            adipin elit. Turpis dignissim Lorem ipsum.
          </p>
          <div className="flex border border-site-black/60 bg-site-white/40 ps-9">
            <Email className="text-base justify-center text-black self-center mr-2" />
            <input
              type="email"
              placeholder="Enter you email address"
              className="py-5 text-sm placeholder:text-site-black text-site-black bg-transparent flex-1 focus:outline-none"
            />
            <Button
              type="button"
              className="text-sm text-site-white font-semibold bg-site-black px-3"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/custom-assets/newsletter-cover.png"
            alt="newsletter"
            width={535}
            height={349}
            className="lg:w-[27.8vw]"
          />
        </div>
      </div>
    </section>
  );
}
