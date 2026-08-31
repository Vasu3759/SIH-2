import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  AlertOctagon, 
  Building, 
  CheckCircle2, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Cell 
} from 'recharts';
import { departmentProcessingTimes, governmentKPIs } from '../../data/departmentData';

export default function Analytics() {
  const workloadData = [
    { name: 'Pollution (MPCB)', total: 340, pending: 87, overdue: 42 },
    { name: 'Factory (DISH)', total: 280, pending: 64, overdue: 12 },
    { name: 'Planning (MIDC SPA)', total: 220, pending: 52, overdue: 8 },
    { name: 'Fire Dept (MFES)', total: 195, pending: 45, overdue: 6 },
    { name: 'Electricity (MSEDCL)', total: 150, pending: 38, overdue: 2 },
    { name: 'FSSAI FoSCoS', total: 65, pending: 24, overdue: 4 }
  ];

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Operational Intelligence & SLA Monitoring
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Processing Time & Workload Analytics
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Inter-departmental clearance throughput, officer allocation efficiency, and bottleneck diagnostics.
          </p>
        </div>

        <span className="text-[11px] uppercase font-bold bg-slate-100 text-slate-800 border border-slate-300 px-3 py-1 rounded-[2px]">
          Prototype Dataset
        </span>
      </div>

      {/* 2-Column Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Chart 1: Average Processing Time vs Standard SLA */}
        <div className="lg:col-span-6 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900">
                Department Average Processing Time (Days)
              </h2>
              <p className="text-[12.5px] text-slate-500">Average actual turnaround days vs standard benchmarks</p>
            </div>
            <span className="text-[11.5px] font-bold text-slate-600">Benchmark: ≤14d</span>
          </div>

          <div className="h-64 mt-4 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentProcessingTimes} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="department" tick={{ fontSize: 10.5, fill: '#334155' }} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 11.5, fill: '#334155' }} />
                <Tooltip 
                  formatter={(v) => [`${v} Days`, 'Turnaround Time']}
                  contentStyle={{ backgroundColor: '#1B365D', color: '#fff', fontSize: '12px', borderRadius: '3px' }}
                />
                <Bar dataKey="avgDays" radius={[2, 2, 0, 0]}>
                  {departmentProcessingTimes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Department Workload & Overdue Backlog */}
        <div className="lg:col-span-6 bg-white rounded-[3px] border border-[#CBD5E1] p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900">
                Department Caseload & Overdue Backlog
              </h2>
              <p className="text-[12.5px] text-slate-500">Active pending reviews vs overdue cases</p>
            </div>
            <span className="text-[11.5px] font-bold text-red-800">42 Overdue Total</span>
          </div>

          <div className="h-64 mt-4 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workloadData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fontSize: 10.5, fill: '#334155' }} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 11.5, fill: '#334155' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1B365D', color: '#fff', fontSize: '12px', borderRadius: '3px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                <Bar dataKey="pending" name="Pending Scrutiny" fill="#1B365D" radius={[2, 2, 0, 0]} />
                <Bar dataKey="overdue" name="SLA Overdue" fill="#991B1B" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Workload Breakdown Table */}
      <div className="bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 bg-slate-100/70 border-b border-slate-300 flex items-center justify-between">
          <h2 className="text-[14px] font-bold text-slate-900 uppercase tracking-wider">
            Inter-Departmental SLA Adherence Matrix
          </h2>
          <span className="text-[12.5px] text-slate-600 font-medium">6 Integrated Regulatory Authorities</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-300">
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Department Name</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Total Inflow</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Pending Scrutiny</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">SLA Overdue</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Avg Days</th>
                <th className="py-2.5 px-4 text-center font-bold text-[13.5px]">Benchmark SLA</th>
                <th className="py-2.5 px-4 font-bold text-[13.5px]">Bottleneck Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {departmentProcessingTimes.map((d, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-[14px]">
                    {d.department}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-slate-900 text-[13.5px]">
                    {d.pending + d.overdue * 2 + 100}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-slate-800 text-[13.5px]">
                    {d.pending}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`font-bold px-2 py-0.5 rounded-[2px] text-[11.5px] ${
                      d.overdue > 10 ? 'bg-red-100 text-red-950 border border-red-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {d.overdue}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center font-mono font-bold text-[#1B365D] text-[13.5px]">
                    {d.avgDays}d
                  </td>
                  <td className="py-3 px-4 text-center text-slate-600 text-[13px]">
                    {d.standardSLA}d
                  </td>
                  <td className="py-3 px-4">
                    {d.overdue > 20 ? (
                      <span className="text-red-800 font-bold text-[12px]">Primary Bottleneck</span>
                    ) : d.overdue > 5 ? (
                      <span className="text-amber-800 font-semibold text-[12px]">Moderate Backlog</span>
                    ) : (
                      <span className="text-emerald-800 font-semibold text-[12px]">Healthy Flow</span>
                    )}
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
