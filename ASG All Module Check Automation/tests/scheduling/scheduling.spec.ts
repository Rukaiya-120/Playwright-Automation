import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Install Queue', async ({ page }) => {
    await page.goto('/install-queue');
        await expect(page.locator('#new_tab_peel').getByRole('link', { name: 'Install Queue' })).toBeVisible();
    

});


test('Service Scheduler', async ({ page }) => {
    await page.goto('/service-queue');
    await expect(page.getByRole('heading', { name: 'Service Queue' })).toBeVisible();

});

test('Unfinished Install', async ({ page }) => {
    await page.goto('/unfinished-install-queue');
    await expect (page.getByRole('link', { name: 'Unfinished Install Queue' })).toBeVisible();

});

test('Calendar', async ({ page }) => {
    await page.goto('/calendar');
    await expect(page.locator('#new_tab_peel').getByRole('link', { name: 'Calendar' })).toBeVisible();

});
