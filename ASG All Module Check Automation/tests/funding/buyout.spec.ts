import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test('Funding Buyout', async ({ page }) => {

    await page.goto('/buyout');

    // Search customer
    const searchBox =  page.getByRole('textbox', { name: 'Find by customer' })

    await searchBox.click();     
    await searchBox.fill('test');     
    await page.getByTitle('Search').click();

    // Wait for pagination to appear after search results load
    const nextButton = page.getByRole('button', { name: 'Next' });

    await expect(nextButton).toBeVisible({ timeout: 30000 });

    // Scroll to pagination
    await nextButton.scrollIntoViewIfNeeded();

    // Click Next
    await nextButton.click();

    // Find the new Previous button after pagination updates
    const previousButton = page.getByRole('button', { name: 'Previous' });
    await previousButton.click();
});