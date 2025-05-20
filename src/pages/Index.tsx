
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
          category="TRANSFORMING EDUCATION"
          title="Transforming Students &" 
          subtitle="Institutes Through"
          description="Building a future where quality education is accessible to all through alumni donations, modern AI platforms, and zero-fee opportunities."
          primaryActionText="Apply Now"
          secondaryActionText="Learn More"
          primaryActionHref="/gallery"
          secondaryActionHref="/about"
          backgroundColor="bg-gradient-to-r from-purple-900 to-purple-800"
          heroImage="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg"
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
