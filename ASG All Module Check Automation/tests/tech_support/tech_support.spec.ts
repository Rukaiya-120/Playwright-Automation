import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Support', async ({ page }) => {

  // Open Installed Tracker
  await page.goto('/tech-support-call-attempts');
  // Verify page loaded
  await expect(page.getByRole('textbox', { name: 'Find a lead' })).toBeVisible({ timeout: 30000 });
  // Search customer
    const searchBox =  page.getByRole('textbox', { name: 'Find a lead' });

    await searchBox.click();     
    await searchBox.fill('test');     
    await page.getByTitle('Search').click();
    await expect(searchBox).toHaveValue('test');

    await searchBox.fill('');
    await page.getByTitle('Search').click();
    await expect(searchBox).toHaveValue('');


  // Open Filter
  await page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' }).click();
  await page.locator('.dateviewed').click();
  await page.locator('#DateRange').selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();

});