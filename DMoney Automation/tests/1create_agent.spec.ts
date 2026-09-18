import { test, expect } from '@playwright/test';
import { saveAgentCredentials, saveAgentPhone } from '../utils/agentData';

test.use({ storageState: { cookies: [], origins: [] } });

function generateRandomNumber(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

test('DoMoney Create Agent', async ({ page }) => {
  const randomNumber = generateRandomNumber();
  const agentEmail = `rukaiyahaque1229+agent${randomNumber}@gmail.com`;
  const agentPassword = '123456';
  const agentPhone = `0198677${randomNumber}`;

  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Get Started Free →' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Bran Stark Agent');
  await page.getByRole('textbox', { name: 'Email Address' }).fill(agentEmail);
  await page.getByRole('textbox', { name: 'Password' }).fill(agentPassword);
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(agentPhone);
  await page.getByRole('textbox', { name: 'National ID (NID)' }).fill(`128900${randomNumber}`);
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: '🏪 Agent' }).click();
  
  await page.getByRole('button', { name: 'Create Account →' }).click();
  await saveAgentPhone(agentPhone);
  await saveAgentCredentials({ email: agentEmail, password: agentPassword });

});