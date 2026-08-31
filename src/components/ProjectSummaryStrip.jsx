import React from 'react';
import { Building, MapPin, IndianRupee, Users, Maximize2, Layers } from 'lucide-react';

export default function ProjectSummaryStrip({ project, onEdit }) {
  if (!project) return null;

  return (
    <div className="bg-white rounded-[3px] border border-[#CBD5E1] p-4 mb-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="font-bold text-slate-900 text-[15px]">{project.name}</span>
          <span className="bg-[#EBF2FA] text-[#1B365D] px-2 py-0.5 rounded-[2px] font-semibold text-[12px] border border-blue-200">
            {project.industry}
          </span>
        </div>

        {onEdit && (
          <button
            onClick={onEdit}
            className="text-[13px] font-semibold text-[#1B365D] hover:underline"
          >
            Edit Project Parameters →
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-3 pt-3 border-t border-slate-200 text-xs">
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Location</span>
          <span className="font-semibold text-slate-800 text-[13.5px]">{project.location?.district}, {project.location?.state}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Capital Investment</span>
          <span className="font-semibold text-slate-800 text-[13.5px]">{project.investment}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Workforce</span>
          <span className="font-semibold text-slate-800 text-[13.5px]">{project.employees} Employees</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Land Area</span>
          <span className="font-semibold text-slate-800 text-[13.5px]">{project.landArea}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Pollution Category</span>
          <span className={`font-semibold text-[13.5px] ${
            project.pollutionCategory === 'Red' ? 'text-red-700' :
            project.pollutionCategory === 'Orange' ? 'text-amber-800' : 'text-emerald-800'
          }`}>
            {project.pollutionCategory} Category
          </span>
        </div>
        <div>
          <span className="text-slate-500 block text-[11.5px] font-medium">Project Stage</span>
          <span className="font-semibold text-slate-800 text-[13.5px]">{project.projectType}</span>
        </div>
      </div>
    </div>
  );
}
