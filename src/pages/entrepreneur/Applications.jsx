import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Building, 
  ChevronRight
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function Applications({ project, applications, onSelectApplication }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = applications.filter((app) => {
    const matchesSearch = app.approvalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusBadges = {
    'APPROVED': 'bg-emerald-50 text-emerald-800 border-emerald-300',
    'UNDER REVIEW': 'bg-amber-50 text-amber-900 border-amber-300',
    'INSPECTION': 'bg-blue-50 text-blue-900 border-blue-300',
    'ACTION REQUIRED': 'bg-red-50 text-red-900 border-red-300',
    'NOT STARTED': 'bg-slate-100 text-slate-700 border-slate-300',
    'REJECTED': 'bg-red-100 text-red-900 border-red-300'
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Single-Window Applications Ledger
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            My Applications
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Real-time status tracking and department milestone progression across all filed permissions.
          </p>
        </div>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Filter & Search Bar */}
      <div className="bg-white p-3.5 rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search application ID, department, approval..."
              className="w-full pl-9 pr-3 py-1.5 border border-slate-300 rounded-[3px] focus:border-[#1B365D] focus:outline-none text-[13.5px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-slate-500 font-bold uppercase text-[11.5px]">Status:</span>
          {['ALL', 'APPROVED', 'UNDER REVIEW', 'INSPECTION', 'ACTION REQUIRED', 'NOT STARTED'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-[2px] font-semibold text-[12px] whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-[#1B365D] text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Application ID</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Approval Name</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Department</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Submitted Date</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Status</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Next Milestone / Note</th>
                <th className="py-2.5 px-4 text-right font-bold text-[13.5px]">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filtered.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => onSelectApplication(app)}
                  className="hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-mono font-bold text-[#1B365D] text-[13.5px]">
                    {app.id}
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900 text-[14.5px]">
                    {app.approvalName}
                  </td>
                  <td className="py-3 px-4 text-slate-700 text-[14px]">
                    {app.department}
                  </td>
                  <td className="py-3 px-4 text-slate-600 font-mono text-[13px]">
                    {app.submittedDate}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-0.5 rounded-[2px] text-[12px] font-bold border ${statusBadges[app.status] || 'bg-slate-100 text-slate-700'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-700 max-w-xs truncate text-[13.5px]">
                    {app.nextActionText}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectApplication(app);
                      }}
                      className="px-3 py-1 bg-white hover:bg-slate-100 border border-slate-300 text-[#1B365D] rounded-[2px] font-bold text-[12.5px] inline-flex items-center gap-1 shadow-sm"
                    >
                      <span>Timeline</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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
