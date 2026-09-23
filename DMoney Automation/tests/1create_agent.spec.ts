import { test, expect } from '@playwright/test';
import { saveAgentCredentials, saveAgentPhone } from '../utils/agentData';
import { AgentRegistrationPage } from '../pages/agentRegistrationPage';

test.use({ storageState: { cookies: [], origins: [] } });

function generateRandomNumber(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

test('DoMoney Create Agent', async ({ page }) => {
  const randomNumber = generateRandomNumber();
  const agentEmail = `rukaiyahaque1229+agent${randomNumber}@gmail.com`;
  const agentPassword = '123456';
  const agentPhone = `0198677${randomNumber}`;
  const registrationPage = new AgentRegistrationPage(page);

  await registrationPage.open();
  await registrationPage.fillAgentDetails({
    name: 'Bran Stark Agent',
    email: agentEmail,
    password: agentPassword,
    phone: agentPhone,
    nationalId: `128900${randomNumber}`,
  });
  await registrationPage.createAccount();
  await page.waitForTimeout(10000);
  await saveAgentPhone(agentPhone);
  await saveAgentCredentials({ email: agentEmail, password: agentPassword });

});