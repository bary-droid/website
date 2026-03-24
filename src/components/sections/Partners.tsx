"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
} from "@/lib/assets";

const partners = [
  { src: partner1, alt: "B2B Trust", width: 180, height: 64 },
  { src: partner2, alt: "BPI", width: 131, height: 64 },
  { src: partner3, alt: "InteliExpress", width: 192, height: 32 },
  { src: partner4, alt: "Landbank", width: 115, height: 64 },
  { src: partner5, alt: "PNB", width: 142, height: 64 },
  { src: partner6, alt: "Ria", width: 96, height: 64 },
];

export default function Partners() {
  return (
    <section className="py-16">
      <div className="max-w-[1556px] mx-auto flex flex-col items-center gap-16">
        <m.h2
          className="font-medium text-[24px] text-text-primary text-center whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Financial Institutions Worldwide
        </m.h2>

        {/* Infinite scrolling marquee */}
        <div className="w-full overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {/* First set */}
            <div className="flex items-center gap-24 shrink-0 pr-24">
              {partners.map((partner) => (
                <div
                  key={partner.alt}
                  className={`opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0 ${partner.alt === "PNB" ? "overflow-hidden" : ""}`}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                    style={{ width: partner.width, height: partner.height }}
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-24 shrink-0 pr-24" aria-hidden="true">
              {partners.map((partner) => (
                <div
                  key={`dup-${partner.alt}`}
                  className={`opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0 ${partner.alt === "PNB" ? "overflow-hidden" : ""}`}
                >
                  <Image
                    src={partner.src}
                    alt=""
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                    style={{ width: partner.width, height: partner.height }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
