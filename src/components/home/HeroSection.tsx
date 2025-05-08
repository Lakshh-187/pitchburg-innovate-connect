
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-pitchburg-light-purple via-white to-white">
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-pitchburg-purple bg-opacity-10 rounded-full">
              <span className="text-pitchburg-purple font-medium text-sm">
                Welcome to Institute Pitchburg Hub
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Where <span className="text-pitchburg-purple">Young Innovators</span> Shape Tomorrow
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Join our vibrant community of student innovators showcasing groundbreaking ideas, 
              social initiatives, and transformative projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-pitchburg-purple hover:bg-purple-600 text-white px-6 py-2 h-12">
                Explore Pitches
              </Button>
              <Button variant="outline" className="border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple h-12">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative ml-auto animate-fade-in">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pitchburg-yellow rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pitchburg-orange rounded-full opacity-50 blur-2xl"></div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Students presenting a project" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
