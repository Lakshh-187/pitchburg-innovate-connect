
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle, AlertCircle, Target, Zap } from "lucide-react";

const timelinePhases = [
  {
    phase: "Pre-Implementation",
    duration: "Weeks 1-4",
    icon: Target,
    color: "from-gray-500 to-gray-600",
    status: "Planning",
    activities: [
      "Comprehensive institutional assessment",
      "Stakeholder meetings and alignment",
      "Resource planning and budgeting",
      "Team formation and role assignment",
      "Initial training and orientation"
    ],
    outcomes: [
      "Detailed assessment report",
      "Customized transformation roadmap",
      "Budget allocation and timeline",
      "Project team establishment",
      "Stakeholder buy-in achieved"
    ],
    challenges: [
      "Resistance to change",
      "Budget constraints",
      "Timeline pressures"
    ],
    support: "Dedicated consultation team, Change management workshops, Financial planning assistance"
  },
  {
    phase: "Foundation Building",
    duration: "Months 2-6",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    status: "Active",
    activities: [
      "Infrastructure development and setup",
      "Technology platform deployment",
      "Faculty training and development",
      "Curriculum design and adaptation",
      "Assessment framework creation"
    ],
    outcomes: [
      "Modern learning infrastructure",
      "Trained and certified faculty",
      "Customized curriculum modules",
      "Digital learning platforms",
      "Assessment systems operational"
    ],
    challenges: [
      "Technical integration issues",
      "Faculty adaptation timeline",
      "Infrastructure coordination"
    ],
    support: "Technical support team, Faculty development programs, Project management assistance"
  },
  {
    phase: "Program Launch",
    duration: "Months 6-12",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
    status: "Implementation",
    activities: [
      "Student enrollment and onboarding",
      "7-pillar curriculum activation",
      "Global network integration",
      "Performance monitoring setup",
      "Community engagement initiatives"
    ],
    outcomes: [
      "Active student participation",
      "All curriculum pillars operational",
      "International partnerships established",
      "Performance metrics tracking",
      "Community involvement achieved"
    ],
    challenges: [
      "Student adaptation period",
      "Program coordination complexity",
      "Performance measurement"
    ],
    support: "Student success coordinators, Program management tools, Analytics dashboard"
  },
  {
    phase: "Optimization & Growth",
    duration: "Months 12-18",
    icon: AlertCircle,
    color: "from-orange-500 to-red-600",
    status: "Scaling",
    activities: [
      "Performance analysis and optimization",
      "Program expansion and scaling",
      "Success story documentation",
      "Best practices establishment",
      "Continuous improvement implementation"
    ],
    outcomes: [
      "Optimized program performance",
      "Scaled successful initiatives",
      "Documented success metrics",
      "Established best practices",
      "Sustainable improvement processes"
    ],
    challenges: [
      "Scaling complexities",
      "Quality maintenance",
      "Resource optimization"
    ],
    support: "Performance optimization team, Scaling strategy consultation, Quality assurance processes"
  }
];

const keyMilestones = [
  { week: 4, title: "Assessment Complete", description: "Comprehensive analysis and planning finalized" },
  { week: 12, title: "Infrastructure Ready", description: "Technology and physical infrastructure operational" },
  { week: 24, title: "Faculty Certified", description: "All teaching staff trained and certified" },
  { week: 36, title: "Programs Active", description: "All 7 pillars fully operational" },
  { week: 48, title: "Impact Measured", description: "First comprehensive impact assessment" },
  { week: 60, title: "Optimization Phase", description: "Continuous improvement processes established" },
  { week: 72, title: "Transformation Complete", description: "Full transformation achieved and documented" }
];

export function TransformationTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-gray-800 text-white">Timeline Guide</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Transformation Timeline
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A detailed week-by-week breakdown of your institution's transformation journey. 
            Understanding each phase helps ensure smooth implementation and maximum success.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {timelinePhases.map((phase, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className={`bg-gradient-to-br ${phase.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <phase.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{phase.phase}</h3>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm opacity-90">{phase.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-white/20 text-white mb-4">
                      Status: {phase.status}
                    </Badge>
                    <p className="text-sm opacity-90">
                      This phase focuses on establishing the foundation for sustainable transformation 
                      through systematic implementation of our proven methodologies.
                    </p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Activities</h4>
                    <ul className="space-y-2 mb-6">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-gray-900 mb-4">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {phase.outcomes.map((outcome, outIndex) => (
                        <li key={outIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8 bg-gray-50">
                    <h4 className="font-semibold text-gray-900 mb-4">Potential Challenges</h4>
                    <ul className="space-y-2 mb-6">
                      {phase.challenges.map((challenge, chalIndex) => (
                        <li key={chalIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Support Provided</h4>
                    <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border-l-4 border-green-400">
                      {phase.support}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">Critical Milestones</h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/20"></div>
            <div className="space-y-8">
              {keyMilestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10">
                    <span className="text-gray-900 font-bold text-sm">W{milestone.week}</span>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-sm text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Start Your Transformation Today
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every successful transformation begins with a single step. Get your detailed 
            implementation timeline and begin your journey to educational excellence.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
