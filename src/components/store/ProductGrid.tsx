
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star, User } from "lucide-react";

// Mock data for products
const products = [
  {
    id: 1,
    title: "Digital Art Collection",
    creator: "Sarah Johnson",
    price: "$25",
    category: "art",
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
    description: "Beautiful digital artwork collection with modern themes"
  },
  {
    id: 2,
    title: "Smart IoT Device",
    creator: "Alex Chen",
    price: "$120",
    category: "tech",
    rating: 4.9,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
    description: "Innovative IoT device for home automation"
  },
  {
    id: 3,
    title: "Handmade Pottery Set",
    creator: "Maya Patel",
    price: "$45",
    category: "crafts",
    rating: 4.7,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=300&h=200&fit=crop",
    description: "Artisan ceramic pottery set with unique designs"
  },
  {
    id: 4,
    title: "Mobile App Template",
    creator: "David Kim",
    price: "$35",
    category: "digital",
    rating: 4.6,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
    description: "Modern React Native app template for startups"
  }
];

interface ProductGridProps {
  selectedCategory: string;
  searchQuery: string;
}

export function ProductGrid({ selectedCategory, searchQuery }: ProductGridProps) {
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow border-0 shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <Button size="icon" variant="outline" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="secondary" className="text-xs capitalize">
                {product.category}
              </Badge>
              <span className="text-lg font-bold text-purple-600">{product.price}</span>
            </div>
            <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
            <CardDescription className="text-sm flex items-center gap-1">
              <User className="w-3 h-3" />
              {product.creator}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            <p className="text-sm text-gray-600">{product.description}</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
