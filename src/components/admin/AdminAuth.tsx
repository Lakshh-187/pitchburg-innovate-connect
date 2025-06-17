
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";

interface AdminAuthProps {
  onAuth: (key: string) => void;
}

export function AdminAuth({ onAuth }: AdminAuthProps) {
  const [authKey, setAuthKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authKey === "Uniford01") {
      onAuth(authKey);
      setError("");
    } else {
      setError("Invalid security key. Access denied.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <Card className="shadow-xl border-0">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-red-600">Admin Access</CardTitle>
          <CardDescription>
            High-security area. Enter your security key to access the admin panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="password"
                placeholder="Enter security key"
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                className="pl-10"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Access Admin Panel
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
