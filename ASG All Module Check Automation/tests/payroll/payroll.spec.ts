import { test, expect } from '@playwright/test';


test('Payroll Accounts', async ({ page }) => {
   await page.goto('/payroll/accounts');
   await page.waitForTimeout(5000);
   await expect(
    page.locator('.tb_head').filter({ hasText: 'Accounts' })
).toBeVisible();
});

test('Old Payscale Overrides', async ({ page }) => {
  await page.goto('/payroll/overrides');
  await page.waitForTimeout(3000);
  await page.getByText('Old Payscale Overrides').click();
  await page.waitForTimeout(3000);
  await page.getByText('New Payscale Overrides').click();

});

test('Payroll Deductions', async ({ page }) => {
  await page.goto('/payroll/deductions');
  await page.waitForTimeout(3000);
  await expect(page.locator('#payrollAccountsTable').getByText('Deductions')).toBeVisible();

});

test('Payroll Add Ons', async ({ page }) => {
  await page.goto('/payroll/add-ons');
  await page.waitForTimeout(3000);
  await expect( page.getByText('Add-Ons')).toBeVisible();

});

test('Payroll Auditing', async ({ page }) => {
  await page.goto('/payroll/auditing');
  await page.waitForTimeout(3000);
  await page.locator('#myTab').getByText('Accounts').click();
  await page.waitForTimeout(3000);
  await page.locator('#myTab').getByText('Overrides').click();
  await page.waitForTimeout(3000);
  await page.locator('#myTab').getByText('Deductions').click();
  await page.waitForTimeout(3000);
  await page.locator('#myTab').getByText('Add Ons').click();

});

test('Payroll Weekly Pay', async ({ page }) => {
  await page.goto('/payroll/weeklypay');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('#FilterBatch').selectOption('19');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Apply' }).click();

});