import { test, expect } from '@playwright/test';
import { getMessageContent } from '../services/gmailAuth';
import { extractOTP } from '../utils/extractOTP';
import { getAgentCredentials } from '../utils/agentData';
import { AgentLoginPage } from '../pages/agentLoginPage';

test.use({ storageState: { cookies: [], origins: [] } });

test('DoMoney Agent Login', async ({ page, request }) => {
  const { email, password } = await getAgentCredentials();
  const agentLoginPage = new AgentLoginPage(page);

  await agentLoginPage.open();

  await agentLoginPage.submitCredentials(email, password);
  await page.waitForTimeout(10000);
  const otp = extractOTP(await getMessageContent(request));
  await agentLoginPage.enterOtp(otp);
  await agentLoginPage.verifyOtp();
  await expect(page.getByText(/Agent Dashboard|Agent/i).first()).toBeVisible();
  await agentLoginPage.expectCurrentBalance('2000.00');

});