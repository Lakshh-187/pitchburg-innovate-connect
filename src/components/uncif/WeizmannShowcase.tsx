
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Heart, Users, Brain, Target, Lightbulb, Trophy } from "lucide-react";

const jewishPrinciples = [
  {
    title: "Daily Life Integration",
    icon: Heart,
    description: "Learning becomes part of everyday experiences",
    example: "Morning reflection sessions, ethical decision-making practices",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Human Chemistry Understanding",
    icon: Users,
    description: "Emotional intelligence over emotional illusions",
    example: "Peer counseling programs, empathy workshops",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Gamified Learning",
    icon: Trophy,
    description: "Making subjective education engaging and competitive",
    example: "Philosophy debates, ethics tournaments, storytelling competitions",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Multi-Domain Literacy",
    icon: BookOpen,
    description: "Comprehensive knowledge across diverse fields",
    example: "Art-Science fusion projects, Literature-Technology integration",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Mindset Transformation",
    icon: Brain,
    description: "Developing observation skills and positive perspectives",
    example: "Mindfulness training, critical thinking workshops",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Practical Implementation",
    icon: Target,
    description: "Every concept backed by real-world application",
    example: "Community service projects, startup incubators",
    color: "bg-teal-100 text-teal-600"
  }
];

export function WeizmannShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white">Pillar 1: Foundation</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            The Weizmann Curriculum Revolution
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Inspired by the time-tested Jewish educational methodology that has produced 
            generations of Nobel laureates, innovators, and leaders. Our approach transforms 
            traditional learning into a holistic life experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {jewishPrinciples.map((principle, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${principle.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <principle.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 mb-4">{principle.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800 mb-2">Implementation Example:</p>
                  <p className="text-sm text-gray-600">{principle.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Why Jewish Education Methods Work?
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Question-Based Learning</h4>
                    <p className="text-gray-600">Encouraging curiosity over memorization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Debate Culture</h4>
                    <p className="text-gray-600">Multiple perspectives on every topic</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Integration</h4>
                    <p className="text-gray-600">Learning extends beyond classroom walls</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <Lightbulb className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-4">Success Statistics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Nobel Prize Winners</span>
                  <span className="font-bold">22% globally</span>
                </div>
                <div className="flex justify-between">
                  <span>Startup Success Rate</span>
                  <span className="font-bold">3x higher</span>
                </div>
                <div className="flex justify-between">
                  <span>Leadership Positions</span>
                  <span className="font-bold">40% Fortune 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
