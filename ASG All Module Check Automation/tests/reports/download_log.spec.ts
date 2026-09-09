import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Download Log', async ({ page }) => {
    await page.goto('/download-log');
       await expect(
        page.getByText('Download Log List', { exact: true })
    ).toBeVisible();
    

});