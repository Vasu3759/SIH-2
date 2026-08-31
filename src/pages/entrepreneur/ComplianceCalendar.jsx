import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Building, 
  FileText
} from 'lucide-react';
import { complianceCalendarEvents } from '../../data/renewals';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function ComplianceCalendar({ project, onNavigate }) {
  const [activeMonth, setActiveMonth] = useState('September 2026');

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Statutory Filings Schedule
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Compliance Calendar
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Synchronized timeline of mandatory annual returns, testing certifications, and safety inspections.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('renewals')}
            className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-[3px] text-[13px] font-semibold shadow-sm"
          >
            Renewals Tracker
          </button>
        </div>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Calendar Month Navigation Strip */}
      <div className="bg-white p-3.5 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-5 h-5 text-[#1B365D]" />
          <span className="font-bold text-[16.5px] text-slate-900 font-sans">
            {activeMonth}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setActiveMonth('August 2026')}
            className="p-1.5 rounded-[2px] hover:bg-slate-100 border border-slate-300 text-slate-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setActiveMonth('September 2026')}
            className={`px-3 py-1.5 rounded-[2px] font-bold text-[12.5px] border ${
              activeMonth === 'September 2026' ? 'bg-[#1B365D] text-white border-[#1B365D]' : 'bg-slate-50 text-slate-700 border-slate-300'
            }`}
          >
            Sep 2026
          </button>
          <button
            onClick={() => setActiveMonth('October 2026')}
            className={`px-3 py-1.5 rounded-[2px] font-bold text-[12.5px] border ${
              activeMonth === 'October 2026' ? 'bg-[#1B365D] text-white border-[#1B365D]' : 'bg-slate-50 text-slate-700 border-slate-300'
            }`}
          >
            Oct 2026
          </button>
          <button
            onClick={() => setActiveMonth('October 2026')}
            className="p-1.5 rounded-[2px] hover:bg-slate-100 border border-slate-300 text-slate-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden divide-y divide-slate-200">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex items-center justify-between">
          <h2 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider">
            Scheduled Statutory Deadlines & Inspections
          </h2>
          <span className="text-[12.5px] text-slate-600 font-semibold">
            {complianceCalendarEvents.length} Active Events
          </span>
        </div>

        {complianceCalendarEvents.map((evt) => (
          <div key={evt.id} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4 text-xs">
            {/* Date Box */}
            <div className="w-14 h-14 bg-slate-100 rounded-[2px] border border-slate-300 flex flex-col items-center justify-center shrink-0">
              <span className="text-[11px] font-bold text-slate-600 uppercase">{evt.month}</span>
              <span className="text-xl font-bold text-[#1B365D] leading-none mt-0.5">{evt.day}</span>
            </div>

            {/* Event Info */}
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-[15px] font-bold text-slate-900">
                  {evt.title}
                </h3>
                <span className={`px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold border ${
                  evt.severity === 'Critical' 
                    ? 'bg-red-50 text-red-900 border-red-300' 
                    : evt.severity === 'High' 
                    ? 'bg-amber-50 text-amber-900 border-amber-300' 
                    : 'bg-blue-50 text-blue-900 border-blue-300'
                }`}>
                  {evt.type}
                </span>
              </div>

              <div className="flex items-center gap-3 text-slate-600 text-[12.5px]">
                <span className="font-semibold text-slate-800">{evt.department}</span>
                <span>•</span>
                <span>{evt.unit}</span>
              </div>

              <p className="text-slate-700 text-[13px] leading-relaxed pt-1">
                {evt.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
