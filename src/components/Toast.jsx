import React from 'react';
import { CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose }) {
  if (!message) return null;

  const bgStyles = {
    success: 'bg-[#166534] text-white border-green-700',
    warning: 'bg-[#B45309] text-white border-amber-700',
    danger: 'bg-[#991B1B] text-white border-red-700',
    info: 'bg-[#1B365D] text-white border-blue-900',
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-200 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-200 shrink-0" />,
    danger: <AlertTriangle className="w-5 h-5 text-red-200 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-200 shrink-0" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-slide-up shadow-lg">
      <div className={`flex items-start gap-3 p-4 rounded border ${bgStyles[type] || bgStyles.info}`}>
        {icons[type] || icons.info}
        <div className="flex-1 text-sm font-medium pr-2 leading-snug">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-0.5 rounded transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
