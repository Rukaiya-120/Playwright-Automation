import { test, expect } from '@playwright/test';

import { InstalledTrackerPage } from '../../pages/InstalledTrackerPage';

test.setTimeout(120000);

test('Installed Tracker', async ({ page }) => {
  const installedTrackerPage = new InstalledTrackerPage(page);

  await page.goto('/installed-tracker-list');
  await page.getByRole('heading', { name: 'Installed Accounts Tracker' }).click();

  await expect(installedTrackerPage.searchBox).toBeVisible({ timeout: 30000 });

  await installedTrackerPage.searchBox.click();
  await installedTrackerPage.searchBox.fill('test');
  await installedTrackerPage.searchButton.click();
  await expect(installedTrackerPage.searchBox).toHaveValue('test');

  await installedTrackerPage.searchBox.fill('');
  await installedTrackerPage.searchButton.click();
  await expect(installedTrackerPage.searchBox).toHaveValue('');

  await installedTrackerPage.dateRangeCell.click();
  await installedTrackerPage.dateRangeDropdown.waitFor({state: 'visible',});

  await installedTrackerPage.dateRangeDropdown.selectOption('AllTime');
  await installedTrackerPage.applyButton.click();
    // Scroll to the Next button
  await installedTrackerPage.nextButton.scrollIntoViewIfNeeded();

  await expect(installedTrackerPage.nextButton).toBeVisible({ timeout: 30000 });
  await installedTrackerPage.nextButton.click();

  await expect(installedTrackerPage.previousButton).toBeVisible({ timeout: 30000 });
  await installedTrackerPage.previousButton.click();
});