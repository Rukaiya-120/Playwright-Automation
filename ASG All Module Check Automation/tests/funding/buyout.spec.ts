import { test, expect } from '@playwright/test';

import { FundingBuyoutPage } from '../../pages/FundingBuyoutPage';

test.setTimeout(120000);

test('Funding Buyout', async ({ page }) => {
  const buyoutPage = new FundingBuyoutPage(page);

  await page.goto('/buyout');

  await buyoutPage.customerSearch.click();
  await buyoutPage.customerSearch.fill('test');
  await buyoutPage.searchButton.click();

  await expect(buyoutPage.nextButton).toBeVisible({ timeout: 30000 });
  await buyoutPage.nextButton.scrollIntoViewIfNeeded();
  await buyoutPage.nextButton.click();

  await buyoutPage.previousButton.click();
});