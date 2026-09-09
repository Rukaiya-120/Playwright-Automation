import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Weekly Pay', async ({ page }) => {

  // Open Weekly Pay
  await page.goto('/tech-payroll/weeklypay');

  // Verify page loaded
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter
  await page.getByRole('button', { name: 'Filter' }).click();

  // Wait for filter page/panel to load
  await expect(
    page.locator('#FilterBatch')
  ).toBeVisible();

  // Select Batch 7
  await page.locator('#FilterBatch').selectOption('7');

  // Verify Batch 7 is selected
  await expect(
    page.locator('#FilterBatch')
  ).toHaveValue('7');

  // Apply filter
  await page.getByRole('button', { name: 'Apply' }).click();

  // Wait for filtered page to load
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Wait for filter page/panel to load again
  await expect(
    page.locator('#FilterBatch')
  ).toBeVisible();

  // Select Batch 6
  await page.locator('#FilterBatch').selectOption('6');

  // Verify Batch 6 is selected
  await expect(
    page.locator('#FilterBatch')
  ).toHaveValue('6');

  // Apply filter
  await page.getByRole('button', { name: 'Apply' }).click();

  // Wait for filtered page to load
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Wait for filter page/panel to load
  await expect(
    page.locator('#FilterBatch')
  ).toBeVisible();

  // Reset filter
  await page.getByRole('button', { name: 'Reset' }).click();

  // Wait for filter reset to complete
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

});
