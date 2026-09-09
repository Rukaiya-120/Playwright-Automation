import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Blitz Tracker', async ({ page }) => {
    await page.goto('/blitz/tracker');
        await expect(page.getByRole('heading', { name: 'Blitz Tracker' })).toBeVisible();
    

});