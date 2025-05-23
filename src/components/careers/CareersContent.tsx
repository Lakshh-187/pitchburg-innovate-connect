
import { useState } from "react";
import { CareerCard } from "./CareerCard";
import { CareerDetails } from "./CareerDetails";
import { careers } from "./careersData";

export function CareersContent() {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  
  const handleOpenDetails = (id: string) => {
    setSelectedCareer(id);
  };

  const handleCloseDetails = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-display mb-4">Current Openings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our mission to transform education and empower students worldwide. Be part of 
          a team that's creating impact and building a better future.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {careers.map((career) => (
          <CareerCard 
            key={career.id}
            title={career.title}
            department={career.department}
            location={career.location}
            type={career.type}
            description={career.shortDescription}
            onApply={() => handleOpenDetails(career.id)}
          />
        ))}
      </div>
      
      {selectedCareer && (
        <CareerDetails 
          career={careers.find(c => c.id === selectedCareer)!} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}
