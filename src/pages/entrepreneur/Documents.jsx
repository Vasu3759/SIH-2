import React, { useState } from 'react';
import { 
  Files, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  FileSearch, 
  Plus,
  ShieldCheck,
  Building2,
  Lock,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function Documents({ 
  project, 
  documents, 
  onSelectDocument, 
  onUploadSimulatedFile,
  onOpenDigiLocker,
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

  const digiLockerCount = documents.filter(d => d.source === 'DigiLocker').length;
  const issuesCount = documents.filter(d => d.status === 'Issue Found').length;
  const validCount = documents.filter(d => d.status === 'Valid').length;

  const filteredDocs = filter === 'All'
    ? documents
    : filter === 'DigiLocker'
    ? documents.filter(d => d.source === 'DigiLocker')
    : filter === 'Issues'
    ? documents.filter(d => d.status === 'Issue Found')
    : documents.filter(d => d.status === 'Valid');

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <span>Document Repository & Pre-Scrutiny</span>
            <span className="text-emerald-700 font-bold bg-emerald-100 text-[10.5px] px-1.5 py-0.2 rounded-[2px] border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> DPDP Act 2023 Compliant
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Document Verification & Vault
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Automated cross-field validation & direct authenticated pull from Government Issuers via DigiLocker.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Prominent DigiLocker Button */}
          <button
            onClick={onOpenDigiLocker}
            className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-[3px] text-[13px] font-bold flex items-center gap-2 shadow-sm transition-colors border border-emerald-900"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Fetch via DigiLocker</span>
            <span className="bg-white/20 text-white text-[11px] px-1.5 py-0.2 rounded-[2px] font-mono">
              IndiaStack
            </span>
          </button>

          <button
            onClick={() => {
              onUploadSimulatedFile({ name: `Supplemental_Dossier_${Date.now().toString().slice(-4)}.pdf` });
              showToast?.("Simulated upload of supplementary compliance dossier", "info");
            }}
            className="px-3.5 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Security & Integrity Overview Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 bg-white border border-slate-300 rounded-[3px] shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-[3px] bg-blue-50 text-[#1B365D] flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">DigiLocker Authenticated</div>
            <div className="text-[16px] font-bold text-slate-900">
              {digiLockerCount} of {documents.length} Dossiers
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">X.509 PKI Verified</div>
          </div>
        </div>

        <div className="p-3.5 bg-white border border-slate-300 rounded-[3px] shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-[3px] bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Encryption & Privacy</div>
            <div className="text-[16px] font-bold text-slate-900">AES-256 + TLS 1.3</div>
            <div className="text-[11px] text-slate-600 font-medium">8-Digit Aadhaar Masked</div>
          </div>
        </div>

        <div className="p-3.5 bg-white border border-slate-300 rounded-[3px] shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-[3px] bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-semibold">Pre-Scrutiny Clearance</div>
            <div className="text-[16px] font-bold text-slate-900">
              {validCount} Valid <span className="text-slate-400 font-normal">|</span> {issuesCount} Flagged
            </div>
            <div className="text-[11px] text-slate-600 font-medium">Cross-Checked with Deeds</div>
          </div>
        </div>
      </div>

      {/* Upload Drag & Drop Area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleSimulateDrop}
        className={`p-5 border-2 border-dashed rounded-[3px] bg-white text-center transition-all ${
          isDragging
            ? 'border-[#1B365D] bg-blue-50/50'
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <div className="max-w-md mx-auto space-y-2">
          <div className="w-9 h-9 mx-auto rounded-[3px] bg-slate-100 flex items-center justify-center text-slate-600">
            <Upload className="w-4 h-4 text-[#1B365D]" />
          </div>
          <div className="text-[14px] font-bold text-slate-900">
            Direct Upload for Architectural Blueprints or Structural Drawings
          </div>
          <p className="text-[12px] text-slate-500">
            Uploaded files undergo client-side SHA-256 hashing, virus scanning, and automated pre-scrutiny cross checks.
          </p>
          <div className="pt-1 flex justify-center gap-2">
            <button
              onClick={() => {
                onUploadSimulatedFile({ name: "Architect_Stability_Certificate_2026.pdf" });
                showToast?.("Uploaded Architect_Stability_Certificate_2026.pdf", "info");
              }}
              className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-[3px] text-xs font-semibold shadow-xs"
            >
              Choose Files from Computer
            </button>
            <button
              onClick={onOpenDigiLocker}
              className="px-3.5 py-1.5 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-900 rounded-[3px] text-xs font-bold shadow-xs flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Or Pull from DigiLocker</span>
            </button>
          </div>
        </div>
      </div>

      {/* Document Verification Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[17px] font-bold text-slate-900">
              Uploaded & Ingested Documents Checklist
            </h2>
            <p className="text-[13px] text-slate-500 mt-0.5">
              Click any document row to view extracted metadata, cryptographic signature, and pre-scrutiny report.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-[2px] border border-slate-300 text-xs">
            <button
              onClick={() => setFilter('All')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12px] ${filter === 'All' ? 'bg-[#1B365D] text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              All ({documents.length})
            </button>
            <button
              onClick={() => setFilter('DigiLocker')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12px] ${filter === 'DigiLocker' ? 'bg-emerald-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              DigiLocker ({digiLockerCount})
            </button>
            <button
              onClick={() => setFilter('Issues')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12px] ${filter === 'Issues' ? 'bg-red-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Issues ({issuesCount})
            </button>
            <button
              onClick={() => setFilter('Valid')}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12px] ${filter === 'Valid' ? 'bg-slate-800 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              Verified ({validCount})
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Document Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Source & Issuer</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Category</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Digital Signature</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Scrutiny Status</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredDocs.map((doc) => {
                const isIssue = doc.status === 'Issue Found';
                const isDL = doc.source === 'DigiLocker';

                return (
                  <tr
                    key={doc.id}
                    onClick={() => onSelectDocument(doc)}
                    className={`hover:bg-slate-50 cursor-pointer transition-colors ${
                      isIssue ? 'bg-red-50/40' : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900 text-[14px]">
                        {doc.documentType}
                      </div>
                      <div className="font-mono text-slate-500 text-[11.5px] mt-0.5">
                        {doc.fileName} ({doc.size})
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      {isDL ? (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-[2px]">
                            <ShieldCheck className="w-3 h-3 text-emerald-700" />
                            DigiLocker Pull
                          </span>
                          <div className="text-[11.5px] text-slate-600 truncate max-w-[180px]">
                            {doc.issuer || 'Government Registry'}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-300 px-2 py-0.5 rounded-[2px]">
                            <Upload className="w-3 h-3 text-slate-500" />
                            Direct Upload
                          </span>
                          <div className="text-[11.5px] text-slate-500 truncate max-w-[180px]">
                            {doc.issuer || 'Consultant Upload'}
                          </div>
                        </div>
                      )}
                    </td>

                    <td className="py-3 px-4 text-slate-700 text-[13.5px]">
                      {doc.category}
                    </td>

                    <td className="py-3 px-4 text-center">
                      {doc.digitalSignature?.status === 'VALID' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[2px]">
                          <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                          X.509 Valid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-[2px]">
                          Pending Signature
                        </span>
                      )}
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
