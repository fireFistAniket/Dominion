import { Button } from "@/components/ui/button";

export default function TrainingMethod() {
  return (
    <section className="bg-[url('/custom-bg/training-methods.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-4 py-14">
      <div className="flex flex-col items-center justify-center gap-11 max-w-5xl">
        <h3 className="tracking-[0.2em] font-medium text-base text-center text-site-black/60">
          PERSONALIZED WORKOUT PLANS
        </h3>
        <div className="flex flex-col gap-7 items-center justify-center">
          <h1 className="text-3xl font-bold text-black text-center">
            INNOVATE TRAINING METHODS FOR WOMEN
          </h1>
          <p className="text-sm text-center text-site-black/80 line-clamp-2 lg:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur. Viverra eu urna tortor
            pellentesque duis quam. Placerat sed mattis et cursus elementum.
            Pretium varius condimentum lobortis diam lectus viverra. Scelerisque
            magna hendrerit nisl quis eget.
          </p>
        </div>
        <Button
          type="button"
          className="text-lg text-black font-semibold bg-site-white py-5 px-6"
        >
          Our Services
        </Button>
      </div>
    </section>
  );
}
