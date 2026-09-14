import { test, expect } from '@playwright/test';

test('DoMoney Create Agent', async ({ page }) => {
  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Login to Dashboard' }).click();

  await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill('admin@dmoney.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  
  await page.getByRole('button', { name: 'Login →' }).click();
  await expect(page.getByText('Admin Dashboard')).toBeVisible();

  // Navigate to User List
  await page.getByRole('link', { name: 'User List' }).click();
  await page.waitForLoadState('networkidle');
  // Optional: verify User List page loaded
  await expect(page).toHaveURL(/\/admin\/users/);

});