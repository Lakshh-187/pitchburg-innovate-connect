
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersContent } from "@/components/careers/CareersContent";
import { InstituteHero } from "@/components/layout/InstituteHero";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <InstituteHero 
        title="Join Our Team" 
        subtitle="Build your career while making a difference in education" 
        gradientClass="bg-gradient-to-r from-pitchburg-dark-purple to-pitchburg-purple"
      />
      <CareersContent />
      <Footer />
    </div>
  );
}
