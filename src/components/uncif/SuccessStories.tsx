
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, TrendingUp, Globe, Users, Star, Quote } from "lucide-react";

const successStories = [
  {
    institution: "Global Excellence Academy",
    location: "Singapore",
    studentCount: "2,500+",
    transformation: "Traditional to Innovation Hub",
    timeframe: "18 months",
    achievements: [
      "85% increase in international awards",
      "300+ student startups launched",
      "95% university placement rate",
      "50+ international partnerships"
    ],
    quote: "The UNCIF curriculum transformed our entire educational philosophy. Our students are now global leaders, not just test-takers.",
    principal: "Dr. Sarah Chen, Principal",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    impact: "Outstanding"
  },
  {
    institution: "Future Leaders Institute",
    location: "Dubai, UAE",
    studentCount: "1,800+",
    transformation: "Academic Focus to Holistic Development",
    timeframe: "15 months",
    achievements: [
      "200+ published student authors",
      "150+ social impact projects",
      "90% entrepreneurship participation",
      "40+ international competitions won"
    ],
    quote: "Our students are now confident global citizens who think beyond textbooks and create real-world solutions.",
    principal: "Prof. Ahmed Al-Rashid, Director",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    impact: "Exceptional"
  },
  {
    institution: "Innovation Heights School",
    location: "Toronto, Canada",
    studentCount: "3,200+",
    transformation: "Grade-focused to Impact-driven",
    timeframe: "20 months",
    achievements: [
      "500+ innovation projects completed",
      "75+ patents filed by students",
      "100% university acceptance rate",
      "25+ tech startups incubated"
    ],
    quote: "The transformation has been remarkable. Our students now solve real problems and create lasting impact.",
    principal: "Ms. Jennifer Roberts, Superintendent",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400",
    impact: "Revolutionary"
  }
];

const impactMetrics = [
  {
    title: "Institutions Transformed",
    value: "500+",
    icon: Globe,
    description: "Across 50+ countries worldwide"
  },
  {
    title: "Students Impacted",
    value: "100K+",
    icon: Users,
    description: "Lives transformed globally"
  },
  {
    title: "Success Rate",
    value: "95%",
    icon: Trophy,
    description: "Institutions see significant improvement"
  },
  {
    title: "International Awards",
    value: "2000+",
    icon: Star,
    description: "Won by our partner institutions"
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-amber-600 text-white">Success Stories</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Transformations That Inspire
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how leading institutions worldwide have revolutionized their 
            educational approach through our comprehensive curriculum framework. 
            These success stories demonstrate the power of holistic transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-16">
          {successStories.map((story, index) => (
            <Card key={index} className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{story.institution}</h3>
                        <p className="text-gray-600">{story.location} • {story.studentCount} students</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Badge className="bg-green-100 text-green-800 mb-4">
                        {story.impact} Impact
                      </Badge>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Transformation:</span>
                          <p className="font-medium text-gray-900">{story.transformation}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Timeline:</span>
                          <p className="font-medium text-gray-900">{story.timeframe}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {story.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
                      <Quote className="w-6 h-6 text-amber-600 mb-3" />
                      <p className="text-gray-700 italic mb-4">{story.quote}</p>
                      <p className="text-sm font-medium text-amber-800">— {story.principal}</p>
                    </div>
                  </div>
                  
                  <div className="relative bg-gray-100">
                    <img 
                      src={story.image} 
                      alt={story.institution}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Transformation Highlights</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">95%</div>
                            <div className="text-gray-600">Student Satisfaction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">80%</div>
                            <div className="text-gray-600">Performance Boost</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-2xl mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Global Impact Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h4>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Join the Success Stories</h3>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Your institution could be the next success story. Start your transformation 
            journey today and join hundreds of institutions that have already revolutionized 
            their educational approach.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full text-lg">
              View Detailed Plan & Curriculum
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 rounded-full text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
