import { test, expect } from '@playwright/test';

import { ReportsPage } from '../../pages/ReportsPage';

test.setTimeout(120000);

test('Tech Check-in/Check-out', async ({ page }) => {
  const reportsPage = new ReportsPage(page);

  await page.goto('/tech-checkinout-report');
  await expect(reportsPage.techCheckInOutHeader).toBeVisible();
});