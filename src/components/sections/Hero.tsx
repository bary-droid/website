"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { heroBackground, heroPhoneMockup } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative w-full h-[1080px] overflow-hidden">
      {/* Background layer 1: tertiary color */}
      <div className="absolute inset-0 bg-page-tertiary opacity-45" />

      {/* Background layer 2: image */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Background layer 3: gradient overlay */}
      <div
        className="absolute inset-0 mix-blend-color"
        style={{
          backgroundImage:
            "linear-gradient(206.17deg, rgba(191,105,50,0.4) 17%, rgba(79,148,240,0.4) 83%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1920px] mx-auto px-[160px] h-full flex items-center">
        {/* Text content - left side */}
        <div className="w-[50%] shrink-0">
          <motion.h1
            className="text-[96px] font-extrabold leading-normal text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Cross-Border
          </motion.h1>
          <motion.h1
            className="text-[96px] font-extrabold leading-normal text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Financial Solutions
          </motion.h1>

          <motion.p
            className="text-[24px] leading-[30px] tracking-[0.1px] text-text-primary text-left mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Streamline your global finances with our cross-border solutions.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button>Let&apos;s get started</Button>
          </motion.div>
        </div>
      </div>

      {/* Phone mockup - absolutely positioned, extending past right edge */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-[-168px]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 }}
      >
        <Image
          src={heroPhoneMockup}
          alt="Worldcom Finance mobile app"
          width={837}
          height={963}
          priority
        />
      </motion.div>
    </section>
  );
}
