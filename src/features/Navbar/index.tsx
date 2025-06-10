"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navlinks } from "@/lib/navlinks";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AlignLeft } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrollStart, setScrollStart] = useState<boolean>(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setScrollStart(true);
    } else {
      setScrollStart(false);
    }
  });

  const isActiveRoute = (href: string) => {
    return pathname === href ? true : false;
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      initial={false}
      animate={
        !scrollStart ? { background: "transparent" } : { background: "#2F2F2F" }
      }
      transition={{ duration: 0.5 }}
    >
      <div className="lg:container lg:mx-auto flex py-3 md:py-10 items-center gap-8 xlg:gap-0 justify-between px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
            >
              <AlignLeft className="h-8 w-8 text-[#FEFAE0]" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle className="hidden"></SheetTitle>
          <SheetContent
            side="left"
            className="lg:hidden bg-site-black flex items-center justify-center"
          >
            <div className="grid gap-14 p-4 place-items-center">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`text-xl ${
                    isActiveRoute(link.href)
                      ? "text-site-saffron font-semibold"
                      : "text-white font-normal"
                  }`}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <Logo className="h-16 w-80 text-[#FEFAE0]" /> */}
          <Image
            src="/logo.png"
            width={302}
            height={63}
            alt="logo"
            className="w-[37.8vw] lg:w-[15.72vw]"
          />
          <span className="sr-only">Dominion</span>
        </Link>
        <nav className="hidden items-center gap-14 lg:flex">
          {navlinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`hover:text-site-saffron hover:font-semibold text-xl font-normal ${
                isActiveRoute(link.href) ? "text-site-saffron font-semibold" : "text-white"
              }`}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="block lg:hidden"></div>
      </div>
    </motion.header>
  );
}
