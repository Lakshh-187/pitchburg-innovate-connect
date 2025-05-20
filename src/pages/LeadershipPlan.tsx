
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, MapPin } from "lucide-react";

const LeadershipPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero
          category="Foundation"
          title="Leadership & Execution Plan"
          subtitle="Empowering Youth, Transforming Institutions"
          description="Our mission is to empower youth and transform institutions to international standards through impactful leadership, campaigns, and a grants-based model that benefits both our team and society."
          primaryActionText="Join Our Mission"
          secondaryActionText="Learn More"
          primaryActionHref="#key-units"
          secondaryActionHref="#execution-strategy"
          backgroundImage="public/lovable-uploads/bbfd50d9-c69d-40de-90ba-c2ca76c49314.png"
          heroImage="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg"
          alignment="left"
          backgroundColor="bg-gradient-to-r from-purple-900 to-indigo-800"
        />

        {/* Key Units Section */}
        <section id="key-units" className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Units</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our organization operates through two key councils that drive our mission forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {/* YLC Card */}
              <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <span className="bg-white text-purple-600 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm font-bold">1</span>
                    YLC – Youth Leads the Change
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Council focusing on empowering students and organizing impactful activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3">🔹 Appointments</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> Youth Leaders
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> State Coordinators
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> Council Members
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">🎯 Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span> 
                      <span>Establish Uni-Pitch Helpdesk in institutes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span> 
                      <span>Organize campaigns, cohorts, internships, workshops, events, and competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span> 
                      <span>Onboard and support student scholars</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span> 
                      <span>Create impact documentation reports (monthly/quarterly)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span> 
                      <span>Collaborate with other NGOs, organizations, and media houses</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 bg-purple-50 p-4 rounded-md">
                    <h5 className="font-semibold mb-2">Impact Measured</h5>
                    <p>To have number of LOC & LOA along with Scholars</p>
                  </div>
                </CardContent>
              </Card>

              {/* UIEC Card */}
              <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle className="flex items-center text-2xl">
                    <span className="bg-white text-blue-600 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm font-bold">2</span>
                    UIEC – Uniford Institutional Empowerment Council
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    A dedicated body to uplift institutions using CSR funds and international standards
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3">🔹 Appointments</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> Institutional Leaders
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> Regional Council Heads
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> Relationship Managers
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">🎯 Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> 
                      <span>Build tie-ups with schools, colleges, and universities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> 
                      <span>Deploy Pitchburg license, UIRAD system, and Uniford Help Desk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> 
                      <span>Bring innovation, projects, and startup programs to campuses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> 
                      <span>Enable funding opportunities, CSR collaborations, and global recognitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> 
                      <span>Help institutes participate in national & international awards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits & Perks Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perks & Benefits</h2>
              <p className="text-purple-200 max-w-3xl mx-auto">
                Our grants-based model provides significant benefits for leaders who drive impact
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table className="w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <TableHeader>
                  <TableRow className="border-b border-white/20">
                    <TableHead className="text-purple-200 font-bold">Benefit</TableHead>
                    <TableHead className="text-purple-200 font-bold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">💰 Grants-Based Income</TableCell>
                    <TableCell>Rs. 1,000 to Rs. 1 Lakh per achievement via onboarding, awards, or institutional success</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">🎤 Special Invitations</TableCell>
                    <TableCell>Invitations to attend awards, fests, and summits as VIP/Guest</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">🛏️ Travel & Stay</TableCell>
                    <TableCell>All travel, stay, and hospitality covered during official events</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">📈 Career Upliftment</TableCell>
                    <TableCell>Promotions to Managing Directors, Zonal Heads, or Council Board</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">📦 Performance Grants</TableCell>
                    <TableCell>Extra grants based on impact created, institutions onboarded, and scholars managed</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white/5">
                    <TableCell className="font-medium">🧑‍🎓 Recognition</TableCell>
                    <TableCell>National recognition, certificates, LORs, and medals for top-performing leaders</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-center text-purple-100">
                <strong>💡 Note:</strong> The more institutes onboarded and scholars supported, the more impact-based grants we receive.
              </p>
            </div>
          </div>
        </section>

        {/* Execution Strategy Section */}
        <section id="execution-strategy" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Execution Strategy & Roadmap</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to implementing our vision across institutions
              </p>
            </div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-purple-600 text-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Phase 1: Leadership Onboarding</h3>
                  <div className="space-y-3">
                    <p>Launch application portal to appoint:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>50+ Youth Leaders (YLC)</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>25+ Institutional Council Members (UIEC)</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>Train via Uniford orientation program</span>
                      </li>
                    </ul>
                  </div>
                  <Progress value={100} className="h-2 mt-4" />
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-purple-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Phase 2: Institute Tie-ups</h3>
                  <div className="space-y-3">
                    <p>Build partnerships with schools/colleges</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>Offer Free Uni-Pitch Helpdesk License + UIRAD activation</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>Share our impact model and how it helps students win awards, internships, and recognition</span>
                      </li>
                    </ul>
                  </div>
                  <Progress value={75} className="h-2 mt-4" />
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-purple-400 text-white rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Phase 3: Program Activation</h3>
                  <div className="space-y-3">
                    <p>Establish Uni-Pitch Helpdesks in each institution</p>
                    <p>Conduct:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                      <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                        <CardContent className="pt-4">
                          <p className="font-medium">🏫 Workshops on leadership and innovation</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                        <CardContent className="pt-4">
                          <p className="font-medium">💡 Pitch sessions for student projects</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                        <CardContent className="pt-4">
                          <p className="font-medium">🌍 Social campaigns</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                        <CardContent className="pt-4">
                          <p className="font-medium">🧩 Cohort-based training</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                        <CardContent className="pt-4">
                          <p className="font-medium">🤝 Internship drives</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <Progress value={50} className="h-2 mt-4" />
                </div>
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-purple-300 text-purple-800 rounded-full h-16 w-16 flex items-center justify-center text-xl font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Phase 4: Grant Generation & Distribution</h3>
                  <div className="space-y-3">
                    <p>Document all achievements and institutional impact</p>
                    <p>Submit monthly impact reports</p>
                    <p>Receive grants based on:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>🧑‍🎓 Number of scholars</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>🏫 Number of institutes</span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                        <span>🏆 Achievements (Awards, Competitions, Innovation Fairs)</span>
                      </li>
                    </ul>
                    <p>Distribute grants among YLC/UIEC teams</p>
                  </div>
                  <Progress value={25} className="h-2 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Examples Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Examples of Impact</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Real-world examples of how our leadership model creates meaningful impact
              </p>
            </div>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Card className="border-green-200 shadow-lg h-full">
                    <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      <CardTitle>✅ Example 1 – YLC Leader (Riya)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> 
                          Onboarded 100 students as scholars from 3 institutes
                        </p>
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> 
                          Organized 2 internship drives + 1 innovation hackathon
                        </p>
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" /> 
                          Led to 5 students winning a regional innovation competition
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-md mt-6">
                        <p className="font-bold text-green-800">🎉 Received:</p>
                        <p>Rs. 15,000 grant + travel invitation to Tech Conference</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className="border-blue-200 shadow-lg h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <CardTitle>✅ Example 2 – UIEC Member (Arjun)</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0" /> 
                          Tied up with 2 colleges for Pitchburg activation
                        </p>
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0" /> 
                          Helped college sign CSR MoU with local enterprise
                        </p>
                        <p className="flex items-start">
                          <Check className="h-5 w-5 text-blue-500 mr-2 shrink-0" /> 
                          Won institutional award for "Best Innovation Culture"
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-md mt-6">
                        <p className="font-bold text-blue-800">🎉 Received:</p>
                        <p>Rs. 35,000 institutional achievement grant + promotion</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-6" />
              <CarouselNext className="-right-6" />
            </Carousel>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Action Plan for Teams</h2>
              <p className="text-purple-200 max-w-3xl mx-auto">
                Week-by-week implementation strategy for our leadership teams
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table className="w-full bg-white/10 backdrop-blur-sm rounded-lg">
                <TableHeader>
                  <TableRow className="border-b border-white/20">
                    <TableHead className="text-purple-200 font-bold">Week</TableHead>
                    <TableHead className="text-purple-200 font-bold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">Week 1</TableCell>
                    <TableCell>Appoint 100+ YLC & UIEC leaders</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">Week 2</TableCell>
                    <TableCell>Launch outreach to 500+ institutes</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">Week 3</TableCell>
                    <TableCell>Conduct 20+ onboarding workshops</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium">Week 4</TableCell>
                    <TableCell>Setup 50+ Uni-Pitch Helpdesks</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-white/5">
                    <TableCell className="font-medium">Week 5+</TableCell>
                    <TableCell>Begin tracking achievements & apply for grants</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipPlan;
