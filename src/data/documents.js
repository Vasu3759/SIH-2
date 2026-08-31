export const initialDocuments = [
  {
    id: "doc-pan",
    fileName: "PAN_Card_ABC_Food.pdf",
    documentType: "Company PAN",
    category: "Corporate",
    uploadDate: "12 May 2026",
    size: "420 KB",
    status: "Valid",
    extractedData: {
      entityName: "ABC Food Processing Private Limited",
      panNumber: "AAACA1234F",
      incorporationDate: "14/02/2024",
      entityType: "Private Limited Company"
    },
    validations: [
      { field: "Company Name Match", status: "PASS", message: "Matches registered company name with 100% confidence" },
      { field: "PAN Format & Checksum", status: "PASS", message: "Valid 10-digit alphanumeric structure" },
      { field: "Income Tax Verification", status: "PASS", message: "Active status verified on ITD database" }
    ]
  },
  {
    id: "doc-land",
    fileName: "MIDC_Lease_Deed_Chakan.pdf",
    documentType: "Land Allotment / Lease Deed",
    category: "Land & Site",
    uploadDate: "18 May 2026",
    size: "2.4 MB",
    status: "Valid",
    extractedData: {
      entityName: "ABC Food Processing Private Limited",
      plotNumber: "Plot No. A-42/1",
      sector: "Sector 3",
      industrialArea: "Chakan Industrial Zone, MIDC Phase II",
      areaSqM: "8093.71 Sq.M (2.00 Acres)",
      leaseTenure: "95 Years",
      executionDate: "05/03/2024"
    },
    validations: [
      { field: "Title Holder Match", status: "PASS", message: "Allotment deed is in the name of ABC Food Processing Pvt Ltd" },
      { field: "Industrial Zoning", status: "PASS", message: "Permitted for Food Processing & Agro-industrial operations" },
      { field: "Registered Stamp Duty", status: "PASS", message: "Sub-Registrar registration stamp verified" }
    ]
  },
  {
    id: "doc-project-report",
    fileName: "Detailed_Project_Report_DPR.pdf",
    documentType: "Project Report",
    category: "Technical & Financial",
    uploadDate: "20 May 2026",
    size: "5.1 MB",
    status: "Valid",
    extractedData: {
      projectName: "Agro Packaged Snacks & Frozen Food Unit",
      totalCapitalOutlay: "₹500.00 Lakhs (₹5.00 Cr)",
      proposedEmployment: "80 Workers (Direct: 60, Indirect: 20)",
      installedCapacity: "1,200 MT/annum",
      powerRequirement: "150 kVA",
      waterRequirement: "25 KLD"
    },
    validations: [
      { field: "Capital Investment Alignment", status: "PASS", message: "Investment of ₹5 Cr aligns with MSME Small Enterprise threshold" },
      { field: "Process Flow Clarity", status: "PASS", message: "Raw material cleaning, freezing, vacuum packing described clearly" },
      { field: "Chartered Engineer Vetting", status: "PASS", message: "Endorsed by Empanelled Chartered Engineer" }
    ]
  },
  {
    id: "doc-building-plan",
    fileName: "Building_Plan.pdf",
    documentType: "Factory Building & Site Plan",
    category: "Engineering & Safety",
    uploadDate: "15 June 2026",
    size: "8.6 MB",
    status: "Issue Found",
    issueType: "Survey & Coordinate Discrepancy",
    extractedData: {
      companyName: "ABC Industries Pvt Ltd", // Truncated/minor mismatch in drawing title block
      plotNumber: "Plot No. A-42/1",
      surveyNumber: "123/4", // Discrepancy with Lease Deed's 123/4B
      siteAddress: "Chakan Industrial Zone, Pune",
      coveredAreaSqM: "4,820 Sq.M",
      architectLicense: "CA/2012/58912"
    },
    validations: [
      { field: "Company Name Match", status: "WARNING", message: "Drawing title block reads 'ABC Industries Pvt Ltd' instead of 'ABC Food Processing Pvt Ltd'" },
      { field: "Survey Number Consistency", status: "FAIL", message: "Survey number extracted as '123/4'. Lease deed records '123/4B'. Needs verification or correction." },
      { field: "Fire Setback Clearance", status: "PASS", message: "9-meter peripheral driveway complies with NBC fire norms" },
      { field: "Ventilation Ratio", status: "PASS", message: "Window-to-floor area ratio is 16.2% (>10% required under Factories Act)" }
    ],
    resolutionHint: "Re-upload the revised architectural layout drawing with matching corporate title 'ABC Food Processing Pvt Ltd' and rectified survey identifier '123/4B'."
  },
  {
    id: "doc-water-test",
    fileName: "NABL_Water_Quality_Analysis.pdf",
    documentType: "Water Test Report",
    category: "Environmental & Health",
    uploadDate: "28 June 2026",
    size: "1.1 MB",
    status: "Valid",
    extractedData: {
      laboratory: "SGS India NABL Accredited Lab",
      sampleSource: "MIDC Industrial Supply & Borewell Blend",
      potabilityStandard: "IS 10500:2012 Compliant",
      tdsMgL: "240 mg/L",
      coliformCount: "Nil / 100ml"
    },
    validations: [
      { field: "IS 10500 Potability Test", status: "PASS", message: "All chemical and microbiological parameters within permissible limits for food manufacturing" },
      { field: "Lab NABL Accreditation Validity", status: "PASS", message: "Certificate valid until 2028" }
    ]
  },
  {
    id: "doc-fire-layout",
    fileName: "Fire_Evacuation_Layout.pdf",
    documentType: "Fire Safety Drawings",
    category: "Safety & Emergency",
    uploadDate: "05 July 2026",
    size: "4.8 MB",
    status: "Valid",
    extractedData: {
      emergencyExits: "4 dedicated fire exits",
      hydrantRisers: "6 internal landing valves",
      undergroundStaticTank: "100,000 Litres",
      sprinklerCoverage: "100% processing and warehouse zones"
    },
    validations: [
      { field: "NBC 2016 Part 4 Compliance", status: "PASS", message: "Hydrant spacing and egress travel distances satisfy Part 4 norms" }
    ]
  }
];
