import { test, expect } from '@playwright/test';
import { getMessageContent } from '../services/gmailAuth';
import { extractOTP } from '../utils/extractOTP';

test('DoMoney Create Agent', async ({ page, request }) => {
  await page.goto('https://dmoneyportal.roadtocareer.net');
  await page.getByRole('link', { name: 'Login to Dashboard' }).click();

  await page.getByRole('textbox', { name: 'Email or Phone Number' }).fill('rukaiyahaque1229+agent@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  
  await page.getByRole('button', { name: 'Login →' }).click();
	const messageBody = await getMessageContent(request);
    console.log('Message Body:', messageBody);
	const otp = extractOTP(messageBody);
	console.log('Extracted OTP:', otp);
  await page.pause();


});