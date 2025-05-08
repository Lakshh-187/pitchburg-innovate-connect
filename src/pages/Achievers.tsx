
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Achievers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-display mb-4">Achievers & Magazine</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the success stories and accomplishments of our students
            </p>
          </div>
          
          {/* Coming Soon placeholder */}
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-pitchburg-purple mb-4">Coming Soon</h2>
            <p className="text-gray-600 max-w-md text-center">
              Our achievers showcase and magazine section is coming soon. Check back to discover inspiring success stories!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Achievers;
