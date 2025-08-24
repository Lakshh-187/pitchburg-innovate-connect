
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsSection } from "@/components/news/NewsSection";
import { NewsSidebar } from "@/components/news/NewsSidebar";
import { 
  featuredNews, 
  breakingNews, 
  latestNews, 
  researchNews, 
  trendingNews, 
  popularCategories 
} from "@/data/newsData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <NewsHero
            title={featuredNews.title}
            excerpt={featuredNews.excerpt}
            image={featuredNews.image}
            category={featuredNews.category}
            author={featuredNews.author}
            publishDate={featuredNews.publishDate}
            readTime={featuredNews.readTime}
            views={featuredNews.views}
          />
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Breaking News */}
              <NewsSection
                title="Breaking News"
                news={breakingNews}
                itemsPerPage={4}
                gridCols={2}
              />

              {/* Latest News */}
              <NewsSection
                title="Latest Education News"
                news={latestNews}
                itemsPerPage={6}
                gridCols={3}
              />

              {/* Research & Studies */}
              <NewsSection
                title="Research & Studies"
                news={researchNews}
                itemsPerPage={3}
                gridCols={3}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <NewsSidebar
                  trendingNews={trendingNews}
                  popularCategories={popularCategories}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
