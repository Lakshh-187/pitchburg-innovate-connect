
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, CheckCircle, Clock, Users, Target, Zap } from "lucide-react";

const implementationPhases = [
  {
    phase: "Phase 1: Foundation",
    duration: "Months 1-3",
    icon: Target,
    color: "from-blue-500 to-cyan-600",
    objectives: [
      "Institutional assessment and gap analysis",
      "Stakeholder alignment and buy-in",
      "Initial team formation and training",
      "Infrastructure planning and design"
    ],
    deliverables: [
      "Comprehensive assessment report",
      "Customized transformation plan",
      "Resource allocation strategy",
      "Timeline with milestones"
    ],
    investment: "$50,000 - $100,000",
    keyActivities: "Planning, Assessment, Design"
  },
  {
    phase: "Phase 2: Infrastructure",
    duration: "Months 3-8",
    icon: Zap,
    color: "from-purple-500 to-indigo-600",
    objectives: [
      "Technology infrastructure deployment",
      "Physical space transformation", 
      "Learning management system setup",
      "Faculty training programs"
    ],
    deliverables: [
      "Fully equipped technology labs",
      "Modern learning environments",
      "Trained faculty and staff",
      "Operational systems"
    ],
    investment: "$200,000 - $500,000",
    keyActivities: "Construction, Installation, Training"
  },
  {
    phase: "Phase 3: Curriculum Launch",
    duration: "Months 6-12",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    objectives: [
      "7-pillar curriculum implementation",
      "Student program enrollment",
      "Assessment system activation",
      "Global network integration"
    ],
    deliverables: [
      "Active curriculum programs",
      "Enrolled student cohorts",
      "Assessment frameworks",
      "International partnerships"
    ],
    investment: "$100,000 - $200,000",
    keyActivities: "Program Launch, Student Engagement"
  },
  {
    phase: "Phase 4: Optimization",
    duration: "Months 9-18",
    icon: CheckCircle,
    color: "from-orange-500 to-red-600",
    objectives: [
      "Performance monitoring and analysis",
      "Continuous improvement implementation",
      "Scale-up planning and execution",
      "Success story documentation"
    ],
    deliverables: [
      "Optimized programs",
      "Performance metrics",
      "Expansion roadmap",
      "Best practices guide"
    ],
    investment: "$75,000 - $150,000",
    keyActivities: "Optimization, Scaling, Documentation"
  }
];

const milestones = [
  { month: 1, title: "Project Kickoff", description: "Official launch and team formation" },
  { month: 3, title: "Infrastructure Design Complete", description: "Finalized plans and procurement" },
  { month: 6, title: "Technology Deployment", description: "Core systems operational" },
  { month: 9, title: "Curriculum Launch", description: "First student cohorts enrolled" },
  { month: 12, title: "Full Implementation", description: "All pillars actively running" },
  { month: 15, title: "Performance Review", description: "Comprehensive impact assessment" },
  { month: 18, title: "Optimization Complete", description: "Refined and scaled programs" }
];

export function ImplementationRoadmap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-white">Implementation Guide</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            18-Month Implementation Roadmap
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive, step-by-step guide to transforming your institution 
            through our proven 7-pillar framework. From initial assessment to 
            full-scale implementation and optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {implementationPhases.map((phase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{phase.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Key Objectives:</h4>
                    <ul className="space-y-2">
                      {phase.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Investment Range:</span>
                      <span className="text-sm font-bold text-gray-900">{phase.investment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Focus Areas:</span>
                      <span className="text-sm text-gray-600">{phase.keyActivities}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">Implementation Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-blue-300" />
                        <span className="text-sm font-medium text-blue-300">Month {milestone.month}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-sm text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative z-10">
                    <span className="text-gray-900 font-bold text-sm">{milestone.month}</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Transformation Journey?
            </h3>
            <p className="text-gray-600 mb-8">
              Our expert team is ready to guide you through every step of the implementation process. 
              Get started with a comprehensive consultation and customized roadmap for your institution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
              <p className="text-sm text-gray-600">Free initial assessment and planning session</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Customized Plan</h4>
              <p className="text-sm text-gray-600">Tailored roadmap for your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Guaranteed Success</h4>
              <p className="text-sm text-gray-600">Proven framework with measurable results</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg">
              View Detailed Plan & Curriculum
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
