import { useState } from "react";
import { Search, Filter, MapPin, Clock, Users, ExternalLink, Trophy, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  category: string;
  location: string;
  deadline: string;
  prize: string;
  participants: string;
  description: string;
  linkedinUrl: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isHot: boolean;
}

const generateOpportunities = (): Opportunity[] => {
  const categories = ['Hackathon', 'Competition', 'Scholarship', 'Research', 'Internship', 'Conference', 'Workshop', 'Challenge'];
  const locations = ['Global', 'USA', 'Europe', 'Asia', 'Online', 'India', 'UK', 'Canada', 'Australia', 'Singapore'];
  const organizations = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Stanford University', 'MIT', 'Harvard', 'Oxford', 'Cambridge'];
  
  return Array.from({ length: 87 }, (_, i) => ({
    id: `opp-${i + 1}`,
    title: `${categories[i % categories.length]} ${Math.floor(Math.random() * 1000) + 2024}`,
    organization: organizations[i % organizations.length],
    category: categories[i % categories.length],
    location: locations[i % locations.length],
    deadline: new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    prize: `$${(Math.random() * 50000 + 5000).toLocaleString()}`,
    participants: `${Math.floor(Math.random() * 500) + 50}+ teams`,
    description: `Innovative ${categories[i % categories.length].toLowerCase()} focused on cutting-edge technology, AI, and sustainable solutions. Join global talent and showcase your skills.`,
    linkedinUrl: `https://linkedin.com/posts/opportunity-${i + 1}`,
    tags: ['AI', 'Tech', 'Innovation', 'Coding', 'Design'].slice(0, Math.floor(Math.random() * 3) + 2),
    difficulty: ['Beginner', 'Intermediate', 'Advanced'][i % 3] as any,
    isHot: Math.random() > 0.8
  }));
};

export default function Opportunities() {
  const [opportunities] = useState<Opportunity[]>(generateOpportunities());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || opp.category.toLowerCase() === selectedCategory;
    const matchesLocation = selectedLocation === "all" || opp.location.toLowerCase() === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const totalPages = Math.ceil(filteredOpportunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOpportunities = filteredOpportunities.slice(startIndex, startIndex + itemsPerPage);

  const categories = ["all", "hackathon", "competition", "scholarship", "research", "internship", "conference", "workshop", "challenge"];
  const locations = ["all", "global", "usa", "europe", "asia", "online", "india", "uk", "canada", "australia", "singapore"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold font-display mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Global Opportunities Hub
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Discover 100+ worldwide competitions, challenges, and opportunities. Connect with global talent, form teams through LinkedIn, and shape your future.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>87 Active Opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>50K+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(loc => (
                    <SelectItem key={loc} value={loc}>
                      {loc === "all" ? "All Locations" : loc.charAt(0).toUpperCase() + loc.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>{filteredOpportunities.length} results</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="relative">
                {opportunity.isHot && (
                  <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-bold">
                    🔥 HOT
                  </div>
                )}
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {opportunity.category}
                  </Badge>
                  <Badge variant={opportunity.difficulty === 'Beginner' ? 'default' : opportunity.difficulty === 'Intermediate' ? 'secondary' : 'destructive'} className="text-xs">
                    {opportunity.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {opportunity.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{opportunity.organization}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {opportunity.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Deadline: {opportunity.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="h-4 w-4" />
                    <span>Prize: {opportunity.prize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{opportunity.participants}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button asChild className="flex-1" size="sm">
                    <a href={opportunity.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Join Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => Math.abs(page - currentPage) <= 2)
              .map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-t">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold font-display mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, creators, and problem-solvers from around the world. Find your next opportunity and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Calendar className="h-5 w-5 mr-2" />
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Users className="h-5 w-5 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}