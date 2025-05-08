
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Achiever {
  id: number;
  name: string;
  achievement: string;
  department: string;
  image: string;
  quote: string;
}

// Mock data for achievers
const achievers: Achiever[] = [
  {
    id: 1,
    name: "Emma Rodriguez",
    achievement: "National Innovation Award",
    department: "Biomedical Engineering",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Don't be afraid to take risks. My pitch journey taught me that failure is just a stepping stone to success."
  },
  {
    id: 2,
    name: "Michael Chang",
    achievement: "Social Impact Prize",
    department: "Public Health",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Through Pitchburg, I found a platform to transform my community service idea into reality."
  },
  {
    id: 3,
    name: "Zara Patel",
    achievement: "Tech Startup Funding",
    department: "Computer Science",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "My pitch started as a class project and ended up securing $50,000 in seed funding. Dream big!"
  },
  {
    id: 4,
    name: "David Washington",
    achievement: "Environmental Leadership Award",
    department: "Environmental Science",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    quote: "Pitchburg gave me the confidence to present my ideas to industry leaders and make real change."
  },
  {
    id: 5,
    name: "Sophia Kim",
    achievement: "Best Freshman Pitch",
    department: "Business Administration",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote: "It's never too early to start. My first pitch wasn't perfect, but it opened countless doors."
  }
];

export function AchieverSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? achievers.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev === achievers.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [handleNext]);

  const visibleAchievers = () => {
    const numVisible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const result = [];
    
    for (let i = 0; i < numVisible; i++) {
      const index = (currentIndex + i) % achievers.length;
      result.push(achievers[index]);
    }
    
    return result;
  };

  return (
    <section className="py-16 bg-pitchburg-light-purple">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Achievers Spotlight</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Celebrating the success stories of our outstanding student innovators
          </p>
        </div>
        
        <div className="relative">
          {showArrows && (
            <>
              <Button 
                onClick={handlePrev}
                variant="outline" 
                size="icon" 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md hover:bg-gray-100"
                aria-label="Previous achiever"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                onClick={handleNext}
                variant="outline" 
                size="icon" 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md hover:bg-gray-100"
                aria-label="Next achiever"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
          
          <div className="flex flex-col md:flex-row gap-6">
            {visibleAchievers().map((achiever) => (
              <Card key={achiever.id} className="w-full md:w-1/2 lg:w-1/3 card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pitchburg-purple mb-4">
                      <img 
                        src={achiever.image} 
                        alt={achiever.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl">{achiever.name}</h3>
                    <p className="text-pitchburg-purple font-medium mb-1">{achiever.achievement}</p>
                    <p className="text-sm text-gray-500 mb-4">{achiever.department}</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="italic text-gray-600">"{achiever.quote}"</p>
                    </div>
                    <Button variant="outline" className="mt-2">View Success Story</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {achievers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-pitchburg-purple" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
