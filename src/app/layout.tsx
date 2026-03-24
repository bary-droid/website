import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worldcom Finance — Cross-Border Financial Solutions",
  description:
    "Streamline your global finances with our cross-border solutions. Money transfers, business solutions, and WPay Card.",
  openGraph: {
    title: "Worldcom Finance — Cross-Border Financial Solutions",
    description: "Streamline your global finances with our cross-border solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-[family-name:var(--font-roboto)] antialiased`}>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
