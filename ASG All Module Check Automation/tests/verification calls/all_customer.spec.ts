import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Verification Call All Customers', async ({ page }) => {

  // Open Installed Tracker
  await page.goto('/verification-calls/all-customers');
  await page.locator('#divVerCustomerTable').getByText('All Customers').click();
  await page.getByRole('textbox', { name: 'Search by customer' }).click();
  await page.getByRole('textbox', { name: 'Search by customer' }).fill('test');
  await page.locator('#btnSearchCustomer').click();
  await page.getByRole('textbox', { name: 'Search by customer' }).click();
  await page.getByRole('textbox', { name: 'Search by customer' }).fill('');
  await page.locator('#btnSearchCustomer').click();
  await page.getByRole('cell', { name: 'Sep, 2026 - 30 Sep, 2026' }).click();
  await page.locator('#DateRange').selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();

  
});
