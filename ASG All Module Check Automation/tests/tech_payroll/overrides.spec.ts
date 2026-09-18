import { test, expect } from '@playwright/test';

import { TechPayrollPage } from '../../pages/TechPayrollPage';

test.setTimeout(120000);

test('Tech Payroll - Overrides', async ({ page }) => {
  const techPayrollPage = new TechPayrollPage(page);

  await page.goto('tech-payroll/overrides');

  const searchBox = page.getByRole('textbox', { name: 'Find a customer' });
  await expect(searchBox).toBeVisible();

  await searchBox.click();
  await searchBox.fill('test');
  await expect(searchBox).toHaveValue('test');

  await page.locator('#btnSearchPayroll').click();

  await searchBox.click();
  await searchBox.fill('');
  await expect(searchBox).toHaveValue('');
  await page.locator('#btnSearchPayroll').click();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.branchFilter).toBeVisible();

  await techPayrollPage.branchFilter.selectOption('1');
  await expect(techPayrollPage.branchFilter).toHaveValue('1');

  await techPayrollPage.applyButton.click();

  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.employeeFilter).toBeVisible();

  await techPayrollPage.employeeFilter.selectOption('653e2829-5557-4ed1-b873-5e35421db03c');
  await expect(techPayrollPage.employeeFilter).toHaveValue('653e2829-5557-4ed1-b873-5e35421db03c');

  await techPayrollPage.applyButton.click();
  await techPayrollPage.filterButton.click();
  await expect(techPayrollPage.resetButton).toBeVisible();

  await techPayrollPage.resetButton.click();
  await expect(techPayrollPage.branchFilter).not.toHaveValue('1');
  await expect(techPayrollPage.employeeFilter).not.toHaveValue('653e2829-5557-4ed1-b873-5e35421db03c');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
});

