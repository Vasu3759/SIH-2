import React from 'react';
import { X, CheckCircle2, Clock, AlertTriangle, Building, FileText } from 'lucide-react';

export default function ApplicationTimeline({ application, isOpen, onClose }) {
  if (!isOpen || !application) return null;

  const statusColors = {
    'APPROVED': 'bg-emerald-50 text-emerald-800 border-emerald-300',
    'UNDER REVIEW': 'bg-amber-50 text-amber-900 border-amber-300',
    'INSPECTION': 'bg-blue-50 text-blue-900 border-blue-300',
    'ACTION REQUIRED': 'bg-red-50 text-red-900 border-red-300',
    'NOT STARTED': 'bg-slate-100 text-slate-700 border-slate-300'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-xl bg-white shadow-2xl border-l border-slate-300 flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#1B365D] text-white flex items-start justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider uppercase px-2 py-0.5 bg-white/20 rounded-[2px]">
                  {application.id}
                </span>
                <span className="text-[11.5px] sm:text-[12px] text-blue-200">
                  Filed: {application.submittedDate}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold font-sans text-white">
                {application.approvalName}
              </h2>
              <div className="flex items-center gap-2 mt-1.5 text-[12.5px] sm:text-[13px] text-slate-200">
                <Building className="w-4 h-4 text-blue-200 shrink-0" />
                <span className="truncate">{application.department}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-[2px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Current Status & Assigned Officer */}
          <div className="p-3.5 sm:p-4 bg-slate-50 border-b border-slate-200 text-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-slate-500 text-[11px] font-bold uppercase block">Current Stage</span>
                <span className={`inline-block px-2.5 py-0.5 rounded-[2px] font-bold border mt-0.5 text-[11.5px] ${statusColors[application.status] || 'bg-slate-100 text-slate-700'}`}>
                  {application.status} — {application.stage}
                </span>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-slate-500 text-[11px] font-bold uppercase block">Scrutiny Officer</span>
                <span className="font-bold text-slate-800 text-[12.5px]">{application.assignedOfficer || "Pending Assignment"}</span>
              </div>
            </div>

            {application.isDelayed && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-[3px] text-red-950 flex flex-wrap items-center justify-between gap-1 text-[12px]">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-700 shrink-0" />
                  <span>Statutory SLA Exceeded by <strong>{application.delayDays || 38} days</strong></span>
                </div>
                <span className="font-bold text-red-800 uppercase text-[10.5px] bg-red-100 px-2 py-0.5 rounded-[2px] border border-red-200">
                  Overdue
                </span>
              </div>
            )}
          </div>

          {/* Chronological Milestone Timeline */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            <h3 className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider mb-3">
              Application Milestones Timeline
            </h3>

            <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-300">
              {application.timeline?.map((step, idx) => {
                const isDone = step.status === 'COMPLETED';
                const isCurrent = step.status === 'IN_PROGRESS' || step.status === 'ACTION_REQUIRED' || step.status === 'PENDING';
                const isActionRequired = step.status === 'ACTION_REQUIRED';

                return (
                  <div key={idx} className="relative">
                    {/* Node Dot */}
                    <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isDone
                        ? 'bg-emerald-700 text-white'
                        : isActionRequired
                        ? 'bg-red-700 text-white ring-4 ring-red-100'
                        : isCurrent
                        ? 'bg-[#1B365D] text-white ring-4 ring-blue-100'
                        : 'bg-white border-2 border-slate-400 text-slate-500'
                    }`}>
                      {isDone ? '✓' : isActionRequired ? '!' : idx + 1}
                    </div>

                    {/* Content */}
                    <div className="text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className={`font-bold text-[13px] ${isActionRequired ? 'text-red-800' : isCurrent ? 'text-[#1B365D]' : 'text-slate-900'}`}>
                          {step.step}
                        </span>
                        <span className="text-[11.5px] text-slate-500 font-mono">
                          {step.date}
                        </span>
                      </div>
                      <p className="mt-1 text-slate-700 text-[12px] leading-normal bg-slate-50 p-2.5 rounded-[3px] border border-slate-200">
                        {step.remarks}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 bg-slate-100 border-t border-slate-300 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[11.5px]">
              Last Synced: Today
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1B365D] text-white rounded-[3px] font-semibold hover:bg-[#142947]"
            >
              Close Timeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
