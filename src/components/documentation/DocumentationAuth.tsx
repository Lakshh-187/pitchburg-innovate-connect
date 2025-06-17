
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Shield } from "lucide-react";

interface DocumentationAuthProps {
  onAuth: (key: string) => void;
}

export function DocumentationAuth({ onAuth }: DocumentationAuthProps) {
  const [authKey, setAuthKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authKey === "Uniford01") {
      onAuth(authKey);
      setError("");
    } else {
      setError("Invalid authentication key. Please try again.");
    }
  };

  return (
    <Card className="max-w-md mx-auto shadow-xl">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl">Secure Access Required</CardTitle>
        <CardDescription>
          Enter your authentication key to access the documentation center
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="password"
              placeholder="Enter authentication key"
              value={authKey}
              onChange={(e) => setAuthKey(e.target.value)}
              className="pl-10"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Access Documentation Center
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
