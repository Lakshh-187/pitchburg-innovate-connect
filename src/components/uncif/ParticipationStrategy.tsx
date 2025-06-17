
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, Globe, Target, Users, Award, Medal } from "lucide-react";

const competitionCategories = [
  {
    title: "Academic Competitions",
    icon: Trophy,
    description: "Excel in knowledge-based international competitions",
    competitions: ["International Math Olympiad", "Science Fair", "Debate Championships", "Model UN"],
    benefits: ["Academic recognition", "Scholarship opportunities", "University admissions", "Career advancement"],
    preparation: "6-12 months intensive training",
    successRate: "85%"
  },
  {
    title: "Innovation Challenges",
    icon: Target,
    description: "Showcase creativity and problem-solving abilities",
    competitions: ["Hackathons", "Innovation Contests", "Design Thinking", "Tech Challenges"],
    benefits: ["Industry recognition", "Funding opportunities", "Patent support", "Startup mentorship"],
    preparation: "3-6 months project development",
    successRate: "70%"
  },
  {
    title: "Leadership Programs",
    icon: Users,
    description: "Develop and demonstrate leadership capabilities",
    competitions: ["Youth Leadership Summit", "Global Leadership Challenge", "Social Impact Awards", "Entrepreneurship Contests"],
    benefits: ["Leadership certification", "Network building", "Mentorship access", "Career opportunities"],
    preparation: "4-8 months development program",
    successRate: "90%"
  },
  {
    title: "Cultural Exchanges",
    icon: Globe,
    description: "Participate in international cultural programs",
    competitions: ["Cultural Festivals", "Language Competitions", "Art Exhibitions", "Music Competitions"],
    benefits: ["Cultural awareness", "Language skills", "International exposure", "Personal growth"],
    preparation: "2-4 months cultural immersion",
    successRate: "95%"
  },
  {
    title: "Sports Championships",
    icon: Medal,
    description: "Compete in national and international sports events",
    competitions: ["Inter-university Sports", "National Championships", "International Tournaments", "Olympic Trials"],
    benefits: ["Physical fitness", "Team building", "Discipline", "Recognition"],
    preparation: "12+ months training",
    successRate: "60%"
  },
  {
    title: "Research Symposiums",
    icon: Award,
    description: "Present research findings at prestigious conferences",
    competitions: ["Research Conferences", "Academic Symposiums", "Poster Presentations", "Publication Awards"],
    benefits: ["Academic credibility", "Research funding", "Publication opportunities", "Expert recognition"],
    preparation: "6-18 months research",
    successRate: "75%"
  }
];

export function ParticipationStrategy() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-rose-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-red-600 text-white">Pillar 5: Global Exposure</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Participation & Collaboration Strategy
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Maximize student exposure through strategic participation in national and international 
            competitions. Our comprehensive approach ensures students gain valuable experience, 
            build credibility, and develop skills that set them apart globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {competitionCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Competition Examples:</h4>
                    <ul className="space-y-1">
                      {category.competitions.map((competition, compIndex) => (
                        <li key={compIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          {competition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-red-800">Preparation Time:</span>
                      <span className="text-sm text-red-600">{category.preparation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-red-800">Success Rate:</span>
                      <span className="text-sm text-red-600 font-bold">{category.successRate}</span>
                    </div>
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
                Participation Excellence Framework
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 1: Talent Scouting</h4>
                  <p className="text-gray-600 mb-2">Identify students with specific aptitudes and interests</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Aptitude assessments</li>
                    <li>• Interest surveys</li>
                    <li>• Performance analysis</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 2: Intensive Training</h4>
                  <p className="text-gray-600 mb-2">Provide specialized coaching and preparation</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Expert mentorship</li>
                    <li>• Practice sessions</li>
                    <li>• Mock competitions</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 3: Strategic Participation</h4>
                  <p className="text-gray-600 mb-2">Select optimal competitions for maximum impact</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Competition analysis</li>
                    <li>• Strategic planning</li>
                    <li>• Resource allocation</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Step 4: Performance Optimization</h4>
                  <p className="text-gray-600 mb-2">Continuous improvement and skill enhancement</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Performance analysis</li>
                    <li>• Feedback integration</li>
                    <li>• Skill refinement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white">
              <Globe className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-6">Global Impact Statistics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">150+</div>
                  <div className="text-sm">International Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">85%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50+</div>
                  <div className="text-sm">Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">2000+</div>
                  <div className="text-sm">Participants</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-red-100">
                  "Participation in international competitions has transformed our students' confidence and global perspective."
                </p>
                <p className="text-xs mt-2 text-red-200">- Leading Educational Institution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
