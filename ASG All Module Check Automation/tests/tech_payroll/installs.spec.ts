import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Installs', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('/tech-payroll/installs');

  await expect(page.getByRole('textbox', { name: 'Find by a customer' })).toBeVisible();
  await page.waitForTimeout(5000);

  const customerSearch = page.getByRole('textbox', { name: 'Find by a customer' });
  await customerSearch.click();
  await customerSearch.fill('rukaiya');
  await expect(customerSearch).toHaveValue('rukaiya');

  await page.getByRole('button').first().click();

  await customerSearch.click();
  await customerSearch.dblclick();
  await customerSearch.fill('');
  await expect(customerSearch).toHaveValue('');

  await page.getByRole('button').first().click();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.employeeFilter).toBeVisible();

  await techPayrollPage.employeeFilter.selectOption('051034e0-264b-40bc-8063-806a7cb3e16c');
  await expect(techPayrollPage.employeeFilter).toHaveValue('051034e0-264b-40bc-8063-806a7cb3e16c');

  await techPayrollPage.applyButton.click();
  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.resetButton).toBeVisible();
  await techPayrollPage.resetButton.click();
  await expect(techPayrollPage.employeeFilter).not.toHaveValue('051034e0-264b-40bc-8063-806a7cb3e16c');

  await page.locator('.dateviewed').click();
  await expect(techPayrollPage.dateRangeDropdown).toBeVisible();
  await techPayrollPage.dateRangeDropdown.selectOption('AllTime');
  await expect(techPayrollPage.dateRangeDropdown).toHaveValue('AllTime');

  await techPayrollPage.applyButton.nth(1).click();
});

