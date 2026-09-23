import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

const authFile = 'playwright/.auth/admin.json';

setup('authenticate as admin', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openFromHome();
  await loginPage.login('admin@dmoney.com', '1234');

  await expect(page.getByText('Admin Dashboard')).toBeVisible();
  await page.context().storageState({ path: authFile });
});
