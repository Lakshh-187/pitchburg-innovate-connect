
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, BookOpen, Glasses, Wrench, Presentation, Gamepad2 } from "lucide-react";

const infrastructureComponents = [
  {
    title: "Advanced Digital Libraries",
    icon: BookOpen,
    description: "State-of-the-art digital learning resources and research facilities",
    features: [
      "Digital book collections",
      "Research databases",
      "Multimedia resources",
      "Collaborative spaces",
      "Study pods",
      "24/7 access systems"
    ],
    specifications: {
      capacity: "500+ students",
      digitalBooks: "100,000+",
      databases: "50+ premium",
      cost: "$150,000 - $300,000"
    },
    benefits: ["Enhanced research capabilities", "24/7 learning access", "Collaborative environment", "Digital literacy"]
  },
  {
    title: "AR/VR Learning Labs",
    icon: Glasses,
    description: "Immersive technology spaces for experiential learning",
    features: [
      "VR headsets and equipment",
      "AR development tools",
      "3D modeling software",
      "Motion capture systems",
      "Interactive displays",
      "Content creation studio"
    ],
    specifications: {
      capacity: "30+ students",
      vrStations: "15-20 units",
      software: "Professional grade",
      cost: "$200,000 - $400,000"
    },
    benefits: ["Immersive learning experiences", "Enhanced engagement", "Practical skill development", "Innovation catalyst"]
  },
  {
    title: "STEM & Robotics Centers",
    icon: Wrench,
    description: "Comprehensive facilities for science, technology, engineering, and robotics",
    features: [
      "Robotics kits and platforms",
      "3D printers and scanners",
      "Electronic components",
      "Programming workstations",
      "Testing equipment",
      "Project showcases"
    ],
    specifications: {
      capacity: "40+ students",
      workstations: "20-25 units",
      equipment: "Industrial grade",
      cost: "$250,000 - $500,000"
    },
    benefits: ["Hands-on STEM learning", "Innovation development", "Technical skills", "Future readiness"]
  },
  {
    title: "Project Exhibition Spaces",
    icon: Presentation,
    description: "Dynamic areas for showcasing student projects and innovations",
    features: [
      "Flexible display systems",
      "Interactive presentation tools",
      "Digital signage",
      "Audio-visual equipment",
      "Storage solutions",
      "Networking capabilities"
    ],
    specifications: {
      capacity: "200+ visitors",
      displayArea: "2000+ sq ft",
      avSystems: "Professional grade",
      cost: "$100,000 - $200,000"
    },
    benefits: ["Project visibility", "Student motivation", "Industry connections", "Innovation showcase"]
  },
  {
    title: "Pitch Presentation Platforms",
    icon: Building,
    description: "Professional venues for student presentations and pitches",
    features: [
      "Professional lighting",
      "High-quality AV systems",
      "Recording capabilities",
      "Streaming equipment",
      "Audience seating",
      "Backstage facilities"
    ],
    specifications: {
      capacity: "100-300 audience",
      stage: "Professional setup",
      recording: "4K capability",
      cost: "$80,000 - $150,000"
    },
    benefits: ["Professional presentation skills", "Confidence building", "Industry exposure", "Media presence"]
  },
  {
    title: "Gamified Learning Environments",
    icon: Gamepad2,
    description: "Interactive spaces that make learning engaging and fun",
    features: [
      "Interactive whiteboards",
      "Gaming consoles",
      "Educational games",
      "Collaborative furniture",
      "Flexible layouts",
      "Gamification systems"
    ],
    specifications: {
      capacity: "25-35 students",
      interactiveBoards: "Multiple units",
      furniture: "Modular design",
      cost: "$120,000 - $250,000"
    },
    benefits: ["Enhanced engagement", "Collaborative learning", "Motivation increase", "Skill development"]
  }
];

export function PhysicalInfrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-indigo-600 text-white">Pillar 6: Infrastructure</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Physical Infrastructure Excellence
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Create inspiring learning environments with state-of-the-art facilities that support 
            innovation, collaboration, and excellence. Our comprehensive infrastructure solutions 
            transform traditional spaces into dynamic learning ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {infrastructureComponents.map((component, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <component.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{component.title}</h3>
                <p className="text-gray-600 mb-6">{component.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {component.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></div>
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-2">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(component.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-indigo-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-indigo-800 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {component.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Infrastructure Implementation Plan</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Space Assessment & Planning</h4>
                    <p className="text-sm text-indigo-100">Evaluate existing facilities and design optimal layouts</p>
                    <span className="text-xs text-indigo-200">Timeline: 2-4 weeks</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Procurement & Installation</h4>
                    <p className="text-sm text-indigo-100">Source equipment and coordinate professional installation</p>
                    <span className="text-xs text-indigo-200">Timeline: 3-6 months</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Training & Orientation</h4>
                    <p className="text-sm text-indigo-100">Comprehensive training for faculty and staff</p>
                    <span className="text-xs text-indigo-200">Timeline: 2-4 weeks</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Launch & Optimization</h4>
                    <p className="text-sm text-indigo-100">Go-live support and continuous improvement</p>
                    <span className="text-xs text-indigo-200">Timeline: Ongoing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Building className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-4">Investment Overview</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Investment Range</span>
                  <span className="font-bold text-yellow-300">$0.9M - $1.8M</span>
                </div>
                <div className="flex justify-between">
                  <span>ROI Timeline</span>
                  <span className="font-bold text-yellow-300">2-3 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Student Impact</span>
                  <span className="font-bold text-yellow-300">1000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Operational Efficiency</span>
                  <span className="font-bold text-yellow-300">+45%</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm text-indigo-100">
                  *Financing options and grants available to qualified institutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
