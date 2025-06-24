import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function AffilateProgram() {
  return (
    <section className="bg-[url('/custom-bg/affilate-program-bg.png')] bg-cover bg-no-repeat flex flex-col gap-20 px-4 lg:px-0 py-8 lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-14 items-center justify-center">
        <div className="flex flex-col gap-7 lg:max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-site-black">
            Join the Dominion Affiliate&nbsp;
            <span className="text-site-white inline">Program</span>
          </h1>
          <p className="text-site-black text-sm lg:text-base">
            Turn your passion into purpose by promoting our courses, books, and
            programs—earn generous commissions, exclusive gifts, and VIP rewards
            along the way. <br />
            Whether you&apos;re a coach, athlete, or fan, help us inspire others
            and grow a movement rooted in excellence and impact.
          </p>
          <Dialog>
            <DialogTrigger
              type="button"
              className="bg-site-white text-site-black text-sm lg:text-base py-4 px-8 font-semibold self-start hover:bg-transparent border border-site-white hover:text-site-white transition-colors duration-300"
            >
              Become a partner
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-black font-semibold text-lg lg:text-xl">
                      Fill The Form Below
                    </h1>
                    <p className="text-sm lg:text-base text-site-black/60">
                      You are almost there to join our affiliate program.
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
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    className="outline-none text-site-black/50 text-sm lg:text-base"
                  />
                  <Textarea
                    placeholder="Enter message"
                    className="outline-none text-site-black/50 text-sm lg:text-base"
                  />
                  <DialogClose asChild>
                    <Button className="text-site-black bg-site-saffron font-semibold text-sm lg:text-base self-start hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300">
                      Join with us <MoveRight />
                    </Button>
                  </DialogClose>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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
