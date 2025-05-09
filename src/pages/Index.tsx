
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Non-profit Organization"
          title="Empowering Scholars" 
          subtitle="For Tomorrow's World"
          description="A complete ecosystem where scholars learn, perform, and connect with opportunities through the Talent Hunt Alliance."
          primaryActionText="Apply for ID Card"
          secondaryActionText="Explore Programs"
          primaryActionHref="/gallery"
          secondaryActionHref="/about"
          backgroundImage="public/lovable-uploads/bbfd50d9-c69d-40de-90ba-c2ca76c49314.png"
        />
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
