import { test, expect } from '@playwright/test';
import { getMessageContent } from '../services/gmailAuth';
import { extractOTP } from '../utils/extractOTP';
import { getAgentCredentials } from '../utils/agentData';

test.use({ storageState: { cookies: [], origins: [] } });

test('DoMoney Agent Login', async ({ page, request }) => {
  const { email, password } = await getAgentCredentials();

  await page.goto('https://dmoneyportal.roadtocareer.net/login');

  await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  
  await page.getByRole('button', { name: 'Login →' }).click();
  const otp = extractOTP(await getMessageContent(request));
  await page.getByRole('textbox', { name: /OTP/i }).fill(otp);
  await page.getByRole('button', { name: /Verify|Login/i }).click();
  await expect(page.getByText(/Agent Dashboard|Agent/i).first()).toBeVisible();


});