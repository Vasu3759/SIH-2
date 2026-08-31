import React from 'react';
import { 
  Building2, 
  Upload, 
  ArrowRight, 
  FileCheck, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  GitBranch, 
  FileText, 
  Files,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function EntrepreneurDashboard({ 
  project, 
  approvals, 
  onSelectApproval, 
  onNavigate, 
  onOpenDocumentMismatch,
  documentsFixed
}) {
  const statusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">✓ Approved</span>;
      case 'Under Review':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-bold bg-amber-50 text-amber-900 border border-amber-300">Under Review</span>;
      case 'Inspection':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-bold bg-blue-50 text-blue-900 border border-blue-300">Inspection Scheduled</span>;
      case 'Action Required':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-bold bg-red-50 text-red-900 border border-red-300">Action Required</span>;
      default:
        return <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-medium bg-slate-100 text-slate-700 border border-slate-300">Not Started</span>;
    }
  };

  const progressPercent = documentsFixed ? 78 : (project.overallProgress || 72);

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Industrial Facilitation Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight">
            Good afternoon, {project.name}
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            {project.location?.industrialArea || "Chakan MIDC Phase II"}, {project.location?.district}, {project.location?.state}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onNavigate('roadmap')}
            className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <GitBranch className="w-4 h-4 text-[#1B365D]" />
            <span>Approval Roadmap</span>
          </button>
          <button
            onClick={() => onNavigate('required-approvals')}
            className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <span>Required Clearances</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Parameters Strip */}
      <ProjectSummaryStrip project={project} onEdit={() => onNavigate('onboarding')} />

      {/* Top 2-Column Grid: Progress & Next Action */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Panel: Project Approval Progress (72%) */}
        <div className="lg:col-span-5 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-[16.5px] font-bold text-slate-900">
                Project Approval Progress
              </h2>
              <span className="text-3xl font-bold text-[#1B365D] font-sans">
                {progressPercent}%
              </span>
            </div>
            <p className="text-[13px] text-slate-500 mt-0.5">
              Overall statutory clearance progress for commercial operations
            </p>

            {/* Horizontal Practical Progress Bar */}
            <div className="w-full bg-slate-200 rounded-[2px] h-3.5 mt-4 overflow-hidden border border-slate-300">
              <div
                className="bg-[#1B365D] h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Counts Row */}
          <div className="grid grid-cols-4 gap-2 pt-4 mt-4 border-t border-slate-200 text-center text-xs">
            <div className="p-2 bg-emerald-50 rounded-[2px] border border-emerald-200">
              <span className="block text-emerald-900 font-bold text-[18px]">4</span>
              <span className="text-[12px] text-emerald-800 font-semibold">Completed</span>
            </div>
            <div className="p-2 bg-amber-50 rounded-[2px] border border-amber-200">
              <span className="block text-amber-900 font-bold text-[18px]">2</span>
              <span className="text-[12px] text-amber-800 font-semibold">In Review</span>
            </div>
            <div className={`p-2 rounded-[2px] border ${documentsFixed ? 'bg-slate-50 border-slate-200' : 'bg-red-50 border-red-200'}`}>
              <span className={`block font-bold text-[18px] ${documentsFixed ? 'text-slate-700' : 'text-red-900'}`}>
                {documentsFixed ? 0 : 1}
              </span>
              <span className={`text-[12px] font-semibold ${documentsFixed ? 'text-slate-600' : 'text-red-800'}`}>
                Action Req.
              </span>
            </div>
            <div className="p-2 bg-slate-50 rounded-[2px] border border-slate-200">
              <span className="block text-slate-800 font-bold text-[18px]">2</span>
              <span className="text-[12px] text-slate-600 font-semibold">Not Started</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Next Action */}
        <div className={`lg:col-span-7 rounded-[3px] border p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between ${
          documentsFixed 
            ? 'bg-emerald-50/70 border-emerald-300'
            : 'bg-[#FFFBEB] border-[#FCD34D]'
        }`}>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-[11.5px] font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wide ${
                  documentsFixed ? 'bg-emerald-700 text-white' : 'bg-[#B45309] text-white'
                }`}>
                  {documentsFixed ? "Status: Verified" : "Next Action Required"}
                </span>
                <span className="text-[13px] text-slate-700 font-medium">
                  Application: <strong>Factory Licence (DISH)</strong>
                </span>
              </div>
              <span className="text-[13px] text-slate-700 font-semibold">
                Target Deadline: <strong className="text-red-800">27 August 2026</strong>
              </span>
            </div>

            <div className="mt-3">
              <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                {documentsFixed 
                  ? "✓ Revised Factory Layout Successfully Verified"
                  : "Upload revised Factory Layout Drawing"}
              </h3>
              <p className="text-[13.5px] text-slate-700 mt-1 leading-relaxed">
                {documentsFixed
                  ? "Drawing coordinates verified against registered MIDC lease deed (Survey 123/4B). Directorate of Industrial Safety & Health (DISH) scrutiny proceeding."
                  : "Factory Licence application has a document issue: Survey coordinate inconsistency detected between layout title block (123/4) and registered MIDC Lease Deed (123/4B)."}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[12.5px] text-slate-600 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1B365D]" />
              <span>Resolving this unblocks technical safety audit and MSEDCL power connection</span>
            </span>

            {documentsFixed ? (
              <button
                onClick={() => onNavigate('documents')}
                className="px-4 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>View Verified Documents</span>
              </button>
            ) : (
              <button
                onClick={onOpenDocumentMismatch}
                className="px-4 py-2 bg-[#991B1B] hover:bg-[#7F1D1D] text-white rounded-[3px] text-[13px] font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Revised Document</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Approvals Summary Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-bold text-slate-900">
              Departmental Approvals Summary
            </h2>
            <p className="text-[13px] text-slate-500 mt-0.5">
              Current status across Maharashtra state and central regulatory authorities
            </p>
          </div>

          <button
            onClick={() => onNavigate('applications')}
            className="text-[13px] font-bold text-[#1B365D] hover:underline flex items-center gap-1"
          >
            <span>View Full Applications Register</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Approval Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Department</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Status</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Documents</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Processing Time</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {approvals.slice(0, 7).map((app) => {
                const uploadedDocs = app.documents?.filter(d => d.uploaded).length || 0;
                const totalDocs = app.documents?.length || 0;
                const isActionReq = app.status === 'Action Required' && !documentsFixed;

                return (
                  <tr 
                    key={app.id}
                    className={`hover:bg-slate-50 transition-colors ${
                      isActionReq ? 'bg-red-50/40' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-slate-900 text-[14.5px]">
                      <div className="flex items-center gap-2">
                        {app.name}
                        {app.isParallel && (
                          <span className="text-[11px] bg-blue-50 text-blue-800 px-1.5 py-0.2 rounded-[2px] border border-blue-200 font-semibold">
                            Parallel Track
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-[14px]">
                      {app.department}
                    </td>
                    <td className="py-3 px-4">
                      {isActionReq ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[12px] font-bold bg-red-50 text-red-900 border border-red-300">
                          Action Required
                        </span>
                      ) : (
                        statusBadge(app.status)
                      )}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-[13.5px]">
                      <span className={`font-bold ${uploadedDocs === totalDocs ? 'text-emerald-800' : 'text-slate-800'}`}>
                        {uploadedDocs}/{totalDocs}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-[13px]">
                      {app.estimatedTime ? app.estimatedTime.replace('Prototype estimate: ', '') : '15–20 working days'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      {isActionReq ? (
                        <button
                          onClick={onOpenDocumentMismatch}
                          className="px-3 py-1 bg-red-800 hover:bg-red-900 text-white rounded-[2px] text-[12.5px] font-bold"
                        >
                          Resolve Issue
                        </button>
                      ) : (
                        <button
                          onClick={() => onSelectApproval(app)}
                          className="px-3 py-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-[2px] text-[12.5px] font-semibold shadow-sm transition-colors"
                        >
                          {app.status === 'Approved' ? 'View' : app.status === 'Under Review' ? 'Track' : 'Details'}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Parallel Processing Opportunity Banner */}
      <div className="p-4.5 bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-[3px] bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <Zap className="w-5 h-5 text-[#1B365D]" />
          </div>
          <div>
            <h3 className="text-[15.5px] font-bold text-slate-900">
              Parallel Departmental Processing Opportunity
            </h3>
            <p className="text-[13.5px] text-slate-600 mt-0.5 leading-relaxed">
              Pollution Consent (CTE), Fire Provisional NOC, Building Permission, and FSSAI Licence are configured to run concurrently following Land Allotment.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('roadmap')}
          className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold shrink-0 shadow-sm"
        >
          View Roadmap Graph
        </button>
      </div>
    </div>
  );
}
