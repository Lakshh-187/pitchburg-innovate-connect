
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPitch } from "@/components/home/FeaturedPitch";
import { PitchCategories } from "@/components/home/PitchCategories";
import { AchieverSpotlight } from "@/components/home/AchieverSpotlight";
import { UpdatesFeed } from "@/components/home/UpdatesFeed";
import { StatsSection } from "@/components/home/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedPitch />
        <PitchCategories />
        <StatsSection />
        <AchieverSpotlight />
        <UpdatesFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
