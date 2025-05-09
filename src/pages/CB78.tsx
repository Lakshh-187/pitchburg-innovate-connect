
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CB78 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Pitchburg International"
          title="Transform Your Institute" 
          subtitle="with Pitchburg 🌍"
          description="Internships, Innovation, Impact – All in One Campus Experience"
          primaryActionText="Become a Pitchburg Institute"
          secondaryActionText="Explore Curriculum"
          primaryActionHref="#"
          secondaryActionHref="#curriculum"
          backgroundImage="public/lovable-uploads/bbfd50d9-c69d-40de-90ba-c2ca76c49314.png"
        />
        
        {/* Core Pillars Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Pillars of International Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar items */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CB78;
