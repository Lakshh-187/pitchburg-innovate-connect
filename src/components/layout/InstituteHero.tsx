
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface InstituteHeroProps {
  category?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionHref?: string;
  backgroundImage?: string;
  heroImage?: string;
  alignment?: "left" | "center";
  backgroundColor?: string;
}

export function InstituteHero({
  category = "Non-profit Organization",
  title = "Empowering Scholars",
  subtitle = "For Tomorrow's World",
  description = "A complete ecosystem where scholars learn, perform, and connect with opportunities through the Talent Hunt Alliance.",
  primaryActionText = "Apply for ID Card",
  secondaryActionText = "Explore Programs",
  primaryActionHref = "#",
  secondaryActionHref = "#",
  backgroundImage,
  heroImage,
  alignment = "left",
  backgroundColor = "bg-gradient-to-r from-purple-900 to-purple-800",
}: InstituteHeroProps) {
  return (
    <div className={`relative overflow-hidden ${backgroundColor} text-white`}>
      {/* Background image with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <span className="text-white text-sm font-medium">
                {category}
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${alignment === 'center' ? 'text-center mx-auto' : ''}`}>
              <span className="block">{title} </span> 
              <span className="block">
                {subtitle} <span className="text-yellow-300">{subtitle.includes("Through") ? "" : "CSR Grants"}</span>
              </span>
            </h1>
            
            <p className={`text-xl text-white/80 mt-6 max-w-2xl ${alignment === 'center' ? 'text-center mx-auto' : ''}`}>
              {description}
            </p>
            
            <div className={`mt-10 flex flex-wrap gap-4 ${alignment === 'center' ? 'justify-center' : ''}`}>
              {primaryActionText && (
                <Button 
                  asChild
                  className="bg-white hover:bg-white/90 text-purple-900 font-medium px-8 py-6 h-12 text-base rounded-full"
                >
                  <a href={primaryActionHref}>
                    {primaryActionText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryActionText && (
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 h-12 text-base rounded-full"
                >
                  <a href={secondaryActionHref}>{secondaryActionText}</a>
                </Button>
              )}
            </div>
            
            {!heroImage && (
              <div className="mt-16">
                <p className="text-sm text-white/60 mb-4">Trusted by leading institutions and organizations</p>
                <div className="flex flex-wrap gap-8">
                  {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm h-12 w-24 rounded flex items-center justify-center">
                      <div className="bg-white/40 h-6 w-16 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Hero Image - Right Side */}
          {heroImage && (
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2">
                <img 
                  src={heroImage} 
                  alt="Hero"
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
