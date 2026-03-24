"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { appPhoneMockup, glassLightBlob } from "@/lib/assets";

const glassCards = [
  { text: ["Send money anytime,", "anywhere"], left: 266, top: 162 },
  { text: ["Track expenses and", "monitor transactions"], left: 743, top: 624 },
  { text: ["Get live", "exchange rates"], left: 1040, top: 248 },
];

export default function NewApplication() {
  return (
    <section className="relative w-full bg-gray-900 py-0">
      <div className="max-w-[1556px] mx-auto relative h-[1172px]">
        {/* Title */}
        <m.h2
          className="font-medium text-[64px] leading-[72px] text-white text-center pt-0 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          New Application!
        </m.h2>

        {/* Phone mockup - base layer */}
        <div className="absolute left-[135px] top-[71px] w-[1325px] h-[872px]">
          <Image
            src={appPhoneMockup}
            alt="Worldcom Finance app screenshots"
            fill
            className="object-cover"
          />
        </div>

        {/* Phone mockup - glow layer (mix-blend-screen) */}
        <div className="absolute left-[135px] top-[71px] w-[1325px] h-[872px] mix-blend-screen opacity-70">
          <Image
            src={appPhoneMockup}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom vignette */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[593px] w-[1332px] h-[350px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          style={{
            background: "linear-gradient(to bottom, rgba(11,11,11,0) 0%, #0b0b0b 80.77%)",
          }}
        />

        {/* Left vignette (rotated) */}
        <div className="absolute left-[calc(50%-501px)] top-[58px] w-[350px] h-[885px] flex items-center justify-center">
          <div
            className="rotate-90 w-[885px] h-[350px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            style={{
              background: "linear-gradient(to bottom, rgba(11,11,11,0) 0%, #0b0b0b 80.77%)",
            }}
          />
        </div>

        {/* Right vignette (rotated + flipped) */}
        <div className="absolute left-[calc(50%+470px)] top-[58px] w-[498px] h-[885px] flex items-center justify-center">
          <div
            className="rotate-90 -scale-y-100 w-[885px] h-[498px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            style={{
              background: "linear-gradient(to bottom, rgba(11,11,11,0) 0%, #0b0b0b 80.77%)",
            }}
          />
        </div>

        {/* Glassmorphism cards */}
        {glassCards.map((card, i) => (
          <m.div
            key={card.text[0]}
            className="absolute w-[256px] h-[125px] rounded-[16px] backdrop-blur-[16px] overflow-hidden border border-transparent z-10 hover:border-white/20 transition-colors duration-200"
            style={{
              left: card.left,
              top: card.top,
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 + i * 0.15 }}
          >
            {/* Light blob decoration */}
            <div className="absolute -top-[63px] -left-[10px] w-[271px] h-[85px] pointer-events-none">
              <Image src={glassLightBlob} alt="" fill className="object-cover" unoptimized />
            </div>

            {/* Inner blur reinforcement */}
            <div
              className="absolute -left-px -top-px w-[256px] h-[125px] rounded-[16px] backdrop-blur-[16px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 100%)",
              }}
            />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <p className="font-medium text-[20px] text-white leading-normal">
                {card.text.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < card.text.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
