
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { updateItem } from "@/services/adminDataService";

interface EditItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  sectionId: string;
  onUpdate: () => void;
}

export function EditItemModal({ isOpen, onClose, item, sectionId, onUpdate }: EditItemModalProps) {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    }
  }, [item]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateItem(sectionId, item.id, formData);
    onUpdate();
    onClose();
  };

  const renderFormFields = () => {
    switch (sectionId) {
      case "store":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Product/Skill Name</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Creator</label>
              <Input 
                value={formData.creator || ''} 
                onChange={(e) => handleInputChange('creator', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <Input 
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
                <option value="Art">Art</option>
                <option value="Technology">Technology</option>
                <option value="Crafts">Crafts</option>
                <option value="Digital">Digital</option>
                <option value="Skills">Skills</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      case "weizmann":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Opportunity Title</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Organization</label>
              <Input 
                value={formData.organization || ''} 
                onChange={(e) => handleInputChange('organization', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Deadline</label>
              <Input 
                type="date"
                value={formData.deadline || ''} 
                onChange={(e) => handleInputChange('deadline', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select 
                className="w-full p-2 border rounded-md" 
                value={formData.category || ''}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="Competition">Competition</option>
                <option value="Scholarship">Scholarship</option>
                <option value="Internship">Internship</option>
                <option value="Conference">Conference</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      case "gallery":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Pitch Title</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Student Name</label>
              <Input 
                value={formData.student || ''} 
                onChange={(e) => handleInputChange('student', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Department</label>
              <Input 
                value={formData.department || ''} 
                onChange={(e) => handleInputChange('department', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select 
                className="w-full p-2 border rounded-md" 
                value={formData.status || ''}
                onChange={(e) => handleInputChange('status', e.target.value)}
              >
                <option value="Approved">Approved</option>
                <option value="Pending">Pending Review</option>
                <option value="Featured">Featured</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      case "achievers":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Achiever Name</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Achievement</label>
              <Input 
                value={formData.achievement || ''} 
                onChange={(e) => handleInputChange('achievement', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Field</label>
              <Input 
                value={formData.field || ''} 
                onChange={(e) => handleInputChange('field', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <Input 
                value={formData.year || ''} 
                onChange={(e) => handleInputChange('year', e.target.value)} 
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      case "categories":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Project Title</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <Input 
                value={formData.author || ''} 
                onChange={(e) => handleInputChange('author', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Department</label>
              <Input 
                value={formData.department || ''} 
                onChange={(e) => handleInputChange('department', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select 
                className="w-full p-2 border rounded-md" 
                value={formData.category || ''}
                onChange={(e) => handleInputChange('category', e.target.value)}
              >
                <option value="Innovations">Innovations</option>
                <option value="Social Projects">Social Projects</option>
                <option value="Internship Outcomes">Internship Outcomes</option>
                <option value="Tech Projects">Tech Projects</option>
                <option value="Environmental">Environmental</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      case "updates":
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Update Title</label>
              <Input 
                value={formData.name || ''} 
                onChange={(e) => handleInputChange('name', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select 
                className="w-full p-2 border rounded-md" 
                value={formData.type || ''}
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                <option value="Announcement">Announcement</option>
                <option value="Event">Event</option>
                <option value="Opportunity">Opportunity</option>
                <option value="News">News</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date</label>
              <Input 
                type="date"
                value={formData.date || ''} 
                onChange={(e) => handleInputChange('date', e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <select 
                className="w-full p-2 border rounded-md" 
                value={formData.priority || ''}
                onChange={(e) => handleInputChange('priority', e.target.value)}
              >
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={formData.description || ''} 
                onChange={(e) => handleInputChange('description', e.target.value)} 
              />
            </div>
          </div>
        );

      default:
        return <div>No form configured for this section</div>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {renderFormFields()}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
