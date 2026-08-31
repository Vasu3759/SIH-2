import { approvalsDatabase } from "../data/approvals";

/**
 * Deterministic Approval Recommendation Engine
 * Evaluates business parameters and identifies required approvals, rationale, and applicable statutory acts.
 */
export function getRequiredApprovals(project) {
  const evaluatedRules = [];
  const requiredApprovals = [];

  // Rule 1: Legal Entity Foundation (Universal)
  evaluatedRules.push({
    rule: "Legal Business Registration",
    condition: "All commercial enterprises operating in India",
    matched: true,
    result: "Business / Entity Registration (ROC) is mandatory"
  });
  const busReg = approvalsDatabase.find(a => a.id === "app-business-reg");
  if (busReg) requiredApprovals.push({ ...busReg, ruleReason: "Mandatory corporate foundation for all legal enterprises." });

  // Rule 2: MSME & Udyam (Universal / Optional for benefits)
  evaluatedRules.push({
    rule: "MSME Scheme Applicability",
    condition: "Investment < ₹50 Cr & Turnover < ₹250 Cr",
    matched: (project.investmentValueCr || 5) <= 50,
    result: "Udyam / MSME Registration recommended for subsidy & priority lending"
  });
  const udyam = approvalsDatabase.find(a => a.id === "app-udyam");
  if (udyam) requiredApprovals.push({ ...udyam, ruleReason: "Qualifies as MSME Small Enterprise. Required for Maharashtra PSI subsidies." });

  // Rule 3: GST Registration (Commercial Operations)
  evaluatedRules.push({
    rule: "GST Commercial Threshold",
    condition: "Interstate supply or turnover > statutory threshold",
    matched: true,
    result: "GST Registration mandatory for tax collection and input credit"
  });
  const gst = approvalsDatabase.find(a => a.id === "app-gst");
  if (gst) requiredApprovals.push({ ...gst, ruleReason: "Mandatory for commercial billing, vendor transactions, and input tax credits." });

  // Rule 4: Land & Building Approvals (Physical premises)
  evaluatedRules.push({
    rule: "Industrial Land Zoning & Infrastructure",
    condition: "Physical setup on industrial/MIDC plot",
    matched: true,
    result: "Land Possession & Building / Planning Permission mandatory"
  });
  const land = approvalsDatabase.find(a => a.id === "app-land");
  const building = approvalsDatabase.find(a => a.id === "app-building");
  if (land) requiredApprovals.push({ ...land, ruleReason: "Establishes industrial land title and zoning rights on MIDC Plot." });
  if (building) requiredApprovals.push({ ...building, ruleReason: "Authorizes architectural blueprint, structural calculations, and building commencement." });

  // Rule 5: Environmental Pollution Consent (Orange / Red / Green categories)
  const isPolluting = ["Red", "Orange", "Green"].includes(project.pollutionCategory);
  evaluatedRules.push({
    rule: "Pollution Control Clearance (MPCB)",
    condition: `Category: ${project.pollutionCategory || 'Orange'} (${isPolluting ? 'Pollution Consent required' : 'Exempted'})`,
    matched: isPolluting,
    result: isPolluting ? "MPCB Consent to Establish (CTE) & Consent to Operate (CTO) mandatory" : "White category unit — only online intimation required"
  });
  if (isPolluting) {
    const cte = approvalsDatabase.find(a => a.id === "app-mpcb-cte");
    const cto = approvalsDatabase.find(a => a.id === "app-mpcb-cto");
    if (cte) requiredApprovals.push({ ...cte, ruleReason: `Mandatory for ${project.pollutionCategory} category unit before starting construction.` });
    if (cto) requiredApprovals.push({ ...cto, ruleReason: "Mandatory prior to commencing commercial trial production." });
  }

  // Rule 6: Fire Provisional NOC (Industrial / Built-up area / Hazardous norms)
  evaluatedRules.push({
    rule: "Fire Safety & Emergency Clearance",
    condition: "Industrial premises with built-up manufacturing/storage area",
    matched: true,
    result: "Fire Provisional NOC & Final NOC mandatory under Maharashtra Fire Act"
  });
  const fire = approvalsDatabase.find(a => a.id === "app-fire-noc");
  if (fire) requiredApprovals.push({ ...fire, ruleReason: "Ensures NBC fire fighting hydrant networks, escape staircases, and storage safety." });

  // Rule 7: Factory Plan Approval & Factory Licence (Manufacturing + Employees > 10)
  const isManufacturing = ["Manufacturing", "Food Processing", "Chemical", "Pharmaceutical", "Automobile", "Textile"].includes(project.industry);
  const employeeThresholdMet = (project.employees || 0) >= 10;
  evaluatedRules.push({
    rule: "Factories Act Statutory Applicability",
    condition: `Industry: ${project.industry}, Employees: ${project.employees} (Threshold >= 10 with power)`,
    matched: isManufacturing && employeeThresholdMet,
    result: (isManufacturing && employeeThresholdMet) ? "Factory Plan Approval & Factory Licence (DISH) mandatory" : "Shops & Establishments applicable instead"
  });
  if (isManufacturing && employeeThresholdMet) {
    const factoryLic = approvalsDatabase.find(a => a.id === "app-factory-licence");
    if (factoryLic) requiredApprovals.push({ ...factoryLic, ruleReason: `Manufacturing activity with ${project.employees} workers using electric power triggers Section 2(m)(i) of Factories Act.` });
  }

  // Rule 8: Food Safety (FSSAI) — Food Processing specific
  if (project.industry === "Food Processing") {
    evaluatedRules.push({
      rule: "Food Safety & Standards Regulations",
      condition: "Food manufacturing / packaging / cold storage activity",
      matched: true,
      result: "FSSAI Manufacturing Licence (FoSCoS) mandatory"
    });
    const fssai = approvalsDatabase.find(a => a.id === "app-fssai");
    if (fssai) requiredApprovals.push({ ...fssai, ruleReason: "Mandatory food safety certification for producing, packing, and storing packaged food." });
  }

  // Rule 9: Industrial Electricity Connection
  evaluatedRules.push({
    rule: "Power Supply & Load Sanction",
    condition: "Industrial electrical load demand > 15 kW",
    matched: true,
    result: "MSEDCL Industrial HT/LT Power Connection required"
  });
  const electricity = approvalsDatabase.find(a => a.id === "app-electricity");
  if (electricity) requiredApprovals.push({ ...electricity, ruleReason: `Sanctions ${project.powerRequiredKVA || 150} kVA industrial power feed and sub-station connection.` });

  // Rule 10: State Industrial Incentives (PSI 2019)
  evaluatedRules.push({
    rule: "Maharashtra Industrial Policy Incentives",
    condition: "New or expanding unit with capital investment > ₹1 Cr",
    matched: true,
    result: "Potentially eligible for Package Scheme of Incentives (PSI 2019)"
  });
  const incentives = approvalsDatabase.find(a => a.id === "app-incentives");
  if (incentives) requiredApprovals.push({ ...incentives, ruleReason: "Potentially eligible for 40%–60% Capital Subsidy, SGST refund, and power tariff relief." });

  // Rule 11: Hazardous Material Specific Approvals (Conditional)
  if (project.hasHazardousMaterials) {
    evaluatedRules.push({
      rule: "Hazardous Substances & Chemical Storage",
      condition: "Project stores/uses LPG, solvents, or scheduled chemicals (YES)",
      matched: true,
      result: "Hazardous Waste Authorization & PESO Storage License mandatory"
    });
    requiredApprovals.push({
      id: "app-hazardous-waste",
      name: "Hazardous Waste Management Authorization",
      category: "Hazardous & Emergency",
      department: "Maharashtra Pollution Control Board (MPCB)",
      statutoryAct: "Hazardous and Other Wastes Rules, 2016",
      stage: "Pre-Operations",
      status: "Action Required",
      isParallel: true,
      prerequisites: ["app-mpcb-cte"],
      whyRequired: "Mandatory authorization for collection, storage, and disposal of industrial solvents and toxic waste.",
      documents: [
        { name: "Form 1 Application for Hazardous Authorization", required: true, uploaded: false, valid: false },
        { name: "Common TSDF Facility Membership Agreement (MEPL)", required: true, uploaded: false, valid: false },
        { name: "On-site Emergency Disaster Management Plan", required: true, uploaded: false, valid: false }
      ],
      estimatedTime: "Prototype estimate: 20–30 working days",
      ruleReason: "Triggered by on-site storage of industrial solvents and hazardous chemicals."
    });
  }

  // Rule 12: Steam Boiler Specific Approvals (Conditional)
  if (project.hasBoiler) {
    evaluatedRules.push({
      rule: "Steam Boiler & Pressure Vessel Compliance",
      condition: "Unit utilizes steam generation boiler (>22.75 L) (YES)",
      matched: true,
      result: "Boiler Registration & Directorate of Steam Boilers Inspection mandatory"
    });
    requiredApprovals.push({
      id: "app-boiler-reg",
      name: "Steam Boiler Registration & Erection Sanction",
      category: "Boilers & Pressure Vessels",
      department: "Directorate of Steam Boilers, Maharashtra",
      statutoryAct: "Indian Boilers Act, 1923",
      stage: "Setup & Pre-Commissioning",
      status: "Action Required",
      isParallel: true,
      prerequisites: ["app-building"],
      whyRequired: "Statutory hydro-test and steam safety certificate before firing the industrial boiler.",
      documents: [
        { name: "Boiler Manufacturer Form II, III & IV Certificates", required: true, uploaded: false, valid: false },
        { name: "Boiler House Drawing & Steam Piping Layout", required: true, uploaded: false, valid: false },
        { name: "Chartered Ultrasonic Thickness Test Dossier", required: true, uploaded: false, valid: false }
      ],
      estimatedTime: "Prototype estimate: 15–20 working days",
      ruleReason: "Triggered by industrial steam boiler installation."
    });
  }

  return {
    approvals: requiredApprovals,
    rulesEvaluated: evaluatedRules,
    totalCount: requiredApprovals.length,
    timestamp: new Date().toLocaleTimeString()
  };
}
