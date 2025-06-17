
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cpu, Smartphone, Glasses, Bot, Brain, Code, Database } from "lucide-react";

const techSolutions = [
  {
    title: "Learning Management Portal",
    icon: Code,
    description: "Custom-built platforms for seamless educational delivery",
    features: ["Personalized dashboards", "Progress tracking", "Interactive content", "Real-time analytics"],
    cost: "$5,000 - $15,000",
    timeline: "2-3 months"
  },
  {
    title: "AR/VR Learning Labs",
    icon: Glasses,
    description: "Immersive experiences that bring abstract concepts to life",
    features: ["Virtual field trips", "3D molecular models", "Historical recreations", "Skill simulations"],
    cost: "$20,000 - $50,000",
    timeline: "3-4 months"
  },
  {
    title: "Robotics & STEM Software",
    icon: Bot,
    description: "Hands-on technology education through robotics",
    features: ["Programming platforms", "Hardware kits", "Competition prep", "Project showcases"],
    cost: "$10,000 - $30,000",
    timeline: "1-2 months"
  },
  {
    title: "AI-Powered Learning Models",
    icon: Brain,
    description: "Adaptive learning systems that personalize education",
    features: ["Smart tutoring", "Predictive analytics", "Learning optimization", "Performance insights"],
    cost: "$15,000 - $40,000",
    timeline: "4-6 months"
  },
  {
    title: "Digital Innovation Labs",
    icon: Cpu,
    description: "State-of-the-art computing facilities for future-ready skills",
    features: ["Cloud computing", "Data science tools", "AI development", "Cybersecurity training"],
    cost: "$25,000 - $60,000",
    timeline: "2-4 months"
  },
  {
    title: "Smart Classroom Systems",
    icon: Smartphone,
    description: "IoT-enabled classrooms for interactive learning",
    features: ["Smart boards", "Response systems", "Environmental control", "Attendance tracking"],
    cost: "$8,000 - $20,000",
    timeline: "1-2 months"
  }
];

export function TechInfrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-purple-600 text-white">Pillar 2: Technology</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Cutting-Edge Tech Infrastructure
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your institute with modern technology that enhances learning, 
            engages students, and prepares them for the digital future. Our comprehensive 
            tech solutions are designed for seamless integration and maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techSolutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Investment:</span>
                      <div className="font-semibold text-purple-600">{solution.cost}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Timeline:</span>
                      <div className="font-semibold text-green-600">{solution.timeline}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Implementation Support</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Free consultation and needs assessment</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Custom solution design and planning</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Professional installation and setup</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span>Comprehensive training for faculty</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <span>Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <Database className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-4">ROI Projections</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Student Engagement</span>
                  <span className="font-bold text-yellow-300">+75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Learning Outcomes</span>
                  <span className="font-bold text-yellow-300">+60%</span>
                </div>
                <div className="flex justify-between">
                  <span>Operational Efficiency</span>
                  <span className="font-bold text-yellow-300">+40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost Reduction</span>
                  <span className="font-bold text-yellow-300">-30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
