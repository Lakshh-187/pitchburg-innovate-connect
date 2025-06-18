
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function Manage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (key: string) => {
    if (key === "Uniford01") {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Content Management</h1>
            <p className="text-xl text-gray-600">Daily content management for competitions and updates</p>
          </div>
          
          {!isAuthenticated ? (
            <AdminAuth onAuth={handleAuth} />
          ) : (
            <AdminDashboard />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
