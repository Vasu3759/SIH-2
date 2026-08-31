import React from 'react';
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  RefreshCw, 
  Building, 
  FileText
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function Renewals({ project, renewals, onNavigate, showToast }) {
  const getUrgencyBadge = (tier, days) => {
    switch (tier) {
      case 'URGENT':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[11.5px] font-bold bg-red-100 text-red-900 border border-red-300">
            <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
            7 Days: Urgent Action ({days}d left)
          </span>
        );
      case 'WARNING':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[11.5px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-800" />
            15 Days: Warning ({days}d left)
          </span>
        );
      case 'REMINDER':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[11.5px] font-bold bg-blue-100 text-blue-900 border border-blue-300">
            <Clock className="w-3.5 h-3.5 text-blue-800" />
            30 Days: Reminder ({days}d left)
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[11.5px] font-semibold bg-slate-100 text-slate-700 border border-slate-300">
            Active ({days} days remaining)
          </span>
        );
    }
  };

  const handleStartRenewal = (ren) => {
    showToast?.(`Initiated statutory renewal for ${ren.approvalName} (Licence: ${ren.licenceNumber})`, "success");
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Ongoing Statutory Compliance
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Licence Renewals & Compliance
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Automated statutory expiry tracking with multi-tier alerts (30d Reminder → 15d Warning → 7d Urgent).
          </p>
        </div>

        <button
          onClick={() => onNavigate('calendar')}
          className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold shadow-sm flex items-center gap-1.5"
        >
          <Calendar className="w-4 h-4" />
          <span>Compliance Calendar</span>
        </button>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Escalation Hierarchy Overview Banner */}
      <div className="p-3.5 bg-slate-900 text-white rounded-[3px] text-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold text-[13px]">Statutory Renewal Windows:</span>
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="bg-blue-900/90 px-2.5 py-0.5 rounded-[2px] text-blue-200 border border-blue-700">
            30 Days: Reminder Notice
          </span>
          <span className="bg-amber-900/90 px-2.5 py-0.5 rounded-[2px] text-amber-200 border border-amber-700">
            15 Days: Statutory Warning
          </span>
          <span className="bg-red-900/90 px-2.5 py-0.5 rounded-[2px] text-red-200 border border-red-700">
            7 Days: Urgent Action
          </span>
          <span className="bg-red-950 px-2.5 py-0.5 rounded-[2px] text-white border border-red-600 font-bold">
            Expired: Penalty Escalation
          </span>
        </div>
      </div>

      {/* Active Renewals Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renewals.map((ren) => {
          const isUrgent = ren.urgencyTier === 'URGENT' || ren.urgencyTier === 'WARNING' || ren.urgencyTier === 'REMINDER';

          return (
            <div
              key={ren.id}
              className={`bg-white rounded-[3px] border p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all ${
                ren.urgencyTier === 'URGENT'
                  ? 'border-red-400 ring-1 ring-red-400'
                  : ren.urgencyTier === 'WARNING'
                  ? 'border-amber-400'
                  : 'border-[#CBD5E1]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {ren.department}
                    </span>
                    <h3 className="text-[16px] font-bold text-slate-900 leading-snug">
                      {ren.approvalName}
                    </h3>
                    <div className="font-mono text-[12.5px] text-slate-600 mt-0.5">
                      Licence No: {ren.licenceNumber}
                    </div>
                  </div>

                  <div>{getUrgencyBadge(ren.urgencyTier, ren.daysRemaining)}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 p-3 bg-slate-50 rounded-[2px] border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500 text-[11.5px] font-medium block">Expiry Date</span>
                    <span className="font-bold text-slate-900 text-[13.5px]">{ren.expiryDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-[11.5px] font-medium block">Statutory Renewal Fee</span>
                    <span className="font-bold text-slate-900 text-[13.5px]">{ren.annualFee}</span>
                  </div>
                </div>

                {/* Prerequisite Checklist */}
                <div>
                  <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Prerequisite Renewal Documents:
                  </span>
                  <div className="space-y-1 text-[12.5px] text-slate-700">
                    {ren.prerequisiteDocs.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[12px] text-slate-500">
                  Window: {ren.renewalWindow}
                </span>

                <button
                  onClick={() => handleStartRenewal(ren)}
                  className={`px-3.5 py-1.5 rounded-[2px] text-[12.5px] font-semibold flex items-center gap-1.5 shadow-sm transition-colors ${
                    isUrgent
                      ? 'bg-[#1B365D] hover:bg-[#142947] text-white'
                      : 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-800'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start Renewal</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
