import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function TrainingCourses() {
  return (
    <section className="bg-[url('/custom-bg/training-courses.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col-reverse lg:flex-row relative px-4 lg:gap-20 lg:py-40 lg:px-52 pt-4 lg:pt-8">
      <div className="flex flex-col gap-6 lg:gap-16 py-4">
        <h3 className="text-sm lg:text-xl font-semibold text-site-saffron capitalize">
          1:1 consultation sessions
        </h3>
        <h1 className="text-4xl lg:text-5xl inline-flex flex-col gap-6 font-bold text-site-white capitalize">
          Custom Fitness &amp; Training Courses Plans
        </h1>
        <p className="text-sm lg:text-2xl text-site-white lg:max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Viverra eu urna tortor
          pellentesque duis quam. Placerat sed mattis et cursus elementum.
          Pretium varius condimentum lobortis diam lectus viverra. Scelerisque
          magna hendrerit nisl quis eget.
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
