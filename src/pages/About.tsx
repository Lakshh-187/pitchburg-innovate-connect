
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">About Pitchburg</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our mission, vision, and how we support student innovation
            </p>
          </div>
          
          {/* Coming Soon placeholder */}
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Coming Soon</h2>
            <p className="text-gray-600 max-w-md text-center">
              We're building a comprehensive about page with our mission, team, and history. Check back soon!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
