
import { useState } from "react";
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
  FileText, 
  Download, 
  Award, 
  Mail, 
  Users, 
  Upload, 
  PenLine,
  MessageSquare,
  Building,
  Handshake
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const SubmitResources = () => {
  const [activeTab, setActiveTab] = useState("submit-pitch");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          instituteName="Pitchburg Innovation Hub"
          tagline="Submit, Connect, and Grow with Us"
          description="Access resources, submit your pitch, and connect with our innovation ecosystem all in one place."
          pageTitle="Submit & Resources"
        />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Tabs 
              defaultValue="submit-pitch" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
                <TabsTrigger value="submit-pitch">Submit Your Pitch</TabsTrigger>
                <TabsTrigger value="resources">Resources & Documents</TabsTrigger>
                <TabsTrigger value="connect">Connect & Partner</TabsTrigger>
              </TabsList>
              
              <TabsContent value="submit-pitch" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Your Pitch</CardTitle>
                    <CardDescription>
                      Share your innovative idea with us for review and potential showcase
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4 md:col-span-2">
                        <div>
                          <Label htmlFor="pitch-title">Pitch Title</Label>
                          <Input id="pitch-title" placeholder="Enter the title of your pitch" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Category</Label>
                            <select 
                              id="category" 
                              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
                            >
                              <option value="" disabled selected>Select a category</option>
                              <option value="innovation">Innovation</option>
                              <option value="social">Social Impact</option>
                              <option value="technology">Technology</option>
                              <option value="environment">Environmental</option>
                              <option value="business">Business</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="team-members">Team Size</Label>
                            <select 
                              id="team-members" 
                              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
                            >
                              <option value="" disabled selected>Number of team members</option>
                              <option value="1">Individual (Just me)</option>
                              <option value="2-3">Small team (2-3)</option>
                              <option value="4-6">Medium team (4-6)</option>
                              <option value="7+">Large team (7+)</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="pitch-description">Pitch Description</Label>
                          <Textarea 
                            id="pitch-description" 
                            placeholder="Describe your pitch, its value proposition, and target audience"
                            rows={6}
                          />
                        </div>
                        <div>
                          <Label htmlFor="pitch-file">Upload Pitch Materials</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-pitchburg-purple transition-colors">
                            <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-500 mb-1">
                              Drag and drop your files here, or click to browse
                            </p>
                            <p className="text-xs text-gray-400">
                              Supports PDF, PPT, images, and videos up to 50MB
                            </p>
                            <Input 
                              id="pitch-file" 
                              type="file" 
                              className="hidden" 
                              multiple 
                            />
                            <Button 
                              variant="outline" 
                              className="mt-4"
                              onClick={() => document.getElementById('pitch-file')?.click()}
                            >
                              Browse Files
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button variant="outline" className="mr-2">Save Draft</Button>
                    <Button className="bg-pitchburg-purple hover:bg-purple-600">Submit Pitch</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Resources & Documents</CardTitle>
                    <CardDescription>
                      Access official documents, certificates, and helpful resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card className="border shadow-sm">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-pitchburg-purple" />
                            Official Documents
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                            <span className="text-sm">Pitch Guidelines</span>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4 mr-1" /> Download
                            </Button>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                            <span className="text-sm">Registration Form</span>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4 mr-1" /> Download
                            </Button>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                            <span className="text-sm">Consent Form</span>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4 mr-1" /> Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border shadow-sm">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-pitchburg-purple" />
                            Certificates & Awards
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-md">
                              <h4 className="font-medium mb-2">Access Your Certificates</h4>
                              <p className="text-sm text-gray-500 mb-3">
                                Login to download your participation and achievement certificates
                              </p>
                              <Button className="w-full bg-pitchburg-purple hover:bg-purple-600">
                                Sign In to Access
                              </Button>
                            </div>
                            <div className="p-4 border border-dashed rounded-md">
                              <h4 className="font-medium mb-1">Recently Added</h4>
                              <p className="text-sm text-gray-500">
                                Innovation Summit 2025 Participation Certificates now available
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border shadow-sm">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2">
                            <PenLine className="h-5 w-5 text-pitchburg-purple" />
                            Submit Query
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="query-subject">Subject</Label>
                              <Input id="query-subject" placeholder="Subject of your query" />
                            </div>
                            <div>
                              <Label htmlFor="query-message">Message</Label>
                              <Textarea id="query-message" placeholder="Your question or request" rows={3} />
                            </div>
                            <Button className="w-full bg-pitchburg-purple hover:bg-purple-600">
                              <MessageSquare className="h-4 w-4 mr-2" /> Submit Query
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="connect" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Connect & Partner</CardTitle>
                    <CardDescription>
                      Explore opportunities for collaboration, sponsorship and partnership
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="space-y-6">
                          <div className="p-6 bg-gradient-to-br from-pitchburg-purple/10 to-pitchburg-light-purple/30 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">Join Our Network</h3>
                            <p className="text-gray-700 mb-4">
                              We welcome collaborations with schools, colleges, organizations, and industry partners 
                              who share our vision of fostering innovation among young minds.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="flex gap-3 p-4 bg-white/80 rounded-md">
                                <Building className="h-10 w-10 text-pitchburg-purple flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium mb-1">Educational Institutions</h4>
                                  <p className="text-sm text-gray-600">Partner with us to bring Pitchburg to your campus</p>
                                </div>
                              </div>
                              <div className="flex gap-3 p-4 bg-white/80 rounded-md">
                                <Handshake className="h-10 w-10 text-pitchburg-purple flex-shrink-0" />
                                <div>
                                  <h4 className="font-medium mb-1">Corporate Partners</h4>
                                  <p className="text-sm text-gray-600">Sponsor events or mentor young innovators</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Partnership Inquiry</h3>
                              <div>
                                <Label htmlFor="org-name">Organization Name</Label>
                                <Input id="org-name" placeholder="Your organization name" />
                              </div>
                              <div>
                                <Label htmlFor="org-type">Organization Type</Label>
                                <select 
                                  id="org-type" 
                                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
                                >
                                  <option value="" disabled selected>Select organization type</option>
                                  <option value="school">School</option>
                                  <option value="college">College/University</option>
                                  <option value="company">Corporate/Company</option>
                                  <option value="ngo">Non-profit/NGO</option>
                                  <option value="government">Government Agency</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Contact Information</h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="contact-name">Contact Name</Label>
                                  <Input id="contact-name" placeholder="Your name" />
                                </div>
                                <div>
                                  <Label htmlFor="contact-role">Your Role</Label>
                                  <Input id="contact-role" placeholder="Your position" />
                                </div>
                              </div>
                              <div>
                                <Label htmlFor="contact-email">Email</Label>
                                <Input id="contact-email" type="email" placeholder="Your email" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="partnership-interest">Partnership Interest</Label>
                              <Textarea 
                                id="partnership-interest"
                                placeholder="Tell us about your interest in partnering with Pitchburg"
                                rows={4}
                              />
                            </div>
                            <div className="flex justify-end">
                              <Button className="bg-pitchburg-purple hover:bg-purple-600">
                                Submit Partnership Inquiry
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Connect With Us</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-3 flex items-center gap-2">
                                <Mail className="h-4 w-4 text-pitchburg-purple" />
                                Email Us
                              </h4>
                              <p className="text-sm">
                                <a 
                                  href="mailto:partnerships@pitchburg.edu" 
                                  className="text-pitchburg-purple hover:underline"
                                >
                                  partnerships@pitchburg.edu
                                </a>
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-3 flex items-center gap-2">
                                <Users className="h-4 w-4 text-pitchburg-purple" />
                                Meet Our Team
                              </h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Schedule a virtual or in-person meeting with our partnerships team
                              </p>
                              <Button variant="outline" className="w-full">
                                Book a Meeting
                              </Button>
                            </div>
                            
                            <div className="p-4 bg-gray-50 rounded-md">
                              <h4 className="font-medium mb-2">Current Partners</h4>
                              <p className="text-sm text-gray-600 mb-4">
                                Join these organizations that are already part of our network
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <div className="bg-gray-200 h-8 w-16 animate-pulse rounded-md"></div>
                                <div className="bg-gray-200 h-8 w-24 animate-pulse rounded-md"></div>
                                <div className="bg-gray-200 h-8 w-20 animate-pulse rounded-md"></div>
                                <div className="bg-gray-200 h-8 w-16 animate-pulse rounded-md"></div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitResources;
