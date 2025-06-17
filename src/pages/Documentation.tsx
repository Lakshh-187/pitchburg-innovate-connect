
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DocumentationAuth } from "@/components/documentation/DocumentationAuth";
import { DocumentGenerator } from "@/components/documentation/DocumentGenerator";

export default function Documentation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (key: string) => {
    if (key === "Uniford01") {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation Center</h1>
              <p className="text-xl text-gray-600">Generate official documents for participating students and institutes</p>
            </div>

            {!isAuthenticated ? (
              <DocumentationAuth onAuth={handleAuth} />
            ) : (
              <DocumentGenerator />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
