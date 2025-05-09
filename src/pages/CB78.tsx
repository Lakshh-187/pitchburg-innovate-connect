
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, FileText, BookOpen, Bell, Table, Route, CheckCircle } from "lucide-react";
import { 
  Table as UITable,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@/components/ui/table";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger, 
} from "@/components/ui/hover-card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Sample data for the tables
const instituteData = [
  { id: "PB001", name: "North Valley Institute", location: "Chicago, IL", status: "Active", enrollment: 1245, rating: 4.8 },
  { id: "PB002", name: "Westlake Technical College", location: "Seattle, WA", status: "Active", enrollment: 980, rating: 4.5 },
  { id: "PB003", name: "Eastern Science Academy", location: "Boston, MA", status: "Under Review", enrollment: 1560, rating: 4.7 },
  { id: "PB004", name: "Southern Arts Institute", location: "Atlanta, GA", status: "Active", enrollment: 720, rating: 4.3 },
  { id: "PB005", name: "Central Business School", location: "Dallas, TX", status: "Pending", enrollment: 890, rating: 4.1 },
];

// Sample notifications data
const notifications = [
  { id: 1, title: "New Curriculum Release", date: "2025-05-15", priority: "High", description: "The updated curriculum for Fall 2025 is now available for review." },
  { id: 2, title: "Grant Application Deadline", date: "2025-06-01", priority: "High", description: "Final reminder for the annual technology grant applications." },
  { id: 3, title: "Quarterly Report Due", date: "2025-05-30", priority: "Medium", description: "All institutes must submit their quarterly performance reports." },
  { id: 4, title: "Faculty Training Session", date: "2025-05-20", priority: "Low", description: "Optional professional development session for teaching staff." },
  { id: 5, title: "Annual Conference Registration", date: "2025-07-15", priority: "Medium", description: "Early bird registration for the Pitchburg International Conference is now open." },
];

// Sample roadmap data
const roadmapSteps = [
  { 
    id: 1, 
    title: "Institute Application", 
    description: "Submit formal application to become a Pitchburg International Institute", 
    timeline: "Week 1-2",
    status: "completed"
  },
  { 
    id: 2, 
    title: "Initial Assessment", 
    description: "On-site evaluation by Pitchburg representatives", 
    timeline: "Week 3-4",
    status: "completed"
  },
  { 
    id: 3, 
    title: "Curriculum Integration", 
    description: "Adapt current programs to include Pitchburg methodologies", 
    timeline: "Week 5-10",
    status: "in-progress"
  },
  { 
    id: 4, 
    title: "Faculty Training", 
    description: "Train teaching staff on Pitchburg approaches and tools", 
    timeline: "Week 8-12",
    status: "in-progress"
  },
  { 
    id: 5, 
    title: "Infrastructure Setup", 
    description: "Setup technical infrastructure and learning spaces", 
    timeline: "Week 6-14",
    status: "pending"
  },
  { 
    id: 6, 
    title: "Program Launch", 
    description: "Official launch of Pitchburg programs at the institute", 
    timeline: "Week 15-16",
    status: "pending"
  },
  { 
    id: 7, 
    title: "Quality Assurance", 
    description: "Ongoing monitoring and quality enhancement", 
    timeline: "Continuous",
    status: "pending"
  },
];

// Sample policy documents
const policyDocuments = [
  {
    id: "POL-001",
    title: "Accreditation Standards",
    version: "3.2",
    lastUpdated: "2025-03-15",
    description: "Comprehensive standards for institutional accreditation and quality assurance.",
    sections: [
      "Institutional Governance",
      "Academic Program Quality",
      "Faculty Qualifications",
      "Student Support Services",
      "Resource Management"
    ]
  },
  {
    id: "POL-002",
    title: "Curriculum Framework",
    version: "2.1",
    lastUpdated: "2025-02-22",
    description: "Guidelines for developing and implementing educational programs aligned with Pitchburg standards.",
    sections: [
      "Learning Outcomes",
      "Assessment Methods",
      "Instructional Design",
      "Technology Integration",
      "Industry Alignment"
    ]
  },
  {
    id: "POL-003",
    title: "Student Exchange Program",
    version: "1.5",
    lastUpdated: "2025-04-10",
    description: "Policies governing international student exchange programs between Pitchburg institutes.",
    sections: [
      "Eligibility Criteria",
      "Application Process",
      "Financial Considerations",
      "Credit Transfer",
      "Cultural Integration"
    ]
  },
];

const CB78 = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Pitchburg International"
          title="Transform Your Institute" 
          subtitle="with Pitchburg 🌍"
          description="Internships, Innovation, Impact – All in One Campus Experience"
          primaryActionText="Become a Pitchburg Institute"
          secondaryActionText="Explore Curriculum"
          primaryActionHref="#"
          secondaryActionHref="#curriculum"
          backgroundImage="public/lovable-uploads/bbfd50d9-c69d-40de-90ba-c2ca76c49314.png"
        />
        
        {/* Main Content with Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full md:w-auto mb-6 flex flex-wrap md:flex-nowrap justify-start gap-2">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Table className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="journey" className="flex items-center gap-2">
                  <Route className="h-4 w-4" />
                  Journey & Roadmap
                </TabsTrigger>
                <TabsTrigger value="policies" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Policies & Docs
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Calendar
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab Content */}
              <TabsContent value="overview" className="space-y-8">
                <Card>
                  <CardHeader className="bg-purple-50">
                    <CardTitle className="text-2xl text-purple-800">Pitchburg International Institutes</CardTitle>
                    <CardDescription>
                      Complete overview of all institutes participating in the Pitchburg International program.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <UITable>
                        <TableCaption>List of current Pitchburg International Institutes</TableCaption>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Institute ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Enrollment</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {instituteData.map((institute) => (
                            <TableRow key={institute.id}>
                              <TableCell className="font-medium">{institute.id}</TableCell>
                              <TableCell>{institute.name}</TableCell>
                              <TableCell>{institute.location}</TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={`
                                    ${institute.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : ''}
                                    ${institute.status === 'Under Review' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                                    ${institute.status === 'Pending' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                                  `}
                                >
                                  {institute.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{institute.enrollment.toLocaleString()}</TableCell>
                              <TableCell>{institute.rating}/5.0</TableCell>
                              <TableCell>
                                <HoverCard>
                                  <HoverCardTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      View Details
                                    </Button>
                                  </HoverCardTrigger>
                                  <HoverCardContent className="w-80">
                                    <div className="space-y-2">
                                      <h4 className="text-sm font-semibold">{institute.name}</h4>
                                      <p className="text-xs text-muted-foreground">Established in 2022</p>
                                      <div className="pt-2">
                                        <div className="text-xs text-muted-foreground mb-2">Programs Offered:</div>
                                        <div className="flex flex-wrap gap-1">
                                          <Badge variant="secondary">Data Science</Badge>
                                          <Badge variant="secondary">Blockchain</Badge>
                                          <Badge variant="secondary">AI</Badge>
                                          <Badge variant="secondary">IoT</Badge>
                                        </div>
                                      </div>
                                    </div>
                                  </HoverCardContent>
                                </HoverCard>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </UITable>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline">Export Data</Button>
                    <Button className="bg-purple-600 hover:bg-purple-700">Add New Institute</Button>
                  </CardFooter>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                      <CardTitle>25+</CardTitle>
                      <CardDescription>Countries worldwide</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600">
                        Extending our reach across continents, bringing diverse perspectives to education.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                      <CardTitle>150+</CardTitle>
                      <CardDescription>Partner Institutions</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600">
                        Collaborating with top educational institutes to deliver quality learning experiences.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                      <CardTitle>10,000+</CardTitle>
                      <CardDescription>Annual Graduates</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600">
                        Launching careers and creating impact through our comprehensive programs.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                      <CardTitle>95%</CardTitle>
                      <CardDescription>Employment Rate</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600">
                        Industry-aligned curriculum that prepares students for real-world success.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Journey & Roadmap Tab Content */}
              <TabsContent value="journey" className="space-y-8">
                <Card>
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-2xl text-blue-800">Transformation Journey</CardTitle>
                    <CardDescription>
                      Step-by-step process to become a fully accredited Pitchburg International Institute.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="relative py-8">
                      {/* Vertical timeline line */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
                      
                      {/* Timeline items */}
                      {roadmapSteps.map((step, index) => (
                        <div key={step.id} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          {/* Timeline marker */}
                          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10">
                            {step.status === 'completed' ? (
                              <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                            ) : step.status === 'in-progress' ? (
                              <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                                <div className="h-3 w-3 bg-white rounded-full"></div>
                              </div>
                            ) : (
                              <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                                <div className="h-3 w-3 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className={`w-full md:w-5/12 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                            <Card className={`
                              shadow-md hover:shadow-lg transition-all duration-300
                              ${step.status === 'completed' ? 'border-l-4 border-green-500' : ''}
                              ${step.status === 'in-progress' ? 'border-l-4 border-blue-500' : ''}
                              ${step.status === 'pending' ? '' : ''}
                            `}>
                              <CardHeader>
                                <div className="flex items-center justify-between">
                                  <Badge variant={
                                    step.status === 'completed' ? 'default' : 
                                    step.status === 'in-progress' ? 'secondary' : 'outline'
                                  }>
                                    {step.status === 'completed' ? 'Completed' : 
                                     step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">{step.timeline}</span>
                                </div>
                                <CardTitle className="text-lg">{step.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">
                                  {step.description}
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                          
                          {/* Empty space for alignment */}
                          <div className="hidden md:block md:w-5/12"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline">Download Roadmap PDF</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Request Consultation</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Policies & Docs Tab Content */}
              <TabsContent value="policies" className="space-y-8">
                <Card>
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-2xl text-amber-800">Policies & Official Documents</CardTitle>
                    <CardDescription>
                      Comprehensive collection of all policies, guidelines, and official documentation for Pitchburg International Institutes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <div className="relative">
                        <Input 
                          placeholder="Search documents..." 
                          className="pl-10"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {policyDocuments.map((doc) => (
                        <AccordionItem key={doc.id} value={doc.id}>
                          <AccordionTrigger className="hover:bg-gray-50 px-4 py-2 rounded-md">
                            <div className="flex items-start text-left">
                              <div className="mr-4">
                                <div className="bg-amber-100 p-2 rounded-md">
                                  <FileText className="h-6 w-6 text-amber-700" />
                                </div>
                              </div>
                              <div>
                                <div className="font-medium">{doc.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  <span className="inline-block mr-3">ID: {doc.id}</span>
                                  <span className="inline-block mr-3">Version: {doc.version}</span>
                                  <span>Updated: {doc.lastUpdated}</span>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="bg-gray-50 p-4 rounded-md mb-4">
                              <p className="text-sm text-gray-700">{doc.description}</p>
                            </div>
                            <div className="mb-4">
                              <Label className="text-sm font-medium mb-2 block">Document Sections:</Label>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {doc.sections.map((section, idx) => (
                                  <div 
                                    key={idx}
                                    className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50"
                                  >
                                    <BookOpen className="h-4 w-4 text-amber-600" />
                                    <span className="text-sm">{section}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" size="sm" className="text-xs">
                                <FileText className="h-3.5 w-3.5 mr-1" /> View Full Document
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download PDF
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                Share
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline">View Archive</Button>
                    <Button className="bg-amber-600 hover:bg-amber-700">Request New Document</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Notifications Tab Content */}
              <TabsContent value="notifications" className="space-y-8">
                <Card>
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-2xl text-red-800">Notifications & Announcements</CardTitle>
                    <CardDescription>
                      Important updates, deadlines, and announcements for Pitchburg International Institutes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <Collapsible
                          key={notification.id}
                          open={notification.id === 1 ? isOpen : false}
                          onOpenChange={notification.id === 1 ? setIsOpen : undefined}
                          className="border rounded-md overflow-hidden"
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              <div className={`
                                mr-4 p-2 rounded-full
                                ${notification.priority === 'High' ? 'bg-red-100' : ''}
                                ${notification.priority === 'Medium' ? 'bg-amber-100' : ''}
                                ${notification.priority === 'Low' ? 'bg-blue-100' : ''}
                              `}>
                                <Bell className={`
                                  h-5 w-5
                                  ${notification.priority === 'High' ? 'text-red-600' : ''}
                                  ${notification.priority === 'Medium' ? 'text-amber-600' : ''}
                                  ${notification.priority === 'Low' ? 'text-blue-600' : ''}
                                `} />
                              </div>
                              <div>
                                <div className="font-medium text-left">{notification.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  <span>{format(new Date(notification.date), 'MMMM dd, yyyy')}</span>
                                  <Badge
                                    variant="outline"
                                    className={`
                                      ml-2
                                      ${notification.priority === 'High' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                                      ${notification.priority === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                                      ${notification.priority === 'Low' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                                    `}
                                  >
                                    {notification.priority} Priority
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="p-4 pt-0 border-t">
                              <p className="text-sm text-gray-700 mb-4">
                                {notification.description}
                              </p>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                  Mark as Read
                                </Button>
                                <Button size="sm" className="text-xs bg-purple-600 hover:bg-purple-700">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline">View All Notifications</Button>
                    <Button className="bg-red-600 hover:bg-red-700">Create Announcement</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Calendar Tab Content */}
              <TabsContent value="calendar" className="space-y-8">
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-2xl text-green-800">Event Calendar</CardTitle>
                    <CardDescription>
                      Upcoming events, deadlines, and important dates for the Pitchburg International community.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border mb-4 mx-auto pointer-events-auto"
                        />
                        {date && (
                          <div className="rounded-md border p-4 mt-4">
                            <h3 className="text-sm font-medium mb-2">
                              Selected Date: {format(date, 'MMMM dd, yyyy')}
                            </h3>
                            <div className="space-y-2">
                              <div className="p-2 bg-purple-50 border border-purple-100 rounded-md">
                                <div className="text-xs font-medium text-purple-800">9:00 AM - 11:00 AM</div>
                                <div className="text-sm mb-1">Global Directors Meeting</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  Virtual Meeting (Zoom)
                                </div>
                              </div>
                              <div className="p-2 bg-blue-50 border border-blue-100 rounded-md">
                                <div className="text-xs font-medium text-blue-800">1:00 PM - 3:00 PM</div>
                                <div className="text-sm mb-1">Curriculum Development Workshop</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  Conference Room A
                                </div>
                              </div>
                              <div className="p-2 bg-amber-50 border border-amber-100 rounded-md">
                                <div className="text-xs font-medium text-amber-800">4:30 PM - 5:30 PM</div>
                                <div className="text-sm mb-1">Grant Application Deadline</div>
                                <div className="flex items-center gap-1 text-xs text-amber-700 font-medium">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  Due Today
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-md border p-4">
                          <h3 className="text-sm font-medium mb-3">Upcoming Key Dates</h3>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="bg-purple-100 text-purple-800 flex flex-col items-center justify-center h-12 w-12 rounded-md">
                                <span className="text-sm font-bold">15</span>
                                <span className="text-xs">May</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium">New Curriculum Release</div>
                                <p className="text-xs text-gray-500">Updated materials for the upcoming academic year</p>
                                <div className="mt-1">
                                  <Badge variant="outline" className="text-xs bg-purple-50 border-purple-200 text-purple-700">Academic</Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-green-100 text-green-800 flex flex-col items-center justify-center h-12 w-12 rounded-md">
                                <span className="text-sm font-bold">01</span>
                                <span className="text-xs">Jun</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium">Grant Application Deadline</div>
                                <p className="text-xs text-gray-500">Final submissions for technology grants</p>
                                <div className="mt-1">
                                  <Badge variant="outline" className="text-xs bg-green-50 border-green-200 text-green-700">Funding</Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-blue-100 text-blue-800 flex flex-col items-center justify-center h-12 w-12 rounded-md">
                                <span className="text-sm font-bold">15</span>
                                <span className="text-xs">Jun</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium">Global Conference Registration Opens</div>
                                <p className="text-xs text-gray-500">Early bird registration for the annual conference</p>
                                <div className="mt-1">
                                  <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">Event</Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-amber-100 text-amber-800 flex flex-col items-center justify-center h-12 w-12 rounded-md">
                                <span className="text-sm font-bold">30</span>
                                <span className="text-xs">Jun</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium">Quarterly Reports Due</div>
                                <p className="text-xs text-gray-500">Performance metrics and program outcomes</p>
                                <div className="mt-1">
                                  <Badge variant="outline" className="text-xs bg-amber-50 border-amber-200 text-amber-700">Administrative</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <Card>
                          <CardHeader className="py-3">
                            <CardTitle className="text-base">Monthly Events</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                <div className="flex items-center gap-2">
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Academic Events</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-sm">Director's Meetings</span>
                                </div>
                                <span className="text-xs text-gray-500">Every Monday</span>
                              </div>
                              
                              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                <div className="flex items-center gap-2">
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Faculty Events</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-sm">Faculty Development</span>
                                </div>
                                <span className="text-xs text-gray-500">First Tuesday</span>
                              </div>
                              
                              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                <div className="flex items-center gap-2">
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Administrative</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-sm">Resource Allocation</span>
                                </div>
                                <span className="text-xs text-gray-500">Last Friday</span>
                              </div>
                              
                              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                <div className="flex items-center gap-2">
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-xs">Deadlines</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-sm">Monthly Reports</span>
                                </div>
                                <span className="text-xs text-gray-500">5th of month</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline">Export Calendar</Button>
                    <Button className="bg-green-600 hover:bg-green-700">Add New Event</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Core Pillars Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Pillars of International Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Innovative Curriculum</CardTitle>
                  <CardDescription>Industry-aligned educational frameworks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Our curriculum combines theoretical knowledge with practical applications, 
                    ensuring students are prepared for real-world challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <CardTitle>Global Network</CardTitle>
                  <CardDescription>Connections across continents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Tap into a worldwide network of educational institutions, 
                    industry partners, and alumni for collaboration and growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <CardTitle>Quality Assurance</CardTitle>
                  <CardDescription>Maintaining excellence standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Rigorous quality checks and continuous improvement processes 
                    ensure that all programs meet international standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-amber-500 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle>Innovation Hub</CardTitle>
                  <CardDescription>Fostering creative solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Creating environments that encourage experimentation, 
                    entrepreneurship, and the development of cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CB78;
