import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck, 
  GitBranch, 
  Clock, 
  BarChart3,
  Factory
} from 'lucide-react';

export default function Landing({ onSelectRole, onSelectScenario }) {
  return (
    <div className="min-h-screen bg-[#F4F6F9] flex flex-col justify-between font-sans text-slate-900">
      {/* Top Administrative Bar */}
      <div className="bg-[#0F2139] text-white px-6 py-2 text-xs flex flex-wrap items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2.5">
          <span className="font-bold tracking-wider text-slate-200">GOVERNMENT OF MAHARASHTRA</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Department of Industries — Single Window Services</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#92400E] text-amber-100 px-2 py-0.5 rounded-[2px] text-[11px] font-bold uppercase tracking-wider border border-amber-600/40">
            Prototype Environment
          </span>
          <span className="text-slate-400">SIH 2026</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        {/* Portal Branding Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-[4px] border border-slate-300 shadow-sm mx-auto flex items-center justify-center text-[#1B365D]">
            <Building2 className="w-9 h-9 text-[#1B365D]" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[#EBF2FA] text-[#1B365D] border border-blue-200 text-xs font-semibold px-3 py-1 rounded-[2px] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Single-Window Industrial Approvals & Regulatory Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1B365D] tracking-tight">
              INDUSTRIA
            </h1>
            <p className="text-lg font-bold text-slate-800 mt-1">
              Industrial Approval & Compliance Portal
            </p>
            <p className="text-[15px] text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              "One place to understand, apply for and track industrial approvals across Maharashtra government departments."
            </p>
          </div>
        </div>

        {/* Workspace Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto w-full">
          {/* Entrepreneur Workspace */}
          <div
            onClick={() => onSelectRole('entrepreneur')}
            className="bg-white rounded-[4px] border-2 border-slate-300 hover:border-[#1B365D] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-[3px] bg-blue-50 text-[#1B365D] flex items-center justify-center mb-4 border border-blue-200 group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                <Factory className="w-6 h-6" />
              </div>
              <h2 className="text-[19px] font-bold text-slate-900 group-hover:text-[#1B365D]">
                Entrepreneur Workspace
              </h2>
              <p className="text-[13.5px] text-slate-600 mt-2 leading-relaxed">
                For business founders and industrial project managers to identify required approvals, check document consistency, view parallel roadmaps, and track clearances.
              </p>

              <ul className="mt-4 space-y-1.5 text-[13px] text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Personalized Approval Plan & Rule Breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Sequential & Parallel Approval Roadmap</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Document Consistency Pre-Scrutiny</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>Licence Renewals & State Subsidy Eligibility</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[13.5px] font-bold text-[#1B365D] group-hover:underline">
                Enter as Entrepreneur
              </span>
              <div className="w-7 h-7 rounded-[2px] bg-[#1B365D] text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Government Officer Workspace */}
          <div
            onClick={() => onSelectRole('government')}
            className="bg-white rounded-[4px] border-2 border-slate-300 hover:border-[#1B365D] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center mb-4 border border-slate-300 group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-[19px] font-bold text-slate-900 group-hover:text-[#1B365D]">
                Government Department Workspace
              </h2>
              <p className="text-[13.5px] text-slate-600 mt-2 leading-relaxed">
                For department scrutiny officers, regional directors, and administrative heads (MPCB, DISH, MFES, MSEDCL, SPA) to manage caseloads, inspect delayed files, and resolve bottlenecks.
              </p>

              <ul className="mt-4 space-y-1.5 text-[13px] text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#1B365D] font-bold">✓</span>
                  <span>1,250 Applications Caseload Oversight</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1B365D] font-bold">✓</span>
                  <span>Pollution Department Bottleneck Diagnostic</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1B365D] font-bold">✓</span>
                  <span>42 Overdue Cases Expedited Scrutiny</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1B365D] font-bold">✓</span>
                  <span>Inter-departmental SLA Turnaround Analytics</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[13.5px] font-bold text-[#1B365D] group-hover:underline">
                Enter as Government Officer
              </span>
              <div className="w-7 h-7 rounded-[2px] bg-[#1B365D] text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Demo Presets Strip */}
        <div className="mt-8 bg-white p-4 rounded-[4px] border border-slate-300 shadow-sm max-w-3xl mx-auto w-full text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-slate-200">
            <span className="font-bold text-slate-800 text-[13px]">Quick Demonstration Scenarios:</span>
            <span className="text-slate-500 text-[12px]">Click to launch directly</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2.5">
            <button
              onClick={() => onSelectScenario('food_processing')}
              className="p-3 rounded-[2px] border border-slate-200 bg-slate-50 hover:bg-blue-50 text-left transition-colors"
            >
              <div className="font-bold text-[#1B365D] text-[13.5px]">1. ABC Food Processing (Default)</div>
              <div className="text-[12px] text-slate-600 mt-0.5">Pune • ₹5 Cr, 80 Emp • Orange Cat.</div>
            </button>

            <button
              onClick={() => onSelectScenario('manufacturing')}
              className="p-3 rounded-[2px] border border-slate-200 bg-slate-50 hover:bg-blue-50 text-left transition-colors"
            >
              <div className="font-bold text-[#1B365D] text-[13.5px]">2. Heavy Engineering Plant</div>
              <div className="text-[12px] text-slate-600 mt-0.5">Nagpur • ₹20 Cr, 250 Emp • Red Cat.</div>
            </button>

            <button
              onClick={() => onSelectScenario('it_ites')}
              className="p-3 rounded-[2px] border border-slate-200 bg-slate-50 hover:bg-blue-50 text-left transition-colors"
            >
              <div className="font-bold text-[#1B365D] text-[13.5px]">3. IT / ITES Software Park</div>
              <div className="text-[12px] text-slate-600 mt-0.5">Hinjawadi, Pune • ₹10 Cr • White Cat.</div>
            </button>
          </div>
        </div>
      </div>

      {/* Institutional Footer */}
      <footer className="bg-white border-t border-slate-300 py-3 px-6 text-center text-[12.5px] text-slate-600">
        INDUSTRIA • Industrial Approval & Regulatory Compliance Single-Window Portal • Government of Maharashtra Prototype (SIH 2026)
      </footer>
    </div>
  );
}
