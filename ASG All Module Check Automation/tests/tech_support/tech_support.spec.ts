import { test, expect } from '@playwright/test';

import { TechSupportPage } from '../../pages/TechSupportPage';

test.setTimeout(120000);

test('Tech Support', async ({ page }) => {
  const techSupportPage = new TechSupportPage(page);

  await page.goto('/tech-support-call-attempts');
  await expect(techSupportPage.leadSearch).toBeVisible({ timeout: 30000 });

  await techSupportPage.leadSearch.click();
  await techSupportPage.leadSearch.fill('test');
  await techSupportPage.searchButton.click();
  await expect(techSupportPage.leadSearch).toHaveValue('test');

  await techSupportPage.leadSearch.fill('');
  await techSupportPage.searchButton.click();
  await expect(techSupportPage.leadSearch).toHaveValue('');

  await techSupportPage.dateRangeCell.click();
  await techSupportPage.dateRangeDropdown.selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();
});