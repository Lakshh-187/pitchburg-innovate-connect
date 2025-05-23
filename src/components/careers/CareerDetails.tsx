
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Career } from "./careersData";
import { useState } from "react";

interface CareerDetailsProps {
  career: Career;
  onClose: () => void;
}

export function CareerDetails({ career, onClose }: CareerDetailsProps) {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <DialogTitle className="text-2xl font-display">{career.title}</DialogTitle>
              <DialogDescription className="flex flex-wrap gap-2 mt-1">
                <span>{career.department}</span>
                <span>•</span>
                <span>{career.location}</span>
                <span>•</span>
                <Badge variant="outline" className="bg-pitchburg-purple/10 text-pitchburg-purple ml-1">
                  {career.type}
                </Badge>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-gray-700">{career.fullDescription}</p>
          
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="roles">
              <AccordionTrigger className="text-lg font-semibold">Roles & Responsibilities</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  {career.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-700">{responsibility}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="milestones">
              <AccordionTrigger className="text-lg font-semibold">Milestones & Impact Measurement</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {career.milestones.map((milestone, index) => (
                    <div key={index} className="border-l-2 border-pitchburg-purple pl-4 py-1">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="grants">
              <AccordionTrigger className="text-lg font-semibold">Grants & Rewards</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {career.grants.map((grant, index) => (
                    <div key={index} className="border-l-2 border-green-500 pl-4 py-1">
                      <h4 className="font-medium">{grant.title}</h4>
                      <p className="text-gray-600 text-sm">{grant.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="benefits">
              <AccordionTrigger className="text-lg font-semibold">Benefits</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  {career.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="training">
              <AccordionTrigger className="text-lg font-semibold">Training & Onboarding</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{career.training.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Notice Period</h4>
                    <p className="text-gray-700">{career.training.noticePeriod}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-3 mt-6">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button className="bg-pitchburg-purple hover:bg-pitchburg-dark-purple">
            Apply Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
