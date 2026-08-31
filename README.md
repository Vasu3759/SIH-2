# 🇮🇳 INDUSTRIA — AI-Powered Industrial Approval & Compliance Assistant

> **Smart India Hackathon (SIH) 2026 Prototype**  
> **Single-Window Industrial Facilitation & Regulatory Compliance Portal**  
> *Government of Maharashtra Industrial Department Model (MAITRI Style)*

---

## 📌 1. Project Overview

Setting up an industrial manufacturing plant or processing unit in India typically requires navigating **9+ government departments** with sequential application queues, overlapping document requirements, and lengthy query ping-pong cycles.

**INDUSTRIA** is an intelligent, single-window digital compliance portal designed with a **human-centered administrative architecture**. It combines a **deterministic statutory rule engine**, **document intelligence (pre-scrutiny consistency checks)**, **parallel workflow dependency mapping**, and **inter-departmental SLA bottleneck analytics**.

---

## 🚀 2. Quick Start Guide for Team Members

Follow these 3 simple steps to run the application locally on your machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18+ recommended)
- Git

### Step-by-Step Installation

```bash
# 1. Clone the repository
git clone https://github.com/Vasu3759/SIH-2.git

# 2. Navigate into the project folder
cd SIH-2

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

The application will launch on `http://localhost:5173/`.

### Production Build Verification (Optional)
```bash
npm run build
```

---

## 🌟 3. Key Modules & Standout Features

### 🏢 A. Entrepreneur Workspace
1. **Executive Dashboard:**
   - Pre-loaded with **ABC Food Processing Pvt Ltd** (Chakan MIDC, Pune, ₹5 Cr Investment, 80 Workers, Orange Pollution Category).
   - Clear **72% Project Approval Progress** indicator.
   - Prominent **Next Action Banner** alerting to a survey coordinate mismatch in the Factory Layout drawing.
   - Summary status table across all statutory departments.

2. **Onboarding Questionnaire:**
   - 5-step wizard (Industry → Location → Business Scale → Environmental → Review) with conditional triggers for Hazardous Materials and Industrial Boilers.
   - Preset quick-loader buttons for instant scenario demonstrations.

3. **Required Clearances Catalog & Statutory Drawer:**
   - Lists 9 mandatory clearances with category filters.
   - Clicking an item opens the **Approval Detail Drawer** explaining the legal mandate (*Factories Act 1948*, *Water/Air Acts*, *FSS Act 2006*), required document package, and prototype processing timeline.

4. **Statutory Recommendation Logic:**
   - Transparent 3-column breakdown showing how business signals map directly to policy rules without unpredictable LLM hallucinations.

5. **Approval Dependency Roadmap (Process Optimization):**
   - Visual dependency graph highlighting **Stage 2 Parallel Opportunities** (where Pollution CTE, Building Permission, Fire Provisional NOC, and FSSAI run simultaneously after land allotment).

6. **Document Intelligence & Pre-Scrutiny:**
   - Simulates OCR metadata extraction and cross-checks drawings against registered land deeds.
   - Live demo: `Building_Plan.pdf` flags a discrepancy (Survey `123/4` in drawing vs `123/4B` in lease deed).
   - Clicking **"Upload Revised Factory Layout (Resolve Issue)"** updates the status to **Valid**, unblocks scrutiny, increases progress to **78%**, and resolves the Next Action banner!

7. **My Applications Ledger & Timeline:**
   - Single-window tracking with step-by-step chronological milestone histories.

8. **Compliance Renewals & Calendar:**
   - Multi-tier proactive alerts (30-day Reminder → 15-day Warning → 7-day Urgent).
   - Practical monthly compliance filing and safety audit schedule.

9. **Incentives & Schemes:**
   - Automated eligibility matching for Maharashtra Package Scheme of Incentives (PSI 2019) and central PMKSY food processing capital subsidies.

10. **Approval Guidance Assistant:**
    - Knowledge-base backed query assistant with one-click standard compliance questions.

---

### 🏛️ B. Government Department Workspace
1. **Department Operations Command:**
   - Operational KPIs: **1,250 Received, 310 Pending, 220 Under Review, 650 Approved, 70 Rejected**.
   - **Current Bottleneck Alert Panel:** Identifies **Pollution Department (MPCB)** with **42 overdue applications** and root-cause diagnostic.
   - Average Processing Time bar charts across departments.

2. **Department Applications Management:**
   - Filterable ledger by department, district, status, priority, and date range.
   - Officer Scrutiny Review modal allowing officers to raise document queries, schedule inspections, or grant approvals.

3. **Delayed Cases Tracker:**
   - Dedicated queue for all overdue applications with SLA variance indicators (+14d, +22d, +38d).

4. **Processing Time & Workload Analytics:**
   - Department caseload distribution and inter-departmental SLA turnaround metrics.

5. **Statutory Policy Rules Repository:**
   - Human-readable policy cards referencing official state gazettes and governing acts.

6. **System Architecture & Trust Principles:**
   - Clear architectural distinction between deterministic rule evaluation and AI decision support.

---

## 📁 4. Project Folder Structure

```
SIH-2/
├── index.html                   # HTML entry with Source Sans 3 typography
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Administrative color tokens & typography
├── src/
│   ├── main.jsx                 # React root entry point
│   ├── App.jsx                  # Root state management & role routing
│   ├── index.css                # Global enterprise CSS rules & table styles
│   ├── components/              # Reusable UI components
│   │   ├── Header.jsx           # Global government header & role switcher
│   │   ├── Sidebar.jsx          # Dual-role sidebar navigation
│   │   ├── ProjectSummaryStrip.jsx # Top metadata parameters strip
│   │   ├── ApprovalDrawer.jsx   # Statutory clearance detail slide drawer
│   │   ├── VerificationPanel.jsx# Document intelligence OCR verification modal
│   │   ├── ApplicationTimeline.jsx # Milestone timeline drawer
│   │   └── Toast.jsx            # Notification toast system
│   ├── pages/
│   │   ├── Landing.jsx          # Entry screen (Entrepreneur vs Government)
│   │   ├── entrepreneur/        # 10 Entrepreneur workflow pages
│   │   │   ├── EntrepreneurDashboard.jsx
│   │   │   ├── Onboarding.jsx
│   │   │   ├── RequiredApprovals.jsx
│   │   │   ├── RecommendationEngine.jsx
│   │   │   ├── ApprovalRoadmap.jsx
│   │   │   ├── Documents.jsx
│   │   │   ├── Applications.jsx
│   │   │   ├── Renewals.jsx
│   │   │   ├── ComplianceCalendar.jsx
│   │   │   ├── Incentives.jsx
│   │   │   └── ApprovalAssistant.jsx
│   │   └── government/          # 6 Government Officer workflow pages
│   │       ├── GovernmentDashboard.jsx
│   │       ├── DepartmentApplications.jsx
│   │       ├── DelayedCases.jsx
│   │       ├── Analytics.jsx
│   │       ├── Rules.jsx
│   │       └── Architecture.jsx
│   ├── data/                    # Local mock datasets & statutory rules
│   │   ├── projects.js
│   │   ├── approvals.js
│   │   ├── applications.js
│   │   ├── documents.js
│   │   ├── renewals.js
│   │   ├── departmentData.js
│   │   └── rules.js
│   └── services/                # Business logic engines
│       ├── approvalEngine.js    # Deterministic rule recommendation engine
│       ├── dependencyEngine.js  # Sequential & parallel dependency mapper
│       └── documentVerification.js # OCR cross-checking simulation
└── README.md
```

---

## 🛠️ 5. Technology Stack
- **Framework:** React 18 (JavaScript, JSX)
- **Tooling:** Vite 6
- **Styling:** Tailwind CSS 3 (Indian Administrative Light Theme `#F4F6F9`, Deep Navy `#1B365D`)
- **Typography:** Source Sans 3 (Google Fonts)
- **Iconography:** Lucide React
- **Charts:** Recharts

---

## 🎤 6. SIH Demo & Jury Presentation Guide

### 4-Minute Presentation Script:
1. **Introduction (1 min):** Open the Landing page. Enter as **Entrepreneur**. Explain how INDUSTRIA replaces fragmented queues with an intelligent single window.
2. **Rule Engine & Roadmap (1 min):** Show **Recommendation Logic** (explaining why deterministic rules are used instead of hallucinating LLMs) and **Approval Roadmap** (highlighting Stage 2 Parallel Opportunities).
3. **Document Intelligence Fix (1 min):** Click **Upload Revised Document** on the dashboard. Show the survey mismatch check on `Building_Plan.pdf`. Click **Resolve Issue** and show the dashboard updating live to 78%!
4. **Government Officer Command (1 min):** Switch to **Government Officer** in the header. Highlight the 1,250 caseload and the **Pollution Department Bottleneck (42 overdue cases)**.

---

## 📜 7. Mock Data vs Real Logic Disclaimer
All entities (*ABC Food Processing Pvt Ltd*), survey numbers, and case records are simulated mock data for hackathon demonstration. All statutory rules, document packages, and employee thresholds are based on real legislation (*Factories Act 1948*, *Water/Air Acts*, *FSS Act 2006*, and *Maharashtra Industrial Policy 2019*).
