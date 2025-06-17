
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, PenTool, Briefcase, Heart, Lightbulb, Users } from "lucide-react";

const frontlinerRoles = [
  {
    title: "Authors & Content Creators",
    icon: PenTool,
    description: "Develop writing and communication skills through publishing",
    activities: ["Blog writing", "Book publishing", "Article contributions", "Content strategy"],
    skills: ["Writing proficiency", "Research abilities", "Digital marketing", "Personal branding"],
    outcomes: ["Published works", "Media recognition", "Thought leadership", "Communication expertise"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Entrepreneurs & Innovators",
    icon: Briefcase,
    description: "Launch startups and innovative business solutions",
    activities: ["Startup incubation", "Business plan development", "Pitch competitions", "Market research"],
    skills: ["Business acumen", "Problem-solving", "Leadership", "Financial literacy"],
    outcomes: ["Successful ventures", "Job creation", "Innovation patents", "Economic impact"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Social Activists & Change Makers",
    icon: Heart,
    description: "Drive positive social change and community development",
    activities: ["Community service", "Advocacy campaigns", "NGO partnerships", "Social research"],
    skills: ["Empathy", "Communication", "Project management", "Social awareness"],
    outcomes: ["Community impact", "Policy changes", "Social movements", "Recognition awards"],
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Mentors & Educators",
    icon: Users,
    description: "Guide and inspire the next generation of leaders",
    activities: ["Peer mentoring", "Workshop facilitation", "Skill sharing", "Leadership training"],
    skills: ["Teaching ability", "Emotional intelligence", "Patience", "Knowledge sharing"],
    outcomes: ["Student success", "Skill development", "Network building", "Recognition"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Innovators & Researchers",
    icon: Lightbulb,
    description: "Conduct research and develop innovative solutions",
    activities: ["Research projects", "Patent applications", "Scientific publications", "Tech development"],
    skills: ["Analytical thinking", "Technical expertise", "Research methodology", "Innovation"],
    outcomes: ["Research papers", "Patents", "Awards", "Industry recognition"],
    color: "from-orange-500 to-amber-600"
  },
  {
    title: "Leaders & Organizers",
    icon: User,
    description: "Lead teams and organize impactful initiatives",
    activities: ["Event organization", "Team leadership", "Strategic planning", "Resource management"],
    skills: ["Leadership", "Organization", "Strategic thinking", "Team management"],
    outcomes: ["Successful events", "Team achievements", "Leadership roles", "Recognition"],
    color: "from-teal-500 to-cyan-600"
  }
];

export function FrontlinerDevelopment() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-orange-600 text-white">Pillar 4: Leadership</Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Frontliner Development Program
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform students into frontliners - leaders who drive change, innovation, and progress. 
            Our comprehensive development program nurtures diverse talents and creates pathways 
            for students to make meaningful contributions to society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {frontlinerRoles.map((role, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{role.title}</h3>
                <p className="text-gray-600 mb-6">{role.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Key Activities:</h4>
                    <ul className="space-y-1">
                      {role.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Expected Outcomes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.outcomes.map((outcome, outcomeIndex) => (
                        <span key={outcomeIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Development Framework</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Talent Identification</h4>
                    <p className="text-sm text-orange-100">Assess interests, strengths, and aspirations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Development Plan</h4>
                    <p className="text-sm text-orange-100">Create customized growth pathways</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mentorship & Guidance</h4>
                    <p className="text-sm text-orange-100">Connect with industry experts and leaders</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Practical Implementation</h4>
                    <p className="text-sm text-orange-100">Real-world projects and initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Recognition & Scaling</h4>
                    <p className="text-sm text-orange-100">Celebrate achievements and expand impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <User className="w-16 h-16 mb-6 text-yellow-300" />
              <h4 className="text-2xl font-bold mb-4">Success Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Students Developed</span>
                  <span className="font-bold text-yellow-300">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Successful Ventures</span>
                  <span className="font-bold text-yellow-300">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Publications</span>
                  <span className="font-bold text-yellow-300">2,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Social Impact Projects</span>
                  <span className="font-bold text-yellow-300">1,200+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg">
            View Detailed Plan & Curriculum
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
