
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Users, Handshake, Palette } from "lucide-react";

interface StoreHeroProps {
  activeTab: "products" | "skills";
  onTabChange: (tab: "products" | "skills") => void;
}

export function StoreHero({ activeTab, onTabChange }: StoreHeroProps) {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-600 text-white text-sm px-3 py-1">
            Student Marketplace
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Uniford Student Store
          </h1>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Discover, buy, and sell amazing creations from talented students worldwide. 
            Exchange skills, collaborate, and build together in our vibrant community marketplace.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => onTabChange("products")}
              variant={activeTab === "products" ? "default" : "outline"}
              className={`px-6 py-3 rounded-full ${
                activeTab === "products" 
                  ? "bg-white text-purple-900 hover:bg-purple-50" 
                  : "border-white text-white hover:bg-white hover:text-purple-900"
              }`}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Student Products
            </Button>
            <Button
              onClick={() => onTabChange("skills")}
              variant={activeTab === "skills" ? "default" : "outline"}
              className={`px-6 py-3 rounded-full ${
                activeTab === "skills" 
                  ? "bg-white text-purple-900 hover:bg-purple-50" 
                  : "border-white text-white hover:bg-white hover:text-purple-900"
              }`}
            >
              <Handshake className="w-5 h-5 mr-2" />
              Skill Exchange
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Palette className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Creative Works</h3>
              <p className="text-sm text-purple-100">Art, designs, and innovations</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 text-pink-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Skill Learning</h3>
              <p className="text-sm text-purple-100">Learn from peer experts</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Handshake className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Barter System</h3>
              <p className="text-sm text-purple-100">Exchange skills & collaborate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
