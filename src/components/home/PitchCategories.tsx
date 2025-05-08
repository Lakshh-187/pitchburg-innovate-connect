
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for each category
const categoryData = {
  innovations: [
    {
      id: 1,
      title: "AI-Powered Campus Navigation",
      description: "A mobile app that helps new students navigate campus using AI and AR technology",
      image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b",
      author: "Alex Chen",
      department: "Computer Science"
    },
    {
      id: 2,
      title: "Smart Recycling Bins",
      description: "IoT-enabled recycling stations that automatically sort waste materials",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9",
      author: "Jamie Rodriguez",
      department: "Environmental Engineering"
    },
    {
      id: 3,
      title: "Virtual Lab Assistant",
      description: "An AR interface for laboratory experiments with real-time guidance",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557",
      author: "Taylor Kim",
      department: "Biochemistry"
    }
  ],
  social: [
    {
      id: 1,
      title: "Community Food Share",
      description: "Platform connecting campus dining with local shelters to reduce food waste",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      author: "Morgan West",
      department: "Social Studies"
    },
    {
      id: 2,
      title: "Accessible Education Initiative",
      description: "Creating adaptive learning materials for students with disabilities",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      author: "Casey Rivers",
      department: "Education"
    },
    {
      id: 3,
      title: "Mental Health Buddy System",
      description: "Peer support network for student mental health and wellbeing",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      author: "Riley Jordan",
      department: "Psychology"
    }
  ],
  internship: [
    {
      id: 1,
      title: "Tech Startup Accelerator",
      description: "Student-led internship program partnering with local startups",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      author: "Jordan Lee",
      department: "Business Administration"
    },
    {
      id: 2,
      title: "Healthcare Innovation Lab",
      description: "Medical students developing new healthcare solutions during hospital internships",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      author: "Avery Morgan",
      department: "Medicine"
    },
    {
      id: 3,
      title: "Sustainable Architecture Projects",
      description: "Green building designs implemented during professional internships",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2",
      author: "Sam Rivera",
      department: "Architecture"
    }
  ],
  tech: [
    {
      id: 1,
      title: "Blockchain for Academic Records",
      description: "Secure credential verification system using blockchain technology",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      author: "Jessie Quinn",
      department: "Information Technology"
    },
    {
      id: 2,
      title: "Autonomous Campus Delivery Robots",
      description: "Self-driving robots for package and food delivery across campus",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      author: "Cameron Park",
      department: "Robotics Engineering"
    },
    {
      id: 3,
      title: "Smart Energy Monitoring",
      description: "Campus-wide energy tracking system with ML-driven efficiency recommendations",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      author: "Drew Sanchez",
      department: "Electrical Engineering"
    }
  ],
  environmental: [
    {
      id: 1,
      title: "Green Roof Implementation",
      description: "Converting campus rooftops into sustainable garden spaces",
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
      author: "Jesse Washington",
      department: "Environmental Science"
    },
    {
      id: 2,
      title: "Biodegradable Lab Materials",
      description: "Developing eco-friendly alternatives to common laboratory supplies",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
      author: "Harper Jones",
      department: "Chemistry"
    },
    {
      id: 3,
      title: "Campus Rewilding Project",
      description: "Restoring native ecosystems in unused campus spaces",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969",
      author: "Skyler Reed",
      department: "Conservation Biology"
    }
  ]
};

export function PitchCategories() {
  const [activeTab, setActiveTab] = useState("innovations");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Explore Pitch Categories</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Discover amazing projects across different domains from our talented students
          </p>
        </div>
        
        <Tabs defaultValue="innovations" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="innovations" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                Innovations
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                Social Projects
              </TabsTrigger>
              <TabsTrigger value="internship" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                Internship Outcomes
              </TabsTrigger>
              <TabsTrigger value="tech" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                Tech Projects
              </TabsTrigger>
              <TabsTrigger value="environmental" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                Environmental
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(categoryData).map((category) => (
            <TabsContent 
              key={category} 
              value={category} 
              className="animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryData[category as keyof typeof categoryData].map((project) => (
                  <Card key={project.id} className="overflow-hidden card-hover">
                    <div className="h-48 relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge className="bg-pitchburg-purple">
                          {category === 'innovations' ? 'INNOVATION' : 
                           category === 'social' ? 'SOCIAL' : 
                           category === 'internship' ? 'INTERNSHIP' : 
                           category === 'tech' ? 'TECH' : 'ENVIRONMENT'}
                        </Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pitchburg-light-purple text-pitchburg-purple flex items-center justify-center font-medium">
                          {project.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{project.author}</p>
                          <p className="text-xs text-gray-500">{project.department}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Project</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-pitchburg-purple hover:bg-purple-600">
                  View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
