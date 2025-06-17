
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { UNCIFOverview } from "@/components/uncif/UNCIFOverview";
import { CurriculumPillars } from "@/components/uncif/CurriculumPillars";
import { TransformationModel } from "@/components/uncif/TransformationModel";
import { ImpactShowcase } from "@/components/uncif/ImpactShowcase";
import { WeizmannShowcase } from "@/components/uncif/WeizmannShowcase";
import { TechInfrastructure } from "@/components/uncif/TechInfrastructure";
import { EstablishmentGuide } from "@/components/uncif/EstablishmentGuide";
import { FrontlinerDevelopment } from "@/components/uncif/FrontlinerDevelopment";
import { ParticipationStrategy } from "@/components/uncif/ParticipationStrategy";
import { PhysicalInfrastructure } from "@/components/uncif/PhysicalInfrastructure";
import { AssessmentRevolution } from "@/components/uncif/AssessmentRevolution";
import { SuccessStories } from "@/components/uncif/SuccessStories";
import { CallToAction } from "@/components/uncif/CallToAction";

export default function UNCIF() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <InstituteHero 
        category="Educational Transformation"
        title="UNCIF Curriculum"
        subtitle="Transform Your Institute to International Standards"
        description="Uniford National Council of Institutes & Frontliners presents a revolutionary curriculum designed to elevate educational institutions through our proven 7-pillar framework."
        primaryActionText="Download Curriculum Guide"
        secondaryActionText="Schedule Consultation"
        gradientClass="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900"
        heroImage="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg"
      />
      <UNCIFOverview />
      <WeizmannShowcase />
      <TechInfrastructure />
      <EstablishmentGuide />
      <FrontlinerDevelopment />
      <ParticipationStrategy />
      <PhysicalInfrastructure />
      <AssessmentRevolution />
      <CurriculumPillars />
      <TransformationModel />
      <SuccessStories />
      <ImpactShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
}
