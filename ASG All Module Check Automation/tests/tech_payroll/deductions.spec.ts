import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Deductions', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('/tech-payroll/deductions');
  await techPayrollPage.filterButton.click();
  await techPayrollPage.employeeFilter.selectOption('653e2829-5557-4ed1-b873-5e35421db03c');
  await techPayrollPage.employeeFilter.selectOption('-1');
  await techPayrollPage.branchFilter.selectOption('1');
  await techPayrollPage.applyButton.click();
  await techPayrollPage.filterButton.click();
  await techPayrollPage.resetButton.click();
});