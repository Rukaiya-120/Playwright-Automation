import { test, expect } from '@playwright/test';

test('DoMoney Admin LogIn', async ({ page }) => {
  await page.goto('https://dmoneyportal.roadtocareer.net/admin/users');
  await expect(page).toHaveURL(/\/admin\/users/);
  await expect(page.getByText('Admin Dashboard')).toBeVisible();

});