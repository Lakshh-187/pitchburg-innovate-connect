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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Download,
  Calendar,
  Trophy,
  Users,
  GraduationCap,
  Search,
  Heart,
  ArrowRight,
  Info
} from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { 
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Achievers = () => {
  // Sample years for tabs
  const years = ["2025", "2024", "2023", "2022", "All"];
  
  // Sample magazine issues
  const magazineIssues = [
    { id: 1, title: "Spring 2025", quarter: "Q1", pages: 32 },
    { id: 2, title: "Summer 2025", quarter: "Q2", pages: 48 },
    { id: 3, title: "Fall 2025", quarter: "Q3", pages: 40 },
    { id: 4, title: "Winter 2025", quarter: "Q4", pages: 36 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Exceptional Talent"
          title="Our Achievers" 
          subtitle="Making Global Impact"
          description="Meet the remarkable students who have excelled through our platform and are now creating waves of change worldwide."
          primaryActionText="View All Achievers"
          secondaryActionText="Nominate Someone"
          primaryActionHref="#achievers-list"
          secondaryActionHref="#nominate"
          backgroundImage="public/lovable-uploads/1565516b-b8da-43dc-aa93-05f53b659f74.png"
        />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">Achievers & Magazine</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the success stories and accomplishments of our students
            </p>
          </motion.div>
          
          <Tabs defaultValue="achievers" className="mb-12">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="achievers">
                  <Trophy className="h-4 w-4 mr-2" />
                  Student Achievers
                </TabsTrigger>
                <TabsTrigger value="magazine">
                  <Download className="h-4 w-4 mr-2" />
                  Magazine Issues
                </TabsTrigger>
              </TabsList>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <TabsContent value="achievers" className="animate-enter">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Student Achievers</CardTitle>
                        <CardDescription>By year and category</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        {years.map((year) => (
                          <Button 
                            key={year} 
                            variant={year === "2025" ? "default" : "outline"} 
                            size="sm"
                          >
                            {year}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                        <HoverCard key={index}>
                          <HoverCardTrigger asChild>
                            <Card className="overflow-hidden cursor-pointer border-dashed border-2">
                              <div className="p-6 flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 mb-4">
                                  <AvatarFallback className="bg-pitchburg-purple/10 text-pitchburg-purple">
                                    {index % 2 === 0 ? "TS" : "AK"}
                                  </AvatarFallback>
                                </Avatar>
                                <h3 className="font-medium mb-1">Student #{index}</h3>
                                <p className="text-sm text-gray-500">Coming soon</p>
                                <Badge className="mt-3">{index % 3 === 0 ? "Innovation" : index % 3 === 1 ? "Technology" : "Impact"}</Badge>
                              </div>
                            </Card>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                              <Avatar>
                                <AvatarFallback className="bg-pitchburg-purple/10 text-pitchburg-purple">
                                  {index % 2 === 0 ? "TS" : "AK"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">Student #{index}</h4>
                                <p className="text-sm text-gray-500">
                                  Coming soon - This section will feature student achievements and project details.
                                </p>
                                <div className="flex items-center text-xs text-gray-500 pt-2">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  <span>Coming 2025</span>
                                </div>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="ml-auto">
                      <Search className="mr-2 h-4 w-4" />
                      Search all achievers
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="magazine" className="animate-enter space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Upcoming Magazine Issues</CardTitle>
                        <CardDescription>Download our quarterly publications</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          2025
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {magazineIssues.map((issue) => (
                        <Card key={issue.id} className="overflow-hidden cursor-pointer card-hover">
                          <div className="h-48 bg-gradient-to-br from-pitchburg-purple/80 to-pitchburg-dark-purple flex items-center justify-center">
                            <div className="text-white text-center">
                              <h3 className="text-xl font-bold">{issue.title}</h3>
                              <p>Issue #{issue.id}</p>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <Badge variant="outline">{issue.quarter}</Badge>
                              <span className="text-sm text-gray-500">{issue.pages} pages</span>
                            </div>
                            <Button className="w-full mt-4" variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Coming Soon
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Competition Winners</CardTitle>
                    <CardDescription>Top performers in recent competitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Competition</TableHead>
                          <TableHead>Winner</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Year</TableHead>
                          <TableHead className="text-right">Prize</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[1, 2, 3].map((index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">Annual Pitch Competition #{index}</TableCell>
                            <TableCell>Coming Soon</TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {index === 1 ? "Innovation" : index === 2 ? "Technology" : "Impact"}
                              </Badge>
                            </TableCell>
                            <TableCell>2025</TableCell>
                            <TableCell className="text-right">Coming Soon</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </Tabs>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Achievement Categories</CardTitle>
                    <CardDescription>Discover excellence across different domains</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Trophy, title: "Competition Winners", desc: "Students who excelled in various competitions", color: "bg-pitchburg-yellow/30" },
                    { icon: Heart, title: "Social Contributors", desc: "Making a positive impact in communities", color: "bg-pitchburg-orange/30" },
                    { icon: Users, title: "Team Excellence", desc: "Outstanding collaborative projects", color: "bg-pitchburg-green/30" },
                    { icon: GraduationCap, title: "Academic Achievers", desc: "Scholastic excellence in innovation studies", color: "bg-pitchburg-light-purple/30" }
                  ].map((category, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className={`p-3 rounded-full ${category.color} mb-4`}>
                          <category.icon className="h-6 w-6 text-pitchburg-purple" />
                        </div>
                        <h3 className="font-medium mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.desc}</p>
                        <Button variant="ghost" size="sm" className="mt-4">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-pitchburg-purple/10 to-pitchburg-light-purple/30 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Nominate an Achiever</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Know someone who deserves recognition? Nominate them for our upcoming achievers showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                Nomination Form
              </Button>
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" />
                Learn about criteria
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Achievers;
