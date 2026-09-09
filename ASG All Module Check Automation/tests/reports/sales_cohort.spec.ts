import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Sales Cohort', async ({ page }) => {
    await page.goto('/sales-cohort-report');
       await expect(
        page.getByText('Sales Activity Cohort Report', { exact: true })
    ).toBeVisible();
    
});