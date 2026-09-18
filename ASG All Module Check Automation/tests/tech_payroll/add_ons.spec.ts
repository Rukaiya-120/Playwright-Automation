import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Add-Ons', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('/tech-payroll/add-ons');
  await techPayrollPage.filterButton.click();
  await techPayrollPage.branchFilter.selectOption('1');
  await techPayrollPage.applyButton.click();
  await techPayrollPage.filterButton.click();
  await techPayrollPage.resetButton.click();
});