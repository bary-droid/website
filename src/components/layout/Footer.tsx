"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  logoWorldcomFooter,
  iconMail,
  iconPhone,
  socialFacebook,
  socialInstagram,
  socialLinkedin,
  badgeAppStore,
  badgeGooglePlay,
} from "@/lib/assets";

export default function Footer() {
  return (
    <AnimatedSection>
      <footer className="py-16">
        <div className="max-w-[1556px] mx-auto">
          {/* Main footer content - 4 columns */}
          <div className="grid grid-cols-4 gap-8">
            {/* Column 1: Hours */}
            <div>
              <h3 className="font-bold text-[24px] text-text-primary mb-4">
                We Are Here For You
              </h3>
              <div className="text-[16px] leading-[24px] text-text-grey">
                <p>Sundays to Thursdays 08:00 - 19:00</p>
                <br />
                <p>Fridays 08:00 - 13:00</p>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <h3 className="font-bold text-[24px] text-text-primary mb-4">
                Contact Info
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Image src={iconMail} alt="" width={24} height={24} />
                  <span className="text-[16px] leading-[24px] text-text-grey">
                    cs@worldcomfinance.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={iconPhone} alt="" width={24} height={24} />
                  <span className="text-[16px] leading-[24px] text-text-grey">
                    03-900-9823
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3: Social */}
            <div>
              <h3 className="font-bold text-[24px] text-text-primary mb-4">
                Social media
              </h3>
              <div className="flex items-center gap-4">
                <Image src={socialFacebook} alt="Facebook" width={64} height={64} />
                <Image src={socialInstagram} alt="Instagram" width={64} height={64} />
                <Image src={socialLinkedin} alt="LinkedIn" width={64} height={64} />
              </div>
            </div>

            {/* Column 4: Logo + App stores */}
            <div>
              <div className="h-[63px] w-[271px] overflow-hidden mb-6">
                <Image
                  src={logoWorldcomFooter}
                  alt="Worldcom Finance"
                  width={271}
                  height={63}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={badgeAppStore}
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                  style={{ width: 120, height: 40 }}
                />
                <Image
                  src={badgeGooglePlay}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="object-contain"
                  style={{ width: 135, height: 40 }}
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-divider mt-12 mb-6" />

          {/* Legal row */}
          <div className="flex items-center justify-between text-[16px] leading-[24px] text-text-grey">
            <div className="flex gap-10">
              <span className="cursor-pointer hover:underline">Privacy Policy</span>
              <span className="cursor-pointer hover:underline">Terms &amp; Conditions</span>
            </div>
            <p>&copy;WIC Worldcom Finance LTD, Licenses No: 57533, 63141</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
}
