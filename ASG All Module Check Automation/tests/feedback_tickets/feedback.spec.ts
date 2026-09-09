import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Feedback Tickets', async ({ page }) => {

  // Open Feedback Tickets
  await page.goto('/feedback-tickets');

  // Verify page loaded
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter
  await page.getByRole('button', { name: 'Filter' }).click();

  // Wait for filter content to load
  await expect(
    page.locator('#filterFeedbackCategory')
  ).toBeVisible();

  // Select Feedback Category
  await page.locator('#filterFeedbackCategory')
    .selectOption('UI/Display Issue');

  // Verify selected category
  await expect(
    page.locator('#filterFeedbackCategory')
  ).toHaveValue('UI/Display Issue');

  // Apply filter
  await page.getByRole('button', { name: 'Apply' }).click();

  // Wait for filtered page to load
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify filter panel loaded
  await expect(
    page.locator('label').filter({ hasText: 'Status' })
  ).toBeVisible();

  // Click Status
  await page.locator('label').filter({ hasText: 'Status' }).click();

  // Verify Reset button
  await expect(
    page.getByRole('button', { name: 'Reset' })
  ).toBeVisible();

  // Reset filter
  await page.getByRole('button', { name: 'Reset' }).click();

  // Wait for reset to complete
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Wait for filter content
  await expect(
    page.locator('#filterStatus')
  ).toBeVisible();

  // Select Closed status
  await page.locator('#filterStatus').selectOption('Closed');

  // Verify Closed status is selected
  await expect(
    page.locator('#filterStatus')
  ).toHaveValue('Closed');

  // Apply filter
  await page.getByRole('button', { name: 'Apply' }).click();

  // Wait for filtered page to load
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

  // Open Filter again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify Reset button
  await expect(
    page.getByRole('button', { name: 'Reset' })
  ).toBeVisible();

  // Reset filter
  await page.getByRole('button', { name: 'Reset' }).click();

  // Verify reset completed
  await expect(
    page.getByRole('button', { name: 'Filter' })
  ).toBeVisible();

});

