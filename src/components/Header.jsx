import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HelpCircle, 
  Bell, 
  User, 
  RefreshCw, 
  Layers, 
  ChevronDown,
  FileText,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export default function Header({ 
  currentRole, 
  onRoleChange, 
  activeProject, 
  onSelectProject, 
  onNavigate,
  onResetData,
  showToast,
  isMobileMenuOpen,
  onToggleMobileMenu
}) {
  const [showProjectMenu, setShowProjectMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const notifications = [
    { id: 1, title: "Factory Department (DISH) Objection", text: "Survey coordinate discrepancy in layout drawing requires re-submission.", time: "10 mins ago", urgent: true },
    { id: 2, title: "MPCB CTE Application Update", text: "Application under Consent Committee review at Pune Regional Office.", time: "2 hours ago", urgent: false },
    { id: 3, title: "FSSAI Licence Renewal Due", text: "Annual renewal window open for FoSCoS licence (Expires 28 Sep 2026).", time: "1 day ago", urgent: false }
  ];

  return (
    <header className="bg-[#1B365D] text-white border-b border-[#0F2139] sticky top-0 z-40">
      {/* Official Government of Maharashtra Top Strip */}
      <div className="bg-[#0F2139] px-3 sm:px-5 py-1 text-[11px] sm:text-[12px] text-slate-300 flex flex-wrap items-center justify-between gap-1 border-b border-slate-700/60">
        <div className="flex items-center gap-1.5 sm:gap-2.5 truncate">
          <span className="font-semibold tracking-wide text-white truncate">GOVT OF MAHARASHTRA</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden md:inline truncate">Dept of Industries — Single Window Services</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#92400E] text-amber-100 px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-[2px] text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase border border-amber-600/40">
            Prototype
          </span>
          <span className="text-slate-400 text-[11px] sm:text-xs">SIH 2026</span>
        </div>
      </div>

      {/* Main Administrative Navigation Bar */}
      <div className="px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Hamburger Menu */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-1.5 rounded-[3px] bg-[#142947] hover:bg-[#0F2139] text-white border border-blue-900 flex items-center justify-center transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo & Brand Name */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none" 
            onClick={() => onNavigate('landing')}
            title="Return to Portal Landing Screen"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-[3px] flex items-center justify-center text-[#1B365D] font-bold shadow-xs border border-slate-200 shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B365D]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-white font-sans">INDUSTRIA</span>
                <span className="hidden sm:inline bg-[#142947] text-slate-200 text-[11px] font-medium px-2 py-0.5 rounded-[2px] border border-blue-900">
                  Single Window
                </span>
              </div>
              <p className="text-[11px] sm:text-[12.5px] text-slate-300 leading-tight mt-0.5 hidden xs:block truncate max-w-[200px] sm:max-w-none">
                Single-Window Approvals & Compliance
              </p>
            </div>
          </div>
        </div>

        {/* Center: Current Entity Context (Visible on lg screens) */}
        <div className="hidden lg:flex items-center gap-3">
          {currentRole === 'entrepreneur' ? (
            <div className="relative">
              <button
                onClick={() => setShowProjectMenu(!showProjectMenu)}
                className="bg-[#142947] hover:bg-[#0F2139] border border-blue-800/90 text-white px-3.5 py-1.5 rounded-[3px] text-xs flex items-center gap-2.5 transition-colors"
                title="Change Demonstration Project"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <div className="text-left">
                  <div className="font-semibold text-white truncate max-w-[220px] text-[13px]">
                    {activeProject?.name || "ABC Food Processing Pvt Ltd"}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {activeProject?.location?.district || "Pune"}, Maharashtra • {activeProject?.industry}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 ml-1" />
              </button>

              {showProjectMenu && (
                <div className="absolute left-0 mt-1.5 w-80 bg-white text-slate-900 rounded-[3px] shadow-lg border border-slate-300 py-1 z-50">
                  <div className="px-3.5 py-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 bg-slate-50">
                    Select Test Scenario
                  </div>
                  <button
                    onClick={() => {
                      onSelectProject('food_processing');
                      setShowProjectMenu(false);
                      showToast?.("Loaded Scenario 1: ABC Food Processing Pvt Ltd (Pune)", "info");
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs hover:bg-slate-100 flex flex-col"
                  >
                    <span className="font-bold text-[#1B365D] text-[13px]">1. ABC Food Processing Pvt Ltd (Default)</span>
                    <span className="text-[12px] text-slate-600 mt-0.5">Packaged Food • Chakan MIDC, Pune (₹5 Cr, 80 Employees)</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectProject('manufacturing');
                      setShowProjectMenu(false);
                      showToast?.("Loaded Scenario 2: Bharat Precision Engineering (Nagpur)", "info");
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs hover:bg-slate-100 flex flex-col border-t border-slate-100"
                  >
                    <span className="font-bold text-[#1B365D] text-[13px]">2. Bharat Precision Engineering Works</span>
                    <span className="text-[12px] text-slate-600 mt-0.5">Heavy Fabrication • Hingna MIDC, Nagpur (₹20 Cr, Red Category)</span>
                  </button>
                  <button
                    onClick={() => {
                      onSelectProject('it_ites');
                      setShowProjectMenu(false);
                      showToast?.("Loaded Scenario 3: Sahyadri Cloud Systems (Pune)", "info");
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs hover:bg-slate-100 flex flex-col border-t border-slate-100"
                  >
                    <span className="font-bold text-[#1B365D] text-[13px]">3. Sahyadri Cloud Systems LLP</span>
                    <span className="text-[12px] text-slate-600 mt-0.5">IT / ITES Software Facility • Hinjawadi Phase 1, Pune</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#142947] border border-blue-800/90 px-3.5 py-1.5 rounded-[3px] text-xs flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="font-semibold text-white text-[13px]">Department Scrutiny Console</span>
                <span className="text-slate-300 text-[11px] block">Government of Maharashtra Officer Workspace</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Role Switcher & System Utilities */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Institutional Role Switcher Tabs */}
          <div className="bg-[#0F2139] p-0.5 sm:p-1 rounded-[3px] border border-slate-700 flex items-center text-xs">
            <button
              onClick={() => {
                onRoleChange('entrepreneur');
                showToast?.("Switched to Entrepreneur Workspace", "info");
              }}
              className={`px-2 sm:px-3 py-1 rounded-[2px] font-semibold text-[12px] sm:text-[13px] transition-all ${
                currentRole === 'entrepreneur'
                  ? 'bg-white text-[#1B365D] shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Entrepreneur
            </button>
            <button
              onClick={() => {
                onRoleChange('government');
                showToast?.("Switched to Government Officer Workspace", "info");
              }}
              className={`px-2 sm:px-3 py-1 rounded-[2px] font-semibold text-[12px] sm:text-[13px] transition-all ${
                currentRole === 'government'
                  ? 'bg-white text-[#1B365D] shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Officer
            </button>
          </div>

          {/* Reset Demo Data Button */}
          <button
            onClick={() => {
              onResetData?.();
              showToast?.("Demo data restored to initial state", "info");
            }}
            className="hidden md:flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-[#142947] hover:bg-[#0F2139] px-2.5 py-1.5 rounded-[3px] border border-blue-900 transition-colors"
            title="Reset Mock Data to Initial State"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="text-[12px]">Reset</span>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 sm:p-2 rounded-[3px] hover:bg-[#142947] text-slate-300 hover:text-white relative transition-colors"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white text-slate-900 rounded-[3px] shadow-xl border border-slate-300 py-1.5 z-50">
                <div className="px-4 py-2 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                  <span className="font-bold text-xs text-[#1B365D]">Portal Alerts</span>
                  <span className="text-[11px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded-[2px] font-semibold">1 Action Required</span>
                </div>
                <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                  {notifications.map(n => (
                    <div key={n.id} className="p-3 hover:bg-slate-50 text-xs">
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5 text-[12.5px]">
                        {n.urgent && <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>}
                        {n.title}
                      </div>
                      <p className="text-slate-600 text-[12px] mt-0.5 leading-normal">{n.text}</p>
                      <span className="text-[11px] text-slate-400 mt-1 block">{n.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Help & Architecture Reference */}
          <button
            onClick={() => setShowHelpModal(true)}
            className="p-1.5 sm:p-2 rounded-[3px] hover:bg-[#142947] text-slate-300 hover:text-white transition-colors"
            title="System Architecture & Trust Principles"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Trust & Architecture Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-[4px] max-w-2xl w-full p-5 sm:p-6 shadow-xl border border-slate-300 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#1B365D]" />
                <h3 className="font-bold text-base sm:text-lg text-[#1B365D]">System Architecture & Governance</h3>
              </div>
              <button 
                onClick={() => setShowHelpModal(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 text-xs space-y-3 leading-relaxed text-slate-700">
              <p className="text-[13.5px]">
                <strong>INDUSTRIA</strong> provides a single-window digital facilitation framework for industrial enterprises in Maharashtra.
              </p>
              <div className="bg-slate-50 p-3.5 rounded-[3px] border border-slate-200 space-y-2 text-[13px]">
                <h4 className="font-bold text-[#1B365D]">Core Governance Principles:</h4>
                <ul className="list-disc pl-4 space-y-1.5 text-slate-700">
                  <li><strong>Deterministic Rules:</strong> Approval requirements computed directly against statutory criteria (Factories Act, Water/Air Acts, MRTP regulations).</li>
                  <li><strong>Document Consistency Scrutiny:</strong> Simulates OCR verification across site drawings and lease deeds to eliminate query delays.</li>
                  <li><strong>Parallel Workflow Mapping:</strong> Coordinates simultaneous departmental tracks following land allotment to reduce turnaround times.</li>
                  <li><strong>Administrative Authority:</strong> Field inspections, technical scrutiny, and sanctions remain strictly with authorized officers.</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setShowHelpModal(false)}
                className="bg-[#1B365D] text-white px-4 py-2 rounded-[3px] text-xs font-semibold hover:bg-[#142947]"
              >
                Close Guidance
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
