
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Globe, 
  Image, 
  Trophy, 
  Home, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  Users
} from "lucide-react";

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("store");

  const sections = [
    { id: "store", name: "Store Management", icon: Store, description: "Manage student products and skills" },
    { id: "portal", name: "Weizmann Portal", icon: Globe, description: "Add/edit global opportunities" },
    { id: "gallery", name: "Pitch Gallery", icon: Image, description: "Manage pitch submissions" },
    { id: "achievers", name: "Achievers", icon: Trophy, description: "Update achiever profiles" },
    { id: "home", name: "Home Page", icon: Home, description: "Edit homepage content" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
        <p className="text-xl text-gray-600">Manage all platform content and data</p>
        <Badge className="mt-4 bg-green-600 text-white">System Administrator</Badge>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="flex items-center gap-2">
              <section.icon className="w-4 h-4" />
              <span className="hidden md:inline">{section.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <section.icon className="w-5 h-5" />
                  {section.name}
                </CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminSectionContent sectionId={section.id} />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function AdminSectionContent({ sectionId }: { sectionId: string }) {
  const [isEditing, setIsEditing] = useState(false);

  switch (sectionId) {
    case "store":
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Store Products</h3>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">Product {i}</h4>
                    <div className="flex gap-1">
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Sample product description</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );

    case "portal":
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Global Opportunities</h3>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Opportunity
            </Button>
          </div>
          <div className="space-y-4">
            <Input placeholder="Search opportunities..." />
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Global Competition 2024</h4>
                  <p className="text-sm text-gray-600">MIT - Technology</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "gallery":
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Pitch Gallery</h3>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Pitch
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">Pitch Project {i}</h4>
                      <p className="text-sm text-gray-600">by Student {i}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <Badge variant="secondary">Approved</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );

    case "achievers":
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Achiever Profiles</h3>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Achiever
            </Button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Achiever {i}</h4>
                      <p className="text-sm text-gray-600">Outstanding performance in Technology</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );

    case "home":
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Homepage Content</h3>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Hero Section Title</label>
              <Input placeholder="Enter hero title..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hero Section Description</label>
              <Input placeholder="Enter hero description..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Featured Content</label>
              <div className="border rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Featured Pitch #1</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Featured Achiever #1</span>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return <div>Section content not found</div>;
  }
}
