
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Award, Globe, Users } from "lucide-react";

const impactMetrics = [
  {
    title: "Global Reach",
    value: "500+",
    description: "Institutes worldwide",
    icon: Globe,
    color: "text-blue-600"
  },
  {
    title: "Student Impact",
    value: "100K+",
    description: "Students transformed",
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Success Rate",
    value: "95%",
    description: "Implementation success",
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    title: "Recognition",
    value: "50+",
    description: "International awards",
    icon: Award,
    color: "text-orange-600"
  }
];

export function ImpactShowcase() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Transforming Education Globally
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Join thousands of institutions worldwide that have already embraced 
            our revolutionary curriculum and witnessed remarkable transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <metric.icon className={`w-8 h-8 mx-auto mb-4 ${metric.color}`} />
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="text-blue-100">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Why Choose UNCIF Curriculum?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Proven Methodology</h4>
              <p className="text-blue-100 text-sm">Based on successful Jewish education principles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Complete Ecosystem</h4>
              <p className="text-blue-100 text-sm">Technology, infrastructure, and human development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Global Standards</h4>
              <p className="text-blue-100 text-sm">International recognition and accreditation</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Institute?</h3>
          <p className="text-blue-100 mb-8">
            Get started with our comprehensive curriculum guide and implementation roadmap.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full">
              View Detailed Plan & Curriculum
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
