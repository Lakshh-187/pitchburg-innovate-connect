
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StoreHero } from "@/components/store/StoreHero";
import { ProductGrid } from "@/components/store/ProductGrid";
import { StoreFilters } from "@/components/store/StoreFilters";
import { SkillExchange } from "@/components/store/SkillExchange";

export default function Store() {
  const [activeTab, setActiveTab] = useState<"products" | "skills">("products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
            <ProductGrid 
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
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
