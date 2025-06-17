
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Award, CreditCard, Mail, Certificate } from "lucide-react";

const documentTypes = [
  { id: "offer-letter", name: "Offer Letter", icon: Mail, color: "bg-green-100 text-green-600" },
  { id: "invitation-letter", name: "Invitation Letter", icon: FileText, color: "bg-blue-100 text-blue-600" },
  { id: "id-card", name: "ID Card", icon: CreditCard, color: "bg-purple-100 text-purple-600" },
  { id: "badge", name: "Digital Badge", icon: Award, color: "bg-orange-100 text-orange-600" },
  { id: "certificate", name: "Certificate", icon: Certificate, color: "bg-red-100 text-red-600" }
];

const categories = [
  "Student Participant",
  "Institute Representative",
  "Faculty Member",
  "Research Scholar",
  "Industry Partner",
  "Global Ambassador"
];

export function DocumentGenerator() {
  const [formData, setFormData] = useState({
    studentName: "",
    instituteName: "",
    category: "",
    documentType: ""
  });

  const handleGenerate = () => {
    // Here you would implement the actual document generation logic
    console.log("Generating document with data:", formData);
    alert(`Generating ${formData.documentType} for ${formData.studentName}`);
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Document Generator</CardTitle>
          <CardDescription>
            Fill in the details below to generate customized documents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Student Name</label>
              <Input
                placeholder="Enter student's full name"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Institute Name</label>
              <Input
                placeholder="Enter institute name"
                value={formData.instituteName}
                onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select participation category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Document Type</label>
              <Select onValueChange={(value) => setFormData({ ...formData, documentType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((doc) => (
                    <SelectItem key={doc.id} value={doc.name}>
                      {doc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={!formData.studentName || !formData.instituteName || !formData.category || !formData.documentType}
          >
            <Download className="w-4 h-4 mr-2" />
            Generate Document
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentTypes.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${doc.color} rounded-lg flex items-center justify-center mb-4`}>
                <doc.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{doc.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                Professional {doc.name.toLowerCase()} with Harvard & Stanford inspired design
              </p>
              <Badge variant="secondary" className="text-xs">
                Premium Template
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
