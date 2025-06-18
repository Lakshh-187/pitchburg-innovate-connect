
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortalFilters } from "@/components/weizmann/PortalFilters";
import { PortalHero } from "@/components/weizmann/PortalHero";
import { useDataSync } from "@/hooks/useDataSync";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy } from "lucide-react";

export default function WeizmannPortal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: weizmannData } = useDataSync("weizmann");
  
  // Filter data based on search and category
  const filteredData = weizmannData.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PortalHero />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <PortalFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((opportunity: any) => (
              <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={
                      opportunity.category === "Competition" ? "bg-blue-100 text-blue-800" :
                      opportunity.category === "Scholarship" ? "bg-green-100 text-green-800" :
                      opportunity.category === "Internship" ? "bg-purple-100 text-purple-800" :
                      "bg-orange-100 text-orange-800"
                    }>
                      {opportunity.category}
                    </Badge>
                    <Badge variant={opportunity.status === "Open" ? "default" : "secondary"}>
                      {opportunity.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{opportunity.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {opportunity.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Deadline: {opportunity.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-gray-400" />
                      <span>{opportunity.prize}</span>
                    </div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
