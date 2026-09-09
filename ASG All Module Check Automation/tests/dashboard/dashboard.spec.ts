import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Personal Dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    await page.getByRole('link', { name: 'Personal' }).click();

});

test('Office Dashboard', async ({ page }) => {
    await page.goto('/office-dashboard');
    await page.getByRole('link', { name: 'Office' , exact: true}).click();

});
