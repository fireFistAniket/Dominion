import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoveRight } from "lucide-react";
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
          <h1 className="text-site-black font-extrabold text-4xl lg:text-5xl">
            Books to Inspire and Motivate You
          </h1>
          <p className="text-base lg:text-lg font-light text-site-gray">
            Dive into powerful stories, timeless lessons, and real-life wisdom
            from Maria and Israel Folau. Whether you&apos;re an athlete or just
            seeking purpose and growth, these books are designed to uplift,
            guide, and empower you. Unlock inspiration. Fuel your journey. Let
            these books walk with you.
          </p>
          <h3 className="text-base lg:text-lg font-semibold text-site-gray mt-3.5">
            Fuel your faith, mindset, and leadership with inspiring free and
            premium reads.
          </h3>
          <div className="flex items-start gap-6 mt-2">
            <Dialog>
              <DialogTrigger className="text-site-black font-medium text-sm lg:text-lg px-3 lg:px-7 py-4 bg-site-white hover:bg-transparent hover:text-site-white border border-site-white transition-colors duration-300">
                Download Now
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-black font-semibold text-lg lg:text-xl">
                        Fill The Form Below To Download
                      </h1>
                      <p className="text-sm lg:text-base text-site-black/60">
                        You are almost there to download our E-Book.
                      </p>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col gap-3 pt-5">
                    <Input
                      placeholder="Enter your full name"
                      type="text"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Select>
                      <SelectTrigger className="outline-none text-site-black/50 text-sm lg:text-base">
                        <SelectValue placeholder="Choose Sports" />
                      </SelectTrigger>
                      <SelectContent className="outline-none text-site-black/50 text-sm lg:text-base">
                        <SelectItem value="light">Rugby</SelectItem>
                        <SelectItem value="dark">NetBall</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Enter your phone number"
                      type="tel"
                      className="outline-none text-site-black/50 text-sm lg:text-base"
                    />
                    <Button className="text-site-black bg-site-saffron font-semibold text-sm lg:text-base self-start hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300">
                      Submit &amp; Download <MoveRight />
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <button
              type="button"
              className="font-medium text-sm lg:text-lg px-3 lg:px-7 py-4 border border-site-white text-site-white transition-colors duration-300 hover:bg-site-white hover:text-site-black"
            >
              Explore Our Ebooks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
