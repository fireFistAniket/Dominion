import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function MemorableMomments() {
  const chapeterData = [
    {
      key: "Chapter 1",
      value: [
        "/gallery-chapter/Gallery-Chapter-IMG1.png",
        "/gallery-chapter/Gallery-Chapter-IMG2.png",
        "/gallery-chapter/Gallery-Chapter-IMG3.png",
        "/gallery-chapter/Gallery-Chapter-IMG4.png",
        "/gallery-chapter/Gallery-Chapter-IMG5.png",
        "/gallery-chapter/Gallery-Chapter-IMG6.png",
      ],
    },
    {
      key: "Chapter 2",
      value: [
        "/gallery-chapter/Gallery-Chapter-IMG1.png",
        "/gallery-chapter/Gallery-Chapter-IMG2.png",
        "/gallery-chapter/Gallery-Chapter-IMG3.png",
        "/gallery-chapter/Gallery-Chapter-IMG4.png",
        "/gallery-chapter/Gallery-Chapter-IMG5.png",
        "/gallery-chapter/Gallery-Chapter-IMG6.png",
      ],
    },
    {
      key: "Chapter 3",
      value: [
        "/gallery-chapter/Gallery-Chapter-IMG1.png",
        "/gallery-chapter/Gallery-Chapter-IMG2.png",
        "/gallery-chapter/Gallery-Chapter-IMG3.png",
        "/gallery-chapter/Gallery-Chapter-IMG4.png",
        "/gallery-chapter/Gallery-Chapter-IMG5.png",
        "/gallery-chapter/Gallery-Chapter-IMG6.png",
      ],
    },
    {
      key: "Chapter 4",
      value: [
        "/gallery-chapter/Gallery-Chapter-IMG1.png",
        "/gallery-chapter/Gallery-Chapter-IMG2.png",
        "/gallery-chapter/Gallery-Chapter-IMG3.png",
        "/gallery-chapter/Gallery-Chapter-IMG4.png",
        "/gallery-chapter/Gallery-Chapter-IMG5.png",
        "/gallery-chapter/Gallery-Chapter-IMG6.png",
      ],
    },
    {
      key: "Chapter 5",
      value: [
        "/gallery-chapter/Gallery-Chapter-IMG1.png",
        "/gallery-chapter/Gallery-Chapter-IMG2.png",
        "/gallery-chapter/Gallery-Chapter-IMG3.png",
        "/gallery-chapter/Gallery-Chapter-IMG4.png",
        "/gallery-chapter/Gallery-Chapter-IMG5.png",
        "/gallery-chapter/Gallery-Chapter-IMG6.png",
      ],
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center py-16 gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold text-center text-site-white">
          Memorable Moments
        </h1>
        <p className="text-xs font-light text-center text-site-white">
          Lorem ipsum dolor sit amet consectetur. Volutpat
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mx-4 block lg:hidden self-stretch"
        defaultValue={chapeterData[0].key}
      >
        {chapeterData.map((chapter, index) => (
          <AccordionItem value={chapter.key} key={index}>
            <AccordionTrigger className="[&[data-state=open]]:text-site-black text-site-white bg-[#2F2F2F] [&[data-state=open]]:bg-site-saffron px-4">
              {chapter.key}
            </AccordionTrigger>
            <AccordionContent className="mt-4 grid grid-flow-row gap-5">
              <div className="grid grid-cols-2 place-items-stretch gap-4">
                {chapter.value.slice(0, 2).map((img, key) => (
                  <Image
                    alt=""
                    key={key}
                    width={182}
                    height={178}
                    className="object-cover w-full"
                    src={img}
                  />
                ))}
              </div>
              <div className="grid grid-flow-row place-items-stretch gap-4">
                {chapter.value.slice(2, 4).map((img, key) => (
                  <Image
                    alt=""
                    key={key}
                    width={380}
                    height={285}
                    className="object-cover w-full"
                    src={img}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 place-items-stretch gap-4">
                {chapter.value.slice(4, 6).map((img, key) => (
                  <Image
                    alt=""
                    key={key}
                    width={182}
                    height={178}
                    className="object-cover w-full"
                    src={img}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Tabs
        defaultValue={chapeterData[0].key}
        className="hidden lg:block mx-[8.33vw]"
      >
        <TabsList className="grid w-full grid-flow-col mb-20">
          {chapeterData.map((chapter, index) => (
            <TabsTrigger
              value={chapter.key}
              key={index}
              className="text-site-white px-16 py-5"
            >
              {chapter.key}
            </TabsTrigger>
          ))}
        </TabsList>
        {chapeterData.map((chapter, index) => (
          <TabsContent
            key={index}
            value={chapter.key}
            className="grid grid-cols-3 place-items-stretch gap-10"
          >
            <div className="grid grid-rows-2 place-items-stretch gap-4">
              {chapter.value.slice(0, 2).map((img, key) => (
                <Image
                  alt=""
                  key={key}
                  width={466}
                  height={340}
                  className="object-cover"
                  src={img}
                />
              ))}
            </div>
            <div className="grid grid-flow-row place-items-stretch gap-4">
              {chapter.value.slice(2, 4).map((img, key) => (
                <Image
                  alt=""
                  key={key}
                  width={510}
                  height={648}
                  className="object-cover"
                  src={img}
                />
              ))}
            </div>
            <div className="grid grid-rows-2 place-items-stretch gap-4">
              {chapter.value.slice(4, 6).map((img, key) => (
                <Image
                  alt=""
                  key={key}
                  width={543}
                  height={258}
                  className="object-cover"
                  src={img}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}