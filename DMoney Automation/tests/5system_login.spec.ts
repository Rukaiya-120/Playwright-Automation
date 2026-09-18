import { test, expect } from '@playwright/test';
import { getAgentPhone } from '../utils/agentData';

test.use({ storageState: { cookies: [], origins: [] } });

test('System cashes in to the created agent', async ({ page }) => {
	const agentPhone = await getAgentPhone();

	await page.goto('https://dmoneyportal.roadtocareer.net/login');
	await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill('SYSTEM');
	await page.getByRole('textbox', { name: 'Password' }).fill('1234');
	await page.getByRole('button', { name: 'Login →' }).click();
	await expect(page.getByText('Agent Dashboard')).toBeVisible();

	await page.goto('https://dmoneyportal.roadtocareer.net/agent/cash-in');
	await page.getByRole('textbox', { name: 'Customer Phone Number' }).fill(agentPhone);
	await page.getByRole('spinbutton', { name: 'Amount (BDT)' }).fill('2000');
	await page.getByRole('button', { name: 'Cash In →' }).click();
});