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
          <h3 className="text-sm md:text-2xl font-light text-site-black">
            THE UNLIMITED GUIDE TO HIT
          </h3>
          <h1 className="text-site-black font-extrabold text-4xl lg:text-5xl">
            Rugby For Dummies
          </h1>
          <h3 className="text-site-black text-xl lg:text-3xl">
            Burn Fat, Build Muscle, Get in Shape Fast
          </h3>
          <p className="text-base lg:text-lg font-light text-site-gray">
            Lorem ipsum dolor sit amet consectetur. Tellus consectetur vitae
            arcu interdum. A ut vits venenatis ornare. Risus sed magna Lorem
            ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur. Tellus consectetur vitae arcu interdr.
          </p>
          <Dialog>
            <DialogTrigger className="text-site-black font-medium text-sm lg:text-lg px-3 lg:px-7 py-5 lg:py-6 bg-site-white self-start">
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
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    className="outline-none text-site-black/50 text-sm lg:text-base"
                  />
                  <Button className="text-site-black bg-site-saffron font-semibold text-sm lg:text-base self-start">
                    Submit &amp; Download <MoveRight />
                  </Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
