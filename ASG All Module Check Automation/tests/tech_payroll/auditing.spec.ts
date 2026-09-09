
import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Auditing', async ({ page }) => {

  await page.goto('/tech-payroll/auditing');

  // Verify page loaded
  await expect(
    page.getByRole('textbox', {
      name: 'Find a customer by name or id'
    })
  ).toBeVisible();

  // Search customer
  await page.getByRole('textbox', {
    name: 'Find a customer by name or id'
  }).click();

  await page.getByRole('textbox', {
    name: 'Find a customer by name or id'
  }).fill('test');

  // Verify search value
  await expect(
    page.getByRole('textbox', {
      name: 'Find a customer by name or id'
    })
  ).toHaveValue('test');

  await page.locator('#searchBtnWillBePaid').click();

  // Clear search
  await page.getByRole('textbox', {
    name: 'Find a customer by name or id'
  }).click();

  await page.getByRole('textbox', {
    name: 'Find a customer by name or id'
  }).fill('');

  // Verify search is cleared
  await expect(
    page.getByRole('textbox', {
      name: 'Find a customer by name or id'
    })
  ).toHaveValue('');

  await page.locator('#searchBtnWillBePaid').click();

  // Open Filter
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify Branch filter is visible
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

  // Verify Reset button is visible
  await expect(
    page.getByRole('button', { name: 'Reset' })
  ).toBeVisible();

  // Reset filter
  await page.getByRole('button', { name: 'Reset' }).click();

  // Verify Branch filter is reset
  await expect(
    page.locator('#FilterBranch')
  ).not.toHaveValue('1');

  // Open date filter
  await page.getByRole('cell', {
    name: 'Sep, 2026 - 30 Sep, 2026'
  }).click();

  // Verify Date Range dropdown is visible
  await expect(
    page.locator('#DateRange')
  ).toBeVisible();

  // Select All Time
  await page.locator('#DateRange').selectOption('AllTime');

  // Verify All Time is selected
  await expect(
    page.locator('#DateRange')
  ).toHaveValue('AllTime');

  await page.getByRole('button', { name: 'Apply' }).nth(1).click();

  // Overrides tab
  await page.locator('#myTab').getByText('Overrides').click();

  // Verify Overrides tab is selected
  await expect(
    page.locator('#myTab').getByText('Overrides')
  ).toBeVisible();

  // Deductions tab
  await page.locator('#myTab').getByText('Deductions').click();

  // Verify Deductions tab is selected
  await expect(
    page.locator('#myTab').getByText('Deductions')
  ).toBeVisible();

  // Add Ons tab
  await page.locator('#myTab').getByText('Add Ons').click();

  // Verify Add Ons tab is selected
  await expect(
    page.locator('#myTab').getByText('Add Ons')
  ).toBeVisible();

});

