
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Calendar, MapPin, DollarSign, Users, ExternalLink } from "lucide-react";

// Mock data for opportunities
const generateOpportunities = () => {
  const categories = ["Competition", "Scholarship", "Research", "Internship", "Conference", "Workshop", "Hackathon"];
  const locations = ["USA", "UK", "Germany", "Singapore", "Canada", "Australia", "Japan", "Netherlands"];
  const organizations = ["MIT", "Stanford", "Oxford", "Cambridge", "Harvard", "ETH Zurich", "NUS", "University of Tokyo"];
  
  return Array.from({ length: 300 }, (_, i) => ({
    id: i + 1,
    title: `Global ${categories[i % categories.length]} Program ${i + 1}`,
    organization: organizations[i % organizations.length],
    category: categories[i % categories.length],
    location: locations[i % locations.length],
    deadline: new Date(Date.now() + Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    prize: `$${(Math.random() * 50000 + 5000).toFixed(0)}`,
    participants: Math.floor(Math.random() * 1000 + 100),
    description: `An exceptional opportunity to participate in a world-class ${categories[i % categories.length].toLowerCase()} program.`
  }));
};

const opportunities = generateOpportunities();

interface OpportunitiesGridProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  selectedCategory: string;
  searchQuery: string;
}

export function OpportunitiesGrid({ 
  currentPage, 
  onPageChange, 
  selectedCategory, 
  searchQuery 
}: OpportunitiesGridProps) {
  const itemsPerPage = 30;
  const totalPages = 10;

  // Filter opportunities based on category and search
  const filteredOpportunities = opportunities.filter(opp => {
    const matchesCategory = selectedCategory === "all" || opp.category.toLowerCase() === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOpportunities = filteredOpportunities.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentOpportunities.map((opportunity) => (
          <Card key={opportunity.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                >
                  {opportunity.category}
                </Badge>
                <span className="text-xs text-gray-500">#{opportunity.id}</span>
              </div>
              <CardTitle className="text-lg leading-tight">{opportunity.title}</CardTitle>
              <CardDescription className="text-sm">{opportunity.organization}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Deadline: {opportunity.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{opportunity.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span>Prize: {opportunity.prize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{opportunity.participants} participants</span>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-12">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {[...Array(Math.min(7, totalPages))].map((_, i) => {
            const pageNum = i + 1;
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === pageNum}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(pageNum);
                  }}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
