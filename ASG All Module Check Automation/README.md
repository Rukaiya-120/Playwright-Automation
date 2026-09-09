# ASG All Module Check Automation

## Overview

**ASG All Module Check Automation** is a Playwright-based end-to-end test automation project for validating major modules and workflows of the ASG application.

The project uses **Playwright with TypeScript** and follows a modular test structure to make the automation suite easier to maintain, execute, and extend.

The automation suite covers authentication, dashboard, inventory, funding, payroll, reports, scheduling, tasks, technician support, verification calls, and other application modules.

---

## Technologies Used

* **Playwright** – End-to-end browser automation
* **TypeScript** – Programming language
* **Node.js** – Runtime environment
* **npm** – Package management
* **Git** – Version control
* **GitHub** – Source code repository
* **VS Code** – Development environment

---

## Project Structure

```text
ASG All Module Check Automation/
│
├── pages/
│   └── LogInPage.ts
│
├── playwright/
│   └── Playwright-related files and resources
│
├── tests/
│   │
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
├── package-lock.json
├── playwright.config.ts
└── README.md
```

---

# Test Module Coverage

## 1. Authentication

**Location:**

```text
tests/auth/
```

### `auth.setup.ts`

Handles authentication setup required by the test suite.

### `auth.spec.ts`

Contains automated tests related to user login and authentication functionality.

---

## 2. Blitz Tracker

**Location:**

```text
tests/blitz tracker/
```

### `blitz_tracker.spec.ts`

Tests the Blitz Tracker module and verifies its primary functionality and UI behavior.

---

## 3. Compliance

**Location:**

```text
tests/compliacne/
```

### `compliance.spec.ts`

Tests the Compliance module and validates compliance-related workflows and functionality.

> Note: The folder is currently named `compliacne`. This appears to be a spelling variation of `compliance`. It can be renamed later if required, but any test/config references should be updated accordingly.

---

## 4. Dashboard

**Location:**

```text
tests/dashboard/
```

### `dashboard.spec.ts`

Tests Dashboard functionality and validates dashboard-related information and behavior.

---

## 5. Feedback Tickets

**Location:**

```text
tests/feedback_tickets/
```

### `feedback.spec.ts`

Tests the Feedback Tickets module and validates feedback ticket functionality.

---

# 6. Funding

**Location:**

```text
tests/funding/
```

The Funding module contains multiple test suites.

### `auditing.spec.ts`

Tests Funding Auditing functionality.

### `buyout.spec.ts`

Tests Buyout-related functionality and workflows.

### `installed_tracker.spec.ts`

Tests the Installed Tracker functionality.

### `loan_status_tracker.spec.ts`

Tests Loan Status Tracker functionality and related loan status workflows.

---

# 7. Inventory

**Location:**

```text
tests/inventory/
```

### `inventory.spec.ts`

Tests Inventory functionality and related inventory workflows.

The Inventory automation covers inventory-related functionality such as equipment and inventory data validation.

---

# 8. Leads

**Location:**

```text
tests/leads/
```

### `leads.spec.ts`

Tests the Leads module and validates lead-related workflows and functionality.

---

# 9. Payroll

**Location:**

```text
tests/payroll/
```

### `payroll.spec.ts`

Tests the Payroll module and validates payroll-related functionality.

---

# 10. Reports

**Location:**

```text
tests/reports/
```

The Reports module contains multiple automated test suites.

### `download_log.spec.ts`

Tests Download Log functionality.

### `pend_vert_status.spec.ts`

Tests Pending Verification Status-related reporting functionality.

### `sales_cohort.spec.ts`

Tests Sales Cohort reporting functionality.

### `tech_in_out.spec.ts`

Tests Technician In/Out reporting functionality.

---

# 11. Scheduling

**Location:**

```text
tests/scheduling/
```

### `scheduling.spec.ts`

Tests Scheduling functionality and validates scheduling-related workflows.

---

# 12. Task

**Location:**

```text
tests/task/
```

### `task.spec.ts`

Tests Task-related functionality and workflows.

---

# 13. Tech Payroll

**Location:**

```text
tests/tech_payroll/
```

The Tech Payroll module contains several dedicated test suites.

### `add_ons.spec.ts`

Tests technician payroll Add-ons functionality.

### `auditing.spec.ts`

Tests technician payroll auditing functionality.

### `deductions.spec.ts`

Tests technician payroll deductions.

### `installs.spec.ts`

Tests technician installation-related payroll functionality.

### `overrides.spec.ts`

Tests technician payroll overrides.

### `weekly_pay.spec.ts`

Tests Weekly Pay functionality and related payroll calculations/workflows.

---

# 14. Tech Support

**Location:**

```text
tests/tech_support/
```

### `tech_support.spec.ts`

Tests the Tech Support module and validates technician support-related workflows.

---

# 15. Verification Calls

**Location:**

```text
tests/verification calls/
```

This module contains three automated test suites.

### `all_customer.spec.ts`

Tests the All Customer functionality within Verification Calls.

### `queue.spec.ts`

Tests the Verification Call Queue and related queue functionality.

### `resolution.spec.ts`

Tests Verification Call Resolution functionality.

---

# Page Object Model

The project uses a `pages` directory to store reusable page-related classes and locators.

Current page object:

```text
pages/
└── LogInPage.ts
```

### `LogInPage.ts`

Contains reusable locators and actions related to the application's login page.

Using page objects helps reduce duplicate locators and makes test maintenance easier.

---

# Playwright Configuration

The main Playwright configuration is:

```text
playwright.config.ts
```

The configuration controls items such as:

* Test directory
* Test timeout
* Expect timeout
* Browser configuration
* Base URL
* Headless/headed execution
* Viewport
* Workers
* Retries
* Reporting

---

# Environment Configuration

The project uses environment variables for environment-specific configuration.

Create a local `.env` file in the project root when required.

Example:

```env
BASE_URL=your_application_url
USERNAME=your_username
PASSWORD=your_password
```

> **Important:** Never commit the `.env` file to GitHub. Credentials and other sensitive environment information should remain local.

The `.gitignore` file is configured to exclude environment files and generated Playwright files.

---

# Installation

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* VS Code

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

---

## Install Dependencies

Navigate to the project directory:

```powershell
cd "ASG All Module Check Automation"
```

Install npm dependencies:

```powershell
npm install
```

Install Playwright browsers:

```powershell
npx playwright install
```

---

# Running Tests

## Run All Tests

```powershell
npx playwright test
```

This executes all configured Playwright test files.

---

## Run Tests in Headed Mode

To see the browser while tests are running:

```powershell
npx playwright test --headed
```

---

## Run a Specific Test File

Example:

```powershell
npx playwright test "tests/auth/auth.spec.ts"
```

Another example:

```powershell
npx playwright test "tests/inventory/inventory.spec.ts"
```

---

## Run a Specific Module

For example, to run the Funding tests:

```powershell
npx playwright test "tests/funding"
```

To run Tech Payroll tests:

```powershell
npx playwright test "tests/tech_payroll"
```

---

# Debugging Tests

Run Playwright in debug mode:

```powershell
npx playwright test --debug
```

This opens Playwright Inspector and allows the test execution to be inspected step by step.

---

# Playwright UI Mode

Run:

```powershell
npx playwright test --ui
```

UI Mode provides an interactive interface for:

* Selecting tests
* Running tests
* Debugging tests
* Viewing test steps
* Inspecting test results

---

# Test Reports

After executing tests, Playwright generates test results and reports according to the configuration.

To open the HTML report:

```powershell
npx playwright show-report
```

The report can be used to review:

* Passed tests
* Failed tests
* Test duration
* Errors
* Screenshots
* Traces
* Test steps

---

# Common Playwright Commands

| Purpose                 | Command                                    |
| ----------------------- | ------------------------------------------ |
| Run all tests           | `npx playwright test`                      |
| Run headed              | `npx playwright test --headed`             |
| Debug                   | `npx playwright test --debug`              |
| UI Mode                 | `npx playwright test --ui`                 |
| Run specific file       | `npx playwright test path/to/file.spec.ts` |
| Open report             | `npx playwright show-report`               |
| Install browsers        | `npx playwright install`                   |
| Show Playwright version | `npx playwright --version`                 |

---

# Git and GitHub

This project is maintained inside the main:

**Playwright-Automation**

GitHub repository.

The repository is structured so that additional Playwright projects can be added as separate folders.

Example:

```text
Playwright-Automation/
│
├── ASG All Module Check Automation/
│
├── Another Playwright Project/
│
└── Future Automation Project/
```

The parent `Playwright-Automation` directory contains the Git repository.

Individual Playwright projects should **not** contain their own `.git` directories.

---

# Git Workflow

From the parent `Playwright-Automation` directory:

### Check Changes

```powershell
git status
```

### Stage Changes

```powershell
git add .
```

### Commit Changes

```powershell
git commit -m "Update ASG automation tests"
```

### Push Changes

```powershell
git push
```

---

# Adding a New Playwright Project

When another automation project is created, place it inside the parent repository:

```text
Playwright-Automation/
│
├── ASG All Module Check Automation/
│
└── New Playwright Project/
```

Make sure the new project does not contain its own `.git` directory.

Then from the parent directory:

```powershell
git add .
git commit -m "Add new Playwright automation project"
git push
```

---

# Recommended Automation Practices

The following practices should be followed when adding new tests:

1. Use meaningful test names.
2. Keep tests organized by application module.
3. Reuse common locators and actions through Page Object classes.
4. Avoid hard-coded credentials.
5. Store environment-specific values in `.env`.
6. Do not commit `.env` files.
7. Avoid unnecessary fixed waits.
8. Prefer Playwright's built-in auto-waiting and assertions.
9. Use reliable locators such as roles, labels, and test IDs where available.
10. Keep individual test cases focused on a specific workflow.
11. Review failed tests before marking a test as a product bug.
12. Run the relevant module tests after making automation changes.
13. Run the complete suite periodically to identify regressions.

---

# Test Execution Workflow

A typical automation workflow is:

```text
1. Update application / build
          ↓
2. Pull latest automation code
          ↓
3. Install/update dependencies if required
          ↓
4. Configure environment
          ↓
5. Run required module tests
          ↓
6. Review test results
          ↓
7. Investigate failures
          ↓
8. Report application defects if applicable
          ↓
9. Fix automation if the failure is caused by the test
          ↓
10. Re-run failed tests
          ↓
11. Run complete regression suite
          ↓
12. Commit and push automation changes
```

---

# Project Goals

The primary goals of this automation project are:

* Automate functional checks across major ASG application modules.
* Reduce repetitive manual testing.
* Detect regressions quickly.
* Improve test execution consistency.
* Provide reusable automation components.
* Maintain organized module-wise test coverage.
* Support future expansion of the automation suite.

---

# Current Test Modules

| Module             | Test Files |
| ------------------ | ---------: |
| Authentication     |          2 |
| Blitz Tracker      |          1 |
| Compliance         |          1 |
| Dashboard          |          1 |
| Feedback Tickets   |          1 |
| Funding            |          4 |
| Inventory          |          1 |
| Leads              |          1 |
| Payroll            |          1 |
| Reports            |          4 |
| Scheduling         |          1 |
| Task               |          1 |
| Tech Payroll       |          6 |
| Tech Support       |          1 |
| Verification Calls |          3 |
| **Total**          |     **29** |

---

# Maintainer

**ASG Playwright Automation Team**

This project is intended to be continuously updated as new modules, features, and regression scenarios are added to the ASG application.

