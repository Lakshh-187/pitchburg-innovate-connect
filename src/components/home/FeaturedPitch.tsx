
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function FeaturedPitch() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Featured Pitch of the Month</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Highlighting extraordinary innovation and creativity from our student community
          </p>
        </div>
        
        <Card className="border-none shadow-lg overflow-hidden max-w-4xl mx-auto card-hover">
          <div className="grid md:grid-cols-2">
            <div className="bg-pitchburg-light-purple p-6 md:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center mb-4">
                  <Badge className="bg-pitchburg-purple mr-2">INNOVATION</Badge>
                  <span className="text-sm text-gray-500">May 2025</span>
                </div>
                <CardTitle className="text-2xl mb-2">EcoSense: Smart Water Conservation System</CardTitle>
                <CardDescription className="text-base">
                  A breakthrough IoT solution for reducing campus water usage by 40%
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 py-4">
                <p className="mb-4">
                  Created by the Engineering Department's senior team, EcoSense uses AI and IoT sensors 
                  to detect water waste patterns across campus facilities. The system has already been
                  implemented in two buildings, showing remarkable results.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Team Lead" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Team Lead</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-0 pt-2">
                <Button className="bg-pitchburg-purple hover:bg-purple-600">
                  View Full Project
                </Button>
              </CardFooter>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9fa341d5c8f1" 
                alt="EcoSense Project" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
