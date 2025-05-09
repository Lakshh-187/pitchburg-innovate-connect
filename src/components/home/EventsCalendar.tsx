
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, Calendar as CalendarIcon, Users, Trophy, Rocket } from "lucide-react";

export function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState("upcoming");
  
  // Mock data for events
  const events = {
    upcoming: [
      {
        id: 1,
        title: "Annual Innovation Challenge",
        date: "June 15-20, 2025",
        category: "competition",
        participants: "150+ teams"
      },
      {
        id: 2,
        title: "Entrepreneurship Workshop",
        date: "July 10, 2025",
        category: "workshop",
        participants: "Open to all students"
      },
      {
        id: 3,
        title: "Project Expo 2025",
        date: "August 5-7, 2025",
        category: "exhibition",
        participants: "Selected projects"
      }
    ],
    past: [
      {
        id: 1,
        title: "Winter Hackathon",
        date: "December 12-14, 2024",
        category: "competition",
        participants: "120 teams participated"
      },
      {
        id: 2,
        title: "Design Thinking Masterclass",
        date: "February 5, 2025",
        category: "workshop",
        participants: "300+ attendees"
      },
      {
        id: 3,
        title: "Spring Pitch Competition",
        date: "March 20, 2025",
        category: "competition",
        participants: "50 finalists"
      }
    ]
  };
  
  // Event category icons
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "competition": return <Trophy className="h-5 w-5 text-pitchburg-purple" />;
      case "workshop": return <Users className="h-5 w-5 text-pitchburg-purple" />;
      case "exhibition": return <Rocket className="h-5 w-5 text-pitchburg-purple" />;
      default: return <CalendarIcon className="h-5 w-5 text-pitchburg-purple" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Events & Competitions</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Explore upcoming and past events, competitions, and workshops at Institute Pitchburg
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-pitchburg-purple" />
                  <span>Calendar</span>
                </CardTitle>
                <CardDescription>Select a date to see events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border w-full"
                  disabled={(date) => date < new Date("2024-12-01") || date > new Date("2025-12-31")}
                />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <CalendarClock className="mr-2 h-4 w-4" />
                  Subscribe to Calendar
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <CardTitle>Event Schedule</CardTitle>
                  <Tabs value={view} onValueChange={setView} className="w-full sm:w-auto">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                      <TabsTrigger value="upcoming" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                        Upcoming
                      </TabsTrigger>
                      <TabsTrigger value="past" className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white">
                        Past
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={view}>
                  <TabsContent value="upcoming" className="mt-0 animate-fade-in">
                    <div className="space-y-5">
                      {events.upcoming.map((event) => (
                        <div key={event.id} className="border border-gray-100 rounded-lg p-4 transition-all hover:shadow-md hover:border-pitchburg-purple/30 group">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-pitchburg-light-purple/20">
                              {getCategoryIcon(event.category)}
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium">{event.title}</h3>
                                <Badge className="bg-pitchburg-purple">{event.category}</Badge>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <CalendarClock className="h-3.5 w-3.5 mr-1" />
                                <span>{event.date}</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{event.participants}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="past" className="mt-0 animate-fade-in">
                    <div className="space-y-5">
                      {events.past.map((event) => (
                        <div key={event.id} className="border border-gray-100 rounded-lg p-4 transition-all hover:shadow-md hover:border-pitchburg-purple/30 group">
                          <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-pitchburg-light-purple/20">
                              {getCategoryIcon(event.category)}
                            </div>
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium">{event.title}</h3>
                                <Badge variant="outline">{event.category}</Badge>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <CalendarClock className="h-3.5 w-3.5 mr-1" />
                                <span>{event.date}</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{event.participants}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-pitchburg-purple hover:bg-purple-600">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
