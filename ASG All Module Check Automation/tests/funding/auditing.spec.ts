import { test, expect } from '@playwright/test';

import { FundingAuditingPage } from '../../pages/FundingAuditingPage';

test.setTimeout(120000);

test('Funding Auditing', async ({ page }) => {
  const auditingPage = new FundingAuditingPage(page);

  await page.goto('/auditing-list');
  await auditingPage.pageHeading.click();

  await expect(auditingPage.nextButton).toBeVisible({ timeout: 30000 });
  await auditingPage.nextButton.scrollIntoViewIfNeeded();
  await auditingPage.nextButton.click();

  await auditingPage.previousButton.click();
});