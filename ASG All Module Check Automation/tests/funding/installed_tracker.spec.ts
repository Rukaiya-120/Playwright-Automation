import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Installed Tracker', async ({ page }) => {

  // Open Installed Tracker
  await page.goto('/installed-tracker-list');
  await page.getByRole('heading', { name: 'Installed Accounts Tracker' }).click();

  // Verify page loaded
  await expect(
    page.getByRole('textbox', { name: 'Search by name, ID, address,' })
  ).toBeVisible({ timeout: 30000 });

  // Search customer
    const searchBox =  page.getByRole('textbox', { name: 'Search by name, ID, address,' })

    await searchBox.click();     
    await searchBox.fill('test');     
    await page.getByTitle('Search').click();
    await expect(searchBox).toHaveValue('test');

    await searchBox.fill('');
    await page.getByTitle('Search').click();
    await expect(searchBox).toHaveValue('');


  // Open Filter
  await page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' }).click();
  await page.locator('#DateRange').selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();
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