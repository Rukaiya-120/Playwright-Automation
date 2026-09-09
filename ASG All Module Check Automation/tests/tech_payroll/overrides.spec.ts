import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Overrides', async ({ page }) => {

  await page.goto('tech-payroll/overrides');

  // Verify page loaded
  await expect(
    page.getByRole('textbox', { name: 'Find a customer' })
  ).toBeVisible();

  // Search customer
  await page.getByRole('textbox', { name: 'Find a customer' }).click();

  await page.getByRole('textbox', { name: 'Find a customer' }).fill('test');

  // Verify search value
  await expect(
    page.getByRole('textbox', { name: 'Find a customer' })
  ).toHaveValue('test');

  await page.locator('#btnSearchPayroll').click();

  // Clear search
  await page.getByRole('textbox', { name: 'Find a customer' }).click();

  await page.getByRole('textbox', { name: 'Find a customer' }).fill('');

  // Verify search is cleared
  await expect(
    page.getByRole('textbox', { name: 'Find a customer' })
  ).toHaveValue('');

  await page.locator('#btnSearchPayroll').click();

  // Open Filter
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify Branch filter is available
  await expect(
    page.locator('#FilterBranch')
  ).toBeVisible();

  // Select Branch
  await page.locator('#FilterBranch').selectOption('1');

  // Verify Branch selection
  await expect(
    page.locator('#FilterBranch')
  ).toHaveValue('1');

  await page.getByRole('button', { name: 'Apply' }).click();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify Employee filter is available
  await expect(
    page.locator('#FilterEmployee')
  ).toBeVisible();

  // Select Employee
  await page.locator('#FilterEmployee').selectOption(
    '653e2829-5557-4ed1-b873-5e35421db03c'
  );

  // Verify Employee selection
  await expect(
    page.locator('#FilterEmployee')
  ).toHaveValue(
    '653e2829-5557-4ed1-b873-5e35421db03c'
  );

  await page.getByRole('button', { name: 'Apply' }).click();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify Reset button
  await expect(
    page.getByRole('button', { name: 'Reset' })
  ).toBeVisible();

  // Reset filters
  await page.getByRole('button', { name: 'Reset' }).click();

  // Verify filters were reset
  await expect(
    page.locator('#FilterBranch')
  ).not.toHaveValue('1');

  await expect(
    page.locator('#FilterEmployee')
  ).not.toHaveValue(
    '653e2829-5557-4ed1-b873-5e35421db03c'
  );

  // Next page
  await page.getByRole('button', { name: 'Next' }).click();

  // Previous page
  await page.getByRole('button', { name: 'Previous' }).click();

  // Verify Previous button is available after navigation
  await expect(
    page.getByRole('button', { name: 'Previous' })
  ).toBeVisible();

});

