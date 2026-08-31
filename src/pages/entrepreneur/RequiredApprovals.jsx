import React, { useState } from 'react';
import { 
  FileCheck, 
  Building2, 
  Clock, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle,
  GitBranch,
  ShieldCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function RequiredApprovals({ project, approvals, onSelectApproval, onNavigate }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Corporate & Legal', 'Land & Infrastructure', 'Construction & Infrastructure', 'Environmental', 'Safety & Emergency', 'Labour & Safety', 'Food Safety', 'Utilities & Power', 'Financial Subsidies & Incentives'];

  const filteredApprovals = filterCategory === 'All' 
    ? approvals 
    : approvals.filter(a => a.category === filterCategory);

  const statusBadgeStyles = {
    'Approved': 'bg-emerald-50 text-emerald-800 border-emerald-300',
    'Under Review': 'bg-amber-50 text-amber-900 border-amber-300',
    'Inspection': 'bg-blue-50 text-blue-900 border-blue-300',
    'Action Required': 'bg-red-50 text-red-900 border-red-300',
    'Not Started': 'bg-slate-100 text-slate-700 border-slate-300',
    'Eligible / Not Applied': 'bg-blue-50 text-blue-900 border-blue-300'
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Clearance Checklist
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Required Approvals
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Based on your business profile, location, scale of operations, and statutory threshold rules.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('engine')}
            className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <span>View Rule Logic</span>
          </button>
          <button
            onClick={() => onNavigate('roadmap')}
            className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <GitBranch className="w-4 h-4" />
            <span>Approval Roadmap</span>
          </button>
        </div>
      </div>

      {/* Project Parameters Strip */}
      <ProjectSummaryStrip project={project} onEdit={() => onNavigate('onboarding')} />

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-500 font-bold uppercase text-[11.5px] shrink-0">Filter By:</span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1 rounded-[3px] whitespace-nowrap text-[12.5px] font-medium transition-colors ${
              filterCategory === cat
                ? 'bg-[#1B365D] text-white font-bold'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Approvals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredApprovals.map((app, idx) => {
          const uploadedDocs = app.documents?.filter(d => d.uploaded).length || 0;
          const totalDocs = app.documents?.length || 0;

          return (
            <div
              key={app.id}
              onClick={() => onSelectApproval(app)}
              className="bg-white rounded-[3px] border border-[#CBD5E1] p-4.5 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {idx + 1}. {app.category}
                    </span>
                    <h3 className="text-[16px] font-bold text-slate-900 leading-snug">
                      {app.name}
                    </h3>
                    <p className="text-[13px] text-slate-600 mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{app.department}</span>
                    </p>
                  </div>

                  <span className={`px-2 py-0.5 rounded-[2px] text-[11.5px] font-bold border shrink-0 ${statusBadgeStyles[app.status] || 'bg-slate-100 text-slate-700'}`}>
                    {app.status}
                  </span>
                </div>

                <div className="mt-3 p-3 bg-slate-50 rounded-[2px] border border-slate-200 text-[13px] text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">Why required: </strong>
                  {app.ruleReason || app.whyRequired}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="flex items-center gap-1 text-[13px]">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <strong>{uploadedDocs}/{totalDocs}</strong> Documents
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="flex items-center gap-1 text-[12.5px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{app.estimatedTime ? app.estimatedTime.replace('Prototype estimate: ', '') : '15–20 working days'}</span>
                  </span>
                </div>

                <span className="text-[#1B365D] font-bold flex items-center gap-1 text-[13px] hover:underline">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
