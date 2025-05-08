
import { Button } from "@/components/ui/button";

interface InstituteHeroProps {
  instituteName: string;
  tagline: string;
  description: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionHref?: string;
  pageTitle?: string;
  backgroundImage?: string;
}

export function InstituteHero({
  instituteName = "Institute Pitchburg Hub",
  tagline = "Where Young Innovators Shape Tomorrow",
  description = "Join our vibrant community of student innovators showcasing groundbreaking ideas, social initiatives, and transformative projects.",
  primaryActionText,
  secondaryActionText,
  primaryActionHref = "#",
  secondaryActionHref = "#",
  pageTitle,
  backgroundImage,
}: InstituteHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-pitchburg-light-purple via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pitchburg-yellow rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pitchburg-orange rounded-full opacity-50 blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-pitchburg-purple bg-opacity-10 rounded-full">
              <span className="text-pitchburg-purple font-medium text-sm">
                {pageTitle ? pageTitle : "Welcome to " + instituteName}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              <span className="text-pitchburg-dark-purple">{instituteName.split(" ")[0]}</span>{" "}
              <span className="text-pitchburg-purple">{instituteName.split(" ").slice(1).join(" ")}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
              {tagline}
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              {description}
            </p>
            
            {(primaryActionText || secondaryActionText) && (
              <div className="flex flex-wrap gap-4">
                {primaryActionText && (
                  <Button 
                    asChild
                    className="bg-pitchburg-purple hover:bg-purple-600 text-white px-6 py-2 h-12"
                  >
                    <a href={primaryActionHref}>{primaryActionText}</a>
                  </Button>
                )}
                {secondaryActionText && (
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple h-12"
                  >
                    <a href={secondaryActionHref}>{secondaryActionText}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
          
          <div className="relative ml-auto animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src={backgroundImage || "public/lovable-uploads/f857c92c-a7ff-404a-923e-2877e32530e0.png"} 
                alt={instituteName} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
