import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, Award, MessageCircle, Target } from "lucide-react";

export default function MentorMe() {
  const mentorshipPrograms = [
    {
      id: 1,
      title: "Academic Excellence Program",
      mentor: "Dr. Sarah Johnson",
      department: "Computer Science",
      capacity: "5/10 students",
      duration: "6 months",
      focus: "Research & Publications",
      description: "Advanced research mentorship for students interested in AI and machine learning.",
      tags: ["Research", "AI", "Publications"]
    },
    {
      id: 2,
      title: "Entrepreneurship Bootcamp",
      mentor: "Prof. Michael Chen",
      department: "Business Administration",
      capacity: "8/12 students",
      duration: "4 months",
      focus: "Startup Development",
      description: "End-to-end guidance for students looking to launch their own ventures.",
      tags: ["Startup", "Business", "Innovation"]
    },
    {
      id: 3,
      title: "Creative Arts Collective",
      mentor: "Ms. Emma Rodriguez",
      department: "Fine Arts",
      capacity: "12/15 students",
      duration: "3 months",
      focus: "Portfolio Development",
      description: "Develop your artistic skills and build a professional portfolio.",
      tags: ["Arts", "Portfolio", "Creative"]
    },
    {
      id: 4,
      title: "Leadership Development Track",
      mentor: "Dr. James Wilson",
      department: "Management Studies",
      capacity: "6/8 students",
      duration: "5 months",
      focus: "Leadership Skills",
      description: "Comprehensive leadership training with real-world project experience.",
      tags: ["Leadership", "Management", "Projects"]
    }
  ];

  const upcomingEvents = [
    {
      date: "Mar 15",
      title: "Mentor-Mentee Speed Networking",
      time: "2:00 PM - 4:00 PM",
      location: "Student Center Hall"
    },
    {
      date: "Mar 22",
      title: "Career Guidance Workshop",
      time: "10:00 AM - 12:00 PM",
      location: "Business Building, Room 201"
    },
    {
      date: "Mar 29",
      title: "Research Methodology Seminar",
      time: "3:00 PM - 5:00 PM",
      location: "Library Conference Room"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Mentor Me Program</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with experienced faculty and industry professionals to accelerate your academic and career growth
            </p>
            <Button size="lg" variant="secondary" className="mr-4">
              <Users className="mr-2 h-5 w-5" />
              Find a Mentor
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <BookOpen className="mr-2 h-5 w-5" />
              Become a Mentor
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Active Mentors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Mentored</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Programs Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Active Mentorship Programs</h2>
              <p className="text-xl text-muted-foreground">Join specialized programs tailored to your career goals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mentorshipPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="secondary">{program.capacity}</Badge>
                    </div>
                    <div className="text-muted-foreground">
                      <p className="font-medium">{program.mentor}</p>
                      <p className="text-sm">{program.department}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center">
                        <Target className="mr-1 h-4 w-4" />
                        {program.focus}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>

                    <Button className="w-full">
                      Apply for Program
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-xl text-muted-foreground">Don't miss these valuable mentorship opportunities</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{event.date}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="text-muted-foreground">{event.time} • {event.location}</p>
                        </div>
                      </div>
                      <Button variant="outline">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers through our mentorship program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Award className="mr-2 h-5 w-5" />
                View Success Stories
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}