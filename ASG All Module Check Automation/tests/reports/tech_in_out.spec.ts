import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Check-in/Check-out', async ({ page }) => {
    await page.goto('/tech-checkinout-report');
       await expect(page.getByText('Reports 1 Sep, 2026 - 30 Sep')).toBeVisible();
    

});