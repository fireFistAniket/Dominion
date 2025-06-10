"use client";
import Facebook from "@/icons/Facebook";
import Instagarm from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import Twitter from "@/icons/Twitter";
import { navlinks } from "@/lib/navlinks";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Footer() {
  const pathname = usePathname();

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

  const isActiveRoute = (href: string) => {
    return pathname === href ? true : false;
  };

  return (
    <footer className="bg-[url('/custom-bg/footer-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center gap-20 bg-site-black/45 lg:bg-inherit px-4 py-11 lg:py-24 pb-5 lg:container">
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
            <h1 className="text-sm md:text-base tracking-wider text-site-white hidden md:block md:mt-4">
              &copy;2024 Dominion. all rights reserved
            </h1>
          </div>
          <div className="flex flex-col gap-16">
            <h1
              className={`${dancingScript.className} text-4xl tracking-wider text-site-white capitalize`}
            >
              love from <br /> Israel &amp; maria folau
            </h1>
            <div className="flex flex-col gap-9 md:gap-5">
              <h1 className="text-base font-semibold text-site-white">
                Useful Links
              </h1>
              <div className="flex gap-4 md:gap-9">
                {navlinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className={`hover:text-site-saffron hover:font-semibold text-base font-normal ${
                      isActiveRoute(link.href)
                        ? "text-site-saffron font-semibold"
                        : "text-site-white"
                    }`}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <h1 className="text-sm md:text-base text-site-white hidden md:block md:mt-4">
              Proudly Designed &amp; Developed by{" "}
              <Link
                href="https://www.appifinity.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-site-saffron ps-1"
              >
                Appifinity
              </Link>
            </h1>
            {/* <div className="flex flex-col gap-5">
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
            </div> */}
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center gap-5">
          <h1 className="text-sm md:text-base tracking-wider text-site-white">
            &copy;2024 Dominion. all rights reserved
          </h1>
          <h1 className="text-sm md:text-base text-site-white">
            Proudly Designed &amp; Developed by{" "}
            <Link
              href="https://www.appifinity.com/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-site-saffron"
            >
              Appifinity
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
}
