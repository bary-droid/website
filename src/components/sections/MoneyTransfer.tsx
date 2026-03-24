"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  transferCard1,
  transferCard2,
  transferCard3,
  transferCard4,
} from "@/lib/assets";

const cards = [
  {
    image: transferCard1,
    title: "Competitive Pricing",
    description:
      "Maximize the value of your money with our low fees, competitive exchange rates, and complete transparency-no hidden fees.",
  },
  {
    image: transferCard2,
    title: "Quick and Easy",
    description:
      "Our user-friendly app allows you to quickly transfer funds from anywhere, anytime.",
  },
  {
    image: transferCard3,
    title: "Secure and Safe",
    description:
      "Our advanced technology is designed to protect your finances and ensure your privacy.",
  },
  {
    image: transferCard4,
    title: "Professional Service",
    description:
      "We're here for you around the clock, offering support in the language you choose.",
  },
];

export default function MoneyTransfer() {
  return (
    <section className="relative w-full bg-gray-900 py-24">
      <div className="max-w-[1556px] mx-auto">
        {/* Title */}
        <m.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-medium text-[64px] leading-[72px] text-white">
            Money Transfer
            <br />
            Worldwide
          </h2>
          <p className="mt-6 text-[18px] leading-[24px] text-text-light-50 max-w-[923px] mx-auto">
            With Worldcom Finance&apos;s technology, you can securely transfer money to a wide
            range of destinations worldwide at highly competitive rates.
          </p>
        </m.div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <m.div
              key={card.title}
              className="relative h-[570px] rounded-[24px] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Photo */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[338px] rounded-[24px]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(11,11,11,0) 0%, #0b0b0b 70.19%)",
                }}
              />

              {/* Text */}
              <div className="absolute bottom-[40px] left-[26px] right-[26px]">
                <h3 className="font-bold text-[24px] text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-[24px] text-white max-w-[313px]">
                  {card.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
