
import React from 'react';

interface InvitationLetterProps {
  studentName: string;
  instituteName: string;
  category: string;
}

export function InvitationLetterTemplate({ studentName, instituteName, category }: InvitationLetterProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-8 max-w-4xl mx-auto shadow-2xl border-4 border-blue-800">
      <div className="text-center mb-8">
        <div className="w-32 h-32 bg-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-3xl">UGC</span>
        </div>
        <h1 className="text-4xl font-bold text-blue-800 mb-2">UNIFORD GLOBAL COUNCIL</h1>
        <p className="text-blue-600 italic text-lg">Cordially Invites You</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">OFFICIAL INVITATION</h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="text-right text-sm text-gray-500">Date: {currentDate}</p>
          
          <div className="text-center bg-blue-50 p-6 rounded-lg">
            <p className="text-2xl font-bold text-blue-800 mb-2">{studentName}</p>
            <p className="text-lg text-blue-600">{category}</p>
            <p className="text-lg text-blue-600">{instituteName}</p>
          </div>
          
          <p className="text-center text-xl font-semibold text-gray-800">
            You are cordially invited to participate in the
          </p>
          
          <p className="text-center text-2xl font-bold text-blue-800 bg-blue-50 p-4 rounded-lg">
            UNIFORD GLOBAL SUMMIT 2024
          </p>
          
          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="text-center">
              <p className="font-bold text-blue-800">Date</p>
              <p>March 15-17, 2024</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-blue-800">Venue</p>
              <p>Harvard University Campus</p>
            </div>
          </div>
          
          <p className="text-center italic text-gray-600">
            "Shaping the Future of Global Education & Innovation"
          </p>
          
          <div className="mt-12 text-center">
            <div className="inline-block">
              <div className="border-b-2 border-blue-800 w-64 mb-2"></div>
              <p className="font-bold text-blue-800">Prof. Michael Chen</p>
              <p className="text-sm text-gray-600">President, Uniford Global Council</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>For inquiries: summit@uniford.org | +1-800-UNIFORD</p>
      </div>
    </div>
  );
}
