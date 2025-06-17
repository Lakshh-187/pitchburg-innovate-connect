
import React from 'react';

interface BadgeProps {
  studentName: string;
  instituteName: string;
  category: string;
}

export function BadgeTemplate({ studentName, instituteName, category }: BadgeProps) {
  return (
    <div className="flex justify-center">
      <div className="w-80 h-96 bg-gradient-to-b from-orange-100 via-white to-orange-50 rounded-2xl shadow-xl border-4 border-orange-400 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-orange-600 font-bold text-2xl">🏆</span>
          </div>
          <h2 className="text-white font-bold text-lg">DIGITAL BADGE</h2>
          <p className="text-orange-100 text-sm">Uniford Global Council</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Achievement Badge */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-3xl">★</span>
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-2">PARTICIPANT</h3>
            <p className="text-orange-600 font-semibold">{category}</p>
          </div>

          {/* Recipient Info */}
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-600 mb-1">Awarded to:</p>
            <p className="text-xl font-bold text-orange-800">{studentName}</p>
            <p className="text-sm text-orange-600 mt-2">{instituteName}</p>
          </div>

          {/* Achievement Details */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">For outstanding participation in</p>
            <p className="font-bold text-orange-800">Uniford Global Council Program</p>
            <p className="text-xs text-gray-500">Issued: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Verification Code */}
          <div className="bg-gray-100 p-2 rounded text-center">
            <p className="text-xs text-gray-500">Verification Code:</p>
            <p className="font-mono text-sm text-gray-700">UGC-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
