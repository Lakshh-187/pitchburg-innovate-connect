
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OpportunitiesGrid } from "@/components/weizmann/OpportunitiesGrid";
import { PortalFilters } from "@/components/weizmann/PortalFilters";
import { PortalHero } from "@/components/weizmann/PortalHero";

export default function WeizmannPortal() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
          <OpportunitiesGrid 
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
