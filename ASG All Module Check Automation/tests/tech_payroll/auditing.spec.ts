import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Auditing', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('/tech-payroll/auditing');

  await expect(techPayrollPage.customerSearch).toBeVisible();

  await techPayrollPage.customerSearch.click();
  await techPayrollPage.customerSearch.fill('test');
  await expect(techPayrollPage.customerSearch).toHaveValue('test');

  await techPayrollPage.searchButton.click();

  await techPayrollPage.customerSearch.click();
  await techPayrollPage.customerSearch.fill('');
  await expect(techPayrollPage.customerSearch).toHaveValue('');

  await techPayrollPage.searchButton.click();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.branchFilter).toBeVisible();

  await techPayrollPage.branchFilter.selectOption('1');
  await expect(techPayrollPage.branchFilter).toHaveValue('1');

  await techPayrollPage.applyButton.click();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.resetButton).toBeVisible();
  await techPayrollPage.resetButton.click();
  await expect(techPayrollPage.branchFilter).not.toHaveValue('1');

  await techPayrollPage.dateRangeCell.click();
  await expect(techPayrollPage.dateRangeDropdown).toBeVisible();
  await techPayrollPage.dateRangeDropdown.selectOption('AllTime');
  await expect(techPayrollPage.dateRangeDropdown).toHaveValue('AllTime');

  await techPayrollPage.applyButton.nth(1).click();

  await techPayrollPage.tabs.getByText('Overrides').click();
  await expect(techPayrollPage.tabs.getByText('Overrides')).toBeVisible();

  await techPayrollPage.tabs.getByText('Deductions').click();
  await expect(techPayrollPage.tabs.getByText('Deductions')).toBeVisible();

  await techPayrollPage.tabs.getByText('Add Ons').click();
  await expect(techPayrollPage.tabs.getByText('Add Ons')).toBeVisible();
});

