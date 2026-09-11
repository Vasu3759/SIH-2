import React from 'react';
import {
  LayoutDashboard,
  FileCheck,
  GitBranch,
  FileText,
  Files,
  Clock,
  Calendar,
  Gift,
  HelpCircle,
  ShieldCheck,
  Building,
  AlertOctagon,
  BarChart3,
  BookOpen,
  Sliders,
  CheckSquare,
  Cpu,
  Layers,
  X
} from 'lucide-react';

export default function Sidebar({ 
  currentRole, 
  currentRoute, 
  onNavigate, 
  activeProject,
  isMobileMenuOpen,
  onCloseMobileMenu
}) {
  const entrepreneurNav = [
    {
      group: "Project Workspace",
      items: [
        { id: "dashboard", label: "Dashboard Overview", icon: LayoutDashboard },
        { id: "onboarding", label: "Project Profile", icon: Building },
      ]
    },
    {
      group: "Statutory Approvals",
      items: [
        { id: "required-approvals", label: "Required Approvals", icon: FileCheck, badge: "9 Clearances" },
        { id: "roadmap", label: "Approval Roadmap", icon: GitBranch },
        { id: "engine", label: "Recommendation Logic", icon: Sliders },
        { id: "applications", label: "My Applications", icon: FileText, badge: "6 Active" },
        { id: "documents", label: "Document Verification", icon: Files, alert: true },
      ]
    },
    {
      group: "Compliance & Schemes",
      items: [
        { id: "renewals", label: "Licence Renewals", icon: Clock, badge: "1 Due" },
        { id: "calendar", label: "Compliance Calendar", icon: Calendar },
        { id: "incentives", label: "Incentives & Schemes", icon: Gift, badge: "Eligible" },
      ]
    },
    {
      group: "Guidance & Support",
      items: [
        { id: "assistant", label: "Approval Guidance", icon: HelpCircle },
        { id: "architecture", label: "System Architecture", icon: Layers },
      ]
    }
  ];

  const governmentNav = [
    {
      group: "Department Workspace",
      items: [
        { id: "gov-dashboard", label: "Department Dashboard", icon: LayoutDashboard },
        { id: "gov-applications", label: "All Applications", icon: FileText, badge: "1,250" },
        { id: "gov-delayed", label: "Delayed Cases", icon: AlertOctagon, badge: "42 Overdue", alert: true },
      ]
    },
    {
      group: "Analytics & Oversight",
      items: [
        { id: "gov-analytics", label: "Processing & Bottlenecks", icon: BarChart3 },
      ]
    },
    {
      group: "Administration & Rules",
      items: [
        { id: "gov-rules", label: "Statutory Policy Rules", icon: Sliders },
        { id: "architecture", label: "System Architecture", icon: Layers },
      ]
    }
  ];

  const navGroups = currentRole === 'entrepreneur' ? entrepreneurNav : governmentNav;

  const handleNavClick = (routeId) => {
    onNavigate(routeId);
    onCloseMobileMenu?.();
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={onCloseMobileMenu}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[270px] bg-white border-r border-[#CBD5E1] flex flex-col shrink-0 min-h-screen md:min-h-[calc(100vh-68px)] transition-transform duration-300 ease-in-out shadow-xl md:shadow-none
        md:relative md:translate-x-0 md:z-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header in Drawer */}
        <div className="md:hidden p-4 bg-[#1B365D] text-white flex items-center justify-between border-b border-blue-950">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight font-sans">INDUSTRIA</span>
            <span className="text-[10.5px] bg-white/20 px-1.5 py-0.2 rounded-[2px]">Navigation</span>
          </div>
          <button
            onClick={onCloseMobileMenu}
            className="p-1 rounded-[2px] text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 py-4 px-3 space-y-5 overflow-y-auto">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {group.group}
              </div>
              <div className="space-y-0.5 pt-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentRoute === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-2.5 rounded-[3px] text-[13.5px] font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EBF2FA] text-[#1B365D] font-bold border-l-[3px] border-[#1B365D] pl-2'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#1B365D]' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.alert && (
                        <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                      )}

                      {item.badge && !item.alert && (
                        <span className={`text-[10.5px] px-1.5 py-0.2 rounded-[2px] font-semibold shrink-0 ${
                          isActive
                            ? 'bg-[#1B365D] text-white'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Information Card */}
        <div className="p-3.5 bg-[#F8FAFC] border-t border-[#CBD5E1] text-xs">
          {currentRole === 'entrepreneur' ? (
            <div>
              <div className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Active Enterprise
              </div>
              <div className="font-bold text-slate-900 truncate text-[13px]" title={activeProject?.name}>
                {activeProject?.name || "ABC Food Processing Pvt Ltd"}
              </div>
              <div className="text-[11.5px] text-slate-600 flex items-center justify-between mt-1">
                <span className="truncate mr-1">{activeProject?.location?.district || "Pune"}</span>
                <span className="font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded-[2px] border border-emerald-300 text-[10.5px] shrink-0">
                  72% Approved
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Administrative Unit
              </div>
              <div className="font-bold text-slate-900 text-[13px]">
                State of Maharashtra
              </div>
              <div className="text-[11.5px] text-slate-600 mt-0.5">
                Industrial Facilitation Cell
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
