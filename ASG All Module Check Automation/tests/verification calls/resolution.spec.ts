import { test, expect } from '@playwright/test';

import { VerificationCallsPage } from '../../pages/VerificationCallsPage';

test.setTimeout(120000);

test('Verification Call Resolution', async ({ page }) => {
  const verificationCallsPage = new VerificationCallsPage(page);

  await page.goto('/verification-calls/resolution');
  await verificationCallsPage.resolutionSearch.click();
  await verificationCallsPage.resolutionSearch.fill('test');
  await verificationCallsPage.sopSearchButton.click();
  await verificationCallsPage.resolutionSearch.click();
  await verificationCallsPage.resolutionSearch.fill('');
  await verificationCallsPage.sopSearchButton.click();

  await verificationCallsPage.resolutionStatus.selectOption('All');
  await page.locator('.dateTable').click();
  await verificationCallsPage.dateRangeDropdown.selectOption('Today');
  await verificationCallsPage.applyButton.click();

  await page.locator('.dateTable').click();
  await verificationCallsPage.dateRangeDropdown.selectOption('AllTime');
  await verificationCallsPage.applyButton.click();

  await verificationCallsPage.employeeDropdown.selectOption('ac0ce890-bc5b-4c34-aab2-017af19bedf6');
});
