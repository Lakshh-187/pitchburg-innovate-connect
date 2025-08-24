
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { FeaturedPitch } from "@/components/home/FeaturedPitch";
import { PitchCategories } from "@/components/home/PitchCategories";
import { AchieverSpotlight } from "@/components/home/AchieverSpotlight";
import { UpdatesFeed } from "@/components/home/UpdatesFeed";
import { StatsSection } from "@/components/home/StatsSection";
import { EventsCalendar } from "@/components/home/EventsCalendar";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { PartnersSection } from "@/components/home/PartnersSection";
import { HeroSection } from "@/components/home/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedPitch />
        <PitchCategories />
        <EventsCalendar />
        <StatsSection />
        <ProjectShowcase />
        <AchieverSpotlight />
        <PartnersSection />
        <UpdatesFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
