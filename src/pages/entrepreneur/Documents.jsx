import React, { useState } from 'react';
import { 
  Files, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  FileSearch, 
  Plus
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function Documents({ 
  project, 
  documents, 
  onSelectDocument, 
  onUploadSimulatedFile,
  showToast 
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleSimulateDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    onUploadSimulatedFile({ name: "Revised_Factory_Master_Plan_v2.pdf" });
    showToast?.("Uploaded Revised_Factory_Master_Plan_v2.pdf — Scrutiny Verified", "success");
  };

  const filteredDocs = filter === 'All'
    ? documents
    : filter === 'Issues'
    ? documents.filter(d => d.status === 'Issue Found')
    : documents.filter(d => d.status === 'Valid');

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Document Repository & Pre-Scrutiny
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Document Verification
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Automated cross-field validation to catch discrepancies between architectural plans and registered deeds.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onUploadSimulatedFile({ name: `Supplemental_Dossier_${Date.now().toString().slice(-4)}.pdf` });
              showToast?.("Simulated upload of supplementary compliance dossier", "info");
            }}
            className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Upload New Document</span>
          </button>
        </div>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Upload Drag & Drop Area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleSimulateDrop}
        className={`p-6 border-2 border-dashed rounded-[3px] bg-white text-center transition-all ${
          isDragging
            ? 'border-[#1B365D] bg-blue-50/50'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <div className="w-10 h-10 mx-auto rounded-[3px] bg-slate-100 flex items-center justify-center text-slate-600">
            <Upload className="w-5 h-5 text-[#1B365D]" />
          </div>
          <div className="text-[15px] font-bold text-slate-900">
            Drag and drop architectural blueprints, deeds, or CA certificates here
          </div>
          <p className="text-[13px] text-slate-500">
            Supported formats: PDF, DWG, JPG (Max 25MB). Automated cross-validation will run automatically.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onUploadSimulatedFile({ name: "Architect_Stability_Certificate_2026.pdf" });
                showToast?.("Uploaded Architect_Stability_Certificate_2026.pdf", "info");
              }}
              className="px-4 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-[3px] text-[13px] font-semibold shadow-sm"
            >
              Choose Files from Computer
            </button>
          </div>
        </div>
      </div>

      {/* Document Verification Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-bold text-slate-900">
              Uploaded Documents Checklist
            </h2>
            <p className="text-[13px] text-slate-500 mt-0.5">
              Click any document row to view extracted metadata and consistency verification report.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-[2px] border border-slate-300 text-xs">
            <button
              onClick={() => setFilter('All')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12.5px] ${filter === 'All' ? 'bg-[#1B365D] text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              All ({documents.length})
            </button>
            <button
              onClick={() => setFilter('Issues')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12.5px] ${filter === 'Issues' ? 'bg-red-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Issues Found ({documents.filter(d => d.status === 'Issue Found').length})
            </button>
            <button
              onClick={() => setFilter('Valid')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12.5px] ${filter === 'Valid' ? 'bg-emerald-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Verified ({documents.filter(d => d.status === 'Valid').length})
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Document Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Category</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">File Reference</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Required</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Uploaded</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Verification Status</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredDocs.map((doc) => {
                const isIssue = doc.status === 'Issue Found';

                return (
                  <tr
                    key={doc.id}
                    onClick={() => onSelectDocument(doc)}
                    className={`hover:bg-slate-50 cursor-pointer transition-colors ${
                      isIssue ? 'bg-red-50/40' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-slate-900 text-[14.5px]">
                      {doc.documentType}
                    </td>
                    <td className="py-3 px-4 text-slate-700 text-[14px]">
                      {doc.category}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-600 text-[12.5px]">
                      {doc.fileName}
                    </td>
                    <td className="py-3 px-4 text-center text-[13.5px]">
                      <span className="text-slate-800 font-semibold">Yes</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold inline-flex items-center justify-center text-xs">
                        ✓
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {isIssue ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[12px] font-bold bg-red-100 text-red-900 border border-red-300">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
                          Issue Found
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] text-[12px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                          Valid
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDocument(doc);
                        }}
                        className={`px-3 py-1 rounded-[2px] text-[12.5px] font-semibold transition-colors ${
                          isIssue
                            ? 'bg-red-800 hover:bg-red-900 text-white font-bold'
                            : 'bg-white hover:bg-slate-100 border border-slate-300 text-slate-800'
                        }`}
                      >
                        {isIssue ? 'Inspect & Fix' : 'View Report'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
