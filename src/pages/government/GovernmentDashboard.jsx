import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  AlertOctagon, 
  CheckCircle2, 
  FileText, 
  Users, 
  BarChart3, 
  ChevronRight,
  Send,
  RefreshCw,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  governmentKPIs, 
  departmentProcessingTimes, 
  bottleneckSummary, 
  departmentApplicationsList 
} from '../../data/departmentData';

export default function GovernmentDashboard({ onNavigate, onSelectCase, showToast }) {
  const delayedCases = departmentApplicationsList.filter(c => c.status === 'OVERDUE');
  const [isEscalating, setIsEscalating] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const [escalationRef, setEscalationRef] = useState(null);

  const handleDispatchSlaNotice = () => {
    setIsEscalating(true);
    setTimeout(() => {
      setIsEscalating(false);
      setIsEscalated(true);
      const refCode = `SECY-IND-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setEscalationRef(refCode);
      showToast?.(`⚡ Urgent SLA Notice ${refCode} dispatched to MPCB Regional Officer! 48h resolution clock initiated.`, "success");
    }, 700);
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Government of Maharashtra • Department Operations
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Department Operations & Scrutiny Command
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Inter-departmental application monitoring, bottleneck diagnostics, and statutory SLA compliance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('gov-delayed')}
            className="px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded-[3px] text-[13px] font-bold flex items-center gap-1.5 shadow-sm"
          >
            <AlertOctagon className="w-4 h-4" />
            <span>42 Overdue Applications</span>
          </button>
        </div>
      </div>

      {/* KPI Cards (Matches exact source numbers: 1,250 / 310 / 220 / 650 / 70) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div className="bg-white p-4 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block">Applications Received</span>
          <span className="text-3xl font-bold text-[#1B365D] font-sans block mt-1">
            {governmentKPIs.applicationsReceived.toLocaleString()}
          </span>
          <span className="text-[12px] text-slate-500 mt-1 block">Total across departments</span>
        </div>

        <div className="bg-white p-4 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block">Pending Scrutiny</span>
          <span className="text-3xl font-bold text-amber-800 font-sans block mt-1">
            {governmentKPIs.pending}
          </span>
          <span className="text-[12px] text-amber-800 font-semibold mt-1 block">Awaiting officer review</span>
        </div>

        <div className="bg-white p-4 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block">Under Active Review</span>
          <span className="text-3xl font-bold text-blue-800 font-sans block mt-1">
            {governmentKPIs.underReview}
          </span>
          <span className="text-[12px] text-blue-800 font-semibold mt-1 block">Field visits & tests</span>
        </div>

        <div className="bg-white p-4 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block">Approved / Sanctioned</span>
          <span className="text-3xl font-bold text-emerald-800 font-sans block mt-1">
            {governmentKPIs.approved}
          </span>
          <span className="text-[12px] text-emerald-800 font-semibold mt-1 block">52.0% clearance rate</span>
        </div>

        <div className="bg-white p-4 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block">Rejected / Objected</span>
          <span className="text-3xl font-bold text-slate-700 font-sans block mt-1">
            {governmentKPIs.rejected}
          </span>
          <span className="text-[12px] text-slate-500 mt-1 block">5.6% non-compliance</span>
        </div>
      </div>

      {/* Main 2-Column: Bottleneck Detection & Processing Time Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: BOTTLENECK DETECTION ALERT PANEL (FEATURE 4: Interactive SLA Escalation) */}
        <div className="lg:col-span-6 bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between">
          <div>
            <div className={`p-4 border-b flex items-center justify-between transition-colors ${
              isEscalated ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center gap-2">
                <AlertOctagon className={`w-5 h-5 shrink-0 ${isEscalated ? 'text-amber-800' : 'text-red-700'}`} />
                <h2 className={`text-[14px] font-bold uppercase tracking-wider ${isEscalated ? 'text-amber-950' : 'text-red-950'}`}>
                  {isEscalated ? "SLA Escalation Dispatched" : "Current Bottleneck Alert"}
                </h2>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[2px] border ${
                isEscalated 
                  ? 'bg-amber-200 text-amber-950 border-amber-300' 
                  : 'bg-red-200 text-red-950 border-red-300'
              }`}>
                {isEscalated ? "Notice Active (48h Clock)" : "Action Required"}
              </span>
            </div>

            <div className="p-5 space-y-4 text-xs">
              <div>
                <div className="text-[17px] font-bold text-slate-900">
                  {bottleneckSummary.department}
                </div>
                <p className="text-[13px] text-red-800 font-bold mt-0.5">
                  {bottleneckSummary.summary}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                  <span className="text-slate-500 text-[11.5px] block font-semibold">Total Pending</span>
                  <span className="text-xl font-bold text-slate-900">{bottleneckSummary.pendingCases}</span>
                </div>
                <div className="p-3 bg-red-50 rounded-[2px] border border-red-200">
                  <span className="text-red-800 text-[11.5px] block font-semibold">SLA Overdue</span>
                  <span className="text-xl font-bold text-red-900">{bottleneckSummary.overdueCases}</span>
                </div>
                <div className="p-3 bg-amber-50 rounded-[2px] border border-amber-200">
                  <span className="text-amber-800 text-[11.5px] block font-semibold">Backlog Trend</span>
                  <span className="text-[13px] font-bold text-amber-900 mt-1 block">Increasing (+18%)</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-800 text-[13px] leading-relaxed">
                <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                  <strong className="text-slate-900 block mb-0.5">Root Cause Diagnostic:</strong>
                  {bottleneckSummary.rootCause}
                </div>
                <div className="p-3 bg-[#F0F4F8] rounded-[2px] border border-blue-200 text-[#1B365D]">
                  <strong className="block mb-0.5">Recommended Intervention:</strong>
                  {bottleneckSummary.recommendedIntervention}
                </div>
              </div>

              {/* Interactive SLA Escalation Button Action */}
              <div className="pt-1">
                {isEscalated ? (
                  <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-[3px] text-xs space-y-1 text-emerald-950">
                    <div className="flex items-center gap-1.5 font-bold text-[13px] text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Formal Statutory Notice Dispatched</span>
                    </div>
                    <p className="text-emerald-800 text-[12px] leading-normal font-mono">
                      Ref: <strong>{escalationRef}</strong> • Dispatched to MPCB Member Secretary & Regional Officer. Priority scrutiny committee assigned.
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={handleDispatchSlaNotice}
                    disabled={isEscalating}
                    className="w-full bg-[#1B365D] hover:bg-[#142947] text-white py-2.5 px-3 rounded-[3px] text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    {isEscalating ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Dispatching Formal Notice to MPCB...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>⚡ Dispatch Urgent SLA Notice to MPCB Regional Officer</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
            <span className="text-slate-500 text-[12px]">Identified via SLA variance analytics</span>
            <button
              onClick={() => onNavigate('gov-delayed')}
              className="text-[#1B365D] font-bold hover:underline flex items-center gap-1 text-[13px]"
            >
              <span>Examine All 42 Overdue Cases</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Processing Time Bar Chart */}
        <div className="lg:col-span-6 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-[16.5px] font-bold text-slate-900">
                  Average Processing Time by Department
                </h2>
                <span className="text-[12.5px] text-slate-500">Days taken vs standard SLA benchmarks (Prototype Data)</span>
              </div>
              <span className="text-[11px] uppercase font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-[2px] border border-slate-300">
                Prototype Data
              </span>
            </div>

            <div className="h-60 mt-4 text-xs font-sans">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentProcessingTimes} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="department" 
                    tick={{ fontSize: 11, fill: '#334155' }} 
                    interval={0}
                    angle={-15}
                    textAnchor="end"
                  />
                  <YAxis tick={{ fontSize: 11.5, fill: '#334155' }} />
                  <Tooltip 
                    formatter={(val, name) => [`${val} Days`, name === 'avgDays' ? 'Average Processing Time' : 'Standard SLA']}
                    contentStyle={{ backgroundColor: '#1B365D', color: '#fff', borderRadius: '3px', fontSize: '12px' }}
                  />
                  <Bar dataKey="avgDays" name="avgDays" radius={[2, 2, 0, 0]}>
                    {departmentProcessingTimes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 text-[12.5px]">
            <span>Pollution (12d), Factory (15d), Fire (8d), Electricity (5d)</span>
            <span className="font-bold text-slate-900">Standard Target: ≤ 14 Days</span>
          </div>
        </div>
      </div>

      {/* Delayed Cases Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-bold text-slate-900">
              High-Priority Delayed Applications
            </h2>
            <p className="text-[13px] text-slate-500 mt-0.5">
              Industrial applications currently exceeding statutory SLA timelines
            </p>
          </div>

          <button
            onClick={() => onNavigate('gov-applications')}
            className="text-[13px] font-bold text-[#1B365D] hover:underline flex items-center gap-1"
          >
            <span>View All Department Cases</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Application ID</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Enterprise Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Approval Type</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Department</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Days Pending</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Delay</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Officer Assigned</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {delayedCases.slice(0, 5).map((c) => (
                <tr 
                  key={c.id}
                  onClick={() => onSelectCase?.(c)}
                  className="hover:bg-red-50/30 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-mono font-bold text-[#1B365D] text-[13.5px]">
                    {c.id}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900 text-[14.5px]">
                    {c.companyName}
                  </td>
                  <td className="py-3 px-4 text-slate-800 text-[14px]">
                    {c.approval}
                  </td>
                  <td className="py-3 px-4 text-slate-700 text-[14px]">
                    {c.department}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-slate-900 text-[14px]">
                    {c.daysPending} days
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-red-900 font-bold bg-red-100 px-2 py-0.5 rounded-[2px] border border-red-300 text-[12px]">
                      {c.delay}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700 text-[13.5px]">
                    {c.assignedOfficer}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCase?.(c);
                      }}
                      className="px-3 py-1 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[2px] text-[12.5px] font-bold shadow-sm"
                    >
                      Review Case
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
