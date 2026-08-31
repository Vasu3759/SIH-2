export const demoProjects = {
  food_processing: {
    id: "PROJ-MH-2026-0842",
    name: "ABC Food Processing Pvt Ltd",
    industry: "Food Processing",
    industryCategory: "Packaged Food & Agro-processing",
    location: {
      state: "Maharashtra",
      district: "Pune",
      taluka: "Haveli",
      industrialArea: "Chakan Industrial Zone (MIDC Phase II)",
      surveyNumber: "Plot No. A-42/1, Sector 3, Chakan MIDC"
    },
    investment: "₹5.00 Crore",
    investmentValueCr: 5.0,
    employees: 80,
    landArea: "2.0 Acres",
    landAreaSqM: 8093,
    projectType: "New Project",
    productionCapacity: "1,200 MT/annum Packaged Foods",
    powerRequiredKVA: 150,
    waterRequirementKLD: 25,
    pollutionCategory: "Orange",
    hasBoiler: false,
    hasHazardousMaterials: false,
    hazardousDetails: "None",
    overallProgress: 72,
    statusCounts: {
      completed: 4,
      inReview: 2,
      actionRequired: 1,
      notStarted: 2,
      total: 9
    },
    nextAction: {
      title: "Upload revised Factory Layout",
      reason: "Factory Licence application flagged a survey dimension discrepancy in the layout drawing.",
      approval: "Factory Licence (DISH)",
      deadline: "27 August 2026",
      urgent: true,
      documentTarget: "Building_Plan.pdf"
    }
  },

  manufacturing: {
    id: "PROJ-MH-2026-1109",
    name: "Bharat Precision Engineering Works",
    industry: "Manufacturing",
    industryCategory: "Heavy Fabrication & Auto Components",
    location: {
      state: "Maharashtra",
      district: "Nagpur",
      taluka: "Hingna",
      industrialArea: "MIDC Hingna Industrial Estate",
      surveyNumber: "Plot No. C-18, Sector 4, Hingna MIDC"
    },
    investment: "₹20.00 Crore",
    investmentValueCr: 20.0,
    employees: 250,
    landArea: "5.0 Acres",
    landAreaSqM: 20234,
    projectType: "Expansion",
    productionCapacity: "4,500 MT/annum Castings & Machined Components",
    powerRequiredKVA: 450,
    waterRequirementKLD: 40,
    pollutionCategory: "Red",
    hasBoiler: true,
    hasHazardousMaterials: true,
    hazardousDetails: "Industrial Solvents, Cutting Oils & LPG Bulk Storage",
    overallProgress: 45,
    statusCounts: {
      completed: 3,
      inReview: 3,
      actionRequired: 2,
      notStarted: 4,
      total: 12
    },
    nextAction: {
      title: "Submit Boiler Inspection Dossier",
      reason: "Boiler registration requires third-party hydro-test certificate.",
      approval: "Boiler Registration",
      deadline: "15 September 2026",
      urgent: false,
      documentTarget: "Boiler_Test_Cert.pdf"
    }
  },

  it_ites: {
    id: "PROJ-MH-2026-0312",
    name: "Sahyadri Cloud Systems LLP",
    industry: "IT/ITES",
    industryCategory: "Software Development & IT Support Services",
    location: {
      state: "Maharashtra",
      district: "Pune",
      taluka: "Pune City",
      industrialArea: "Hinjawadi Rajiv Gandhi Infotech Park (Phase 1)",
      surveyNumber: "Building B4, Tech Zone, Hinjawadi"
    },
    investment: "₹10.00 Crore",
    investmentValueCr: 10.0,
    employees: 150,
    landArea: "1.0 Acre (Built-up lease)",
    landAreaSqM: 4047,
    projectType: "New Project",
    productionCapacity: "N/A (Software Engineering Facility)",
    powerRequiredKVA: 80,
    waterRequirementKLD: 10,
    pollutionCategory: "White",
    hasBoiler: false,
    hasHazardousMaterials: false,
    hazardousDetails: "None",
    overallProgress: 88,
    statusCounts: {
      completed: 5,
      inReview: 1,
      actionRequired: 0,
      notStarted: 1,
      total: 7
    },
    nextAction: {
      title: "Finalize Annual Shops & Establishment Return",
      reason: "Routine compliance verification.",
      approval: "Shops & Establishments",
      deadline: "30 September 2026",
      urgent: false,
      documentTarget: "Labour_Register.pdf"
    }
  }
};
