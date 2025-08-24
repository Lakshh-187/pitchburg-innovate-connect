import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users } from "lucide-react";

interface TrendingNewsItem {
  id: number;
  title: string;
  views: number;
  category: string;
  publishDate: string;
}

interface NewsSidebarProps {
  trendingNews: TrendingNewsItem[];
  popularCategories: { name: string; count: number; color: string }[];
}

export const NewsSidebar = ({ trendingNews, popularCategories }: NewsSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Trending News */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingNews.map((item, index) => (
            <div key={item.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2 mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary" className="text-xs px-1 py-0">
                    {item.category}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularCategories.map((category) => (
              <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Latest Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Latest Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { time: "2 min ago", text: "New research published on AI in education" },
              { time: "15 min ago", text: "School board meeting scheduled for next week" },
              { time: "1 hour ago", text: "Student achievement awards announced" },
              { time: "3 hours ago", text: "New curriculum guidelines released" },
            ].map((update, index) => (
              <div key={index} className="flex gap-3 text-sm">
                <div className="text-muted-foreground whitespace-nowrap">
                  {update.time}
                </div>
                <div className="flex-1">
                  {update.text}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};