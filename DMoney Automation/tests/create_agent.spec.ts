import { test, expect } from '@playwright/test';

test('DoMoney Create Agent', async ({ page }) => {
  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Get Started Free →' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Bran Stark Agent');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rukaiyahaque1229+agent@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('textbox', { name: 'Phone Number' }).fill('01986779999');
  await page.getByRole('textbox', { name: 'National ID (NID)' }).fill('128900000');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: '🏪 Agent' }).click();
  
  await page.getByRole('button', { name: 'Create Account →' }).click();
  
await page.waitForLoadState('networkidle');
});