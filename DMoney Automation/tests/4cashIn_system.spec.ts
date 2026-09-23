import { test, expect } from '@playwright/test';
import { SystemDepositPage } from '../pages/systemDepositPage';

test('Cash In to System', async ({ page }) => {
	const systemDepositPage = new SystemDepositPage(page);
	await systemDepositPage.open();
	await systemDepositPage.depositToSystem('10000');
});