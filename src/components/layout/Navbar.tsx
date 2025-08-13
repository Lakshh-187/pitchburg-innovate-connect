
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Opportunities", path: "/opportunities" },
  { title: "Pitch Gallery", path: "/gallery" },
  { title: "Updates", path: "/updates" },
  { title: "Achievers", path: "/achievers" },
  { title: "About", path: "/about" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-pitchburg-purple font-display">
                Pitch<span className="text-pitchburg-dark-purple">burg</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-pitchburg-purple px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button variant="outline" size="icon" className="ml-2">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="ml-4 bg-pitchburg-purple hover:bg-purple-600">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pitchburg-purple focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pitchburg-purple"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3">
              <Button className="w-full bg-pitchburg-purple hover:bg-purple-600">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
