
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
          instituteName="Institute Pitchburg Hub"
          tagline="Where Young Innovators Shape Tomorrow"
          description="Join our vibrant community of student innovators showcasing groundbreaking ideas, social initiatives, and transformative projects."
          primaryActionText="Explore Pitches"
          secondaryActionText="Learn More"
          backgroundImage="public/lovable-uploads/f857c92c-a7ff-404a-923e-2877e32530e0.png"
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
