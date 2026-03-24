"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { wpayCards, logoMax, logoBankJerusalem } from "@/lib/assets";

export default function WPayCard() {
  return (
    <section className="py-24 overflow-visible">
      <div className="max-w-[1556px] mx-auto flex items-start relative">
        {/* Left - Card images */}
        <AnimatedSection direction="left" className="w-[607px] shrink-0 -mt-[124px]">
          <Image
            src={wpayCards}
            alt="WPay Visa cards"
            width={607}
            height={742}
            className="w-full h-auto"
          />
        </AnimatedSection>

        {/* Right - Text content */}
        <AnimatedSection direction="right" className="flex-1 pt-[102px] pl-16">
          <div className="max-w-[762px] flex flex-col gap-8">
            <h2 className="font-medium text-[64px] leading-[72px] text-text-primary text-center">
              WPay Card
            </h2>
            <p className="text-[18px] leading-[24px] text-text-primary max-w-[602px]">
              Enjoy no annual fees and simplify your daily purchases and international
              online shopping with WPay Card.
            </p>
            <div className="flex items-center gap-[55px]">
              <Image
                src={logoMax}
                alt="MAX"
                width={68}
                height={18}
                className="object-contain"
                style={{ width: 68, height: 18 }}
              />
              <Image
                src={logoBankJerusalem}
                alt="Bank of Jerusalem"
                width={169}
                height={19}
                className="object-contain"
                style={{ width: 169, height: 19 }}
              />
            </div>
            <Button>Order wPay card</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
