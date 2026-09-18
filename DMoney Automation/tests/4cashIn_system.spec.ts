import { test, expect } from '@playwright/test';

test('Cash In to System', async ({ page }) => {
await page.goto('https://dmoneyportal.roadtocareer.net/admin/deposit');

await page.getByRole('textbox', { name: 'SYSTEM Account Phone Number' }).fill('SYSTEM');

await page.getByRole('spinbutton', { name: 'Amount (BDT)' }).fill('10000');
await page.getByRole('button', { name: 'DEPOSIT TO SYSTEM' }).click();
});