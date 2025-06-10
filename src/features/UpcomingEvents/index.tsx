import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar1, Clock, MoveUpRight, Ticket } from "lucide-react";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <section className="flex py-14 px-4 lg:py-24 lg:px-16 md:items-center md:justify-center lg:container lg:mx-auto">
      <Tabs defaultValue="account" className="w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 md:mb-20">
          <div className="flex flex-col gap-7">
            <h1 className="text-4xl md:text-5xl font-semibold text-center sm:text-left capitalize text-site-white">
              Upcoming Events
            </h1>
            <h3 className="text-sm md:text-base text-center sm:text-left text-site-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              dignissim.
            </h3>
          </div>
          <TabsList className="w-full sm:w-auto gap-2 border border-site-saffron self-center p-0">
            <TabsTrigger
              value="account"
              className="text-site-white text-base data-[state=active]:font-semibold font-medium w-full sm:w-auto py-4 md:py-6 md:px-9"
            >
              Endorsed Events
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-site-white text-base data-[state=active]:font-semibold font-medium w-full sm:w-auto py-4 md:py-6 md:px-9"
            >
              Charity Events
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="account"
          className="flex flex-col lg:flex-row gap-12"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="flex-1 p-0 bg-site-black border-none shadow-none"
            >
              <CardHeader className="p-0 relative">
                <Image
                  alt="card cover"
                  src="/events/event-cover-1.jpeg"
                  width={460}
                  height={330}
                  className="w-full"
                />
                <div className="absolute top-[5%] right-[5%] inline-flex gap-2 items-center text-site-black bg-site-white px-1 font-bold">
                  <Ticket /> <span>Free</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col py-6 bg-[#373737] relative">
                <div className="flex justify-between bg-site-saffron px-5 absolute w-[85%] py-5 -top-[25%] left-1/2 -translate-x-1/2">
                  <div className="flex gap-2 xl:text-lg font-bold text-site-black text-base">
                    <Calendar1 />
                    <span>25 March, 2024</span>
                  </div>
                  <div className="flex gap-2 xl:text-lg font-bold text-site-black text-base">
                    <Clock />
                    <span>6pm-8pm</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-site-white font-semibold text-2xl">
                    Connecting Hearts, Building Dreams!
                  </h2>
                  <p className="text-site-white/60 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipin elit. Turpis
                    dignissim Lorem ipsum.
                  </p>
                  <Button className="text-base font-bold self-start mt-4 bg-transparent shadow-none text-site-saffron p-0 hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300">
                    Book your seat <MoveUpRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent
          value="password"
          className="flex flex-col lg:flex-row gap-12"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={index}
              className="flex-1 p-0 bg-site-black border-none shadow-none"
            >
              <CardHeader className="p-0 relative">
                <Image
                  alt="card cover"
                  src="/events/event-cover-1.jpeg"
                  width={460}
                  height={330}
                  className="w-full"
                />
                <div className="absolute top-[5%] right-[5%] inline-flex gap-2 items-center text-site-black bg-site-white px-1 font-bold">
                  <Ticket /> <span>Free</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col py-6 bg-[#373737] relative">
                <div className="flex justify-between bg-site-saffron px-5 absolute w-[85%] py-5 -top-[25%] left-1/2 -translate-x-1/2">
                  <div className="flex gap-2 xl:text-lg font-bold text-site-black text-base">
                    <Calendar1 />
                    <span>25 March, 2024</span>
                  </div>
                  <div className="flex gap-2 xl:text-lg font-bold text-site-black text-base">
                    <Clock />
                    <span>6pm-8pm</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-site-white font-semibold text-2xl">
                    Connecting Hearts, Building Dreams!
                  </h2>
                  <p className="text-site-white/60 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipin elit. Turpis
                    dignissim Lorem ipsum.
                  </p>
                  <Button className="text-base font-bold self-start mt-4 bg-transparent shadow-none text-site-saffron p-0">
                    Book your seat <MoveUpRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
}
