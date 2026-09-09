import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Deductions', async ({ page }) => {
  await page.goto('/tech-payroll/deductions');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.locator('#FilterEmployee').selectOption('653e2829-5557-4ed1-b873-5e35421db03c');
  await page.locator('#FilterEmployee').selectOption('-1');
  await page.locator('#FilterBranch').selectOption('1');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();

});