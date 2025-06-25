import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TrainingCourses() {
  return (
    <section className="bg-[url('/custom-bg/training-courses.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col-reverse lg:flex-row relative px-4 lg:gap-20 lg:py-40 lg:px-52">
      <div className="flex flex-col gap-6 lg:gap-16 py-4">
        <h1 className="text-4xl lg:text-5xl inline-flex flex-col gap-6 font-bold text-site-white capitalize">
          Train Like a Pro - Courses &amp; Nutrition for Peak Performance
        </h1>
        <p className="text-sm lg:text-lg text-site-white lg:max-w-4xl">
          Unlock access to expert-led training courses in netball, designed by
          Maria and top athletes to boost your skills, game sense, and
          confidence. <br /> <br />
          Complement your growth with practical nutritional videos that fuel
          performance, recovery, and overall well-being. <br /> <br />
          Each course and video is crafted to help you perform at your best—on
          and off the court. <br /> <br />
          Start your journey today through our easy-access online store.
        </p>
        <Button
          type="button"
          className="px-7 py-4 text-site-black bg-site-saffron font-medium text-sm md:text-lg inline-flex items-center self-start gap-2 hover:bg-transparent hover:border hover:border-site-saffron hover:text-site-saffron transition-colors duration-300"
        >
          <span>Explore Now</span>
        </Button>
      </div>
      <div className="flex">
        <Image
          src="/training/cover/training-fitness.png"
          width={619}
          height={696}
          className="object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
