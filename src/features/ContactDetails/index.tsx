import { Button } from "@/components/ui/button";
import Instagarm from "@/icons/Instagram";
import TikTok from "@/icons/TikTok";
import Youtube from "@/icons/Youtube";
import Link from "next/link";

export default function ContactDetails() {
  const socialLinks = [
    {
      icon: <TikTok />,
      href: "",
    },
    {
      icon: <Instagarm />,
      href: "https://www.instagram.com/theizzyandmariashow?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: <Youtube />,
      href: "https://www.youtube.com/@izzymariashow",
    },
  ];

  return (
    <section className="bg-site-black flex flex-col lg:flex-row lg:justify-between px-4 lg:px-40 py-9 lg:py-28 gap-20">
      <div className="flex flex-col gap-16 xl:max-w-4xl self-center">
        <div className="flex flex-col gap-10">
          <h3 className="text-site-saffron text-lg md:text-3xl font-bold">
            Contact Us
          </h3>
          <h1 className="text-site-white text-3xl md:text-5xl">
            We&apos;re always here to support you—ready to answer your
            questions, listen to your thoughts, and walk alongside you on your
            journey.
          </h1>
          <p className="font-light text-site-white text-base md:text-2xl">
            No question is too small—reach out anytime and let us know how we
            can make your experience even better.
          </p>
        </div>
        <div className="flex md:grid grid-cols-2 flex-col gap-10">
          {/* <div className="flex flex-col gap-6">
            <h2 className="text-site-saffron text-base md:text-xl font-semibold">
              CALL US
            </h2>
            <p className="text-site-white text-sm md:text-base font-extralight">
              Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis
              eu
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-site-saffron text-base md:text-xl font-semibold">
              VISIT US
            </h2>
            <p className="text-site-white text-sm md:text-base font-extralight">
              0004, New T-1000 Str First Avenue
            </p>
          </div> */}
          <div className="flex flex-col gap-6">
            <h2 className="text-site-saffron text-base md:text-xl font-semibold">
              EMAIL ID
            </h2>
            <p className="text-site-white text-sm md:text-base font-extralight">
              dominionvision7@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-site-saffron text-base md:text-xl font-semibold">
              Social Media Links
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Link
                  href={link.href}
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
      </div>
      <div className="flex flex-col bg-site-saffron py-12 gap-12">
        <div className="flex flex-col gap-8 px-4 md:px-11">
          <h1 className="text-[#FBF5FF] font-semibold text-xl capitalize">
            Get in touch with us!
          </h1>
          <p className="text-sm md:text-base text-site-white font-semibold">
            Fill in your details and message us and we&apos;ll get back to you
            as soon as possible.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:px-11">
          <div className="border-b">
            <input
              type="text"
              placeholder="First Name"
              className="font-medium text-base placeholder:text-site-white text-site-white focus:outline-none bg-transparent p-4"
            />
          </div>
          <div className="border-b">
            <input
              type="email"
              placeholder="Email Address"
              className="font-medium text-base placeholder:text-site-white text-site-white focus:outline-none bg-transparent p-4"
            />
          </div>
          <div className="border-b">
            <input
              type="text"
              placeholder="Subject"
              className="font-medium text-base placeholder:text-site-white text-site-white focus:outline-none bg-transparent p-4"
            />
          </div>
          <div className="border-b">
            <textarea
              rows={6}
              placeholder="Your message"
              className="font-medium text-base placeholder:text-site-white text-site-white focus:outline-none bg-transparent p-4 w-full resize-none"
            ></textarea>
          </div>
          <Button
            type="button"
            className="py-4 px-6 text-sm md:text-lg font-medium shadow-[0px_2px_4px_-1px_#00000012] self-center text-site-black bg-site-white capitalize rounded-none hover:bg-transparent hover:border hover:border-site-white hover:text-site-white transition-colors duration-300"
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
