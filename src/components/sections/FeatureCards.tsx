"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { featureDigitalWallet, featureSimTopup } from "@/lib/assets";

const features = [
  {
    image: featureDigitalWallet,
    title: "Digital Wallet",
    description:
      "Empower your global finances with our advanced digital wallet. Designed for seamless cross-border use, our wallet allows you to store, manage, and exchange multiple currencies effortlessly.",
  },
  {
    image: featureSimTopup,
    title: "SIM Top-Up",
    description:
      "Stay in touch no matter where you are. With our SIM recharge service, you can quickly choose the perfect plan to suit your needs.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16">
      <div className="max-w-[1556px] mx-auto grid grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <m.div
            key={feature.title}
            className="bg-white rounded-[24px] h-[300px] flex items-center p-8 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="w-[215px] h-[236px] shrink-0 rounded-[12px] overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                width={215}
                height={236}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h3 className="font-bold text-[24px] text-text-primary">{feature.title}</h3>
              <p className="text-[16px] leading-[24px] text-text-primary">
                {feature.description}
              </p>
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
