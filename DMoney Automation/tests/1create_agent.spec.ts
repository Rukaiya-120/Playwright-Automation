import { test, expect } from '@playwright/test';

function generateRandomNumber(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

test('DoMoney Create Agent', async ({ page }) => {
  const randomNumber = generateRandomNumber();

  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Get Started Free →' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Bran Stark Agent');
  await page.getByRole('textbox', { name: 'Email Address' }).fill(`rukaiyahaque1229+agent${randomNumber}@gmail.com`);
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(`0198677${randomNumber}`);
  await page.getByRole('textbox', { name: 'National ID (NID)' }).fill(`128900${randomNumber}`);
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: '🏪 Agent' }).click();
  
  await page.getByRole('button', { name: 'Create Account →' }).click();
    await page.waitForTimeout(120000);
  await page.waitForLoadState('networkidle');
});