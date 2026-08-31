import React from 'react';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  UserCheck, 
  FileText, 
  BarChart3
} from 'lucide-react';
import { trustAndGovernancePrinciples } from '../../data/rules';

export default function Architecture() {
  const pipelineSteps = [
    { step: 1, title: "1. Entrepreneur Input", desc: "Industry, Location, Employees, Investment, Hazardous flag", type: "Input" },
    { step: 2, title: "2. Project Profile", desc: "Normalized parameters & classification metadata", type: "Input" },
    { step: 3, title: "3. Rule Engine", desc: "Evaluates statutory acts & worker/power thresholds", type: "Deterministic Rule" },
    { step: 4, title: "4. Knowledge Base", desc: "Authoritative checklists from MPCB, DISH, MFES, FSSAI", type: "Knowledge" },
    { step: 5, title: "5. Dependency Graph", desc: "Calculates prerequisite stages and parallel opportunities", type: "Deterministic Rule" },
    { step: 6, title: "6. Document Intelligence", desc: "Cross-checks title consistency & survey coordinates", type: "AI-Assisted" },
    { step: 7, title: "7. Single Window", desc: "Unified dashboard with milestone timelines", type: "Tracking" },
    { step: 8, title: "8. Compliance & Renewals", desc: "Multi-tier proactive expiry monitoring (30d/15d/7d)", type: "Compliance" },
    { step: 9, title: "9. Department Analytics", desc: "SLA variance tracking & bottleneck diagnostics", type: "Government" }
  ];

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            System Design & Governance
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            System Architecture & Human-Centered Governance
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Transparent separation between deterministic statutory logic and AI-assisted decision support.
          </p>
        </div>
      </div>

      {/* AI vs Deterministic Comparison Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-[3px] border-2 border-emerald-600/80 shadow-sm">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 h-6 rounded-[2px] bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs">
              ✓
            </span>
            <h2 className="text-[17px] font-bold text-slate-900">
              Rule-Based & Deterministic Components
            </h2>
          </div>
          <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">
            Statutory legal compliance requires 100% precision without probabilistic hallucinations.
          </p>
          <ul className="space-y-1.5 text-[13px] text-slate-800 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              <span><strong>Approval Applicability:</strong> Factories Act, Water/Air Acts, FSSAI rules</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              <span><strong>Dependency Mapping:</strong> Prerequisites and parallel processing sequences</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              <span><strong>Subsidy Matching:</strong> Maharashtra PSI 2019 eligibility thresholds</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-[3px] border-2 border-blue-600/80 shadow-sm">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 h-6 rounded-[2px] bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs">
              AI
            </span>
            <h2 className="text-[17px] font-bold text-slate-900">
              AI-Assisted Decision Support Components
            </h2>
          </div>
          <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">
            AI is deployed specifically where human review is slow or unstructured data needs extraction.
          </p>
          <ul className="space-y-1.5 text-[13px] text-slate-800 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
              <span><strong>Document Intelligence:</strong> OCR metadata extraction & survey mismatch checks</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
              <span><strong>Guidance Assistant:</strong> RAG retrieval on government knowledge base</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B365D]"></span>
              <span><strong>Bottleneck Diagnostics:</strong> Predictive backlog trend analytics</span>
            </li>
          </ul>
        </div>
      </div>

      {/* End-to-End Processing Flow Grid */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] space-y-4">
        <h2 className="text-[17px] font-bold text-slate-900 pb-2 border-b border-slate-200">
          End-to-End System Processing Flow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {pipelineSteps.map((s) => (
            <div key={s.step} className="p-3.5 bg-slate-50 rounded-[2px] border border-slate-200 text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#1B365D] text-[13px]">{s.title}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-[2px] uppercase ${
                    s.type === 'AI-Assisted' ? 'bg-blue-100 text-blue-900 border border-blue-200' :
                    s.type === 'Deterministic Rule' ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' :
                    'bg-slate-200 text-slate-800'
                  }`}>
                    {s.type}
                  </span>
                </div>
                <p className="text-[12.5px] text-slate-600 leading-normal mt-1">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Governance Principles Grid */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
          <ShieldCheck className="w-5 h-5 text-[#1B365D]" />
          <h2 className="text-[17px] font-bold text-slate-900">
            Trust & Governance Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustAndGovernancePrinciples.map((p, idx) => (
            <div key={idx} className="p-4 rounded-[2px] border border-slate-200 bg-slate-50/70 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-[14px]">{p.title}</h3>
                <span className="text-[11px] font-bold bg-white border border-slate-300 text-slate-700 px-2 py-0.5 rounded-[2px]">
                  {p.badge}
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
