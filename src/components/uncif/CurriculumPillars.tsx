
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Cpu, Building, Users, Trophy, Wrench, BarChart } from "lucide-react";

const pillars = [
  {
    title: "Weizmann Curriculum",
    icon: BookOpen,
    color: "bg-blue-500",
    description: "Revolutionary education methodology inspired by Jewish learning traditions",
    features: [
      "Daily life practices integration",
      "Human chemistry and emotional intelligence",
      "Gamified subjective education",
      "Multi-domain literacy development",
      "Life skills and mindset transformation",
      "Modern tools and automation",
      "Project-based competitive environment"
    ]
  },
  {
    title: "Tech Infrastructure",
    icon: Cpu,
    color: "bg-purple-500",
    description: "Cutting-edge technology platforms for modern learning",
    features: [
      "Specialized learning portals",
      "AR/VR immersive experiences",
      "Robotics and STEM software",
      "AI-powered learning models",
      "Digital innovation labs",
      "Smart classroom systems"
    ]
  },
  {
    title: "Establishments",
    icon: Building,
    color: "bg-green-500",
    description: "Building global networks through institutional partnerships",
    features: [
      "International clubs and societies",
      "Chapter establishments",
      "Franchise programs",
      "Worldwide connectivity platforms",
      "Cross-cultural collaboration hubs"
    ]
  },
  {
    title: "Frontliner Development",
    icon: Users,
    color: "bg-orange-500",
    description: "Nurturing leaders, innovators, and change-makers",
    features: [
      "Author development programs",
      "Entrepreneurship initiatives",
      "Social activism projects",
      "Mentorship networks",
      "Innovation challenges",
      "Leadership development"
    ]
  },
  {
    title: "Participation & Collaboration",
    icon: Trophy,
    color: "bg-red-500",
    description: "Maximizing exposure through global competitions",
    features: [
      "National competition participation",
      "International collaboration programs",
      "Cross-cultural exchange initiatives",
      "Credibility building activities",
      "Global exposure opportunities"
    ]
  },
  {
    title: "Physical Infrastructure",
    icon: Wrench,
    color: "bg-indigo-500",
    description: "State-of-the-art facilities for comprehensive learning",
    features: [
      "Advanced digital libraries",
      "AR/VR learning labs",
      "STEM and robotics centers",
      "Project exhibition spaces",
      "Pitch presentation platforms",
      "Gamified learning environments"
    ]
  },
  {
    title: "Assessment Revolution",
    icon: BarChart,
    color: "bg-teal-500",
    description: "Redefining student evaluation beyond academic scores",
    features: [
      "Innovation and creativity metrics",
      "Leadership assessment",
      "Social impact measurement",
      "Practical skill evaluation",
      "Character development tracking",
      "Holistic personality assessment"
    ]
  }
];

export function CurriculumPillars() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">7 Pillar Framework</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Foundation of Educational Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Our comprehensive curriculum is built on seven fundamental pillars, 
            each designed to address specific aspects of modern education transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">{pillar.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  View Detailed Plan & Curriculum
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
