import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Task List ', async ({ page }) => {
    await page.goto('/tasks');
        await expect(page.getByText('Task List', { exact: true })).toBeVisible();
    

});