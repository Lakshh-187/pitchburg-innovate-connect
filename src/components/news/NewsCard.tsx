import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  size?: "large" | "medium" | "small";
}

export const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  publishDate, 
  readTime, 
  views,
  size = "medium" 
}: NewsCardProps) => {
  const sizeClasses = {
    large: "col-span-2 md:col-span-3",
    medium: "col-span-1 md:col-span-2", 
    small: "col-span-1"
  };

  const titleClasses = {
    large: "text-2xl md:text-3xl font-bold",
    medium: "text-lg md:text-xl font-semibold",
    small: "text-base font-semibold"
  };

  return (
    <Card className={`card-hover overflow-hidden ${sizeClasses[size]}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 md:h-56 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className={`${titleClasses[size]} mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{publishDate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span>{readTime}</span>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};