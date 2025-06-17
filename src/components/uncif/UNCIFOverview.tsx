
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Globe } from "lucide-react";

export function UNCIFOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Transforming Education Through Innovation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            UNCIF's revolutionary curriculum is designed to bridge the gap between traditional education 
            and the demands of the modern world, preparing students not just academically but as complete 
            human beings ready to lead and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Holistic Development</h3>
              <p className="text-gray-600">
                Moving beyond academic scores to develop complete personalities with positive mindset, 
                observation skills, and problem-solving abilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Practical Implementation</h3>
              <p className="text-gray-600">
                Every concept is backed by practical projects, debates, and gamified activities 
                to ensure real understanding and application.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Standards</h3>
              <p className="text-gray-600">
                Connecting institutes worldwide through collaborations, competitions, 
                and international exposure programs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
