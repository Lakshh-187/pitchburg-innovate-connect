
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-lg px-6">
          <div className="text-8xl font-bold text-pitchburg-purple mb-6">404</div>
          <h1 className="text-3xl font-bold font-display mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
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
