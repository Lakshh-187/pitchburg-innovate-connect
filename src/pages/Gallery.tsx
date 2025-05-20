
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InstituteHero } from "@/components/layout/InstituteHero";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  LayoutGrid, 
  List, 
  Search, 
  FileVideo, 
  Image, 
  FileAudio,
  Info 
} from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const categories = [
    "All", 
    "Innovation", 
    "Technology", 
    "Social Impact", 
    "Environment", 
    "Business"
  ];
  
  // This would be replaced with real data in the full implementation
  const placeholderItems = [
    { type: "image", category: "Innovation" },
    { type: "video", category: "Technology" },
    { type: "image", category: "Social Impact" },
    { type: "video", category: "Innovation" },
    { type: "image", category: "Environment" },
    { type: "audio", category: "Business" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Digital Showcase"
          title="Innovation Gallery" 
          subtitle="Showcasing Excellence"
          description="Explore our collection of student pitch videos, presentations, and images from across campus initiatives."
          primaryActionText="Submit Your Pitch"
          secondaryActionText="Filter Gallery"
          primaryActionHref="/submit-resources"
          secondaryActionHref="#gallery-filters"
          backgroundImage="public/lovable-uploads/1565516b-b8da-43dc-aa93-05f53b659f74.png"
          heroImage="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg"
        />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold font-display mb-4">Pitch Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of student pitch videos, presentations, and images
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Featured Pitches</CardTitle>
                <CardDescription>
                  Highlighted projects from our students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full max-w-5xl mx-auto">
                  <CarouselContent>
                    {[1, 2, 3, 4].map((item) => (
                      <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="p-0">
                              <AspectRatio ratio={16 / 9}>
                                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                                  <FileVideo className="h-8 w-8 text-gray-400" />
                                </div>
                              </AspectRatio>
                              <div className="p-4">
                                <h3 className="font-medium mb-1">Featured Pitch #{item}</h3>
                                <p className="text-sm text-gray-500 mb-2">
                                  Coming soon
                                </p>
                                <Badge>Innovation</Badge>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button 
                    key={category} 
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search gallery" 
                    className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pitchburg-purple focus:border-transparent"
                  />
                </div>
                <div className="flex border rounded-md overflow-hidden">
                  <button 
                    className={`p-2 ${viewMode === 'grid' ? 'bg-pitchburg-purple text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </button>
                  <button 
                    className={`p-2 ${viewMode === 'list' ? 'bg-pitchburg-purple text-white' : 'bg-white text-gray-600'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'space-y-4'}>
              {placeholderItems.map((item, index) => (
                viewMode === 'grid' ? (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow card-hover">
                        <AspectRatio ratio={16 / 9}>
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            {item.type === 'image' && <Image className="h-12 w-12 text-gray-300" />}
                            {item.type === 'video' && <FileVideo className="h-12 w-12 text-gray-300" />}
                            {item.type === 'audio' && <FileAudio className="h-12 w-12 text-gray-300" />}
                          </div>
                        </AspectRatio>
                        <CardContent className="p-4">
                          <Badge className="mb-2" variant="outline">{item.category}</Badge>
                          <h3 className="font-medium mb-1">Pitch Content #{index + 1}</h3>
                          <p className="text-sm text-gray-500">Coming soon</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Pitch Content #{index + 1}</DialogTitle>
                        <DialogDescription>
                          This content will be available soon.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="bg-gray-100 aspect-video rounded-md flex items-center justify-center">
                        {item.type === 'image' && <Image className="h-16 w-16 text-gray-300" />}
                        {item.type === 'video' && <FileVideo className="h-16 w-16 text-gray-300" />}
                        {item.type === 'audio' && <FileAudio className="h-16 w-16 text-gray-300" />}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Badge>{item.category}</Badge>
                        <Button variant="outline" size="sm">
                          <Info className="h-4 w-4 mr-2" />
                          More info coming soon
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="min-w-[100px] h-[60px] bg-gray-100 rounded flex items-center justify-center">
                            {item.type === 'image' && <Image className="h-8 w-8 text-gray-300" />}
                            {item.type === 'video' && <FileVideo className="h-8 w-8 text-gray-300" />}
                            {item.type === 'audio' && <FileAudio className="h-8 w-8 text-gray-300" />}
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">Pitch Content #{index + 1}</h3>
                              <Badge variant="outline">{item.category}</Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Coming soon</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Pitch Content #{index + 1}</DialogTitle>
                        <DialogDescription>
                          This content will be available soon.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="bg-gray-100 aspect-video rounded-md flex items-center justify-center">
                        {item.type === 'image' && <Image className="h-16 w-16 text-gray-300" />}
                        {item.type === 'video' && <FileVideo className="h-16 w-16 text-gray-300" />}
                        {item.type === 'audio' && <FileAudio className="h-16 w-16 text-gray-300" />}
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <Badge>{item.category}</Badge>
                        <Button variant="outline" size="sm">
                          <Info className="h-4 w-4 mr-2" />
                          More info coming soon
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                )
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center bg-gradient-to-br from-pitchburg-purple/10 to-pitchburg-light-purple/30 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Contribute to Our Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Are you a student with an innovative pitch? We invite you to share your project 
              for a chance to be featured in our gallery when it launches.
            </p>
            <Button>
              Register Interest
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
