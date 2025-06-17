
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export default function AdminPanel() {
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
