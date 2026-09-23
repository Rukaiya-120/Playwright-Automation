# DMoney Automation

End-to-end test automation for the DMoney web application using Playwright and TypeScript.

Application under test: `https://dmoneyportal.roadtocareer.net`

## What This Project Tests

The suite contains eight Playwright tests covering the main DMoney administrative and agent workflows:

1. `auth.setup.ts` - Logs in as admin and creates `playwright/.auth/admin.json`.
2. `1create_agent.spec.ts` - Creates an agent with generated credentials and phone data.
3. `2admin_login.spec.ts` - Verifies the admin dashboard login and URL.
4. `3user_activate.spec.ts` - Activates the first user and verifies the success popup.
5. `4cashIn_system.spec.ts` - Deposits `10000` BDT into the system account.
6. `5system_login.spec.ts` - Logs in as SYSTEM and cashes in `2000` BDT to the created agent.
7. `6agent_login.spec.ts` - Logs in as the agent with a Gmail OTP and verifies the current balance is `2000` BDT.
8. `mailAuth.spec.ts` - Reads and prints the latest Gmail message used for OTP troubleshooting.

The tests use Page Object Model classes in `pages/` so selectors and browser actions remain separate from test scenarios.

## Project Structure

```text
.
├── .github/workflows/playwright.yml  # GitHub Actions CI workflow
├── pages/                            # Page Object Model classes
├── services/                         # External integrations, including Gmail API
├── tests/                            # Playwright test scenarios and auth setup
├── utils/                            # OTP extraction and generated-agent data helpers
├── playwright.config.ts              # Playwright projects and CI settings
├── package.json                      # Node.js project metadata
└── .env.example                      # Required local environment variables
```

## Prerequisites

- Node.js 20 or later
- npm
- A Gmail API access token with permission to read the mailbox receiving DMoney OTP emails
- Access to the DMoney test application

## Installation

From this directory:

```bash
npm ci
npx playwright install --with-deps
```

On Windows, `npx playwright install` is usually sufficient. The `--with-deps` option is intended primarily for Linux CI runners.

## Environment Setup

Create a local `.env` file from `.env.example`:

```bash
copy .env.example .env
```

Set the Gmail token:

```env
Gmail_Access_Token=your_gmail_access_token
```

The token is read by `services/gmailAuth.ts`. Do not commit `.env` or expose the token in source control.

## Running Tests

List discovered tests without executing them:

```bash
npx playwright test --list
```

Run the complete suite:

```bash
npx playwright test
```

Run with a visible browser:

```bash
npx playwright test --headed
```

Run one scenario:

```bash
npx playwright test tests/6agent_login.spec.ts --project=chromium --headed
```

Run the Gmail reader independently:

```bash
npx playwright test tests/mailAuth.spec.ts --project=chromium
```

View the HTML report after a run:

```bash
npx playwright show-report
```

## Test Data Flow

Some scenarios intentionally share generated data:

1. `1create_agent.spec.ts` creates a random agent and writes its phone number and credentials to `playwright/.auth/`.
2. `3user_activate.spec.ts` activates the created user from the admin area.
3. `4cashIn_system.spec.ts` deposits funds into the system account.
4. `5system_login.spec.ts` reads the generated phone number and transfers `2000` BDT to the agent.
5. `6agent_login.spec.ts` reads the generated credentials, retrieves the OTP through Gmail, logs in, and checks the current balance.

Run the full suite when validating this chain. Running a dependent test alone requires the generated files to exist and the user/account state to already be prepared.

## Authentication and Playwright Projects

`tests/auth.setup.ts` logs in as the admin and saves the authenticated browser state to:

```text
playwright/.auth/admin.json
```

The Chromium project depends on this setup project. Authentication artifacts and generated agent data are ignored by Git because they contain session or test-specific information.

## CI/CD with GitHub Actions

The workflow at `.github/workflows/playwright.yml` runs on:

- Pushes to `main` or `master`
- Pull requests targeting `main` or `master`

Before running the workflow, add this repository secret in GitHub:

```text
GMAIL_ACCESS_TOKEN
```

The workflow maps that secret to the application variable `Gmail_Access_Token`, installs Node dependencies and Playwright browsers, runs the suite on Ubuntu, and uploads `playwright-report/` as an artifact for 30 days.

To inspect a failed CI run:

1. Open the failed GitHub Actions run.
2. Download the `playwright-report` artifact.
3. Extract it and run `npx playwright show-report <report-directory>` locally.

Never print the Gmail token in workflow logs. If the Gmail token expires, update the repository secret and rerun the workflow.

## Page Objects

- `LoginPage`: shared system/admin login actions.
- `AgentLoginPage`: agent credentials, OTP entry, OTP verification, and balance assertion.
- `AgentRegistrationPage`: agent registration form.
- `AdminUsersPage`: admin dashboard, user activation, and update-success confirmation.
- `SystemDepositPage`: deposit funds into the system account.
- `AgentCashInPage`: cash-in to an agent account.

## Troubleshooting

### Gmail OTP is not found

Confirm that:

- `Gmail_Access_Token` is present and valid.
- The token can read the mailbox receiving the OTP.
- The latest Gmail message is the DMoney OTP email.
- The OTP email has not expired; the application states that OTPs are valid for two minutes.

### Generated agent data is missing

Run the agent creation test first, or run the complete suite. The required files are created under `playwright/.auth/` and are not committed.

### Admin authentication fails

Verify that the DMoney application is reachable and that the configured admin account is available. The setup test must create `playwright/.auth/admin.json` before dependent Chromium tests run.

## Security Notes

- Keep `.env`, access tokens, passwords, and storage-state files out of source control.
- Use GitHub Actions Secrets for CI credentials.
- Use test-only accounts and data for automation.
- Rotate the Gmail access token if it is exposed.