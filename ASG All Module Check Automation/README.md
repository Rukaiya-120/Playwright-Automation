# ASG All Module Check Automation

## Overview

This project is a Playwright + TypeScript automation suite for validating key ASG application modules and workflows.

It is organized by module and uses page-object classes in the `pages` directory to centralize reusable locators and interactions. The test suite currently covers login, dashboard, funding, inventory, leads, payroll, reports, scheduling, task, tech payroll, tech support, and verification calls.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- npm
- Git
- VS Code

---

## Current Project Structure

```text
ASG All Module Check Automation/
├── pages/
│   ├── AuthPage.ts
│   ├── BlitzTrackerPage.ts
│   ├── DashboardPage.ts
│   ├── FeedbackTicketsPage.ts
│   ├── FundingAuditingPage.ts
│   ├── FundingBuyoutPage.ts
│   ├── InstalledTrackerPage.ts
│   ├── InventoryPage.ts
│   ├── LeadsPage.ts
│   ├── LoanStatusTrackerPage.ts
│   ├── LogInPage.ts
│   ├── PayrollPage.ts
│   ├── ReportsPage.ts
│   ├── SchedulingPage.ts
│   ├── TaskPage.ts
│   ├── TechPayrollPage.ts
│   ├── TechSupportPage.ts
│   └── VerificationCallsPage.ts
│
├── playwright/
│   └── (project Playwright related content)
│
├── test-results/
│   └── generated Playwright results
│
├── playwright-report/
│   └── generated HTML report output
│
├── tests/
│   ├── auth/
│   │   ├── auth.setup.ts
│   │   └── auth.spec.ts
│   │
│   ├── blitz tracker/
│   │   └── blitz_tracker.spec.ts
│   │
│   ├── compliacne/
│   │   └── compliance.spec.ts
│   │
│   ├── dashboard/
│   │   └── dashboard.spec.ts
│   │
│   ├── feedback_tickets/
│   │   └── feedback.spec.ts
│   │
│   ├── funding/
│   │   ├── auditing.spec.ts
│   │   ├── buyout.spec.ts
│   │   ├── installed_tracker.spec.ts
│   │   └── loan_status_tracker.spec.ts
│   │
│   ├── inventory/
│   │   └── inventory.spec.ts
│   │
│   ├── leads/
│   │   └── leads.spec.ts
│   │
│   ├── payroll/
│   │   └── payroll.spec.ts
│   │
│   ├── reports/
│   │   ├── download_log.spec.ts
│   │   ├── pend_vert_status.spec.ts
│   │   ├── sales_cohort.spec.ts
│   │   └── tech_in_out.spec.ts
│   │
│   ├── scheduling/
│   │   └── scheduling.spec.ts
│   │
│   ├── task/
│   │   └── task.spec.ts
│   │
│   ├── tech_payroll/
│   │   ├── add_ons.spec.ts
│   │   ├── auditing.spec.ts
│   │   ├── deductions.spec.ts
│   │   ├── installs.spec.ts
│   │   ├── overrides.spec.ts
│   │   └── weekly_pay.spec.ts
│   │
│   ├── tech_support/
│   │   └── tech_support.spec.ts
│   │
│   └── verification calls/
│       ├── all_customer.spec.ts
│       ├── queue.spec.ts
│       └── resolution.spec.ts
│
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── package-lock.json
```

---

## Test Module Coverage

### Authentication
- `tests/auth/auth.setup.ts`
- `tests/auth/auth.spec.ts`

### Blitz Tracker
- `tests/blitz tracker/blitz_tracker.spec.ts`

### Compliance
- `tests/compliacne/compliance.spec.ts`

> Note: the folder name is currently spelled `compliacne` and may be renamed to `compliance` later for consistency.

### Dashboard
- `tests/dashboard/dashboard.spec.ts`

### Feedback Tickets
- `tests/feedback_tickets/feedback.spec.ts`

### Funding
- `tests/funding/auditing.spec.ts`
- `tests/funding/buyout.spec.ts`
- `tests/funding/installed_tracker.spec.ts`
- `tests/funding/loan_status_tracker.spec.ts`

### Inventory
- `tests/inventory/inventory.spec.ts`

### Leads
- `tests/leads/leads.spec.ts`

### Payroll
- `tests/payroll/payroll.spec.ts`

### Reports
- `tests/reports/download_log.spec.ts`
- `tests/reports/pend_vert_status.spec.ts`
- `tests/reports/sales_cohort.spec.ts`
- `tests/reports/tech_in_out.spec.ts`

### Scheduling
- `tests/scheduling/scheduling.spec.ts`

### Task
- `tests/task/task.spec.ts`

### Tech Payroll
- `tests/tech_payroll/add_ons.spec.ts`
- `tests/tech_payroll/auditing.spec.ts`
- `tests/tech_payroll/deductions.spec.ts`
- `tests/tech_payroll/installs.spec.ts`
- `tests/tech_payroll/overrides.spec.ts`
- `tests/tech_payroll/weekly_pay.spec.ts`

### Tech Support
- `tests/tech_support/tech_support.spec.ts`

### Verification Calls
- `tests/verification calls/all_customer.spec.ts`
- `tests/verification calls/queue.spec.ts`
- `tests/verification calls/resolution.spec.ts`

---

## Page Object Model

The project uses page objects to keep locators reusable and maintainable.

Current page-object files:

```text
pages/
├── AuthPage.ts
├── BlitzTrackerPage.ts
├── DashboardPage.ts
├── FeedbackTicketsPage.ts
├── FundingAuditingPage.ts
├── FundingBuyoutPage.ts
├── InstalledTrackerPage.ts
├── InventoryPage.ts
├── LeadsPage.ts
├── LoanStatusTrackerPage.ts
├── LogInPage.ts
├── PayrollPage.ts
├── ReportsPage.ts
├── SchedulingPage.ts
├── TaskPage.ts
├── TechPayrollPage.ts
├── TechSupportPage.ts
└── VerificationCallsPage.ts
```

The original login helper remains in `LogInPage.ts`, while the newer module-specific locator classes are used for the rest of the automation suite.

---

## Playwright Configuration

The Playwright setup is controlled by:

- `playwright.config.ts`

This file controls the test runner settings and browser configuration for the project.

---

## Environment Setup

This project uses environment variables for login/auth configuration.

Create a local `.env` file in the project root if needed, for example:

```env
LOGIN_USERNAME=your_username
LOGIN_PASSWORD=your_password
```

> Do not commit `.env` files to version control.

---

## Installation

### Prerequisites

- Node.js
- npm
- Git
- VS Code

### Install dependencies

```powershell
npm install
```

### Install browsers

```powershell
npx playwright install
```

---

## Running Tests

### Run all tests

```powershell
npx playwright test
```

### Run in headed mode

```powershell
npx playwright test --headed
```

### Run a single file

```powershell
npx playwright test "tests/auth/auth.spec.ts"
```

### Run a module folder

```powershell
npx playwright test "tests/funding"
```

### Open the HTML report

```powershell
npx playwright show-report
```

---

## Useful Commands

```powershell
npx playwright test --list
npx playwright test --debug
npx playwright test --ui
npx playwright show-report
```

---

## Notes

- The project is structured around module-based test folders.
- The suite currently contains 49 Playwright tests across 28 files.
- The current workspace includes generated artifacts such as `playwright-report/` and `test-results/`.
- Some folder names contain spaces or legacy naming conventions, such as `blitz tracker` and `verification calls`, and may be cleaned up later if desired.

---

## Maintainer

ASG Playwright Automation Team

