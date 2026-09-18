import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Login to Dashboard' }).click();

  await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill('admin@dmoney.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('1234');
  await page.getByRole('button', { name: 'Login →' }).click();

  await expect(page.getByText('Admin Dashboard')).toBeVisible();
  await page.context().storageState({ path: authFile });
});
