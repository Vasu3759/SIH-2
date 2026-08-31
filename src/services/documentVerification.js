import { initialDocuments } from "../data/documents";

/**
 * Document Intelligence & Cross-Validation Service
 * Simulates OCR extraction and consistency checks against project records.
 */
export function checkDocumentConsistency(document, project) {
  if (document.fileName === "Building_Plan.pdf" && document.status === "Issue Found") {
    return {
      isValid: false,
      issueCount: 1,
      warningCount: 1,
      mismatchField: "Survey Number",
      expectedValue: project?.location?.surveyNumber || "Plot No. A-42/1, Sector 3, Chakan MIDC (Survey 123/4B)",
      extractedValue: "Survey 123/4 (Plot No. A-42/1)",
      explanation: "Title block in drawing references Survey 123/4 whereas registered land deed references Survey 123/4B. May trigger DISH / Town Planning scrutiny objection."
    };
  }

  return {
    isValid: true,
    issueCount: 0,
    warningCount: 0,
    mismatchField: null,
    expectedValue: null,
    extractedValue: null,
    explanation: "All extracted metadata matches registered project parameters."
  };
}

/**
 * Returns mock upload verification results for newly uploaded files
 */
export function simulateUploadVerification(file) {
  const name = file.name || "Uploaded_Document.pdf";
  return {
    id: `doc-${Date.now()}`,
    fileName: name,
    documentType: "Supporting Evidence / Drawing",
    category: "Industrial Drawings",
    uploadDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    size: "3.2 MB",
    status: "Valid",
    extractedData: {
      entityName: "ABC Food Processing Private Limited",
      surveyNumber: "123/4B",
      siteAddress: "Chakan Industrial Zone, Pune",
      verificationConfidence: "99.4%"
    },
    validations: [
      { field: "Entity Name Integrity", status: "PASS", message: "Exact match with registered ROC profile" },
      { field: "Survey Coordinates", status: "PASS", message: "123/4B verified against MIDC Allotment Deed" },
      { field: "Architect Seal & Signature", status: "PASS", message: "Council of Architecture registration verified" }
    ]
  };
}
