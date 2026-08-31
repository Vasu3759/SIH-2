/**
 * Dependency Graph Engine
 * Constructs sequential stages and parallel departmental workflow tracks
 */
export function getApprovalDependencyGraph(project) {
  return {
    stages: [
      {
        stageNumber: 1,
        title: "Stage 1: Corporate & Site Foundation",
        type: "SEQUENTIAL",
        description: "Prerequisite legal and land registration before any architectural or environmental submissions.",
        nodes: [
          {
            id: "app-business-reg",
            name: "Business Registration",
            department: "ROC / MCA",
            status: "APPROVED",
            statusLabel: "Approved",
            color: "#166534",
            bgColor: "#F0FDF4",
            borderColor: "#BBF7D0",
            icon: "Building",
            canRunInParallelWith: ["app-udyam", "app-gst"]
          },
          {
            id: "app-land",
            name: "Land Permission & Allotment",
            department: "MIDC / Revenue",
            status: "APPROVED",
            statusLabel: "Approved",
            color: "#166534",
            bgColor: "#F0FDF4",
            borderColor: "#BBF7D0",
            icon: "Landmark",
            canRunInParallelWith: []
          }
        ]
      },
      {
        stageNumber: 2,
        title: "Stage 2: Parallel Departmental Scrutiny & Pre-Construction",
        type: "PARALLEL",
        highlightNotice: "Parallel Processing Opportunity: Once Land Allotment is obtained, all 4 departments can process applications concurrently without waiting for each other.",
        nodes: [
          {
            id: "app-mpcb-cte",
            name: "Pollution Consent (CTE)",
            department: "MPCB",
            status: "UNDER_REVIEW",
            statusLabel: "Under Review",
            color: "#B45309",
            bgColor: "#FFFBEB",
            borderColor: "#FDE68A",
            icon: "FileText",
            parallelGroup: "pre-construction"
          },
          {
            id: "app-building",
            name: "Building / Planning Permission",
            department: "MIDC SPA",
            status: "APPROVED",
            statusLabel: "Approved",
            color: "#166534",
            bgColor: "#F0FDF4",
            borderColor: "#BBF7D0",
            icon: "Building",
            parallelGroup: "pre-construction"
          },
          {
            id: "app-fire-noc",
            name: "Fire Provisional NOC",
            department: "Fire Department",
            status: "INSPECTION",
            statusLabel: "Inspection",
            color: "#0369A1",
            bgColor: "#F0F9FF",
            borderColor: "#BAE6FD",
            icon: "ShieldCheck",
            parallelGroup: "pre-construction"
          },
          {
            id: "app-fssai",
            name: "FSSAI Food Manufacturing",
            department: "FSSAI (FoSCoS)",
            status: "UNDER_REVIEW",
            statusLabel: "Under Review",
            color: "#B45309",
            bgColor: "#FFFBEB",
            borderColor: "#FDE68A",
            icon: "ClipboardCheck",
            parallelGroup: "pre-construction"
          }
        ]
      },
      {
        stageNumber: 3,
        title: "Stage 3: Setup, Licensing & Power Energization",
        type: "SEQUENTIAL",
        description: "Post-construction inspection, factory safety licensing, and utility connection.",
        nodes: [
          {
            id: "app-factory-licence",
            name: "Factory Licence",
            department: "Directorate of Factories (DISH)",
            status: "ACTION_REQUIRED",
            statusLabel: "Document Issue",
            color: "#991B1B",
            bgColor: "#FEF2F2",
            borderColor: "#FECACA",
            icon: "Factory",
            dependsOn: ["app-building", "app-fire-noc", "app-mpcb-cte"]
          },
          {
            id: "app-electricity",
            name: "Industrial Electricity Connection",
            department: "MSEDCL",
            status: "NOT_STARTED",
            statusLabel: "Not Started",
            color: "#64748B",
            bgColor: "#F8FAFC",
            borderColor: "#E2E8F0",
            icon: "Zap",
            dependsOn: ["app-building"]
          }
        ]
      },
      {
        stageNumber: 4,
        title: "Stage 4: Operational Consent & Commercial Production",
        type: "SEQUENTIAL",
        description: "Final statutory clearances allowing commercial dispatches and market distribution.",
        nodes: [
          {
            id: "app-mpcb-cto",
            name: "MPCB Consent to Operate (CTO)",
            department: "MPCB",
            status: "NOT_STARTED",
            statusLabel: "Pending CTO",
            color: "#64748B",
            bgColor: "#F8FAFC",
            borderColor: "#E2E8F0",
            icon: "CheckCircle",
            dependsOn: ["app-mpcb-cte", "app-factory-licence"]
          },
          {
            id: "app-production-start",
            name: "Commercial Production Start",
            department: "Commercial Operations",
            status: "NOT_STARTED",
            statusLabel: "Upcoming",
            color: "#1B365D",
            bgColor: "#EBF2FA",
            borderColor: "#CBD5E1",
            icon: "Factory",
            dependsOn: ["app-mpcb-cto"]
          }
        ]
      }
    ],
    parallelOpportunities: [
      {
        title: "Pre-Construction Fast-Track",
        description: "Pollution Consent (CTE), Building Approval, Fire Provisional NOC, and FSSAI License can be submitted on day 1 after Land Allotment.",
        benefit: "Eliminates multi-month sequential department lag."
      },
      {
        title: "Utility & Equipment Sanctions",
        description: "Electricity HT Load Sanction and Machinery Erection can run in parallel while Factory Inspectorate reviews structural stability.",
        benefit: "Ensures power energization is synchronized with final factory inspection."
      }
    ]
  };
}
