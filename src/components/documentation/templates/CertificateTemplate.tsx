
import React from 'react';

interface CertificateProps {
  studentName: string;
  instituteName: string;
  category: string;
}

export function CertificateTemplate({ studentName, instituteName, category }: CertificateProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-red-50 p-8 max-w-5xl mx-auto shadow-2xl border-8 border-red-800">
      {/* Decorative Border */}
      <div className="border-4 border-red-600 p-8 bg-white">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-2xl">U</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-red-800">UNIFORD GLOBAL COUNCIL</h1>
              <p className="text-red-600 italic">Excellence in Global Education</p>
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-red-800 mb-4" style={{fontFamily: 'serif'}}>
            CERTIFICATE
          </h2>
          <p className="text-2xl text-red-600 italic">of Participation</p>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6 mb-8">
          <p className="text-lg text-gray-700">This is to certify that</p>
          
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <p className="text-4xl font-bold text-red-800 mb-2" style={{fontFamily: 'serif'}}>
              {studentName}
            </p>
            <p className="text-lg text-red-600">representing</p>
            <p className="text-2xl font-semibold text-red-700">{instituteName}</p>
            <p className="text-lg text-red-600 mt-2">as {category}</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            has successfully participated in the <strong>Uniford Global Council Program</strong> and 
            has demonstrated exceptional commitment to global education initiatives, 
            cross-cultural collaboration, and academic excellence.
          </p>

          <div className="flex justify-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center border-4 border-red-800">
              <span className="text-red-800 font-bold text-2xl">★</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-12">
          <div className="text-center">
            <div className="border-b-2 border-red-800 w-48 mb-2"></div>
            <p className="font-bold text-red-800">Dr. Sarah Johnson</p>
            <p className="text-sm text-red-600">Director</p>
            <p className="text-xs text-gray-500">Date: {currentDate}</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 bg-red-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">SEAL</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Official Seal</p>
          </div>
          
          <div className="text-center">
            <div className="border-b-2 border-red-800 w-48 mb-2"></div>
            <p className="font-bold text-red-800">Prof. Michael Chen</p>
            <p className="text-sm text-red-600">President</p>
            <p className="text-xs text-gray-500">Certificate No: UGC-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
