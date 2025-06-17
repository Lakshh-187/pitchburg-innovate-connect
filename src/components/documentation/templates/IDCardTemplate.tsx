
import React from 'react';

interface IDCardProps {
  studentName: string;
  instituteName: string;
  category: string;
}

export function IDCardTemplate({ studentName, instituteName, category }: IDCardProps) {
  const currentYear = new Date().getFullYear();
  const idNumber = `UGC${currentYear}${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

  return (
    <div className="flex justify-center">
      <div className="w-96 h-64 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 rounded-xl shadow-2xl border-4 border-gold-400 overflow-hidden">
        {/* Front Side */}
        <div className="relative h-full p-4 flex flex-col">
          {/* Header */}
          <div className="text-center mb-3">
            <div className="w-12 h-12 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-purple-800 font-bold text-lg">U</span>
            </div>
            <h3 className="text-white font-bold text-sm">UNIFORD GLOBAL COUNCIL</h3>
            <p className="text-purple-200 text-xs">Official ID Card</p>
          </div>

          {/* Photo Placeholder */}
          <div className="flex-1 flex items-center">
            <div className="w-20 h-24 bg-gray-200 rounded-md mr-4 flex items-center justify-center">
              <span className="text-gray-500 text-xs">PHOTO</span>
            </div>
            
            {/* Details */}
            <div className="flex-1 space-y-1">
              <div>
                <p className="text-purple-200 text-xs">Name:</p>
                <p className="text-white font-bold text-sm">{studentName}</p>
              </div>
              <div>
                <p className="text-purple-200 text-xs">Institute:</p>
                <p className="text-white text-xs">{instituteName}</p>
              </div>
              <div>
                <p className="text-purple-200 text-xs">Category:</p>
                <p className="text-white text-xs">{category}</p>
              </div>
              <div>
                <p className="text-purple-200 text-xs">ID:</p>
                <p className="text-white font-mono text-xs">{idNumber}</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-2">
            <p className="text-purple-200 text-xs">Valid: {currentYear} - {currentYear + 1}</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 w-16 h-16 border-2 border-purple-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border border-purple-400 rounded opacity-20"></div>
        </div>
      </div>
    </div>
  );
}
