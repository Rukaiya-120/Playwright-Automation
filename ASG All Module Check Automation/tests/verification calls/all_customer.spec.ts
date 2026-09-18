import { test, expect } from '@playwright/test';

import { VerificationCallsPage } from '../../pages/VerificationCallsPage';

test.setTimeout(120000);

test('Verification Call All Customers', async ({ page }) => {
  const verificationCallsPage = new VerificationCallsPage(page);

  await page.goto('/verification-calls/all-customers');
  await verificationCallsPage.allCustomersHeader.click();
  await verificationCallsPage.customerSearch.click();
  await verificationCallsPage.customerSearch.fill('test');
  await verificationCallsPage.searchButton.click();
  await verificationCallsPage.customerSearch.click();
  await verificationCallsPage.customerSearch.fill('');
  await verificationCallsPage.searchButton.click();
  await verificationCallsPage.dateRangeCell.click();
  await verificationCallsPage.dateRangeDropdown.selectOption('AllTime');
  await verificationCallsPage.applyButton.click();
});
