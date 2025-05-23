
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

export function FeaturedPitch() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample data for featured pitches
  const featuredPitches = [
    {
      id: 1,
      title: "EcoSense: Smart Water Conservation System",
      description: "A breakthrough IoT solution for reducing campus water usage by 40%",
      category: "INNOVATION",
      date: "May 2025",
      content: "Created by the Engineering Department's senior team, EcoSense uses AI and IoT sensors to detect water waste patterns across campus facilities. The system has already been implemented in two buildings, showing remarkable results.",
      teamLead: {
        name: "Sarah Johnson",
        role: "Team Lead",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      image: "https://images.unsplash.com/photo-1581092335397-9fa341d5c8f1"
    },
    {
      id: 2,
      title: "MindfulU: Mental Wellness Platform",
      description: "An AI-powered application helping students manage stress and anxiety",
      category: "HEALTH TECH",
      date: "June 2025",
      content: "Developed by Psychology and Computer Science students, MindfulU offers personalized mental wellness exercises, mood tracking, and anonymous peer support. Already showing a 30% improvement in student wellbeing metrics.",
      teamLead: {
        name: "Michael Chen",
        role: "Project Lead",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      image: "https://images.unsplash.com/photo-1565298931044-0bf2db236655"
    },
    {
      id: 3,
      title: "BioCraft: Sustainable Packaging",
      description: "Biodegradable food packaging made from agricultural waste",
      category: "SUSTAINABILITY",
      date: "April 2025",
      content: "BioCraft has developed plant-based packaging that decomposes within 30 days. The campus cafeteria has already adopted these containers, reducing plastic waste by over 200kg per month.",
      teamLead: {
        name: "Emma Rodriguez",
        role: "Research Lead",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
    },
    {
      id: 4,
      title: "EduConnect: Peer Learning Network",
      description: "Platform connecting students for collaborative learning and skill exchange",
      category: "EDUCATION",
      date: "March 2025",
      content: "EduConnect matches students based on complementary skills, enabling knowledge exchange and collaborative project work. Over 500 students have already formed learning partnerships.",
      teamLead: {
        name: "David Kim",
        role: "Development Lead",
        image: "https://randomuser.me/api/portraits/men/86.jpg"
      },
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
    },
    {
      id: 5,
      title: "SolarStride: Pathway Energy Harvester",
      description: "Walkways that generate electricity from footsteps",
      category: "ENERGY",
      date: "July 2025",
      content: "Installed along the main campus walkway, SolarStride converts kinetic energy from footsteps into electricity. Current installation powers all pathway lighting, demonstrating true energy self-sufficiency.",
      teamLead: {
        name: "Aisha Patel",
        role: "Engineering Lead",
        image: "https://randomuser.me/api/portraits/women/37.jpg"
      },
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    {
      id: 6,
      title: "CampusNav: Accessibility Mapping",
      description: "AR navigation system highlighting accessible routes for disabled students",
      category: "INCLUSION",
      date: "February 2025",
      content: "This augmented reality app provides real-time navigation showing accessible routes throughout campus. It includes features like automatic door locations and elevator status updates.",
      teamLead: {
        name: "Marcus Johnson",
        role: "UX Design Lead",
        image: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
    },
    {
      id: 7,
      title: "FoodShare: Community Meal Program",
      description: "App connecting students with excess meal plan credits to those in need",
      category: "SOCIAL IMPACT",
      date: "May 2025",
      content: "FoodShare has facilitated over 1,200 meal donations this semester, ensuring no student goes hungry while reducing food waste. The initiative has received recognition from the state governor.",
      teamLead: {
        name: "Sophia Garcia",
        role: "Community Lead",
        image: "https://randomuser.me/api/portraits/women/90.jpg"
      },
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d"
    }
  ];

  // Update the active index when the carousel changes
  const handleCarouselChange = () => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  };

  // Set up the carousel api and add event listeners
  const setupCarousel = (carouselApi: CarouselApi) => {
    setApi(carouselApi);
    carouselApi.on("select", handleCarouselChange);
    handleCarouselChange();
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Featured Pitch of the Month</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl mb-8">
            Highlighting extraordinary innovation and creativity from our student community
          </p>
        </div>
        
        <div className="relative px-4 md:px-10 max-w-5xl mx-auto">
          <Carousel 
            className="w-full" 
            setApi={setupCarousel}
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent>
              {featuredPitches.map((pitch, index) => (
                <CarouselItem key={pitch.id} className="md:basis-full">
                  <Card className="border-none shadow-lg overflow-hidden card-hover">
                    <div className="grid md:grid-cols-2">
                      <div className="bg-pitchburg-light-purple p-6 md:p-8">
                        <CardHeader className="p-0">
                          <div className="flex items-center mb-4">
                            <Badge className="bg-pitchburg-purple mr-2">{pitch.category}</Badge>
                            <span className="text-sm text-gray-500">{pitch.date}</span>
                          </div>
                          <CardTitle className="text-2xl mb-2">{pitch.title}</CardTitle>
                          <CardDescription className="text-base">
                            {pitch.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0 py-4">
                          <p className="mb-4">
                            {pitch.content}
                          </p>
                          <div className="flex items-center space-x-3 mb-4">
                            <img 
                              src={pitch.teamLead.image} 
                              alt={pitch.teamLead.name} 
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium">{pitch.teamLead.name}</p>
                              <p className="text-sm text-gray-500">{pitch.teamLead.role}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="px-0 pt-2">
                          <Button className="bg-pitchburg-purple hover:bg-purple-600">
                            View Full Project
                          </Button>
                        </CardFooter>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={pitch.image} 
                          alt={pitch.title} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 gap-2">
              {featuredPitches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-pitchburg-purple scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -left-4 md:-left-10 transform -translate-y-1/2">
              <CarouselPrevious className="bg-white shadow-md border-none hover:bg-pitchburg-light-purple" />
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-10 transform -translate-y-1/2">
              <CarouselNext className="bg-white shadow-md border-none hover:bg-pitchburg-light-purple" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
