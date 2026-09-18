import { test, expect } from '@playwright/test';

import { PayrollPage } from '../../pages/PayrollPage';

test('Payroll Accounts', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/accounts');
  await page.waitForTimeout(5000);
  await expect(payrollPage.accountsHeader).toBeVisible();
});

test('Old Payscale Overrides', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/overrides');
  await page.waitForTimeout(3000);
  await payrollPage.oldPayscaleOverrides.click();
  await page.waitForTimeout(3000);
  await payrollPage.newPayscaleOverrides.click();
});

test('Payroll Deductions', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/deductions');
  await page.waitForTimeout(3000);
  await expect(payrollPage.deductionsHeader).toBeVisible();
});

test('Payroll Add Ons', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/add-ons');
  await page.waitForTimeout(3000);
  await expect(payrollPage.addOnsHeader).toBeVisible();
});

test('Payroll Auditing', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/auditing');
  await page.waitForTimeout(3000);
  await payrollPage.auditingTabs.getByText('Accounts').click();
  await page.waitForTimeout(3000);
  await payrollPage.auditingTabs.getByText('Overrides').click();
  await page.waitForTimeout(3000);
  await payrollPage.auditingTabs.getByText('Deductions').click();
  await page.waitForTimeout(3000);
  await payrollPage.auditingTabs.getByText('Add Ons').click();
});

test('Payroll Weekly Pay', async ({ page }) => {
  const payrollPage = new PayrollPage(page);

  await page.goto('/payroll/weeklypay');
  await payrollPage.filterButton.click();
  await payrollPage.batchFilter.selectOption('19');
  await page.waitForTimeout(3000);
  await payrollPage.applyButton.click();
});