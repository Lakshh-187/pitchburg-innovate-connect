
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Updates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">Updates</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about events, announcements, and opportunities
            </p>
          </div>
          
          {/* Coming Soon placeholder */}
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Coming Soon</h2>
            <p className="text-gray-600 max-w-md text-center">
              Our comprehensive updates page is under development. Check back soon for the latest news and announcements!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
