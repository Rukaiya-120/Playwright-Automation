import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Add-Ons', async ({ page }) => {
  await page.goto('/tech-payroll/add-ons');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('#FilterBranch').selectOption('1');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();

});