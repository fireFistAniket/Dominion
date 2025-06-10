import { Button } from "@/components/ui/button";
import Facebook from "@/icons/Facebook";
import Instagarm from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import Twitter from "@/icons/Twitter";
import Youtube from "@/icons/Youtube";
import Link from "next/link";

export default function ContactDetails() {
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
      icon: <Youtube />,
    },
  ];

  return (
    <section className="bg-site-black flex flex-col lg:flex-row lg:justify-between px-4 lg:px-40 py-9 lg:py-28 gap-20">
      <div className="flex flex-col gap-16 xl:max-w-xl self-center">
        <div className="flex flex-col gap-10">
          <h3 className="text-site-saffron text-base md:text-2xl font-medium">
            Contact Us
          </h3>
          <h1 className="text-site-white text-4xl md:text-5xl font-medium">
            We are always ready to help you and answer your questions
          </h1>
          <p className="font-light text-site-white text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu
            neque sit etiam nec quisque. Cras quam dignissim blandit metus
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
              mnbmnlg5663@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-site-saffron text-base md:text-xl font-semibold">
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
      </div>
      <div className="flex flex-col bg-site-saffron py-12 gap-12">
        <div className="flex flex-col gap-8 px-4 md:px-11">
          <h1 className="text-[#FBF5FF] font-semibold text-xl capitalize">
            Get in touch with us!
          </h1>
          <p className="text-sm text-site-white">
            Lorem ipsum dolor sit amet consectetur. Volutpat proin id turpis eu
            neque sit
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
