"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  businessIllustration,
  clientLogo1,
  clientHolon,
  clientLogo3,
  clientLogo5,
  clientLogo7,
} from "@/lib/assets";

const clientLogos = [
  { src: clientLogo1, alt: "City Time", width: 138, height: 32 },
  { src: clientHolon, alt: "Holon", width: 42, height: 32 },
  { src: clientLogo3, alt: "Good Pharm", width: 92, height: 32 },
  { src: clientLogo5, alt: "Egged", width: 32, height: 32 },
  { src: clientLogo7, alt: "Hadasa", width: 66, height: 32 },
];

export default function BusinessSolutions() {
  return (
    <section className="py-24">
      <div className="max-w-[1556px] mx-auto flex items-start">
        {/* Left column - text */}
        <AnimatedSection direction="left" className="w-[766px] shrink-0 py-10">
          <div className="flex flex-col gap-8">
            <h2 className="font-medium text-[64px] leading-[72px] text-text-primary">
              Financial Solutions for Businesses
            </h2>
            <div className="text-[18px] leading-[24px] text-text-primary">
              <p>Managing global transactions for your business?</p>
              <p>Discover tailored solutions that offer the best rates with minimal fees.</p>
            </div>
            <Button>Let&apos;s get started</Button>
          </div>

          {/* Client logos */}
          <div className="mt-16 flex flex-col gap-6">
            <p className="font-medium text-[24px] text-text-primary">Our Clients</p>
            <div className="flex items-center justify-between w-full">
              {clientLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  style={{ width: logo.width, height: 32 }}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right column - illustration */}
        <AnimatedSection direction="right" className="flex-1">
          <Image
            src={businessIllustration}
            alt="Financial solutions illustration"
            width={766}
            height={784}
            className="w-full h-auto"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
