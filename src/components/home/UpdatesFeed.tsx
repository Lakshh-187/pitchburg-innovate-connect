
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UpdateItem {
  id: number;
  title: string;
  description: string;
  type: "event" | "announcement" | "opportunity";
  date: string;
}

// Mock data for updates
const updates: UpdateItem[] = [
  {
    id: 1,
    title: "Summer Pitch Competition Registration Now Open",
    description: "Register before June 1st to participate in our annual Summer Pitch Competition with $10,000 in prizes.",
    type: "opportunity",
    date: "May 7, 2025"
  },
  {
    id: 2,
    title: "Innovation Workshop Series",
    description: "Join us for a three-part workshop series on developing your pitch ideas with industry mentors.",
    type: "event",
    date: "May 15-17, 2025"
  },
  {
    id: 3,
    title: "New Pitch Submission Guidelines",
    description: "Important updates to our pitch submission process. Please review before your next submission.",
    type: "announcement",
    date: "May 10, 2025"
  },
  {
    id: 4,
    title: "Industry Partner Visit: TechVentures Inc.",
    description: "Representatives from TechVentures will be reviewing student pitches for potential funding.",
    type: "event",
    date: "May 20, 2025"
  },
  {
    id: 5,
    title: "Social Impact Grant Opportunity",
    description: "Apply for our new $5,000 grant specifically for social impact projects.",
    type: "opportunity",
    date: "May 25, 2025"
  }
];

export function UpdatesFeed() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Latest Updates</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Stay informed about upcoming events, opportunities, and announcements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update) => (
            <Card key={update.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={
                    update.type === "event" ? "bg-blue-500" :
                    update.type === "announcement" ? "bg-amber-500" : "bg-green-500"
                  }>
                    {update.type.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <CardTitle className="text-lg">{update.title}</CardTitle>
                <CardDescription>{update.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="link" className="text-pitchburg-purple p-0">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-pitchburg-purple hover:bg-purple-600">
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  );
}
