
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, Users, Globe, Network, Handshake, Trophy } from "lucide-react";

const establishmentTypes = [
  {
    title: "International Clubs",
    icon: Globe,
    description: "Connect with global student communities",
    benefits: ["Cultural exchange", "International exposure", "Global networking", "Language skills"],
    examples: ["Model UN Club", "International Business Society", "Global Innovation Hub"],
    impact: "500+ partner institutions"
  },
  {
    title: "Professional Societies",
    icon: Network,
    description: "Industry-specific communities for career development",
    benefits: ["Industry connections", "Professional skills", "Career guidance", "Expert mentorship"],
    examples: ["Engineering Society", "Medical Student Association", "Business Leaders Club"],
    impact: "10,000+ professionals connected"
  },
  {
    title: "Innovation Chapters",
    icon: Trophy,
    description: "Local chapters of global innovation networks",
    benefits: ["Startup ecosystem", "Innovation projects", "Funding opportunities", "Pitch platforms"],
    examples: ["TEDx Chapters", "Startup Incubators", "Innovation Labs"],
    impact: "200+ successful startups"
  },
  {
    title: "Research Collaboratives",
    icon: Users,
    description: "Multi-institutional research partnerships",
    benefits: ["Research funding", "Publication opportunities", "Academic recognition", "Knowledge sharing"],
    examples: ["Climate Research Network", "AI Ethics Consortium", "Social Impact Lab"],
    impact: "1,000+ research papers"
  },
  {
    title: "Franchise Programs",
    icon: Building,
    description: "Expand successful educational models",
    benefits: ["Proven methodologies", "Brand recognition", "Operational support", "Quality assurance"],
    examples: ["UNCIF Learning Centers", "Innovation Hubs", "Skill Development Centers"],
    impact: "150+ franchised locations"
  },
  {
    title: "Partnership Networks",
    icon: Handshake,
    description: "Strategic alliances for mutual growth",
    benefits: ["Resource sharing", "Joint programs", "Cost optimization", "Enhanced offerings"],
    examples: ["University Consortiums", "Corporate Partnerships", "NGO Collaborations"],
    impact: "300+ active partnerships"
  }
];

export function EstablishmentGuide() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-green-600 text-white">Pillar 3: Global Network</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Building Global Establishments
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Create a worldwide network of connections through strategic establishments. 
            Our comprehensive approach helps institutes build meaningful partnerships 
            that enhance student opportunities and institutional reputation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {establishmentTypes.map((type, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Global Impact: {type.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Establishment Implementation Framework
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Phase 1: Assessment & Planning</h4>
                  <p className="text-gray-600">Evaluate current capabilities and identify strategic opportunities</p>
                  <span className="text-sm text-green-600 font-medium">Duration: 2-4 weeks</span>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Phase 2: Partnership Development</h4>
                  <p className="text-gray-600">Build relationships with key stakeholders and institutions</p>
                  <span className="text-sm text-green-600 font-medium">Duration: 2-3 months</span>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Phase 3: Program Launch</h4>
                  <p className="text-gray-600">Implement programs and begin collaborative activities</p>
                  <span className="text-sm text-green-600 font-medium">Duration: 1-2 months</span>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Phase 4: Growth & Expansion</h4>
                  <p className="text-gray-600">Scale successful programs and explore new opportunities</p>
                  <span className="text-sm text-green-600 font-medium">Duration: Ongoing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <Globe className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-6">Global Reach Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">500+</div>
                  <div className="text-sm">Institutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">10K+</div>
                  <div className="text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">25+</div>
                  <div className="text-sm">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
