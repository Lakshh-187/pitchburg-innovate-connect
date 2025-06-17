
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { OfferLetterTemplate } from './templates/OfferLetterTemplate';
import { InvitationLetterTemplate } from './templates/InvitationLetterTemplate';
import { IDCardTemplate } from './templates/IDCardTemplate';
import { BadgeTemplate } from './templates/BadgeTemplate';
import { CertificateTemplate } from './templates/CertificateTemplate';

interface DocumentViewerProps {
  documentType: string;
  studentName: string;
  instituteName: string;
  category: string;
  onClose: () => void;
}

export function DocumentViewer({ 
  documentType, 
  studentName, 
  instituteName, 
  category, 
  onClose 
}: DocumentViewerProps) {
  const handleDownload = () => {
    // In a real implementation, this would convert the component to PDF
    console.log('Downloading document...', { documentType, studentName, instituteName, category });
    alert('Document download functionality would be implemented here. For now, you can print this page to save as PDF.');
  };

  const renderDocument = () => {
    const props = { studentName, instituteName, category };
    
    switch (documentType) {
      case 'Offer Letter':
        return <OfferLetterTemplate {...props} />;
      case 'Invitation Letter':
        return <InvitationLetterTemplate {...props} />;
      case 'ID Card':
        return <IDCardTemplate {...props} />;
      case 'Digital Badge':
        return <BadgeTemplate {...props} />;
      case 'Certificate':
        return <CertificateTemplate {...props} />;
      default:
        return <div>Document type not found</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-50 rounded-lg shadow-2xl max-w-6xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            Generated {documentType}
          </h2>
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={onClose} variant="outline">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Document Content */}
        <div className="p-6">
          {renderDocument()}
        </div>
      </div>
    </div>
  );
}
