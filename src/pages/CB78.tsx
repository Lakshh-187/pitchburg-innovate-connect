
import { useState } from "react";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Star, Lightbulb, Rocket, Puzzle, Globe, Handshake, Medal, Zap, Book, Target, Unlock, User, FileText, Users, Camera, Video, Earth } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function CB78() {
  const [activeTab, setActiveTab] = useState("lifePrep");
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <InstituteHero 
        instituteName="Pitchburg International Transformation"
        tagline="Internships, Innovation, Impact – All in One Campus Experience"
        description="Turn your Institute into a Global Standard Learning Hub with our comprehensive educational transformation program."
        primaryActionText="Become a Pitchburg Institute"
        secondaryActionText="Explore Curriculum"
        backgroundImage="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Section 1: Core Pillars */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Core Pillars of International Transformation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive framework designed to transform your institution into a global standard learning hub</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                      <Rocket className="text-pitchburg-purple h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Modern Tech & Innovation</h3>
                    <p className="text-gray-600">AI, 3D Learning, VR</p>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Activity Examples</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>AI Automation Labs</li>
                    <li>3D Interactive Classrooms</li>
                    <li>VR-based Learning Environments</li>
                  </ul>
                  <Button size="sm" className="mt-2 w-full bg-pitchburg-purple hover:bg-purple-600">See Real Examples</Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Pillar 2 */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                      <Globe className="text-pitchburg-purple h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Global Exposure</h3>
                    <p className="text-gray-600">Internships, Exchanges</p>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Activity Examples</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Global internship portal</li>
                    <li>Cultural exchange weeks</li>
                    <li>International collaboration programs</li>
                  </ul>
                  <Button size="sm" className="mt-2 w-full bg-pitchburg-purple hover:bg-purple-600">View Global Map</Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Pillar 3 */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                      <Lightbulb className="text-pitchburg-purple h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Psychological Learning</h3>
                    <p className="text-gray-600">Fiction, Storytelling, Games</p>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Activity Examples</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Story-based Science Learning</li>
                    <li>Gamified Debate Sessions</li>
                    <li>Role-play learning scenarios</li>
                  </ul>
                  <Button size="sm" className="mt-2 w-full bg-pitchburg-purple hover:bg-purple-600">See Case Studies</Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Pillar 4 */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                      <Puzzle className="text-pitchburg-purple h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
                    <p className="text-gray-600">Collaboration & Welfare</p>
                  </div>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Activity Examples</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Social Impact Projects</li>
                    <li>Impact Badge Initiatives</li>
                    <li>Community Welfare Programs</li>
                  </ul>
                  <Button size="sm" className="mt-2 w-full bg-pitchburg-purple hover:bg-purple-600">Track Social Hours</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>
        
        {/* Section 2: Gamified Learning Ecosystem */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Gamified Learning Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Engage students with our innovative gamified learning approach</p>
          </div>
          
          <div className="relative overflow-x-auto py-8">
            <div className="flex space-x-8 px-4 pb-8 overflow-x-auto min-w-full">
              {[
                { icon: <Target className="h-6 w-6" />, title: "Uni-Talks", description: "Stage expression events" },
                { icon: <Lightbulb className="h-6 w-6" />, title: "Shit-Pitch", description: "Wild ideas + meme culture" },
                { icon: <Book className="h-6 w-6" />, title: "Uni-Pitch", description: "Serious ideas & solutions" },
                { icon: <Rocket className="h-6 w-6" />, title: "Project Expo", description: "Innovation Showcases" },
                { icon: <Star className="h-6 w-6" />, title: "AI Automation Labs", description: "Learn AI integration" },
                { icon: <Book className="h-6 w-6" />, title: "Fiction Learning", description: "Storytelling approach" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex-shrink-0 w-60 bg-white p-6 rounded-xl shadow-md"
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <Button variant="outline" className="mt-4 w-full border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
          </div>
        </section>
        
        {/* Section 3: Core Opportunities */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Core Opportunities Inside Pitchburg</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Exclusive features that transform student learning experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="h-6 w-6" />, title: "International Internships", description: "Access exclusive global internships & virtual exchange opportunities" },
              { icon: <Handshake className="h-6 w-6" />, title: "Collaborative Projects", description: "Build real-time social or tech projects with global peers" },
              { icon: <Medal className="h-6 w-6" />, title: "Debatic", description: "Battle of logic – gamified debating championships" },
              { icon: <Star className="h-6 w-6" />, title: "Innovation Challenges", description: "Win through 21-day idea-to-execution sprint fests" },
              { icon: <Zap className="h-6 w-6" />, title: "AI & Automation Practice", description: "Learn to automate tasks using AI Agents & tools" },
              { icon: <Book className="h-6 w-6" />, title: "SciArt & MythBuster Clubs", description: "Combine science with art, bust myths & think critically" }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-pitchburg-light-purple p-2 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Section 4: The Complete Curriculum Structure */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">The Complete Curriculum Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive learning approach designed for holistic development</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="lifePrep" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="lifePrep">Life Prep</TabsTrigger>
                <TabsTrigger value="emotional">Emotional</TabsTrigger>
                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                <TabsTrigger value="global">Global</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="psychology">Psychology</TabsTrigger>
              </TabsList>

              <TabsContent value="lifePrep" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Life Preparation</h3>
                <p className="text-gray-600 mb-4">Essential skills for adulting, legal basics, and financial literacy.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>Personal Finance Management</li>
                  <li>Legal Rights & Responsibilities</li>
                  <li>Career Planning & Job Hunting</li>
                  <li>Housing & Life Administration</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">Download PDF Details</Button>
              </TabsContent>
              
              <TabsContent value="emotional" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Emotional Intelligence</h3>
                <p className="text-gray-600 mb-4">Building mental health awareness, grit, and resilience.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>Stress Management Techniques</li>
                  <li>Building Resilience & Grit</li>
                  <li>Emotional Awareness Training</li>
                  <li>Mindfulness Practices</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">View Case Studies</Button>
              </TabsContent>
              
              <TabsContent value="innovation" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Innovation & Philosophy</h3>
                <p className="text-gray-600 mb-4">Developing growth mindset and critical thinking abilities.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>Design Thinking Workshop</li>
                  <li>Critical Reasoning Development</li>
                  <li>Philosophical Debate Sessions</li>
                  <li>Creative Problem-Solving</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">See Student Projects</Button>
              </TabsContent>
              
              <TabsContent value="global" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Global Learning</h3>
                <p className="text-gray-600 mb-4">Exchange programs and research collaborations around the world.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>International Exchange Opportunities</li>
                  <li>Cross-Cultural Research Projects</li>
                  <li>Global Challenges Participation</li>
                  <li>Virtual Exchange Programs</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">Explore Opportunities</Button>
              </TabsContent>
              
              <TabsContent value="technology" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Technology</h3>
                <p className="text-gray-600 mb-4">AI, automation, coding, and digital branding skills.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>AI & Machine Learning Basics</li>
                  <li>Automation Tools Training</li>
                  <li>Coding Fundamentals</li>
                  <li>Digital Brand Building</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">View Tech Resources</Button>
              </TabsContent>
              
              <TabsContent value="psychology" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Gamified Psychology</h3>
                <p className="text-gray-600 mb-4">Learning through story, simulation, and games.</p>
                <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                  <li>Narrative-Based Learning</li>
                  <li>Role-Playing Simulations</li>
                  <li>Educational Game Design</li>
                  <li>Immersive Learning Experiences</li>
                </ul>
                <Button className="bg-pitchburg-purple hover:bg-purple-600">Try Demo Lessons</Button>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Section 5: Transformation Journey Tracker */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Transformation Journey Tracker</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Monitor progress, set goals, and showcase achievements</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-12">
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-10">
                <div className="bg-pitchburg-purple h-2 rounded-full w-2/3"></div>
                
                {/* Milestone Points */}
                <div className="absolute -top-2 left-0">
                  <div className="bg-pitchburg-purple text-white w-8 h-8 rounded-full flex items-center justify-center">1</div>
                  <span className="absolute mt-2 -ml-6 text-sm font-medium">Observe</span>
                </div>
                
                <div className="absolute -top-2 left-1/3">
                  <div className="bg-pitchburg-purple text-white w-8 h-8 rounded-full flex items-center justify-center">2</div>
                  <span className="absolute mt-2 -ml-6 text-sm font-medium">Inspire</span>
                </div>
                
                <div className="absolute -top-2 left-2/3">
                  <div className="bg-pitchburg-purple text-white w-8 h-8 rounded-full flex items-center justify-center">3</div>
                  <span className="absolute mt-2 -ml-10 text-sm font-medium">Implement</span>
                </div>
              </div>
              
              {/* Journey Description */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Your Journey Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Projects Completed: 6/10</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Participation: 80%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span>Portfolio Items: 12/20</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>Social Impact: 45 hrs</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-pitchburg-purple hover:bg-purple-600">Get Your Scorecard</Button>
                  <Button variant="outline" className="border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple">Build Public Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 6: Unique Features */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Unique Features for Institutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Standout benefits that make Pitchburg different</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Unlock />, title: "No Barrier Access", description: "No restrictions on devices, dress code, or fees" },
              { icon: <User />, title: "1 Student 1 Project Rule", description: "Every student completes meaningful work" },
              { icon: <Globe />, title: "Global Opportunity Portal", description: "Direct access to international opportunities" },
              { icon: <FileText />, title: "Public Impact Reporting", description: "Transparent social impact measurement" },
              { icon: <Users />, title: "Student Reforms Council", description: "Student-led governance and initiatives" },
              { icon: <FileText />, title: "Recommendation Generator", description: "Automated performance recognition system" },
              { icon: <FileText />, title: "Personal Growth Resume", description: "Skills-focused CV builder for students" },
              { icon: <Globe />, title: "Global Standards Department", description: "Ensuring international quality benchmarks" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pitchburg-light-purple p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Section 7: Media Gallery */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Media Gallery & Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See Pitchburg in action through our media collection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b" alt="Student pitch" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-pitchburg-purple text-white p-2 rounded-full">
                  <Camera className="h-4 w-4" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-1">Student Pitch Day</h3>
                <p className="text-gray-600 text-sm">Students presenting innovative ideas to industry experts</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87" alt="Guest speaker" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-pitchburg-purple text-white p-2 rounded-full">
                  <Video className="h-4 w-4" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-1">Expert Guest Lectures</h3>
                <p className="text-gray-600 text-sm">Industry leaders sharing insights and experience</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Exchange program" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-pitchburg-purple text-white p-2 rounded-full">
                  <Earth className="h-4 w-4" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-1">Global Exchange</h3>
                <p className="text-gray-600 text-sm">Students participating in international collaborations</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Section 8: Get Started / Join Pitchburg */}
        <section className="py-16 bg-gradient-to-b from-white to-pitchburg-light-purple/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Join Pitchburg Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start your institution's transformation journey with us</p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <Button className="w-full bg-pitchburg-purple hover:bg-purple-600 h-12 text-lg">
                Schedule a Call
              </Button>
              
              <Button variant="outline" className="w-full border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple h-12 text-lg">
                Join Pitchburg Beta
              </Button>
              
              <Button variant="outline" className="w-full border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple h-12 text-lg">
                Become a Partner Institute
              </Button>
              
              <div className="pt-4 text-center">
                <a href="#" className="text-pitchburg-purple hover:underline">Download Brochure PDF</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
