
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  GraduationCap, 
  CalendarClock, 
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          instituteName="Institute Pitchburg"
          tagline="Our Mission and Vision"
          description="Learn about our journey, our team, and how we support student innovation across campuses."
          pageTitle="About Pitchburg"
          backgroundImage="public/lovable-uploads/f857c92c-a7ff-404a-923e-2877e32530e0.png"
        />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">About Pitchburg</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our mission, vision, and how we support student innovation
            </p>
          </motion.div>
          
          <Tabs defaultValue="mission" className="w-full mb-12">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="vision">Our Vision</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="history">Our History</TabsTrigger>
              </TabsList>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <TabsContent value="mission" className="animate-enter">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                    <CardDescription>Empowering young innovators to change the world</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Our comprehensive About page is currently being crafted to share our mission of empowering student innovation. We're committed to creating a platform where young minds can showcase their ideas and receive the support they need to turn them into reality.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex gap-4">
                        <div className="bg-pitchburg-purple/10 p-3 rounded-full">
                          <Building2 className="h-6 w-6 text-pitchburg-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Institution Support</h3>
                          <p className="text-sm text-gray-500">Partnering with educational institutions to nurture innovation</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-pitchburg-purple/10 p-3 rounded-full">
                          <Users className="h-6 w-6 text-pitchburg-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Community Building</h3>
                          <p className="text-sm text-gray-500">Creating networks of like-minded innovators</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      Learn more soon <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="vision" className="animate-enter">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                    <CardDescription>Building the innovation leaders of tomorrow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We envision a world where every student with an innovative idea has the platform, resources, and support to bring that vision to life. Our vision details will be shared soon.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex gap-4">
                        <div className="bg-pitchburg-orange/10 p-3 rounded-full">
                          <GraduationCap className="h-6 w-6 text-pitchburg-orange" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Education Innovation</h3>
                          <p className="text-sm text-gray-500">Transforming how innovation is taught and nurtured</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-pitchburg-orange/10 p-3 rounded-full">
                          <CalendarClock className="h-6 w-6 text-pitchburg-orange" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Future-Ready</h3>
                          <p className="text-sm text-gray-500">Preparing students for the challenges of tomorrow</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      Learn more soon <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="team" className="animate-enter">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Team</CardTitle>
                    <CardDescription>Meet the passionate individuals behind Pitchburg</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-8">
                      Our team section is under construction. Soon, you'll meet the dedicated educators, innovators, and industry experts who make Pitchburg possible.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse mb-3"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      Meet our team soon <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="animate-enter">
                <Card>
                  <CardHeader>
                    <CardTitle>Our History</CardTitle>
                    <CardDescription>The journey of Pitchburg from idea to reality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-8">
                      The Pitchburg story is being documented. Check back soon to learn about our founding, milestones, and growth over the years.
                    </p>
                    <div className="relative pl-8 pb-8 border-l border-gray-200">
                      {[2021, 2022, 2023, 2024].map((year, index) => (
                        <div key={year} className={`mb-8 ${index === 3 ? '' : ''}`}>
                          <div className="absolute -left-2">
                            <div className={`w-4 h-4 rounded-full ${index === 3 ? 'bg-pitchburg-purple' : 'bg-gray-200'}`}></div>
                          </div>
                          <div className="font-bold text-lg mb-1">{year}</div>
                          <div className="h-3 bg-gray-100 rounded w-3/4 mb-2 animate-pulse"></div>
                          <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="ml-auto">
                      Explore our history soon <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </motion.div>
          </Tabs>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-pitchburg-purple/10 to-pitchburg-light-purple/30 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Join Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We're building a comprehensive about page with our mission, team, and history. Subscribe to be notified when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
              />
              <Button>
                Notify Me
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
