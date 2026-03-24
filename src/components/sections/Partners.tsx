"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
        <motion.p
          className="font-medium text-[24px] text-text-primary text-center whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Financial Institutions Worldwide
        </motion.p>

        <div className="w-full flex items-center justify-between">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.alt}
              className={partner.alt === "PNB" ? "overflow-hidden" : ""}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="object-contain"
                style={{ width: partner.width, height: partner.height }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
