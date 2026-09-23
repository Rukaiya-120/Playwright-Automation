import { test, expect } from '@playwright/test';
import { getAgentPhone } from '../utils/agentData';
import { LoginPage } from '../pages/loginPage';
import { AgentCashInPage } from '../pages/agentCashInPage';

test.use({ storageState: { cookies: [], origins: [] } });

test('System cashes in to the created agent', async ({ page }) => {
	const agentPhone = await getAgentPhone();
	const loginPage = new LoginPage(page);
	const agentCashInPage = new AgentCashInPage(page);

	await loginPage.open();
	await loginPage.login('SYSTEM', '1234');
	await expect(page.getByText('Agent Dashboard')).toBeVisible();

	await agentCashInPage.open();
	await agentCashInPage.cashIn(agentPhone, '2000');
});