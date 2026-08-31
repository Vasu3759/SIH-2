import React from 'react';
import { 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Layers
} from 'lucide-react';
import { getRequiredApprovals } from '../../services/approvalEngine';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function RecommendationEngine({ project, onNavigate }) {
  const result = getRequiredApprovals(project);

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Decision Logic Breakdown
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Approval Recommendation Logic
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Transparent policy rule evaluation mapping business parameters directly to statutory requirements.
          </p>
        </div>

        <button
          onClick={() => onNavigate('required-approvals')}
          className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
        >
          <span>View Clearance Checklist</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <ProjectSummaryStrip project={project} onEdit={() => onNavigate('onboarding')} />

      {/* Engine Architecture Header Banner */}
      <div className="p-4.5 bg-[#1B365D] text-white rounded-[3px] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-[3px] bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-white">
              Rule Engine + Government Knowledge Base
            </h2>
            <p className="text-[13px] text-slate-200 mt-0.5 leading-relaxed">
              Eliminates guesswork by executing deterministic statutory policy rules backed by official government gazettes.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs shrink-0">
          <span className="bg-[#142947] text-emerald-300 px-3 py-1 rounded-[2px] border border-emerald-700/50 font-bold text-[12px]">
            ✓ Deterministic Policy Rules
          </span>
        </div>
      </div>

      {/* 3-Column Decision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Column 1: Input Parameters */}
        <div className="lg:col-span-4 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider">Step 1</span>
              <span className="text-[14px] font-bold text-[#1B365D]">Business Parameters</span>
            </div>

            <div className="mt-4 space-y-2.5 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                <span className="text-slate-500 block text-[11px] font-sans font-medium">Industry Classification</span>
                <span className="font-bold text-slate-900 text-[13.5px] font-sans">{project.industry}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                <span className="text-slate-500 block text-[11px] font-sans font-medium">Workforce Count</span>
                <span className="font-bold text-slate-900 text-[13.5px] font-sans">{project.employees} Employees</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                <span className="text-slate-500 block text-[11px] font-sans font-medium">Capital Investment</span>
                <span className="font-bold text-slate-900 text-[13.5px] font-sans">{project.investment}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                <span className="text-slate-500 block text-[11px] font-sans font-medium">Location</span>
                <span className="font-bold text-slate-900 text-[13.5px] font-sans">{project.location?.district} (MIDC)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-[2px] border border-slate-200">
                <span className="text-slate-500 block text-[11px] font-sans font-medium">Hazardous Materials</span>
                <span className={`font-bold text-[13.5px] font-sans ${project.hasHazardousMaterials ? 'text-red-800' : 'text-slate-900'}`}>
                  {project.hasHazardousMaterials ? 'YES' : 'NO'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-center">
            <span className="text-[12px] text-slate-500 font-semibold">Inputs cross-checked against statutory acts</span>
          </div>
        </div>

        {/* Column 2: Evaluated Rules */}
        <div className="lg:col-span-5 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider">Step 2</span>
            <span className="text-[14px] font-bold text-[#1B365D]">Statutory Rules Evaluated</span>
          </div>

          <div className="mt-4 space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
            {result.rulesEvaluated.map((r, idx) => (
              <div 
                key={idx}
                className={`p-3.5 rounded-[2px] border text-xs ${
                  r.matched 
                    ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[13.5px]">
                    {r.matched ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-400 inline-block shrink-0"></span>
                    )}
                    {r.rule}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.2 rounded-[2px] uppercase ${
                    r.matched ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {r.matched ? 'Applicable' : 'Exempt'}
                  </span>
                </div>
                <div className="text-[12px] text-slate-600 mt-1 font-mono">
                  CONDITION: {r.condition}
                </div>
                <div className="text-[13px] font-semibold text-[#1B365D] mt-1 font-sans">
                  DECISION: {r.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Resulting Clearance Package */}
        <div className="lg:col-span-3 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider">Step 3</span>
              <span className="text-[14px] font-bold text-[#1B365D]">Compiled Package</span>
            </div>

            <div className="mt-4 text-center p-4 bg-[#F0F4F8] rounded-[2px] border border-blue-200">
              <span className="text-4xl font-bold text-[#1B365D] font-sans block">
                {result.totalCount}
              </span>
              <span className="text-[13px] font-bold text-slate-900 uppercase tracking-wider mt-1 block">
                Approvals Required
              </span>
              <span className="text-[12px] text-slate-600 mt-0.5 block">
                Consolidated single-window package
              </span>
            </div>

            <div className="mt-4 space-y-1.5">
              <div className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Mandatory Clearances:
              </div>
              {result.approvals.slice(0, 5).map((app, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 rounded-[2px] text-xs flex items-center justify-between border border-slate-200">
                  <span className="font-semibold text-slate-900 truncate pr-2 text-[13px]">{app.name}</span>
                  <span className="text-[11.5px] text-slate-500 shrink-0">{app.department.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('required-approvals')}
            className="w-full mt-4 bg-[#1B365D] hover:bg-[#142947] text-white py-2 rounded-[3px] text-[13px] font-semibold transition-colors shadow-sm"
          >
            Open All {result.totalCount} Clearances
          </button>
        </div>
      </div>
    </div>
  );
}
