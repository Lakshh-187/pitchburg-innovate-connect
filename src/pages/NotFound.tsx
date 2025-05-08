
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
          instituteName="Institute Pitchburg"
          tagline="Page Not Found"
          description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
          primaryActionText="Return to Home"
          primaryActionHref="/"
        />
        
        <div className="text-center max-w-lg mx-auto px-6 py-12">
          <div className="text-8xl font-bold text-pitchburg-purple mb-6">404</div>
          <Button asChild className="bg-pitchburg-purple hover:bg-purple-600">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
