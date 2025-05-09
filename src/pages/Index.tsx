
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
          category="Innovation Hub"
          title="Empowering Innovators" 
          subtitle="For Tomorrow's World"
          description="Join our vibrant community of student innovators showcasing groundbreaking ideas, social initiatives, and transformative projects."
          primaryActionText="Explore Pitches"
          secondaryActionText="Learn More"
          primaryActionHref="/gallery"
          secondaryActionHref="/about"
          backgroundImage="public/lovable-uploads/1565516b-b8da-43dc-aa93-05f53b659f74.png"
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
