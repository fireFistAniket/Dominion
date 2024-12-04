import Email from "@/icons/Email";
import Facebook from "@/icons/Facebook";
import Instagarm from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import Twitter from "@/icons/Twitter";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Footer() {
  const socialLinks = [
    {
      icon: <Facebook />,
    },
    {
      icon: <Twitter />,
    },
    {
      icon: <Instagarm />,
    },
    {
      icon: <LinkedIn />,
    },
  ];
  return (
    <footer className="bg-[url('/custom-bg/footer-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center gap-20 bg-site-black/45 lg:bg-inherit px-4 pt-11 lg:pt-24 pb-5 lg:container">
        <div className="flex justify-between flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-9">
            <Image
              src="/logo.png"
              width={379}
              height={79}
              alt="logo"
              className=""
            />
            <p className="text-sm font-light text-site-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod sit.
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-site-white">
                Social Media Links
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((link, index) => (
                  <Link
                    href="/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    key={index}
                    className="bg-site-white/10 p-2 inline-flex items-center"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <h1
              className={`${dancingScript.className} text-4xl tracking-wider text-site-white capitalize`}
            >
              love from Israel &amp; maria folau
            </h1>
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-base text-site-white">
                Subscribe to our newsletter
              </h3>
              <div className="flex border border-site-black/60 bg-site-white ps-3">
                <Email className="text-xl justify-center text-black self-center mr-2" />
                <input
                  type="email"
                  placeholder="Enter you email address"
                  className="py-5 text-sm placeholder:text-site-black text-site-black bg-transparent flex-1 focus:outline-none"
                />
                <button
                  type="button"
                  className="text-sm text-site-white font-semibold bg-site-black px-3"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-5">
          <h1 className="text-sm md:text-base tracking-wider text-site-white">
            &copy;2024 Dominion. all rights reserved
          </h1>
          <h1 className="inline-flex gap-3 text-sm md:text-base text-site-white">
            <span>Design with</span>
            <svg
              className="size-6"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4521 22.3383L11.0021 21.0183C5.85215 16.3483 2.45215 13.2583 2.45215 9.48828C2.45215 6.39828 4.87215 3.98828 7.95215 3.98828C9.69215 3.98828 11.3621 4.79828 12.4521 6.06828C13.5421 4.79828 15.2121 3.98828 16.9521 3.98828C20.0321 3.98828 22.4521 6.39828 22.4521 9.48828C22.4521 13.2583 19.0521 16.3483 13.9021 21.0183L12.4521 22.3383Z"
                fill="#F83E3E"
              />
            </svg>
            <span>By Team Appifinity</span>
          </h1>
          <div className="flex justify-between text-site-white underline gap-16 lg:gap-14 text-sm md:text-base">
            <h3 className="capitalize">terms &amp; condition</h3>
            <h3 className="capitalize">Privacy policy</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
