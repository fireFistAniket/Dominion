import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function TrainingCourses() {
  return (
    <section className="bg-[url('/custom-bg/training-courses.png')] bg-cover bg-no-repeat bg-center flex justify-center flex-col-reverse lg:flex-row relative px-4 lg:gap-20 lg:py-40 lg:px-52">
      <div className="flex flex-col gap-6 lg:gap-16 py-4">
        <h3 className="text-sm lg:text-xl font-semibold text-site-saffron">
          1:1 consultation sessions
        </h3>
        <h1 className="text-4xl lg:text-5xl inline-flex flex-col gap-6 font-bold text-site-white capitalize">
          CUSTOM FITNESS &amp; TRAINING COURSES PLANS
        </h1>
        <p className="text-sm lg:text-2xl text-site-white lg:max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Viverra eu urna tortor
          pellentesque duis quam. Placerat sed mattis et cursus elementum.
          Pretium varius condimentum lobortis diam lectus viverra. Scelerisque
          magna hendrerit nisl quis eget.
        </p>
        <button
          type="button"
          className="px-7 py-4 text-site-black bg-site-saffron font-medium text-sm md:text-lg inline-flex items-center self-start gap-2"
        >
          <span>Suscribe Now</span>
          <MoveUpRight className="text-base" />
        </button>
      </div>
      <div className="flex">
        <Image
          src="/training/cover/training-fitness.png"
          width={1114}
          height={969}
          className="object-cover"
          alt=""
        />
      </div>
    </section>
  );
}
