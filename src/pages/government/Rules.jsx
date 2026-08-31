import React from 'react';
import { 
  Sliders, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Plus
} from 'lucide-react';
import { approvalRules } from '../../data/rules';

export default function Rules({ showToast }) {
  const handleAddNewRule = () => {
    showToast?.("Department Policy Rule Repository (Prototype View)", "info");
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Statutory Rules Repository
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Approval Rules & Policy Knowledge Base
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Human-readable, deterministic policy rules that trigger mandatory clearances and document requirements.
          </p>
        </div>

        <button
          onClick={handleAddNewRule}
          className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold shadow-sm flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Department Policy Rule</span>
        </button>
      </div>

      {/* Info Banner */}
      <div className="p-4 bg-[#F0F4F8] border border-blue-200 rounded-[3px] text-xs text-[#1B365D] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#1B365D] shrink-0" />
          <span className="text-[13px] leading-relaxed">
            <strong>Deterministic Policy Management:</strong> Rules are mapped to statutory provisions and gazette notifications. Rules can be updated by department administrators without changing codebase logic.
          </span>
        </div>
      </div>

      {/* Policy Rules Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {approvalRules.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-200">
                <div>
                  <span className="text-[11.5px] font-mono font-bold text-slate-500 uppercase">
                    {r.id} • {r.category}
                  </span>
                  <h3 className="text-[16px] font-bold text-slate-900 mt-0.5">
                    {r.title}
                  </h3>
                </div>
                <span className="text-[11.5px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-[2px] shrink-0 border border-slate-200">
                  {r.sourceAct}
                </span>
              </div>

              {/* IF Condition */}
              <div className="mt-3 bg-slate-50 p-3 rounded-[2px] border border-slate-200 text-xs font-mono">
                <span className="text-slate-500 font-bold text-[11px] block uppercase mb-1 font-sans">
                  [Condition]
                </span>
                <div className="text-slate-900 text-[12.5px]">
                  <strong>IF</strong> {JSON.stringify(r.condition).replace(/[{"}]/g, '').replace(/,/g, ' AND ')}
                </div>
              </div>

              {/* THEN Action */}
              <div className="mt-2 bg-emerald-50 p-3 rounded-[2px] border border-emerald-300 text-xs font-mono">
                <span className="text-emerald-800 font-bold text-[11px] block uppercase mb-1 font-sans">
                  [Action]
                </span>
                <div className="text-emerald-950 font-bold text-[12.5px]">
                  <strong>THEN</strong> {r.action}
                </div>
              </div>

              {/* Legal Explanation */}
              <p className="mt-3 text-[13px] text-slate-700 leading-relaxed font-sans">
                <strong>Legal Basis:</strong> {r.explanation}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="text-[12px]">Status: <strong className="text-emerald-800 font-bold">Active in Production</strong></span>
              <button
                onClick={handleAddNewRule}
                className="text-[#1B365D] font-bold text-[12.5px] hover:underline"
              >
                Inspect Gazette Reference →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
