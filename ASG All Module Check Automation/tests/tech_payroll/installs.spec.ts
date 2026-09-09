import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Tech Payroll - Installs', async ({ page }) => {

    await page.goto('/tech-payroll/installs');

    // Verify page loaded
    await expect(
        page.getByRole('textbox', { name: 'Find by a customer' })
    ).toBeVisible();

    await page.waitForTimeout(5000);

    // Search customer
    await page.getByRole('textbox', { name: 'Find by a customer' }).click();

    await page.getByRole('textbox', { name: 'Find by a customer' }).fill('rukaiya');

    // Verify search value
    await expect(
        page.getByRole('textbox', { name: 'Find by a customer' })
    ).toHaveValue('rukaiya');

    await page.getByRole('button').first().click();

    // Clear search
    await page.getByRole('textbox', { name: 'Find by a customer' }).click();

    await page.getByRole('textbox', { name: 'Find by a customer' }).dblclick();

    await page.getByRole('textbox', { name: 'Find by a customer' }).fill('');

    // Verify search is cleared
    await expect(
        page.getByRole('textbox', { name: 'Find by a customer' })
    ).toHaveValue('');

    await page.getByRole('button').first().click();

    // Open Filter
    await page.getByRole('button', { name: 'Filter' }).click();

    // Verify Filter options are visible
    await expect(
        page.locator('#FilterEmployee')
    ).toBeVisible();

    // Select employee
    await page.locator('#FilterEmployee').selectOption('051034e0-264b-40bc-8063-806a7cb3e16c');

    // Verify employee is selected
    await expect(
        page.locator('#FilterEmployee')
    ).toHaveValue('051034e0-264b-40bc-8063-806a7cb3e16c');

    await page.getByRole('button', { name: 'Apply' }).click();

    // Open Filter again
    await page.getByRole('button', { name: 'Filter' }).click();

    // Verify Reset button is available
    await expect(
        page.getByRole('button', { name: 'Reset' })
    ).toBeVisible();

    // Reset filter
    await page.getByRole('button', { name: 'Reset' }).click();

    // Verify employee filter is reset
    await expect(
        page.locator('#FilterEmployee')
    ).not.toHaveValue('051034e0-264b-40bc-8063-806a7cb3e16c');

    // Open Date Filter
    await page.locator('.dateviewed').click();

    // Verify date range dropdown is visible
    await expect(
        page.locator('#DateRange')
    ).toBeVisible();

    // Select All Time
    await page.locator('#DateRange').selectOption('AllTime');

    // Verify All Time is selected
    await expect(
        page.locator('#DateRange')
    ).toHaveValue('AllTime');

    await page.getByRole('button', { name: 'Apply' }).nth(1).click();
});

