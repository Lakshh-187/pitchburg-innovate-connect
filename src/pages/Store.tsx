
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoreHero } from "@/components/store/StoreHero";
import { StoreFilters } from "@/components/store/StoreFilters";
import { SkillExchange } from "@/components/store/SkillExchange";
import { useDataSync } from "@/hooks/useDataSync";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Store() {
  const [activeTab, setActiveTab] = useState<"products" | "skills">("products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: storeData } = useDataSync("store");

  // Filter data based on search and category
  const filteredData = storeData.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <StoreHero activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <StoreFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeTab={activeTab}
          />
          
          {activeTab === "products" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((product: any) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                      {product.imageUrl && (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>By {product.creator}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline">{product.category}</Badge>
                      <span className="font-bold text-lg text-pitchburg-purple">{product.price}</span>
                    </div>
                    <Button className="w-full">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <SkillExchange 
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
