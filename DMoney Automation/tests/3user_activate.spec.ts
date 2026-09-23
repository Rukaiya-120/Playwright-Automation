import { test, expect } from '@playwright/test';
import { AdminUsersPage } from '../pages/adminUsersPage';

test('DoMoney Agent Activate', async ({ page }) => {
	const adminUsersPage = new AdminUsersPage(page);
	await adminUsersPage.open();
	await adminUsersPage.activateFirstUser();
	await adminUsersPage.expectUserUpdated();
});