import { test, expect } from '@playwright/test';

test('DoMoney Agent Activate', async ({ page }) => {
await page.goto('https://dmoneyportal.roadtocareer.net/admin/users');


const firstRow = page.locator('tbody tr').first();

await expect(firstRow).toBeVisible();

await firstRow.getByRole('button', { name: 'VIEW' }).click();
await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Edit User' }).click();
const statusDropdown = page.getByRole('combobox').nth(1);

await statusDropdown.click();

await page.getByRole('option', { name: 'Active' }).click();

await page.getByRole('button', { name: 'Save Changes' }).click();

});