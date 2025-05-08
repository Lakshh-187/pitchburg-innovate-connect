
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Upload, 
  Download, 
  FileText, 
  Certificate, 
  Mail, 
  Users, 
  Award, 
  Search,
  Link
} from "lucide-react";

// Form schema for pitch submission
const submitPitchSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  team: z.string().min(3, "Team name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email")
});

const SubmitResources = () => {
  const [activeTab, setActiveTab] = useState("submit");

  // Form setup
  const form = useForm<z.infer<typeof submitPitchSchema>>({
    resolver: zodResolver(submitPitchSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      team: "",
      email: ""
    }
  });

  // Mock data for resources
  const resources = {
    documents: [
      { id: 1, title: "Pitch Guidelines 2025", type: "PDF", size: "1.2 MB", date: "April 1, 2025" },
      { id: 2, title: "Submission Template", type: "DOCX", size: "540 KB", date: "April 5, 2025" },
      { id: 3, title: "Judging Criteria", type: "PDF", size: "890 KB", date: "April 2, 2025" },
      { id: 4, title: "Competition Rules", type: "PDF", size: "1.5 MB", date: "April 1, 2025" }
    ],
    certificates: [
      { id: 1, title: "Innovation Challenge Winner 2024", date: "December 15, 2024", status: "Available" },
      { id: 2, title: "Project Expo Participation", date: "March 20, 2025", status: "Available" },
      { id: 3, title: "Hackathon Finalist", date: "February 10, 2025", status: "Processing" }
    ],
    connections: [
      { id: 1, name: "Campus Innovation Network", type: "Student Club", status: "Open for Collaboration" },
      { id: 2, name: "Tech Startup Accelerator", type: "Industry", status: "Accepting Applications" },
      { id: 3, name: "Social Impact Foundation", type: "Non-profit", status: "Seeking Partners" },
      { id: 4, name: "Global Education Network", type: "Academic", status: "Exchange Program Available" }
    ]
  };

  // Handle form submission
  const onSubmit = (data: z.infer<typeof submitPitchSchema>) => {
    console.log("Form submitted:", data);
    // We would typically send this data to a backend API
    // Show success message using toast
    alert("Pitch submitted successfully! We'll review your submission and get back to you soon.");
    form.reset();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">Submit & Resources</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Submit your pitch, download resources, access certificates, and connect with our network
            </p>
          </motion.div>

          <Tabs 
            defaultValue="submit" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger 
                  value="submit" 
                  className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Submit
                </TabsTrigger>
                <TabsTrigger 
                  value="documents" 
                  className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Documents
                </TabsTrigger>
                <TabsTrigger 
                  value="certificates" 
                  className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white"
                >
                  <Certificate className="h-4 w-4 mr-2" />
                  Certificates
                </TabsTrigger>
                <TabsTrigger 
                  value="connect" 
                  className="data-[state=active]:bg-pitchburg-purple data-[state=active]:text-white"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Connect
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Submit Pitch Tab */}
            <TabsContent value="submit" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Pitch</CardTitle>
                  <CardDescription>
                    Share your innovative idea with our community. Complete the form below to submit your pitch for review.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pitch Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter the title of your pitch" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <select 
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                >
                                  <option value="">Select a category</option>
                                  <option value="innovation">Innovation</option>
                                  <option value="social">Social Project</option>
                                  <option value="tech">Tech Project</option>
                                  <option value="environmental">Environmental</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <textarea 
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Describe your pitch in detail (problem, solution, impact)"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="team"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Team Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your team name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter contact email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm font-medium mb-1">Upload Supporting Documents</p>
                        <p className="text-xs text-gray-500 mb-4">Drag and drop files or click to browse (PDF, DOCX, PPT, max 10MB)</p>
                        <Button type="button" variant="outline" size="sm">Select Files</Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => form.reset()}>Reset</Button>
                  <Button 
                    className="bg-pitchburg-purple hover:bg-purple-600"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Submit Pitch
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Official Documents</CardTitle>
                      <CardDescription>
                        Access and download official guidelines, templates, and resources
                      </CardDescription>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search documents" 
                        className="pl-10 w-[200px] md:w-[300px]"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {resources.documents.map((document) => (
                      <motion.div 
                        key={document.id}
                        variants={itemVariants}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <div className="bg-pitchburg-light-purple/30 p-2 rounded-lg mr-4">
                            <FileText className="h-6 w-6 text-pitchburg-purple" />
                          </div>
                          <div>
                            <h3 className="font-medium">{document.title}</h3>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                              <span>{document.type}</span>
                              <span>{document.size}</span>
                              <span>Updated: {document.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Request Additional Documents
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Your Certificates & Awards</CardTitle>
                  <CardDescription>
                    Access and download certificates, awards, and recognition documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.certificates.map((certificate) => (
                      <div 
                        key={certificate.id} 
                        className="border border-gray-100 rounded-lg p-5 relative overflow-hidden card-hover"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-pitchburg-light-purple/30 rounded-bl-[100px] -z-10"></div>
                        <div className="flex items-start gap-4">
                          <div className="bg-pitchburg-light-purple/30 p-2 rounded-lg">
                            <Award className="h-6 w-6 text-pitchburg-purple" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium mb-2">{certificate.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">Issued: {certificate.date}</p>
                            <div className="flex items-center justify-between">
                              <Badge 
                                className={certificate.status === "Available" 
                                  ? "bg-green-500" 
                                  : "bg-amber-500"
                                }
                              >
                                {certificate.status}
                              </Badge>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="flex items-center gap-2" 
                                disabled={certificate.status !== "Available"}
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-[180px]">
                      <p className="text-sm font-medium mb-2">Missing a certificate?</p>
                      <p className="text-xs text-gray-500 text-center mb-4">
                        If you're expecting a certificate that's not listed here, send us a request
                      </p>
                      <Button size="sm">Request Certificate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Connect Tab */}
            <TabsContent value="connect" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Connect & Collaborate</CardTitle>
                  <CardDescription>
                    Connect with our network of partners, schools, and organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-8">
                    <h3 className="font-medium mb-4">Available Connections</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {resources.connections.map((connection) => (
                        <div 
                          key={connection.id} 
                          className="border border-gray-100 rounded-lg p-5 transition-all hover:shadow-md"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-pitchburg-light-purple/30 p-2 rounded-lg">
                              <Users className="h-6 w-6 text-pitchburg-purple" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-medium">{connection.name}</h3>
                              <Badge variant="outline" className="mb-2 mt-1">{connection.type}</Badge>
                              <p className="text-sm text-gray-500 mb-3">{connection.status}</p>
                              <Button size="sm" className="bg-pitchburg-purple hover:bg-purple-600 w-full">
                                Connect
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-medium mb-4">Become a Partner</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Interested in partnering with Pitchburg? Fill out our partnership inquiry form to get started.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Input placeholder="Organization Name" />
                      <Input placeholder="Contact Email" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Link className="h-4 w-4 mr-2 text-pitchburg-purple" />
                      <span className="text-sm text-pitchburg-purple hover:underline">View partnership benefits</span>
                      <Button className="ml-auto bg-pitchburg-purple hover:bg-purple-600">
                        Submit Inquiry
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-pitchburg-purple" />
                    <span className="text-sm">partnerships@pitchburg.edu</span>
                  </div>
                  <Button variant="outline" size="sm" className="sm:ml-auto">
                    Contact Support
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitResources;
