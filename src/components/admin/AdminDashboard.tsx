import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Store, 
  Globe, 
  Image, 
  Trophy, 
  Home, 
  Plus, 
  Edit, 
  Trash2,
  Search,
  Eye,
  Calendar,
  Package,
  Users
} from "lucide-react";
import { getDataBySection, addItem, deleteItem } from "@/services/adminDataService";
import { EditItemModal } from "./EditItemModal";

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("store");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const sections = [
    { 
      id: "store", 
      name: "Store", 
      icon: Store, 
      description: "Manage student products and skill exchange"
    },
    { 
      id: "weizmann", 
      name: "Weizmann Portal", 
      icon: Globe, 
      description: "Manage global opportunities"
    },
    { 
      id: "gallery", 
      name: "Pitch Gallery", 
      icon: Image, 
      description: "Manage pitch submissions"
    },
    { 
      id: "achievers", 
      name: "Achievers", 
      icon: Trophy, 
      description: "Manage achiever profiles"
    },
    { 
      id: "categories", 
      name: "Pitch Categories", 
      icon: Package, 
      description: "Manage pitch category projects"
    },
    { 
      id: "updates", 
      name: "Updates Page", 
      icon: Calendar, 
      description: "Manage announcements and events"
    }
  ];

  const handleEdit = (item: any) => {
    setEditingItem(item);
  };

  const handleDelete = (itemId: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      deleteItem(activeSection, itemId);
      setRefreshKey(prev => prev + 1);
    }
  };

  const handleUpdate = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Panel</h1>
        <p className="text-xl text-gray-600">Complete Content Management System</p>
        <div className="flex justify-center gap-4 mt-6">
          <Badge className="bg-green-600 text-white px-4 py-2">System Administrator</Badge>
          <Badge variant="outline" className="px-4 py-2">Full Access Granted</Badge>
        </div>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} className="flex items-center gap-2">
              <section.icon className="w-4 h-4" />
              <span className="hidden lg:inline">{section.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <section.icon className="w-5 h-5" />
                      {section.name}
                    </CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant={isAddMode ? "default" : "outline"}
                      onClick={() => setIsAddMode(true)}
                      className={isAddMode ? "bg-purple-600 hover:bg-purple-700" : ""}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                    <Button 
                      variant={!isAddMode ? "default" : "outline"}
                      onClick={() => setIsAddMode(false)}
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Manage Products
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isAddMode ? (
                  <AddProductForm 
                    sectionId={section.id} 
                    onCancel={() => setIsAddMode(false)}
                    onAdd={handleUpdate}
                  />
                ) : (
                  <ManageProducts 
                    sectionId={section.id} 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    refreshKey={refreshKey}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <EditItemModal
        isOpen={!!editingItem}
        onClose={() => setEditingItem(null)}
        item={editingItem}
        sectionId={activeSection}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

function AddProductForm({ sectionId, onCancel, onAdd }: { sectionId: string; onCancel: () => void; onAdd: () => void }) {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    addItem(sectionId, { ...formData, status: "Active" });
    onAdd();
    onCancel();
    setFormData({});
  };

  const getFormFields = () => {
    switch (sectionId) {
      case "store":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product/Skill Name</label>
                <Input 
                  placeholder="Enter product or skill name..." 
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Creator Name</label>
                <Input 
                  placeholder="Student name..." 
                  value={formData.creator || ''}
                  onChange={(e) => handleInputChange('creator', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <Input 
                  placeholder="$0.00" 
                  value={formData.price || ''}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={formData.category || ''}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="Art">Art</option>
                  <option value="Technology">Technology</option>
                  <option value="Crafts">Crafts</option>
                  <option value="Digital">Digital</option>
                  <option value="Skills">Skills</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea 
                  placeholder="Product description..." 
                  className="h-24" 
                  value={formData.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <Input 
                  placeholder="https://..." 
                  value={formData.imageUrl || ''}
                  onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      
      case "weizmann":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Opportunity Title</label>
                <Input placeholder="Competition/Scholarship name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Organization</label>
                <Input placeholder="Host organization..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Deadline</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Competition</option>
                  <option>Scholarship</option>
                  <option>Internship</option>
                  <option>Conference</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea placeholder="Opportunity description..." className="h-24" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Eligibility</label>
                <Input placeholder="Who can apply..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prize/Benefits</label>
                <Input placeholder="What participants get..." />
              </div>
            </div>
          </div>
        );

      case "gallery":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pitch Title</label>
                <Input placeholder="Project name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Student Name</label>
                <Input placeholder="Presenter name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Department</label>
                <Input placeholder="Academic department..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Approved</option>
                  <option>Pending Review</option>
                  <option>Featured</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea placeholder="Pitch description..." className="h-24" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Image/Video URL</label>
                <Input placeholder="Media URL..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tags</label>
                <Input placeholder="innovation, tech, social..." />
              </div>
            </div>
          </div>
        );

      case "achievers":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Achiever Name</label>
                <Input placeholder="Full name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Achievement Title</label>
                <Input placeholder="What they achieved..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Field/Category</label>
                <Input placeholder="Technology, Arts, etc..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <Input placeholder="2025" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Achievement Description</label>
                <Textarea placeholder="Details about the achievement..." className="h-24" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Profile Image URL</label>
                <Input placeholder="Profile photo URL..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Social Links</label>
                <Input placeholder="LinkedIn, GitHub, etc..." />
              </div>
            </div>
          </div>
        );

      case "categories":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Project Title</label>
                <Input placeholder="Project name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <Input placeholder="Student name..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Department</label>
                <Input placeholder="Academic department..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Innovations</option>
                  <option>Social Projects</option>
                  <option>Internship Outcomes</option>
                  <option>Tech Projects</option>
                  <option>Environmental</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea placeholder="Project description..." className="h-24" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Image URL</label>
                <Input placeholder="Project image URL..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Active</option>
                  <option>Featured</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          </div>
        );

      case "updates":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Update Title</label>
                <Input placeholder="Announcement/Event title..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Announcement</option>
                  <option>Event</option>
                  <option>Opportunity</option>
                  <option>News</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Normal</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea placeholder="Update content..." className="h-32" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                <Input placeholder="All students, specific department..." />
              </div>
            </div>
          </div>
        );

      default:
        return <div>Form not configured for this section</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h3 className="text-lg font-semibold">Add New Item</h3>
        <p className="text-gray-600">Fill in the details below to add a new item</p>
      </div>
      
      {getFormFields()}
      
      <div className="flex justify-end gap-4 pt-4 border-t">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
          Save Item
        </Button>
      </div>
    </div>
  );
}

function ManageProducts({ 
  sectionId, 
  searchQuery, 
  setSearchQuery, 
  onEdit, 
  onDelete, 
  refreshKey 
}: { 
  sectionId: string; 
  searchQuery: string; 
  setSearchQuery: (query: string) => void;
  onEdit: (item: any) => void;
  onDelete: (itemId: number) => void;
  refreshKey: number;
}) {
  const data = getDataBySection(sectionId);
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDetailText = (item: any) => {
    switch (sectionId) {
      case "store":
        return `${item.creator} • ${item.category}`;
      case "weizmann":
        return `${item.organization} • ${item.deadline}`;
      case "gallery":
        return `${item.student} • ${item.department}`;
      case "achievers":
        return `${item.field} • ${item.year}`;
      case "categories":
        return `${item.author} • ${item.category}`;
      case "updates":
        return `${item.type} • ${item.date}`;
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Existing Items</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Badge variant="outline">{filteredData.length} items</Badge>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">
                    {getDetailText(item)}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    className={
                      item.status === "Active" || item.status === "Open" || item.status === "Featured" || item.status === "Published"
                        ? "bg-green-100 text-green-800" 
                        : item.status === "Pending" || item.status === "Draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => onEdit(item)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-red-600 hover:text-red-700"
                      onClick={() => onDelete(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
