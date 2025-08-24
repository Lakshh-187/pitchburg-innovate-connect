import { useState } from "react";
import { NewsCard } from "./NewsCard";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
}

interface NewsSectionProps {
  title: string;
  news: NewsItem[];
  itemsPerPage?: number;
  gridCols?: number;
}

export const NewsSection = ({ 
  title, 
  news, 
  itemsPerPage = 8,
  gridCols = 4 
}: NewsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);
  
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className={`grid gap-6 mb-8 ${gridClass[gridCols as keyof typeof gridClass] || gridClass[4]}`}>
          {currentNews.map((item, index) => (
            <NewsCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              category={item.category}
              author={item.author}
              publishDate={item.publishDate}
              readTime={item.readTime}
              views={item.views}
              size={index === 0 ? "large" : index < 3 ? "medium" : "small"}
            />
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination className="justify-center">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};