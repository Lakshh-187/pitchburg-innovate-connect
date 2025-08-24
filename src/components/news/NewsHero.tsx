import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User } from "lucide-react";

interface NewsHeroProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
}

export const NewsHero = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  publishDate, 
  readTime, 
  views 
}: NewsHeroProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
        <Badge className="mb-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          <span>{readTime}</span>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};