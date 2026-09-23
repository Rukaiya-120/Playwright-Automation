import { test, expect } from '@playwright/test';
import { AdminUsersPage } from '../pages/adminUsersPage';

test('DoMoney Admin LogIn', async ({ page }) => {
  const adminUsersPage = new AdminUsersPage(page);
  await adminUsersPage.open();
  await adminUsersPage.expectDashboard();

});