import { test, expect } from '@playwright/test';

import { LoanStatusTrackerPage } from '../../pages/LoanStatusTrackerPage';

test.setTimeout(120000);

test('Loan Status Tracker', async ({ page }) => {
  const loanStatusTrackerPage = new LoanStatusTrackerPage(page);

  await page.goto('/loan-status-tracker');

  await expect(loanStatusTrackerPage.customerSearch).toBeVisible({ timeout: 30000 });

  await loanStatusTrackerPage.customerSearch.click();
  await loanStatusTrackerPage.customerSearch.fill('test');
  await loanStatusTrackerPage.searchButton.click();
  await expect(loanStatusTrackerPage.customerSearch).toHaveValue('test');

  await loanStatusTrackerPage.filterButton.click();
  await expect(loanStatusTrackerPage.dispositionFilter).toBeVisible({ timeout: 30000 });

  await loanStatusTrackerPage.dispositionFilter.selectOption('Inactive');
  await expect(loanStatusTrackerPage.dispositionFilter).toHaveValue('Inactive');

  await page.getByRole('button', { name: 'Apply' }).click();
  await loanStatusTrackerPage.filterButton.click();
  await loanStatusTrackerPage.resetButton.click();

  await loanStatusTrackerPage.customerSearch.fill('');
  await loanStatusTrackerPage.searchButton.click();
  await expect(loanStatusTrackerPage.customerSearch).toHaveValue('');

  await expect(loanStatusTrackerPage.nextButton).toBeVisible({ timeout: 30000 });
  await loanStatusTrackerPage.nextButton.click();

  await expect(loanStatusTrackerPage.previousButton).toBeVisible({ timeout: 30000 });
  await loanStatusTrackerPage.previousButton.click();
});