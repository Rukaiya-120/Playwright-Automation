import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Weekly Pay', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('/tech-payroll/weeklypay');
  await expect(techPayrollPage.filterButton).toBeVisible();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.batchFilter).toBeVisible();

  await techPayrollPage.batchFilter.selectOption({ index: 0});

  await techPayrollPage.applyButton.click();
  await expect(techPayrollPage.filterButton).toBeVisible();

  await techPayrollPage.filterButton.click();
  
  await techPayrollPage.applyButton.click();

  await techPayrollPage.filterButton.click();

  await techPayrollPage.resetButton.click();
  await expect(techPayrollPage.filterButton).toBeVisible();
});
