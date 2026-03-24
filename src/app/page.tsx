import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import MoneyTransfer from "@/components/sections/MoneyTransfer";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import NewApplication from "@/components/sections/NewApplication";
import FeatureCards from "@/components/sections/FeatureCards";
import WPayCard from "@/components/sections/WPayCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <MoneyTransfer />
      <BusinessSolutions />
      <NewApplication />
      <FeatureCards />
      <WPayCard />
    </main>
  );
}
