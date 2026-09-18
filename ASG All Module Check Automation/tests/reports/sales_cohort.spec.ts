import { test, expect } from '@playwright/test';

import { ReportsPage } from '../../pages/ReportsPage';

test.setTimeout(120000);

test('Sales Cohort', async ({ page }) => {
  const reportsPage = new ReportsPage(page);

  await page.goto('/sales-cohort-report');
  await expect(reportsPage.salesCohortReportHeader).toBeVisible();
});