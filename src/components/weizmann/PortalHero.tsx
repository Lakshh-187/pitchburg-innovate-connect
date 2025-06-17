
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Trophy, Search } from "lucide-react";

export function PortalHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-600 text-white text-sm px-3 py-1">
            300+ Global Opportunities
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Weizmann Global Opportunities Portal
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover worldwide competitions, scholarships, platforms, and opportunities 
            designed to elevate your academic and professional journey to international standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-blue-100">Opportunities from 50+ countries</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Competitions</h3>
              <p className="text-sm text-blue-100">International contests & challenges</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 text-indigo-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Scholarships</h3>
              <p className="text-sm text-blue-100">Funding for academic excellence</p>
            </div>
          </div>

          <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full text-lg">
            <Search className="w-5 h-5 mr-2" />
            Explore Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
