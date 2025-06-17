
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const productCategories = [
  { value: "all", label: "All Products" },
  { value: "art", label: "Art & Design" },
  { value: "tech", label: "Technology" },
  { value: "crafts", label: "Handmade Crafts" },
  { value: "innovation", label: "Innovations" },
  { value: "digital", label: "Digital Products" }
];

const skillCategories = [
  { value: "all", label: "All Skills" },
  { value: "programming", label: "Programming" },
  { value: "design", label: "Design & Art" },
  { value: "music", label: "Music & Audio" },
  { value: "writing", label: "Writing & Content" },
  { value: "languages", label: "Languages" },
  { value: "business", label: "Business & Marketing" }
];

interface StoreFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTab: "products" | "skills";
}

export function StoreFilters({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange,
  activeTab
}: StoreFiltersProps) {
  const categories = activeTab === "products" ? productCategories : skillCategories;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
