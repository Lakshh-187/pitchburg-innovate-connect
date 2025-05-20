
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InstituteHero } from "@/components/layout/InstituteHero";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <InstituteHero 
          category="Error 404"
          title="Page Not Found" 
          subtitle="We've Lost This Page"
          description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          primaryActionText="Return to Home"
          secondaryActionText={null}
          primaryActionHref="/"
          backgroundImage="public/lovable-uploads/bbfd50d9-c69d-40de-90ba-c2ca76c49314.png"
          heroImage="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg"
        />
        
        <div className="text-center max-w-lg mx-auto px-6 py-12">
          <div className="text-8xl font-bold text-purple-500 mb-6">404</div>
          <Button asChild className="bg-purple-500 hover:bg-purple-600">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
