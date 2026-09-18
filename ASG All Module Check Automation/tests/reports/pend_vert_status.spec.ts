import { test, expect } from '@playwright/test';

import { ReportsPage } from '../../pages/ReportsPage';

test.setTimeout(120000);

test('Pend Vert Status', async ({ page }) => {
  const reportsPage = new ReportsPage(page);

  await page.goto('/pend-vert-status');
  await expect(reportsPage.pendVertStatusHeader).toBeVisible();
});