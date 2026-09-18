import { test, expect } from '@playwright/test';

import { VerificationCallsPage } from '../../pages/VerificationCallsPage';

test.setTimeout(120000);

test('Verification Call Queue', async ({ page }) => {
  const verificationCallsPage = new VerificationCallsPage(page);

  await page.goto('/verification-calls/queue');
  await verificationCallsPage.queueSearch.click();
  await verificationCallsPage.queueSearch.fill('test');
  await verificationCallsPage.searchButton.click();
  await verificationCallsPage.queueSearch.click();
  await verificationCallsPage.queueSearch.fill('');
  await verificationCallsPage.searchButton.click();

  await page.locator('.dateTable').click();
  await verificationCallsPage.dateRangeDropdown.selectOption('Today');
  await verificationCallsPage.applyButton.click();

  await page.locator('.dateTable').click();
  await verificationCallsPage.dateRangeDropdown.selectOption('AllTime');
  await verificationCallsPage.applyButton.click();

  await verificationCallsPage.queueDropdown.selectOption('8am-12pm');
  await verificationCallsPage.queueDropdown.selectOption('12pm-4pm');
  await verificationCallsPage.queueDropdown.selectOption('4pm-8pm');
});
