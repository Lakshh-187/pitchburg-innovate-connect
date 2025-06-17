
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Users, Cog, Target } from "lucide-react";

const transformationAreas = [
  {
    title: "Faculty Excellence",
    icon: Users,
    description: "Comprehensive faculty training programs connecting top minds with institutes through cohorts, workshops, and internships.",
    impact: "Enhanced teaching quality and methodology"
  },
  {
    title: "Event Organization",
    icon: Lightbulb,
    description: "Sponsored events, exhibitions, hackathons, and marathons to create practical learning opportunities.",
    impact: "Increased student engagement and exposure"
  },
  {
    title: "Grant & Fund Connectivity",
    icon: Target,
    description: "Connecting institutes with grants and funds for war-level transformation and overall development.",
    impact: "Financial sustainability and growth"
  },
  {
    title: "Assessment Revolution",
    icon: Cog,
    description: "Shifting from academic scores to comprehensive evaluation including innovation, leadership, and social impact.",
    impact: "Holistic student development"
  }
];

export function TransformationModel() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our Transformation Model
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive approach to institutional transformation that goes beyond traditional 
            education to create leaders, innovators, and global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transformationAreas.map((area, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">Impact: {area.impact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Key Focus Areas for Institutional Change
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Student Assessment Revolution</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• From academic scores to practical achievements</li>
                <li>• Authors, entrepreneurs, and innovators</li>
                <li>• Social activists and sports champions</li>
                <li>• Creative artists and problem solvers</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Internal Parameter Transformation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Positive mindset and observation skills</li>
                <li>• Problem-solving perspectives</li>
                <li>• Credibility and mindfulness</li>
                <li>• Environmental and social consciousness</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              View Detailed Plan & Curriculum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
