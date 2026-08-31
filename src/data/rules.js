export const approvalRules = [
  {
    id: "RULE-FAC-01",
    title: "Factory Licensing Threshold",
    category: "Labour & Safety",
    sourceAct: "Factories Act, 1948 (Section 2m)",
    condition: {
      industry: ["Manufacturing", "Food Processing", "Chemical", "Pharmaceutical", "Automobile", "Textile"],
      minEmployees: 10,
      withPower: true
    },
    action: "Factory Plan Approval & Factory Licence = MANDATORY",
    explanation: "Any manufacturing/processing premise employing 10 or more workers with the aid of electrical power falls under Section 2(m)(i) of the Factories Act."
  },
  {
    id: "RULE-ENV-01",
    title: "Pollution Consent Applicability",
    category: "Environmental",
    sourceAct: "Water (Prevention and Control of Pollution) Act, 1974",
    condition: {
      pollutionCategory: ["Red", "Orange", "Green"]
    },
    action: "MPCB Consent to Establish (CTE) & Consent to Operate (CTO) = MANDATORY",
    explanation: "Industrial activities classified under CPCB/MPCB Red, Orange, or Green categories require Consent to Establish prior to civil construction and Consent to Operate prior to commercial trial runs."
  },
  {
    id: "RULE-HAZ-01",
    title: "Hazardous Materials Handling & Storage",
    category: "Hazardous & Emergency",
    sourceAct: "Manufacture, Storage and Import of Hazardous Chemical Rules, 1989 & HWM Rules 2016",
    condition: {
      hasHazardousMaterials: true
    },
    action: "Hazardous Waste Authorization + PESO Clearance (if LPG/Solvents) = MANDATORY",
    explanation: "Premises storing inflammable petroleum products, compressed gases, or generating scheduled hazardous waste must secure dedicated statutory authorizations and on-site emergency disaster plans."
  },
  {
    id: "RULE-FOOD-01",
    title: "FSSAI Food Manufacturing Mandate",
    category: "Food Safety",
    sourceAct: "Food Safety and Standards Act, 2006",
    condition: {
      industry: ["Food Processing"]
    },
    action: "FSSAI State / Central Manufacturing Licence = MANDATORY",
    explanation: "All food production, packaging, processing, and cold chain handling units must hold a valid FoSCoS license based on installed annual capacity."
  },
  {
    id: "RULE-BOIL-01",
    title: "Boiler & Steam Pressure Equipment",
    category: "Boilers & Pressure Vessels",
    sourceAct: "Indian Boilers Act, 1923",
    condition: {
      hasBoiler: true
    },
    action: "Directorate of Steam Boilers Registration & Hydro-test Certification = MANDATORY",
    explanation: "Any closed vessel exceeding 22.75 litres capacity used expressly for generating steam under pressure requires pre-commissioning structural inspection and annual safety registration."
  },
  {
    id: "RULE-INC-01",
    title: "Maharashtra Industrial Subsidy Eligibility (PSI 2019)",
    category: "Incentives & Subsidies",
    sourceAct: "Maharashtra Industrial Policy 2019",
    condition: {
      state: "Maharashtra",
      investmentMinCr: 1.0
    },
    action: "Package Scheme of Incentives (PSI) = POTENTIALLY ELIGIBLE",
    explanation: "Eligible MSME & Large manufacturing investments in designated industrial zones (Taluka classification C, D, D+, and Vidarbha/Marathwada) qualify for Capital Subsidies, SGST refunds, and interest subvention."
  }
];

export const trustAndGovernancePrinciples = [
  {
    title: "Deterministic & Traceable Rules",
    description: "Every approval requirement maps directly to statutory sections (Factories Act, Water Act, MRTP Act). AI does not invent or hallucinate statutory legal obligations.",
    badge: "100% Rule Verifiable"
  },
  {
    title: "Authoritative Government Checklists",
    description: "Document checklists are compiled directly from Maharashtra Labour Department (DISH), MPCB, MFES, and MAITRI single-window gazettes.",
    badge: "Official Gazette Aligned"
  },
  {
    title: "Human Officer Decision Authority",
    description: "AI provides consistency checking, preliminary document verification, and bottleneck analytics. Final approval, inspection orders, and sanctions remain with designated government officers.",
    badge: "Human-in-the-Loop"
  },
  {
    title: "Transparent Consistency Validation",
    description: "Document intelligence inspects title consistency (e.g. Survey number 123/4 vs 123/4B) and flags discrepancies to save weeks of department query ping-pong.",
    badge: "Pre-Scrutiny Intelligence"
  }
];
