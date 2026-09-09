import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Loan Status Tracker', async ({ page }) => {

  // Open Loan Status Tracker
  await page.goto('/loan-status-tracker');

  // Verify page loaded
  await expect(
    page.getByRole('textbox', { name: 'Find by customer' })
  ).toBeVisible({ timeout: 30000 });

  // Search customer
    const searchBox =  page.getByRole('textbox', { name: 'Find by customer' })

    await searchBox.click();     
    await searchBox.fill('test');     
    await page.getByTitle('Search').click();

  // Verify search was applied
  await expect(searchBox).toHaveValue('test');

  // Open Filter
  await page.getByRole('button', { name: 'Filter' }).click();

  // Verify filter dropdown
  const dispositionFilter = page.locator('#filterDisposition');
  await expect(dispositionFilter).toBeVisible({ timeout: 30000 });

  // Select Inactive
  await dispositionFilter.selectOption('Inactive');

  // Verify selected value
  await expect(dispositionFilter).toHaveValue('Inactive');

  // Apply filter
  await page.getByRole('button', { name: 'Apply' }).click();

  // Verify Filter can be opened again
  await page.getByRole('button', { name: 'Filter' }).click();

  // Reset filter
  await page.getByRole('button', { name: 'Reset' }).click();

  // Clear customer search
  await searchBox.fill('');

  // Search again
  await page.getByTitle('Search').click();

  // Verify search box is empty
  await expect(searchBox).toHaveValue('');

  // --------------------------------------------------
  // Pagination
  // --------------------------------------------------

  // Wait for the CURRENT Next button to become visible
  await expect(
    page.getByRole('button', { name: 'Next', exact: true })
  ).toBeVisible({ timeout: 30000 });

  // Get the current Next button only when we are ready to click it
  await page.getByRole('button', { name: 'Next', exact: true }).click();

  // Wait for pagination to finish updating
  await expect(
    page.getByRole('button', { name: 'Previous', exact: true })
  ).toBeVisible({ timeout: 30000 });

  // Get the NEW Previous button after DOM refresh
  await page.getByRole('button', { name: 'Previous', exact: true }).click();

});