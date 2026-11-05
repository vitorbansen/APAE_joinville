import Hero from "@/components/sections/Hero.section";
import Stats from "@/components/sections/Stats.section";
import Services from "@/components/sections/Services.section";
import Campaigns from "@/components/sections/Campaigns.section";
import HistoryTeaser from "@/components/sections/HistoryTeaser.section";
import LatestNews from "@/components/sections/LatestNews.section";
import DonateCta from "@/components/sections/DonateCta.section";
import PartnersStrip from "@/components/sections/PartnersStrip.section";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HistoryTeaser />
      <Campaigns />
      <LatestNews />
      <DonateCta />
      <PartnersStrip />
    </>
  );
}
