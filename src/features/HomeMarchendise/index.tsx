"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HomeMarchendise() {
  const merchandise = [
    "/merchandise/marchendise-1.png",
    "/merchandise/marchendise-2.png",
    "/merchandise/marchendise-1.png",
    "/merchandise/marchendise-2.png",
    "/merchandise/marchendise-1.png",
  ];
  const [centerIndex, setCenterIndex] = useState(2); // Assume the middle card is initially in focus

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerWidth / 2;
      const items = document.querySelectorAll(".merch-item");
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="bg-[#2f2f2f] justify-center items-center flex flex-col gap-11 lg:gap-20 py-9 lg:py-24">
      <h1 className="text-4xl lg:text-5xl font-bold text-center text-site-saffron">
        Merchandise
      </h1>
      <div className="flex overflow-hidden w-full max-w-5xl items-end">
        {merchandise.map((img, index) => (
          <motion.div
            key={index}
            initial={{ width: "20.625rem" }}
            onClick={() => setCenterIndex(index)}
            animate={{
              width:
                index === centerIndex
                  ? "29.5rem"
                  : index % 2 === 1
                  ? "20rem"
                  : "18.75rem", // Scale up the centered item
            }}
            transition={{ duration: 0.5 }}
            className="relative border-[15px] border-[#2f2f2f] rounded-lg flex-shrink-0 merch-item"
          >
            <Image src={img} width={472} height={708} className="" alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
