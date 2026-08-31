import React from 'react';
import { 
  AlertOctagon, 
  Clock, 
  Building, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { departmentApplicationsList, bottleneckSummary } from '../../data/departmentData';

export default function DelayedCases({ onSelectCase, showToast }) {
  const delayedCases = departmentApplicationsList.filter(c => c.status === 'OVERDUE');

  const handleExpedite = (c) => {
    showToast?.(`Priority Notice sent to ${c.assignedOfficer} for ${c.id}`, "warning");
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-red-800 uppercase tracking-wider font-mono">
            SLA Variance Oversight
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Delayed Applications & Escalations
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Applications exceeding statutory clearance timelines across regional industrial sub-divisions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-red-100 text-red-950 border border-red-300 text-[12.5px] font-bold px-3 py-1.5 rounded-[2px] flex items-center gap-1.5">
            <AlertOctagon className="w-4 h-4 text-red-700" />
            <span>42 State Overdue Cases</span>
          </span>
        </div>
      </div>

      {/* Bottleneck Diagnostic Summary Box */}
      <div className="p-4.5 bg-red-50 border border-red-300 rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-[2px] bg-red-800 text-white flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-[16px] font-bold text-red-950">
              Primary Bottleneck: {bottleneckSummary.department}
            </h2>
            <p className="text-[13px] text-red-900 mt-0.5 leading-relaxed">
              {bottleneckSummary.summary} Root cause: {bottleneckSummary.rootCause}
            </p>
          </div>
        </div>

        <div className="text-xs text-red-950 font-semibold shrink-0 bg-red-100/90 px-3.5 py-2 rounded-[2px] border border-red-300">
          Average Delay: <span className="font-bold text-[16px] text-red-950 block sm:inline">+18.4 Days</span>
        </div>
      </div>

      {/* Delayed Applications Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex items-center justify-between">
          <h2 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider">
            Overdue Applications Awaiting Expedited Review ({delayedCases.length})
          </h2>
          <span className="text-[12.5px] text-slate-600 font-medium">Sorted by Days Overdue</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Case ID</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Enterprise Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Approval Type</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Department</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Days Pending</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Standard SLA</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Delay</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Bottleneck Reason</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {delayedCases.map((c) => (
                <tr key={c.id} className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-[#1B365D] text-[13.5px]">
                    {c.id}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 text-[14.5px]">
                    {c.companyName}
                    <span className="block text-[12px] text-slate-500 font-normal">{c.district}, Maharashtra</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 text-[14px]">
                    {c.approval}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 text-[14px]">
                    {c.department}
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-slate-900 text-[14px]">
                    {c.daysPending}d
                  </td>
                  <td className="py-3.5 px-4 text-center text-slate-600 text-[13.5px]">
                    {c.expectedSLA}d
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold bg-red-100 text-red-950 border border-red-300">
                      {c.delay}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 text-[12.5px] max-w-xs leading-snug">
                    {c.bottleneckReason}
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-1.5">
                    <button
                      onClick={() => handleExpedite(c)}
                      className="px-2.5 py-1 bg-amber-700 hover:bg-amber-800 text-white rounded-[2px] text-[12px] font-bold shadow-sm"
                    >
                      Expedite
                    </button>
                    <button
                      onClick={() => onSelectCase?.(c)}
                      className="px-2.5 py-1 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[2px] text-[12px] font-bold shadow-sm"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
