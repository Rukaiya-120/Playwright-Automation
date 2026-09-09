import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Verification Call Resolution', async ({ page }) => {

  // Open Installed Tracker
  await page.goto('/verification-calls/resolution');
  await page.getByRole('textbox', { name: 'Find a Resolution' }).click();
  await page.getByRole('textbox', { name: 'Find a Resolution' }).fill('test');
  await page.locator('#searchSOPbutton').click();
  await page.getByRole('textbox', { name: 'Find a Resolution' }).click();
  await page.getByRole('textbox', { name: 'Find a Resolution' }).fill('');
  await page.locator('#searchSOPbutton').click();
  await page.locator('#ResolutionStatus').selectOption('All');
  await page.locator('.dateTable').click();
  await page.locator('#DateRange').selectOption('Today');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('.dateTable').click();
  await page.locator('#DateRange').selectOption('AllTime');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.locator('#EmployeeDropdown').selectOption('ac0ce890-bc5b-4c34-aab2-017af19bedf6');
  
});
