import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Verification Call Queue', async ({ page }) => {

  // Open Installed Tracker
  await page.goto('/verification-calls/queue');
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('test');
  await page.locator('#btnSearchCustomer').click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('');
  await page.locator('#btnSearchCustomer').click();
  await page.locator('.dateTable').click();
  await page.locator('#DateRange').selectOption('Today');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.dateTable').click();
  await page.locator('#DateRange').selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('#VreificationcallQueue').selectOption('8am-12pm');
  await page.locator('#VreificationcallQueue').selectOption('12pm-4pm');
  await page.locator('#VreificationcallQueue').selectOption('4pm-8pm');
  
});
