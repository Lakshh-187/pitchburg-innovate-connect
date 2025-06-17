
import React from 'react';

interface OfferLetterProps {
  studentName: string;
  instituteName: string;
  category: string;
}

export function OfferLetterTemplate({ studentName, instituteName, category }: OfferLetterProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto shadow-2xl border-8 border-red-800">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">U</span>
        </div>
        <h1 className="text-3xl font-bold text-red-800 mb-2">UNIFORD GLOBAL COUNCIL</h1>
        <p className="text-gray-600 italic">Excellence in Education & Innovation</p>
      </div>

      <div className="border-t-4 border-red-800 pt-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">OFFICIAL OFFER LETTER</h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-right text-sm text-gray-500">Date: {currentDate}</p>
          
          <p className="font-semibold text-lg">Dear {studentName},</p>
          
          <p>
            We are pleased to formally extend this offer to you to participate in the prestigious 
            <strong> Uniford Global Council </strong> program as a <strong>{category}</strong>, 
            representing <strong>{instituteName}</strong>.
          </p>
          
          <p>
            This distinguished opportunity recognizes your exceptional academic achievements and 
            leadership potential. Your participation will contribute to our mission of fostering 
            global collaboration in education and innovation.
          </p>
          
          <p>
            The program includes access to exclusive research opportunities, international 
            networking events, and collaborative projects with leading institutions worldwide.
          </p>
          
          <p>
            We look forward to your valuable contributions to our global community.
          </p>
          
          <div className="mt-12 flex justify-between items-end">
            <div>
              <p className="font-semibold">Sincerely,</p>
              <div className="mt-8">
                <div className="border-b border-gray-400 w-48 mb-2"></div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Director, Uniford Global Council</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-red-800 font-bold">SEAL</span>
              </div>
              <p className="text-xs text-gray-500">Official Seal</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
        <p>Uniford Global Council | www.uniford.org | contact@uniford.org</p>
      </div>
    </div>
  );
}
