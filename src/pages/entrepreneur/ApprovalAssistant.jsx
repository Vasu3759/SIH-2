import React, { useState } from 'react';
import { 
  HelpCircle, 
  Send, 
  FileText, 
  ShieldCheck, 
  Building2, 
  GitBranch, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import ProjectSummaryStrip from '../../components/ProjectSummaryStrip';

export default function ApprovalAssistant({ project, onNavigate, onFixDocumentIssue }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "system",
      text: `Namaste! I am the INDUSTRIA Compliance Guidance Assistant for ${project.name}. I can answer questions about statutory mandates, document checklists, parallel processing tracks, and resolving flagged drawing queries.`
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const sampleQuestions = [
    {
      q: "What documents are required for Factory Licence?",
      reply: "For Factory Licence (DISH) under Section 6 of the Factories Act 1948 for a food processing unit with 80 workers, you require: 1) Approved Factory Layout Plan, 2) Machinery Layout with Connected HP Load, 3) Process Flow Chart, 4) Competent Person Structural Stability Certificate, 5) Sanitary & Worker Welfare Layout, 6) Fire Safety Provision Details."
    },
    {
      q: "Why do I need MPCB Pollution Consent (CTE)?",
      reply: "Food processing activities generate organic effluent (BOD/COD) and wash water classified under the MPCB 'Orange' category. Under Section 25 of the Water Act 1974 and Section 21 of the Air Act 1981, Consent to Establish (CTE) is mandatory prior to erecting civil foundations or installing equipment."
    },
    {
      q: "Which approvals can run in parallel?",
      reply: "Once you have registered your entity and secured Land Allotment (MIDC Lease), 4 departmental applications can proceed simultaneously: 1) MPCB Consent to Establish, 2) Building / Planning Permission, 3) Fire Provisional NOC, and 4) FSSAI Food Manufacturing License. This eliminates months of sequential lag."
    },
    {
      q: "How do I fix the Building Plan document issue?",
      reply: "The consistency engine flagged a discrepancy in 'Building_Plan.pdf': the drawing title block reads 'ABC Industries Pvt Ltd' with Survey '123/4', whereas your registered MIDC lease deed specifies 'ABC Food Processing Pvt Ltd' with Survey '123/4B'. You can resolve this by uploading the revised layout drawing in the Document Verification tab."
    }
  ];

  const handleAsk = (queryText, directReply) => {
    const q = queryText || inputQuery;
    if (!q.trim()) return;

    let responseText = directReply;
    if (!responseText) {
      const lower = q.toLowerCase();
      if (lower.includes("factory") || lower.includes("dish")) {
        responseText = sampleQuestions[0].reply;
      } else if (lower.includes("pollution") || lower.includes("mpcb") || lower.includes("cte")) {
        responseText = sampleQuestions[1].reply;
      } else if (lower.includes("parallel") || lower.includes("simultaneous")) {
        responseText = sampleQuestions[2].reply;
      } else if (lower.includes("building") || lower.includes("fix") || lower.includes("mismatch") || lower.includes("issue")) {
        responseText = sampleQuestions[3].reply;
      } else {
        responseText = `Based on Maharashtra statutory rules for ${project.industry} (${project.location?.district}), all manufacturing units with ≥10 workers require DISH Factory Licensing, MPCB Consent (${project.pollutionCategory} category), and local Planning approval. Please check the Required Approvals matrix for precise checklists.`;
      }
    }

    setMessages(prev => [
      ...prev,
      { id: Date.now(), sender: "user", text: q },
      { id: Date.now() + 1, sender: "system", text: responseText }
    ]);
    setInputQuery('');
  };

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-1">
        <div>
          <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
            Knowledge-Base Guidance
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
            Approval Guidance
          </h1>
          <p className="text-[14px] text-slate-600 mt-0.5">
            Ask about an approval, document or next step.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#F0F4F8] text-[#1B365D] text-[12px] font-semibold px-3 py-1.5 rounded-[2px] border border-blue-200">
            AI-assisted guidance based on the government knowledge base
          </span>
        </div>
      </div>

      <ProjectSummaryStrip project={project} />

      {/* Main Conversational & Guidance Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Standard Queries */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-[3px] border border-[#CBD5E1] p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h2 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#1B365D]" />
              Frequently Asked Compliance Queries
            </h2>
            <p className="text-[13px] text-slate-600 mb-3">
              Click any question below to inspect authoritative rule-based guidance:
            </p>

            <div className="space-y-2">
              {sampleQuestions.map((sq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAsk(sq.q, sq.reply)}
                  className="w-full text-left p-2.5 rounded-[2px] border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-[13px] font-semibold text-slate-800 transition-colors flex items-start justify-between gap-2"
                >
                  <span>"{sq.q}"</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-[3px] text-xs text-slate-700">
            <div className="font-bold text-[#1B365D] text-[13px] mb-1">Knowledge Base Sources:</div>
            <p className="text-[12.5px] leading-relaxed">
              Guidance responses are derived directly from Maharashtra Factories Rules, Water/Air Acts, MPCB e-Consent manuals, and FoSCoS guidelines.
            </p>
          </div>
        </div>

        {/* Right Q&A Chat Window */}
        <div className="lg:col-span-8 bg-white rounded-[3px] border border-[#CBD5E1] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col h-[520px]">
          {/* Header */}
          <div className="p-3.5 bg-slate-100/70 border-b border-slate-300 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-[13.5px]">
              <ShieldCheck className="w-4 h-4 text-[#1B365D]" />
              <span>Government Knowledge Base Guidance Console</span>
            </div>
            <span className="text-[12px] text-slate-500">Maharashtra Industrial Acts Repository</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-xl p-3.5 rounded-[3px] text-[13.5px] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#1B365D] text-white'
                    : 'bg-slate-100 text-slate-900 border border-slate-300'
                }`}>
                  {m.text}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 px-1">
                  {m.sender === 'user' ? 'You' : 'INDUSTRIA Knowledge Base'}
                </span>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="p-3 bg-slate-100/60 border-t border-slate-300 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about an approval, document or next step..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-[3px] text-[13.5px] focus:border-[#1B365D] focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#1B365D] hover:bg-[#142947] text-white rounded-[3px] text-[13px] font-semibold flex items-center gap-1.5 shadow-sm"
            >
              <span>Submit</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
