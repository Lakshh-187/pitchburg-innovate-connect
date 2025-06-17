
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart, User, Lightbulb, Heart, Award, Brain } from "lucide-react";

const traditionalVsNew = [
  {
    category: "Academic Focus",
    traditional: "Test scores and grades",
    newApproach: "Holistic achievements and real-world impact",
    icon: BarChart,
    color: "from-blue-500 to-cyan-600"
  },
  {
    category: "Skill Assessment",
    traditional: "Memorization and recall",
    newApproach: "Critical thinking and problem-solving",
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    category: "Character Evaluation",
    traditional: "Discipline and compliance",
    newApproach: "Leadership and initiative",
    icon: User,
    color: "from-green-500 to-emerald-600"
  },
  {
    category: "Innovation Measurement",
    traditional: "Following instructions",
    newApproach: "Creative solutions and entrepreneurship",
    icon: Lightbulb,
    color: "from-orange-500 to-amber-600"
  },
  {
    category: "Social Impact",
    traditional: "Individual performance",
    newApproach: "Community contribution and collaboration",
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
  {
    category: "Recognition System",
    traditional: "Rank and percentile",
    newApproach: "Personal growth and achievement portfolio",
    icon: Award,
    color: "from-teal-500 to-cyan-600"
  }
];

const newParameters = [
  {
    title: "Authors & Publishers",
    description: "Students who create and publish content",
    metrics: ["Books published", "Articles written", "Blog engagement", "Content impact"],
    weight: "15%"
  },
  {
    title: "Entrepreneurs & Startups",
    description: "Students who launch businesses and innovations",
    metrics: ["Ventures created", "Revenue generated", "Jobs created", "Market impact"],
    weight: "20%"
  },
  {
    title: "Social Activists",
    description: "Students driving positive social change",
    metrics: ["Projects initiated", "Communities impacted", "Policy influence", "Awareness created"],
    weight: "15%"
  },
  {
    title: "Innovators & Researchers",
    description: "Students contributing to knowledge and technology",
    metrics: ["Patents filed", "Research published", "Innovations developed", "Awards received"],
    weight: "15%"
  },
  {
    title: "Sports Champions",
    description: "Students excelling in physical and mental sports",
    metrics: ["Championships won", "Records set", "Team leadership", "Sportsmanship"],
    weight: "10%"
  },
  {
    title: "Creative Artists",
    description: "Students expressing creativity across mediums",
    metrics: ["Artworks created", "Performances given", "Exhibitions held", "Cultural impact"],
    weight: "10%"
  },
  {
    title: "Leadership Roles",
    description: "Students demonstrating leadership capabilities",
    metrics: ["Teams led", "Events organized", "Initiatives launched", "Mentoring provided"],
    weight: "15%"
  }
];

export function AssessmentRevolution() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-teal-600 text-white">Pillar 7: Assessment</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Assessment Revolution
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform how you evaluate student success by moving beyond traditional academic scores 
            to comprehensive assessment of real-world achievements, character development, 
            and positive impact on society.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Traditional vs. Revolutionary Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditionalVsNew.map((comparison, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${comparison.color} rounded-xl flex items-center justify-center mb-4`}>
                    <comparison.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-4">{comparison.category}</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                      <p className="text-sm font-medium text-red-800 mb-1">Traditional Approach:</p>
                      <p className="text-sm text-red-600">{comparison.traditional}</p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-800 mb-1">UNCIF Approach:</p>
                      <p className="text-sm text-green-600">{comparison.newApproach}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            New Assessment Parameters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newParameters.map((parameter, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{parameter.title}</h4>
                    <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-300">
                      {parameter.weight}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{parameter.description}</p>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Assessment Metrics:</h5>
                    <ul className="space-y-1">
                      {parameter.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Implementation Roadmap
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Assessment Framework Design</h4>
                    <p className="text-gray-600">Develop comprehensive evaluation criteria and rubrics</p>
                    <span className="text-sm text-teal-600 font-medium">Duration: 4-6 weeks</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Faculty Training Program</h4>
                    <p className="text-gray-600">Train educators on new assessment methodologies</p>
                    <span className="text-sm text-teal-600 font-medium">Duration: 2-3 months</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Student Portfolio System</h4>
                    <p className="text-gray-600">Implement digital portfolios for tracking achievements</p>
                    <span className="text-sm text-teal-600 font-medium">Duration: 1-2 months</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Gradual Implementation</h4>
                    <p className="text-gray-600">Phase-wise rollout with continuous monitoring</p>
                    <span className="text-sm text-teal-600 font-medium">Duration: 6-12 months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white">
              <BarChart className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-6">Expected Outcomes</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Student Engagement</span>
                  <span className="font-bold text-yellow-300">+80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Real-world Skills</span>
                  <span className="font-bold text-yellow-300">+65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Innovation Projects</span>
                  <span className="font-bold text-yellow-300">+150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Industry Readiness</span>
                  <span className="font-bold text-yellow-300">+90%</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-sm text-teal-100">
                  "This assessment revolution has completely transformed how our students perceive success and achievement."
                </p>
                <p className="text-xs mt-2 text-teal-200">- Principal, Leading International School</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
