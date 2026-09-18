import { test, expect } from '@playwright/test';

import { ReportsPage } from '../../pages/ReportsPage';

test.setTimeout(120000);

test('Download Log', async ({ page }) => {
  const reportsPage = new ReportsPage(page);

  await page.goto('/download-log');
  await expect(reportsPage.downloadLogHeader).toBeVisible();
});