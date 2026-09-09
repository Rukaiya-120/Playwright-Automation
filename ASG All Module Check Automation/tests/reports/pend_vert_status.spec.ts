import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Inside Sales', async ({ page }) => {
    await page.goto('/pend-vert-status');
       await expect(
        page.getByText('Pend Vert Status List', { exact: true })
    ).toBeVisible();
    

});