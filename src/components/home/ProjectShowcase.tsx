
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mock data for showcase projects
  const showcaseProjects = [
    {
      id: 1,
      title: "Smart Campus Initiative",
      department: "Computer Science & IoT",
      description: "An integrated system for automating campus resources using IoT sensors and AI predictive analytics",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      year: "2025"
    },
    {
      id: 2,
      title: "Biodegradable Food Packaging",
      department: "Environmental Science",
      description: "Eco-friendly food packaging made from agricultural waste that decomposes within 30 days",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
      year: "2025"
    },
    {
      id: 3,
      title: "Mental Health Companion App",
      department: "Psychology & Computer Science",
      description: "Mobile application providing personalized mental wellness support through AI-powered conversations",
      image: "https://images.unsplash.com/photo-1565298931044-0bf2db236655",
      year: "2024"
    },
    {
      id: 4,
      title: "Renewable Energy Harvester",
      department: "Electrical Engineering",
      description: "Compact device capable of harvesting energy from multiple renewable sources simultaneously",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      year: "2024"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Annual Project Showcase</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Highlighting innovative projects from our annual expo that represent the best of student creativity
          </p>
        </div>

        <div className="relative px-4 md:px-10">
          <Carousel 
            className="w-full max-w-5xl mx-auto" 
            onSelect={(api) => {
              // Fix: Properly access the selected index from the Embla Carousel API
              if (api && api.selectedScrollSnap) {
                const currentIndex = api.selectedScrollSnap();
                setActiveIndex(currentIndex);
              }
            }}
          >
            <CarouselContent>
              {showcaseProjects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-2/3 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <div className="relative h-64 overflow-hidden">
                        <motion.img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                          animate={{ 
                            scale: activeIndex === index ? 1 : 0.95,
                            opacity: activeIndex === index ? 1 : 0.8 
                          }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <Badge className="mb-2 bg-pitchburg-purple/80">{project.year}</Badge>
                          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                          <p className="text-sm opacity-90">{project.department}</p>
                        </div>
                      </div>
                      <CardContent className="p-6 bg-white">
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <Button variant="outline" className="w-full">View Project Details</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              {showcaseProjects.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-pitchburg-purple" : "bg-gray-300"
                  }`}
                  animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                    opacity: activeIndex === index ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselPrevious className="absolute -left-4 top-1/3 md:left-0 bg-white" />
            <CarouselNext className="absolute -right-4 top-1/3 md:right-0 bg-white" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-pitchburg-purple hover:bg-purple-600">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
