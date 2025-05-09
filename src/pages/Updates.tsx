import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Calendar,
  BellRing,
  Users,
  MessageSquare,
  Search, 
  CalendarClock,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Updates = () => {
  // Placeholder data for demo
  const upcomingEvents = [
    { 
      id: 1, 
      title: "Summer Innovation Bootcamp", 
      date: "July 15-20, 2025", 
      type: "event",
      status: "Registration Open"
    },
    { 
      id: 2, 
      title: "Pitch Competition Finals", 
      date: "August 5, 2025", 
      type: "competition",
      status: "Coming Soon" 
    },
    { 
      id: 3, 
      title: "Industry Mentor Meet", 
      date: "September 10, 2025", 
      type: "networking",
      status: "Invitation Only" 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="News & Announcements"
          title="Latest Updates" 
          subtitle="Stay Informed"
          description="Keep up with the latest news, events, achievements, and opportunities from our growing innovation ecosystem."
          primaryActionText="Subscribe to Updates"
          secondaryActionText="View Calendar"
          primaryActionHref="#subscribe"
          secondaryActionHref="#calendar"
          backgroundImage="public/lovable-uploads/1565516b-b8da-43dc-aa93-05f53b659f74.png"
        />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">Updates</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about events, announcements, and opportunities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Latest Announcements</CardTitle>
                      <CardDescription>Important notifications and news</CardDescription>
                    </div>
                    <BellRing className="h-5 w-5 text-pitchburg-purple" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">Announcement Placeholder #{item}</h3>
                          <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          We're preparing important announcements about upcoming pitching opportunities, 
                          workshops, and program updates. Check back soon for the latest information.
                        </p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Coming Q2 2025</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    View all announcements
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Calendar</CardTitle>
                      <CardDescription>Upcoming events</CardDescription>
                    </div>
                    <Calendar className="h-5 w-5 text-pitchburg-purple" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-3">
                        <div className="bg-pitchburg-light-purple/30 p-2 rounded">
                          <CalendarClock className="h-5 w-5 text-pitchburg-purple" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <p className="text-xs text-gray-500">{event.date}</p>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">{event.type}</Badge>
                            <Badge className="text-xs bg-pitchburg-purple/20 text-pitchburg-purple border-none hover:bg-pitchburg-purple/30">{event.status}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">
                    Subscribe to calendar
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Opportunities</CardTitle>
                    <CardDescription>Hackathons, competitions, and more</CardDescription>
                  </div>
                  <Users className="h-5 w-5 text-pitchburg-purple" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item} 
                      className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow card-hover"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-10 h-10 rounded bg-gray-${item*100} animate-pulse`}></div>
                        <div>
                          <h4 className="font-medium text-sm">Opportunity #{item}</h4>
                          <p className="text-xs text-gray-500">Coming soon</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-3">
                        <div className="h-3 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                        <div className="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                        <Button size="sm" variant="ghost" disabled>Apply</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full items-center">
                  <p className="text-sm text-gray-500">More opportunities coming soon</p>
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4 mr-2" /> 
                    Explore all
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-br from-pitchburg-purple/10 to-pitchburg-light-purple/30 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Stay Updated</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Get notified when we post new opportunities, events, and announcements.
              Subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
