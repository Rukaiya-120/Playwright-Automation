import { test, expect } from '@playwright/test';

import { DashboardPage } from '../../pages/DashboardPage';

test.setTimeout(120000);

test('Personal Dashboard', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await page.goto('/dashboard');
  await dashboardPage.personalLink.click();
});

test('Office Dashboard', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await page.goto('/office-dashboard');
  await dashboardPage.officeLink.click();
});
