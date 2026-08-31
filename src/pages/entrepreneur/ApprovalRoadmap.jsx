import React from 'react';
import { 
  GitBranch, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Zap, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { getApprovalDependencyGraph } from '../../services/dependencyEngine';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function ApprovalRoadmap({ project, onSelectApprovalById, onNavigate }) {
  const graph = getApprovalDependencyGraph(project);

  const statusBadges = {
    'APPROVED': 'bg-emerald-50 text-emerald-800 border-emerald-300',
    'UNDER_REVIEW': 'bg-amber-50 text-amber-900 border-amber-300',
    'INSPECTION': 'bg-blue-50 text-blue-900 border-blue-300',
    'ACTION_REQUIRED': 'bg-red-50 text-red-900 border-red-300',
    'NOT_STARTED': 'bg-slate-100 text-slate-700 border-slate-300'
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Workflow Sequencing
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Approval Dependency Roadmap
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Clear mapping of prerequisite foundation stages versus parallel departmental tracks.
          </p>
        </div>

        <button
          onClick={() => onNavigate('required-approvals')}
          className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold shadow-sm flex items-center gap-1.5"
        >
          <span>View Approvals Checklist</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <ProjectSummaryStrip project={project} onEdit={() => onNavigate('onboarding')} />

      {/* Parallel Opportunities Highlight Banner */}
      <div className="p-4.5 bg-[#F0F4F8] border border-[#BFDBFE] rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-[3px] bg-[#1B365D] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Zap className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h2 className="text-[15.5px] font-bold text-[#1B365D]">
              Parallel Processing Opportunities
            </h2>
            <p className="text-[13.5px] text-slate-700 mt-0.5 leading-relaxed">
              "Instead of treating approvals as one long sequential queue, the system coordinates multiple departmental reviews simultaneously once site title is established."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {graph.parallelOpportunities.map((opp, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-[3px] border border-blue-200 text-xs">
                  <div className="font-bold text-slate-900 text-[13.5px]">{opp.title}</div>
                  <p className="text-slate-600 text-[12.5px] mt-1 leading-normal">{opp.description}</p>
                  <div className="mt-1.5 text-[12px] font-bold text-emerald-800">
                    💡 Benefit: {opp.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visual Dependency Graph */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-[#1B365D]" />
            <h2 className="text-[17px] font-bold text-slate-900">
              Departmental Dependency Stages
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Approved
            </span>
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> In Progress
            </span>
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> Action Required
            </span>
          </div>
        </div>

        {/* STAGE 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#1B365D] text-white px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold">
              STAGE 1
            </span>
            <span className="text-[13px] font-bold text-slate-800 uppercase tracking-wider">
              Entity & Land Foundation (Sequential)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {graph.stages[0].nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => onSelectApprovalById?.(node.id)}
                className="bg-white border-2 border-emerald-600/70 rounded-[3px] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11.5px] font-bold text-slate-500 uppercase">{node.department}</span>
                    <h3 className="text-[15px] font-bold text-slate-900 mt-0.5">{node.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold border ${statusBadges[node.status]}`}>
                    ✓ {node.statusLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Down Connector */}
        <div className="flex justify-center text-slate-400">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-slate-300"></div>
            <ArrowDown className="w-5 h-5 text-slate-400 -mt-1" />
          </div>
        </div>

        {/* STAGE 2: PARALLEL DEPARTMENTAL TRACKS */}
        <div className="bg-[#F8FAFC] p-5 rounded-[3px] border-2 border-blue-400 border-dashed space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-blue-800 text-white px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold">
                STAGE 2
              </span>
              <span className="text-[13px] font-bold text-[#1B365D] uppercase tracking-wider">
                Concurrent Departmental Scrutiny (Parallel Track)
              </span>
            </div>
            <span className="text-[12px] font-bold text-blue-950 bg-blue-100 px-2.5 py-0.5 rounded-[2px] border border-blue-200">
              ⚡ 4 Approvals Running Simultaneously
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {graph.stages[1].nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => onSelectApprovalById?.(node.id)}
                className="bg-white border border-slate-300 rounded-[3px] p-4 shadow-sm hover:border-[#1B365D] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11.5px] font-bold text-slate-500 uppercase block">{node.department}</span>
                  <h4 className="text-[13.5px] font-bold text-slate-900 mt-0.5 leading-snug">{node.name}</h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded-[2px] text-[11px] font-bold border ${statusBadges[node.status]}`}>
                    {node.statusLabel}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold uppercase">Parallel</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Down Connector */}
        <div className="flex justify-center text-slate-400">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-slate-300"></div>
            <ArrowDown className="w-5 h-5 text-slate-400 -mt-1" />
          </div>
        </div>

        {/* STAGE 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#1B365D] text-white px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold">
              STAGE 3
            </span>
            <span className="text-[13px] font-bold text-slate-800 uppercase tracking-wider">
              Plant Setup, Factory Licensing & Power Connection
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {graph.stages[2].nodes.map((node) => (
              <div
                key={node.id}
                onClick={() => onSelectApprovalById?.(node.id)}
                className={`bg-white border-2 rounded-[3px] p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  node.status === 'ACTION_REQUIRED' ? 'border-red-400' : 'border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11.5px] font-bold text-slate-500 uppercase">{node.department}</span>
                    <h3 className="text-[15px] font-bold text-slate-900 mt-0.5">{node.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold border ${statusBadges[node.status]}`}>
                    {node.statusLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Down Connector */}
        <div className="flex justify-center text-slate-400">
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-slate-300"></div>
            <ArrowDown className="w-5 h-5 text-slate-400 -mt-1" />
          </div>
        </div>

        {/* STAGE 4 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-slate-700 text-white px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold">
              STAGE 4
            </span>
            <span className="text-[13px] font-bold text-slate-800 uppercase tracking-wider">
              Trial Production & Commercial Launch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {graph.stages[3].nodes.map((node) => (
              <div
                key={node.id}
                className="bg-slate-50 border border-slate-300 rounded-[3px] p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11.5px] font-bold text-slate-500 uppercase">{node.department}</span>
                    <h3 className="text-[15px] font-bold text-slate-800 mt-0.5">{node.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold border ${statusBadges[node.status]}`}>
                    {node.statusLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
